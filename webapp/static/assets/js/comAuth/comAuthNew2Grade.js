(function(jQuery) {
	// Level1  申请等级提高 驳回
	$("#authLevelUpReturn,#authLevelUpSave").on("click", function(e) {
		for (var i = 0; i <= 4; i++) {
			var authTextObj = $("#authText" + i);
			if (authTextObj.length != 0) {
				var authIdObj = $("#authId" + i);
				var authId = authIdObj.val();
				var authText = authTextObj.val().trim();
				if (authId != "undefined" && authId != null && authId != "" && authText == "") {
					alert("Review remark for question " + (i + 1)+ " is required");
					return;
				}
			}
		}
		var levelAlert = $(e.target).attr("level")*1;
		$("#level").val(levelAlert);
		
		
		var isCanChange = $("#isCanChangeBtn").val();

		if (levelAlert > 0 && isCanChange == 1) {
			alert("The user is currently updating their information. Please wait for the updated information or turn off the update function for the user.");
			return false;
		}

		if (levelAlert == 0) {
			alert("Please select the user level!");
			return false;
		}
		
		var yes0 = $('input:radio[name="yes0"]:checked').val() * 1;
		var yes1 = $('input:radio[name="yes1"]:checked').val() * 1;
		var yes2 = $('input:radio[name="yes2"]:checked').val() * 1;
		var yes3 = $('input:radio[name="yes3"]:checked').val() * 1;
		var yes4 = $('input:radio[name="yes4"]:checked').val() * 1;
		
		if (levelAlert == 1 && !yes0) {
			alert("Level 1 user, corporate information must meet the Level 1 approval criteria");
			return false;
		}
		
		if (levelAlert == 1 && (!!yes0 && !!yes1 && !!yes2 && !!yes3 && !!yes4)) {
			alert(" If all criterion are met, please select Level 2");
			return false;
		}

//		if (levelAlert == 2&& !(!!yes0 && !!yes1 && !!yes2 && !!yes3 && !!yes4)) {
//			alert(" Level 2 user, corporate information must meet the level 2 approval criteria");
//			return false;
//		}
		
		if (levelAlert == 2) {//如果有审核项必须全过
			if((!isNaN(yes0)&&!yes0)||(!isNaN(yes1)&&!yes1)||(!isNaN(yes2)&&!yes2)||(!isNaN(yes3)&&!yes3)||(!isNaN(yes4)&&!yes4)){
			alert(" Level 2 user,  information must meet the level 2 approval criteria");
			return false;
			}
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
		$.post("/adminComInfo/authLevelUpHandle.do", $("#aduitForm").serialize(), function(data) {
					alert(data.msg);
					if (data.code == 0) {
						$(".main-content").load("/adminComInfo/index.do");
					}
				}, "JSON");
	});

})(jQuery);
