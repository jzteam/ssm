<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="./header.jsp"%>

</head>

<body class="login-layout">
	<div class="main-container" id="link_houtai_bg">
		<div class="main-content">
			<div class="row">
				<div class="col-sm-10 col-sm-offset-1">
					<div class="login-container">
						<div class="center">
							<h1>
								<i class="icon-leaf green"></i> <span class="red">OKLink</span>
								<span class="white">管理系统</span>
							</h1>
							<h4 class="blue">&copy; Company OKCoin</h4>
						</div>

						<div class="space-6"></div>

						<div class="position-relative">
							<div id="login-box" class="login-box visible widget-box no-border">
								<div class="widget-body">
									<div class="widget-main">
										<h4 class="header blue lighter bigger">
											<i class="icon-coffee green"></i> <span id="login_tips"></span>
										</h4>

										<div class="space-6"></div>
											<fieldset>
												<label class="block clearfix"> <span
													class="block input-icon input-icon-right"> 
													<input id="name" type="text"  class="form-control" placeholder="用户名" /> <i
														class="icon-user"></i>
												</span>
												</label> <label class="block clearfix"> <span
													class="block input-icon input-icon-right"> <input
														type="password" id="pwd"   class="form-control" placeholder="密码" />
														<i class="icon-lock"></i>
												</span>
												</label> <label class="block clearfix"> <span
													class="block input-icon input-icon-right"> <input
														type="text" id="code" class="form-control" placeholder="Google Authenticator Code" /> <i
														class="icon-google-plus-sign"></i>
												</span>
												</label>

												<div class="space"></div>

												<div class="clearfix">
													<button type="button"
														class="width-35 pull-right btn btn-sm btn-primary" id="login">
														<i class="icon-key"></i> 登陆
													</button>
												</div>

												<div class="space-4"></div>
											</fieldset>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
	</div>
	</div>
</body>

<script type="text/javascript">
		(function(jQuery){
			
			
			 $(document).keypress(function(e) { 
				 var event = document.all ? window.event : e; 
				 if(event.keyCode == 13) {
					 $("#login").click();
			      }}); 
			
			//用户登陆
			$("#login").on("click",function(data){
				var name = $.trim($("#name").val());
				var pwd = $.trim($("#pwd").val());
				var code = $("#code").val();
				if(name==""||pwd==""){
					$("#login_tips").text("用户名/密码不能为空!");
					return false;
				}
				
				LINK_HTTP.post("/admin/login.do",{
					"name":name,
					"pwd":pwd,
					"code":code
				},function(data){
						if(data.code>=0){
							window.location.href="/";
						}else{
							$("#login_tips").text(data.msg);
						}
				},"json");
			});
		})(jQuery);
</script>

</html>
