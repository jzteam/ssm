/**
 * Created by OKLink on 2016/4/24. FROM coinok
 */

//解决ie10以下的浏览器不支持Int32Array的问题
if (typeof (Int32Array) == "undefined") {
	Int32Array = function(size) {
		if (size < 0 || Math.floor(size) != size) {
			throw "Invalid array length";
		}
		for ( var index = 0; index < size; index++) {
			this[index] = 0;
		}
		this.length = size;
	};
	
	Int32Array.prototype = new Array();
}

Binary = {
	stringToBytes : function(e) {
		for ( var t = [], n = 0; n < e.length; n++)
			t.push(e.charCodeAt(n));
		return t;
	},
	bytesToString : function(e) {
		for ( var t = [], n = 0; n < e.length; n++)
			t.push(String.fromCharCode(e[n]));
		return t.join("");
	}
};

var userSalt = null;
function getUserSalt(userid) {
	var salt = null;
	$.ajax({
		type:"GET",
		async:false,
		url:"/block/getUserSalt.do?userid="+userid,
		success:function(result){
			var json=  eval("("+result+")");
			if(json.resultCode != 0)
			{
				console.info(json.resultCode);
				return null;
			}else{
				 console.info("Data Loaded2: " + json.data);
				 salt =  json.data;
			}
		}
	});
	userSalt = salt;
	return salt;
}

/**
 * 密钥加密
 * @param privateKey 用户私钥
 * @param password 用户密码
 * @param salt 盐
 */
function encryptPrivateKey(privateKey,password,salt,userid) {
	if (salt == undefined) {
		salt = getUserSalt(userid);
	}
	try{
		//加密私钥用的密码
		var passwordForPrivKey = Bitcoin.CryptoJS.MD5(password + salt).toString();
		console.log("passwordForPrivKey:" + passwordForPrivKey);
		//私钥加密的结果
		var encryptedStr = Utils.AesEncrypt(privateKey, passwordForPrivKey);
		//助词文本
		var passAssident = Utils.AesEncrypt("{'tradePwd':'" + password + "', 'privKey':'" +privateKey+ "'}",salt).toString();
		var text = mnemonic.encode(Utils.stringToBytes(passAssident));
		return {
			encryptPrivateKey: encryptedStr,
			mnemonicText: text,
			result: true
		};
	}catch(e){

		console.log("encrypt PrivateKey error." + e.toString());
		return {
			result: false
		};
	}
}

/**
 * 密钥解密
 * @param encryptedStr 用户私钥密文
 * @param 用户密码
 * @return 私钥对象
 */
function decryptPrivateKey(encryptedStr,password,userid) {
	//userSalt = "1234567";
	if (userSalt == undefined) {
		userSalt = getUserSalt(userid);
	}
	try{
		//加密私钥用的密码
		var passwordForPrivKey = Bitcoin.CryptoJS.MD5(password + userSalt).toString();
		//console.log("passwordForPrivKey:" + passwordForPrivKey);
		//console.log("encryptedStr:" + encryptedStr);
		var decrypt = Utils.AesDecrypt(encryptedStr, passwordForPrivKey);
		//console.log("decrypt:" + decrypt);
		//解密出的私钥
		var privateKey = decrypt.toString(Bitcoin.CryptoJS.enc.Utf8);
		//console.log("PrivateKey:" + privateKey);
		if(privateKey == ""){
			console.log("decrypt PrivateKey empty.");
	    	return null;
		}
		//privateKey = "Kys8J6VjtWP6uZB3knBiNqQ2JCiyEeWQSevgDECuWSwmnzrPKzNB";
		ecpair = Bitcoin.ECPair.fromWIF(privateKey, Bitcoin.networks.bitcoin);
		//console.log("WIF:" + ecpair.toWIF());
		return ecpair;
	} catch(e) {
		console.log("decrypt PrivateKey error." + e.toString());
    	return null;
	}
}

/**
 * 密码加密
 * @param password
 * @param salt
 */
function encryptPassword(password, salt,userid) {
	if (salt == undefined) {
		salt = getUserSalt(userid);
	}
	var encryptedStr = Utils.AesEncrypt(password, salt).toString();
	var arrayByte = Utils.stringToBytes(encryptedStr);
	return mnemonic.encode(arrayByte);
}

