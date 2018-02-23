
(function(jQuery) {
		//提交审核信息
		$("#authSave").on("click",function(e) {
					//判断用户
					for (var i = 0; i <= 4; i++) {
						var authTextObj = $("#authText" + i);
						if (authTextObj.length != 0) {
							var authIdObj = $("#authId" + i);
							var authId = authIdObj.val();
							var authText = authTextObj.val().trim();
							if (authId != "undefined" && authId != null
									&& authId != "" && authText == "") {
								alert("Review remark for question "+(i+1)+" is required");
								return;
							}
						}
					}
					
					
					var levelAlert = $("#level").val();
//					var isCanChange = $("#isCanChangeBtn").val();
					
//					if (levelAlert > 0 && isCanChange == 1) {
//						alert("The user is currently updating their information. Please wait for the updated information or turn off the update function for the user.");
//						return false;
//					}
		
					if (levelAlert == 0) {
						alert("Please select the user level!");
						return false;
					}  
					
					
					var yes0 = $('input:radio[name="yes0"]:checked').val()*1;
					var yes1 = $('input:radio[name="yes1"]:checked').val()*1;
					var yes2 = $('input:radio[name="yes2"]:checked').val()*1;
					var yes3 = $('input:radio[name="yes3"]:checked').val()*1;
					var yes4 = $('input:radio[name="yes4"]:checked').val()*1;
					
					if(levelAlert == 1&&!yes0){
						alert("Level 1 user, corporate information must meet the Level 1 approval criteria");
						return false;
					}
					
					if(levelAlert == 1&&(!!yes0&&!!yes1&&!!yes2&&!!yes3&&!!yes4)){
						alert(" If all criterion are met, please select Level 2");
						return false;
					}
					
					
					 if(levelAlert == 2&&!(!!yes0&&!!yes1&&!!yes2&&!!yes3&&!!yes4)){
						 alert(" Level 2 user, corporate information must meet the level 2 approval criteria");
						return false;
					 }
					
					if (levelAlert == 1) {
						if (!confirm("Approve for Level 1?")) {
							return false;
						}
					} else {
						if (!confirm("Approve for Level 2?")) {
							return false;
						}
					}
					$.post("/adminComInfo/authStep1EvaluateLevel.do", $("#aduitForm").serialize(), function(data) {
						alert(data.msg);
						if (data.code == 0) {
							$(".main-content").load("/adminComInfo/index.do");
						}
					}, "JSON");
				});
		
		
		$("#minFeeBankRadio").on("click", function() {
			$("#bankTrAddShow").css("display", "none");
			$("#bankTrMinShow").css("display", "");
		});
		$("#addAmountBankRadio").on("click", function() {
			$("#bankTrMinShow").css("display", "none");
			$("#bankTrAddShow").css("display", "");
		});
		$("#minFeeCashRadio").on("click", function() {
			$("#cashTrAddShow").css("display", "none");
			$("#cashTrMinShow").css("display", "");
		});
		$("#addAmountCashRadio").on("click", function() {
			$("#cashTrMinShow").css("display", "none");
			$("#cashTrAddShow").css("display", "");
		});
		
		
		
//		/**是否允许前台用户修改基础信息**/
//		$(".changeBasic").on("click",function(e){
//			var isCan  = $(e.target).attr("data")*1;
//			var userId = $("#userid").val();
//				$.post("/adminComInfo/changeBasic.do", { 
//					"isCan" : isCan,
//					"userId" : userId
//				}, function(data) {
//					alert(data.msg);
//					if (!!data&&data.code == 0) {
//						$("#isCanChange").text(isCan==0?"【Can Not】":"【Can】");
//						$("#isCanChangeBtn").val(isCan);
//					} 
//				},"JSON");
//			});	
//		
		
		/**返回上一页 back START**/
		$("#authBack").on("click",function(e){
			var paramStr = $("#paramStr").val();
			$(".main-content").load("/adminComInfo/index.do?"+paramStr);
		});
		/**返回上一页 back END**/
		
		
		/**被驳回 Return START**/
		$("#authReturn").on("click",function(e){
			//判断审核项是不是为空
			for (var i = 0; i <= 4; i++) {
				var authTextObj = $("#authText" + i);
				if (authTextObj.length != 0) {
					var authIdObj = $("#authId" + i);
					var authId = authIdObj.val();
					var authText = authTextObj.val().trim();
					if (authId != "undefined" && authId != null
							&& authId != "" && authText == "") {
						alert("Review remark for question "+(i+1)+" is required");
						return;
					}
				}
			}
			
//			var isCanChange = $("#isCanChangeBtn").val();
//			var yes0= $('input:radio[name="yes0"]:checked').val();
//			if(isCanChangeBtn==1&&yes0==1){//不允许基础信息PASS并且可以跟新前台信息
//				alert("不允许基础信息PASS并且可以跟新前台信息");
//				return;
//			}
			
			if (!confirm("Return the application to the user?")) {
				return;
			}
			$.post("/adminComInfo/authReturn.do", $("#aduitForm").serialize(), function(data) {
				alert(data.msg);
				if (data.code == 0) {
					$(".main-content").load("/adminComInfo/index.do");
				}
			}, "JSON");
		});
		/**被驳回 Return END**/
		
		/**被归档 Archive START**/
		$("#authArchive").on("click",function(e){
			//判断审核项是不是为空
/*			for (var i = 0; i <= 3; i++) {
				var authTextObj = $("#authText" + i);
				if (authTextObj.length != 0) {
					var authIdObj = $("#authId" + i);
					var authId = authIdObj.val();
					var authText = authTextObj.val().trim();
					if (authId != "undefined" && authId != null
							&& authId != "" && authText == "") {
						alert("Review remark for question "+(i+1)+" is required");
						return;
					}
				}
			}
			var isCanChange = $("#isCanChangeBtn").val();
			var yes0= $('input:radio[name="yes0"]:checked').val();
			if(isCanChangeBtn==1&&yes0==1){//不允许基础信息PASS并且可以跟新前台信息
				alert("不允许基础信息PASS并且可以跟新前台信息");
				return;
			}*/
			
			if (!confirm("Archive the application?")) {
				return;
			}
			$.post("/adminComInfo/authArchive.do",$("#aduitForm").serialize(),function(result){
					alert(result.msg);
					if(!!result&&result.code==0){
						$(".main-content").load("/adminComInfo/index.do");
					}
				},"JSON");
		});
		/**被归档 Archive END**/
		
		
		
		/**冻结用户 Reject START**/
		$("#authReject").on("click",function(e){
			/*var rejectReson = $("#rejectReson").val();*/
			var rejectResonForEmail = $("#rejectResonForEmail").val();
			var rejectResonForLog = $("#rejectResonForLog").val();
			var userid = $("#userid").val();
			if(!!rejectResonForEmail&&!!rejectResonForLog&&!!userid){
				if($.trim(rejectResonForEmail).length>400){
					alert(" Reason is limited to 400 characters");
					return false;
				}
				$.post("/adminComInfo/authReject.do",{"rejectResonForEmail":rejectResonForEmail,"rejectResonForLog":rejectResonForLog,"userid":userid},function(result){
					alert(result.msg);
					if(!!result&&result.code==0){
						$('#myModalReject').modal('hide'); //隐藏模态框
					}
				},"JSON");
			}
		});
		/**冻结用户 Reject END**/
		
				//模块框关闭
			  $("#myModalReject").on("hidden.bs.modal", function(e) {
				    $(this).removeData("bs.modal");
				  	$(".main-content").load("/adminComInfo/index.do");	
				});
		
		
	})(jQuery);
	
	function calculateBtc() {
		var bidRateBtc = $("#bidRateBtc").val().trim();
		var moneyRate = $("#moneyRate").val();
		var btcUSD = $("#btcUSD").val();
		if (bidRateBtc == null || bidRateBtc == "") {
			$("#btcRateUnitShow").css("display", "none");
			$("#btdRateBtcValue").text("%");
			$("#bidRateBtcError").css("display", "inline");
			$("#bidRateBtcError").text("BTC汇率不能为空！");
			return;
		}
		var reg = /^[0-9]+(\.[0-9]{1,2})?$/;
		if (!reg.test(bidRateBtc)) {
			$("#btcRateUnitShow").css("display", "none");
			$("#btdRateBtcValue").text("%");
			$("#bidRateBtcError").css("display", "inline");
			$("#bidRateBtcError").text("BTC汇率格式不对！");
			return;
		}
		$("#bidRateBtcError").text("*");
		$("#btdRateBtcValue").text(
				((100 - bidRateBtc) / 100 * moneyRate * btcUSD).toFixed(2));
		$("#btcRateUnitShow").css("display", "inline-block");

	}
	function calculateOkd() {
		var bidRateOkd = $("#bidRateOkd").val().trim();
		var moneyRate = $("#moneyRate").val();
		if (bidRateOkd == null || bidRateOkd == "") {
			$("#okdRateUnitShow").css("display", "none");
			$("#okdRateBtcValue").text("%");
			$("#bidRateOkdError").css("display", "inline");
			$("#bidRateOkdError").text("OKD汇率不能为空！");
			return;
		}
		var reg = /^[0-9]+(\.[0-9]{1,2})?$/;
		if (!reg.test(bidRateOkd)) {
			$("#okdRateUnitShow").css("display", "none");
			$("#bidRateOkdValue").text("%");
			$("#bidRateOkdError").css("display", "inline");
			$("#bidRateOkdError").text("OKD汇率格式不对！");
			return;
		}
		if (bidRateOkd >= 100 || bidRateOkd < 0) {
			$("#okdRateUnitShow").css("display", "none");
			$("#bidRateOkdValue").text("%");
			$("#bidRateOkdError").css("display", "inline");
			$("#bidRateOkdError").text("OKD汇率格式不对！");
			return;
		}
		$("#bidRateOkdError").text("*");
		$("#bidRateOkdValue").text(
				((100 - bidRateOkd) / 100 * moneyRate).toFixed(2));
		$("#okdRateUnitShow").css("display", "inline-block");
	}
	
	
	function changePlat() {
		var code = $("#bidRateBtcPlat").val();
		var moneyRate = $("#moneyRate").val();
		$.post("/adminComInfo/getBtcTicker.do", {
			"symbol" : code
		}, function(data) {
			if (result.code == "0") {
				$("#btcUSD").val(result.msg);
				$("#btcTickerShow").text((result.msg*1 * moneyRate).toFixed(2));
			} else {
				console.info("刷新行情失败");
			}
		},"JSON");
	}

	//移出去
	function imageBig() {
		$(this).attr("target", "big");
	}
	
/**
 * 
 * 	function changeBasicInfo(num) {
		if (num == 0) {
			$("#level option[value='1']").remove();
			$("#level option[value='2']").remove();
			$("#level option[value='0']").remove();
			$("#level").append("<option value='0'>请选择</option>");
		} else {
			var v0 = $('input:radio[name="yes0"]:checked').val();
			var v1 = $('input:radio[name="yes1"]:checked').val();
			var v2 = $('input:radio[name="yes2"]:checked').val();
			var v3 = $('input:radio[name="yes3"]:checked').val();
			if (v0 == 1 && v1 == 1 && v2 == 1 && v3 == 1) {
				$("#level option[value='1']").remove();
				$("#level option[value='2']").remove();
				$("#level option[value='0']").remove();
				$("#level").append("<option value='2'>Level 2</option>");
			} else {
				$("#level option[value='0']").remove();
				$("#level option[value='1']").remove();
				$("#level option[value='2']").remove();
				$("#level").append("<option value='0'>请选择</option>");
				$("#level").append("<option value='1'>Level 1</option>");
			}
		}

	}
 * 
 * **/
	