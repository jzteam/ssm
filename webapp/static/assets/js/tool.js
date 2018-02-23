var LINK_TOOL = (function($) {
	/**
	 * 倒计时，按钮置灰
	 * 
	 * @t：时间
	 * @showDiv:按钮 (适用于input)
	 * @defVal:倒计时结束后按钮显示默认Value
	 */
	var showTime = function(t, showDiv, defVal) {
		var divDom = document.getElementById(showDiv);
		divDom.disabled = "true";
		t -= 1;
		setTimeout(function() {
			divDom.value = t + "秒后可重发";
			divDom.className = "button button_gray";
			if (t != 0) {
				showTime(t, showDiv, defVal);
			} else {
				divDom.className = "button button_blue";
				divDom.disabled = "";
				divDom.value = defVal;
			}
		}, 1000);
	};
	
	/**
	 * 倒计时，按钮置灰
	 * 
	 * @t：时间
	 * @showDiv:按钮 (适用于a 标签 ，未完善)
	 * @defVal:倒计时结束后按钮显示默认Value
	 */
	var showTimeFora = function(t, showDiv, defVal) {
		var divDom = document.getElementById(showDiv);
		divDom.setAttribute("data",1);
		t = t-1;
		setTimeout(function() {
			divDom.innerHTML = t + "S";
			if (t != 0) {
				showTimeFora(t, showDiv, defVal);
			} else {
				divDom.innerHTML = defVal;
				divDom.setAttribute("data",0);
			}
		}, 1000);
	};
	var showTimeForaExent = function(t,curDom,targetDom,showDom) {
			
		setInterval(function() {
			t = t-1;
			if (t > 0) {
				var divDom = document.getElementById(curDom);
				divDom.innerHTML = t + "Min";
			} else {
				 document.getElementById(targetDom).setAttribute("style", "display:none");
				 document.getElementById(showDom).setAttribute("style", "display:no");
				return;
			}
		}, 60000);
	};
	
	/**
	 * 倒计时跳转
	 * t: 时间
	 * showDiv 显示时间DIV
	 * herf 跳转位置
	 */
	var countdownJump = function(t,showDiv,herf){
		var divDom = document.getElementById(showDiv);
		t -= 1;
		setTimeout(function() {
			divDom.innerHTML = t;
			if (t != 0) {
				countdownJump(t, showDiv, herf);
			} else {
				window.location.href = herf;
			}
		}, 1000);
	};
	
	/**
	 * 只能输入数字(正整数)
	 * 
	 */
	var onlyDigit = function(event,divID){
		if(event.keyCode!=37&&event.keyCode!=39){//谷歌浏览器兼容
			document.getElementById(divID).value = document.getElementById(divID).value.replace(/[^0-9]/g, ""); 
		}
	};
	
	
	/**
	 * 只能输入数字（包含小数位）
	 * 
	 */
	var onlyFigure = function(event,divID){
		if(event.keyCode!=37&&event.keyCode!=39){//谷歌浏览器兼容
			document.getElementById(divID).value = document.getElementById(divID).value.replace(/^(\d+\.?\d{0,8}).*/g, function (x, a) {
				return a;
			}); 
		}
	};
	
	
	
	/**
	 *小数点后两位
	 * 
	 */
	var twoDecimalPlaces = function(event,divID,max){
		if(event.keyCode!=37&&event.keyCode!=39){//谷歌浏览器兼容
			var temp = document.getElementById(divID).value;
			var re = /([0-9]+\.[0-9]{2})[0-9]*/;
			temp = temp.replace(re,"$1");
			if(max!=""){
				temp = (temp * 1 > max? max:temp);
			}
			document.getElementById(divID).value = temp; 
		}
	};
	var getQueryString = function(name)
	{
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	};
	return {
		showTimeForaExent:showTimeForaExent,
		showTime : showTime,
		countdownJump:countdownJump,
		onlyDigit:onlyDigit,
		showTimeFora:showTimeFora,
		twoDecimalPlaces:twoDecimalPlaces,
		getQueryString:getQueryString,
		onlyFigure:onlyFigure 
	};
})();