/**
 * 密码解密
 * @param backupWorks
 */
function decryptPassword(backupWorks,userid) {
	var salt = getUserSalt(userid);
	var bytes = mnemonic.decode(backupWorks);
	var encrytedString = Utils.bytesToString(bytes);
	var password = Utils.AesDecrypt(encrytedString, salt);
	return password.toString(Bitcoin.CryptoJS.enc.Utf8);
}

// 判断是否支持 window.crypto和地址解析。
function supportWindowCrypto() {
	try {
		var crypto = window.crypto;
		if (crypto == undefined) {
			//$("#borwserNotSupport").show();
			console.log("不支持随机数生成！");
			return false;
		}
		Bitcoin.address.fromBase58Check("4Kw2eM6jGkGCEPr4T9LUraRS3gyimPxHAr");
	} catch (e) {
		//$("#borwserNotSupport").show();
		console.log("不支持地址解析！");
		return false;
	}
	//$("#borwserSuggest").show();
	return true;
}

Utils = {
	stringToBytes : function(e) {
		return Binary.stringToBytes(unescape(encodeURIComponent(e)));
	},

	bytesToString : function(e) {
		return decodeURIComponent(escape(Binary.bytesToString(e)));
	},

	AesEncrypt : function(data, key) {
		return Bitcoin.CryptoJS.AES.encrypt(data, key);
	},

	AesDecrypt : function(encrytedData, key) {
		return Bitcoin.CryptoJS.AES.decrypt(encrytedData, key);
	},

	//格式化CST日期的字串
	formatCSTDate : function(strDate, format) {
		return formatDate(new Date(strDate), format);
	},

	//格式化日期,
	formatDate : function(date, format) {
		//补零
		var paddNum = function(num) {
			num += "";
			return num.replace(/^(\d)$/, "0$1");
		};

		//指定格式字符
		var cfg = {
			yyyy : date.getFullYear(), //年 : 4位
			yy : date.getFullYear().toString().substring(2), //年 : 2位
			M : date.getMonth() + 1, //月 : 如果1位的时候不补0
			MM : paddNum(date.getMonth() + 1), //月 : 如果1位的时候补0
			d : date.getDate(), //日 : 如果1位的时候不补0
			dd : paddNum(date.getDate()), //日 : 如果1位的时候补0
			hh : paddNum(date.getHours()), //时
			mm : paddNum(date.getMinutes()), //分
			ss : paddNum(date.getSeconds()) //秒
		};

		format || (format = "yyyy-MM-dd hh:mm:ss");
		return format.replace(/([a-z])(\1)*/ig, function(m) {
			return cfg[m];
		});
	},

	isValidCoinAddress : function(addr) {
		try {
			Bitcoin.Address.fromBase58Check(addr);
			return true;
		} catch (e) {
			console.log(e);
			return false;
		}
	},

	UnicodeToUTF8 : function(str) {
		var out, i, len, c;

		out = "";
		len = str.length;
		for (i = 0; i < len; i++) {
			c = str.charCodeAt(i);
			if ((c >= 0x0001) && (c <= 0x007F)) {
				out += str.charAt(i);
			} else if (c > 0x07FF) {
				out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
				out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
				out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
			} else {
				out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
				out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
			}
		}
		return out;
	},
	getBinaryIndex : function(value, bit) {
		var remainder = 0;
		for ( var i = 0; i < bit; i++) {
			var factor = value / 2;
			factor = parseInt(factor);
			remainder = value % 2;
			if (factor == 0) {
				if (i >= bit - 1)
					break;
				remainder = 0;

				break;
			}
			value = factor;
		}
		return remainder;
	},
	getNetwork : function(isOnLine, coinType) {
    	if(!isOnLine){
			switch(coinType) {
				case 1: //OKUSD
					return Bitcoin.networks.oktoken_testnet;
				case 2: //BTC
					return Bitcoin.networks.testnet;
			}
    		return Bitcoin.networks.oktoken_testnet;
    	}

    	switch(coinType) {
			case 1: //OKUSD
				return Bitcoin.networks.oktoken;
			case 2: //BTC
				return Bitcoin.networks.bitcoin;
    	}
    	return Bitcoin.networks.oktoken;
    }
};