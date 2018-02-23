/**
 * 汇款单支付页面相关JS
 */
$(document).ready(function(){
	

	var ifOnline = parseInt($("#ifOnline").val()); //是否正式平台
	var userAddress = $("#userAddress").val(); 
	var userPrivateKey = $("#userPrivateKey").val();
	
	var relayAddress = $("#relayAddress").val(); //收款地址
	var superAddress = $("#superAddress").val(); //超级私钥
	
	var payAmount = Math.round(parseFloat($("#payAmount").val()) * 100000000); //支付金额
	var coinType = 1;//1-OKD
	var unspent; //为花费交易
	
	
	//获取未花费记录
    function getUnspentTxList(){
    	$.post("/block/getUnspentTxList.do", {amount: payAmount}, function(result){
    		if(!!result && result.resultCode == 0){
    			unspent = result.data;
    			console.log("url:" + url + ",data:" + result.data);
    		}else{
    			console.log("url:" + url + ",error");
    		}
    	}, 'JSON');
    }
    
    
    //输完密码，提交交易
	$("#submitBtn").on("click", function(){
			if(unspent == undefined||unspent==""||unspent==null){
				alert("交易没有组件，返回上一步，重新获取")
				return false;
			}
			
			var pwd = $("#pwd").val();
			if(pwd == undefined||pwd==""||pwd==null){
				alert("密码不能为空")
				return false;
			}
			
			//用户地址，用户加密私钥，接受地址
			if(userAddress == "" || userPrivateKey == "" || relayAddress == ""){
				console.log("get user info error. userAddress:" + userAddress + ",userPrivateKey:" + userPrivateKey + ",relayAddress:" + relayAddress);
				return;
			}

			//创建交易
			var flag= createTransaction();
			if(!flag){
				console.log("pay error. please try again!");
			}
	});
	
	/**
	 * 创建交易
	 */
	function createTransaction(){
		try {
			
			var network = Utils.getNetwork(ifOnline, coinType);
			
			var txBuilder = new Bitcoin.TransactionBuilder(network);
			
			//计算总输入
			var totalInput = 0;
			for(var i in unspent){
				txBuilder.addInput(unspent[i].txid, unspent[i].recTxIndex);
				var inputAmount = parseInt(unspent[i].amount);
				totalInput += inputAmount;
			}
			console.log("input size: " + unspent.length);

			
			//添加输出（将超级私钥的放入输入中）
			txBuilder.addSuperOutput(relayAddress, payAmount, superAddress); 
			
			//添加找零
			var changes = totalInput - payAmount;
			
			if(changes > 0){
				txBuilder.addSuperOutput(userAddress, changes, superAddress);
			}
			
			//签名
			var signResult = signTransaction(txBuilder);
			if(!signResult){
				return false;
			}
			
			var tx = txBuilder.build();
			
			var txHex = tx.toHex();
			var blockTxId = tx.getId();

			submit(blockTxId, txHex);
			return true;
		} catch (e){
			console.log("createTransaction error:" + e.toString());
	    	return false;
		}
	}

	/**
	 * 对已构建的交易进行签名。
	 * @param txBuilder
	 * @returns false/true
	 */
	function signTransaction(txBuilder){
		
		var pwd = $("#pwd").val();
		
		//解密私钥
		var privateKey = decryptPrivateKey(userPrivateKey, pwd);
		if(privateKey == undefined || privateKey == null){
			alert("错误的密码");
			return false;
		}
		
		//设置私钥网络
		privateKey.network = txBuilder.network;

		//遍历输入并签名
		for(var i = 0, len = unspent.length; i < len; i ++){
			var script = Bitcoin.address.toSuperOutputScript(unspent[i].addressTo, unspent[i].redeemAddress, txBuilder.network);
			txBuilder.sign(parseInt(i), privateKey, null, null, script);
			}
		return true;
	}

	/**
	 * 向服务器提交交易信息并处理返回结果。
	 * @param txId
	 * @param txHex
	 */
	function submit(txId, txHex){
		$.post("/remit/payOKD.do", {
			txid : $("#txid").val(),
			blockTxId : txId,
			txHex : txHex,
		}, function(result){
			console.info(result);
			if(!!result){
				console.info(result);
			}
		}, 'JSON');
	}
});