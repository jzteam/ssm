/**
 * 使用方法： 
 * 在页面中添加，就是相对应的控件
 * <div class="link_btn_back" url="/country/countryInfo.do"></div>
 */

var LINK_BTN = (function($) {
	/**
	 * 显示业务代码
	 * 
	 * @t：时间
	 * @showDiv:按钮 (适用于input)
	 * @defVal:倒计时结束后按钮显示默认Value
	 */
	var BACK_BTN = function() {
		
		if(!$(".link_btn_back")){
			return false;
		}
		
		$(".link_btn_back").html(
				'<p><span class="btn btn-info btn-sm tooltip-info" id="back">back</span></p>'
		);
		$(".link_btn_back").on("click",function(e){
			var $this = $(e.currentTarget );
			var url = $this.attr("url");
			if(!!url){
				var params = {};
				if (!!localStorage) {
					var curUrl = localStorage.getItem("curUrl");
					if (url == curUrl) {
						params =   JSON.parse( localStorage.getItem("queryJson"));
					}
				}
				LINK_HTTP.load(".main-content", url, params);
			}
		})
	};
	return {
		BACK_BTN:BACK_BTN
	};
})(jQuery);
