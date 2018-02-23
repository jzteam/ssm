﻿<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/view/common/header.jsp"%>
</head>
<body>
	<!-- 顶部导航栏 -->
	<div class="navbar navbar-default" id="navbar">
		<div class="navbar-container" id="navbar-container" >
			<div class="navbar-header pull-left" >
				<a href="#" class="navbar-brand">
					<small> <i class="icon-leaf"></i> 后台管理系统 </small>
				</a>
			</div>

			<div class="navbar-header pull-right" role="navigation">
				<ul class="nav ace-nav">
					<li class="light-blue">
						<a data-toggle="dropdown" href="#" class="dropdown-toggle">
							<img class="nav-user-photo" src="/static/assets/avatars/super.jpg" alt="OK" />
							<span class="user-info"> <small>欢迎光临</small> jzteam</span>
							<i class="icon-caret-down"></i>
						</a>
						<ul class="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
							<li><a href="javascript:void(0);" id="auInfo" > <i class="icon-user"></i> 个人资料</a></li>
							<li class="divider"></li>
							<li><a href="/admin/logout.do" id="logout"> <i class="icon-off"></i> 退出 </a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>


	<div class="main-container" id="main-container">
		<script type="text/javascript">
			try {
				ace.settings.check('main-container', 'fixed')
			} catch (e) {
			}
			
			try {
				ace.settings.check('navbar', 'fixed')
			} catch (e) {
				
			}
		</script>

		<div class="main-container-inner">
			<a class="menu-toggler" id="menu-toggler" href="#"> <span
				class="menu-text"></span>
			</a>

			<!-- 左侧菜单栏 -->
			<div class="sidebar" id="sidebar">
				<script type="text/javascript">
					try {
						ace.settings.check('sidebar', 'fixed')
					} catch (e) {
					}
				</script>

				<div class="sidebar-shortcuts" id="sidebar-shortcuts">

					<div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
						<span class="btn btn-success"></span> <span class="btn btn-info"></span>
						<span class="btn btn-warning"></span> <span class="btn btn-danger"></span>
					</div>
				</div>

				<ul class="nav nav-list" id="user_menus">
					<li class="active">
						<a href="#" id="menu_contol" >
							<i class="icon-dashboard"></i> <span class="menu-text" > 导 航 面 板 </span>
						</a>
					</li>

					<li class="general_li" data="11">
						<a href="javascript:void(0)" data="http://localhost:8080/order/index" id="soldier11">
							<i class="icon-double-angle-right"></i> 订单管理
						</a>
					</li>
				</ul>

				<div class="sidebar-collapse" id="sidebar-collapse">
					<i class="icon-double-angle-left"
						data-icon1="icon-double-angle-left"
						data-icon2="icon-double-angle-right"></i>
				</div>

				<script type="text/javascript">
					try {
						ace.settings.check('sidebar', 'collapsed')
					} catch (e) {
					}
				</script>
			</div>

			<!-- 主题部分 -->
			<div class="main-content">

				<!-- 面包屑 -->
				<div class="breadcrumbs" id="breadcrumbs">
					<script type="text/javascript">
						try {
							ace.settings.check('breadcrumbs', 'fixed');
						} catch (e) {
						}
					</script>

					<ul class="breadcrumb">
						<li><i class="icon-home home-icon"></i> <a href="#">首页</a></li>
					</ul>
				</div>

				<!-- 嵌套页面 -->
				<div class="page-content">
					<div class="page-header">
						<h1>后台管理系统重要公告</h1>
					</div>

					<div class="row">
						<div class="col-xs-12">
							<!-- 默认内容：公告信息 -->
							<div class="alert alert-block alert-success">
								<i class="icon-ok green"></i> 欢迎使用 <strong class="green">后台管理系统 </strong> ,祝工作愉快！
							</div>
							<div class="alert alert-block alert-info">
								<i class="icon-ok blue"></i> 201705<strong class="green">后台管理系统</strong> ,大版本升级（如果遇到异常请及时反馈）
							</div>

							<c:out value="test"/>
							<%--<c:forTokens items="a,b,c,d" delims="," var="item">--%>
								<%--fff-${item}--%>
							<%--</c:forTokens>--%>

							<div class="hr hr32 hr-dotted"></div>
						</div>
					</div>
				</div>

			</div>

			<!-- 互动标签，切换窄屏 -->
			<div class="ace-settings-container" id="ace-settings-container">
				<div class="btn btn-app btn-xs btn-warning ace-settings-btn"
					id="ace-settings-btn">
					<i class="icon-cog bigger-150"></i>
				</div>

				<div class="ace-settings-box" id="ace-settings-box">
					<div>
						<input type="checkbox" class="ace ace-checkbox-2"
							id="ace-settings-add-container" /> <label class="lbl"
							for="ace-settings-add-container"> 切换窄屏 <b></b>
						</label>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- basic scripts -->
	<script src="/static/assets/js/bootstrap.min.js"></script>
	<script src="/static/assets/js/typeahead-bs2.min.js"></script>
	<!-- jquery -->
	<script src="/static/assets/js/jquery-ui-1.10.3.full.min.js"></script>

	<!-- ace scripts -->
	<script src="/static/assets/js/ace-elements.min.js"></script>
	<script src="/static/assets/js/ace.min.js"></script>
	<script src="/static/assets/js/ace-extra.min.js"></script>

	<!-- js嵌套 -->
	<script type="text/javascript">
	(function(jQuery) {
		$("#user_menus").find("a").bind("click", function(e) { //绑定用户菜单
			$target = $(e.target);
			var url = $target.attr("data");
			console.log(url)
			if (url != "") {
				LINK_HTTP.load(".main-content",url);
				if(!!localStorage){
					var general_li = $target.parents(".general_li").attr("data")
					localStorage.setItem("general",general_li);
					localStorage.setItem("soldier",$target.attr("id"));
				}

			}
		});
		
		
		//查看个人资料			
		$("#auInfo").on("click",function(e){
			LINK_HTTP.load(".main-content","/admin/adminUserInfo.do")
		});
		
		$("#menu_contol").on("click",function(e){
			localStorage.removeItem("soldier");
			localStorage.removeItem("general");
			window.location.href="/";
		});

		//该位置后期可以后期优化为url的load
		if(!!localStorage){
			var general = localStorage.getItem("general");
			var soldier = localStorage.getItem("soldier");
			if(!!general&&!!soldier){
				$("#general"+general).parent("li").addClass("open").find("ul").show();
				$("#"+soldier).click();
			}
		}
	
	})(jQuery);
	</script>
</body>
</html>

