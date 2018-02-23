<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="keywords" content="OKLink国际汇款" />
<meta name="description" content="OKLink国际汇款" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>OKLink Houtai</title>
<script src="/static/js/jquery-3.3.1.min.js"></script>

<!-- fonts -->
<link rel="stylesheet" href="/static/assets/css/fonts.css" />
<!-- basic styles -->
<link href="/static/assets/css/bootstrap.min.css" rel="stylesheet" />
<link rel="stylesheet" href="/static/assets/css/font-awesome.min.css" />
<!-- ICON -->
<link rel="icon" href="/static/assets/images/favicon.ico"  type="image/x-icon">
<!-- ace styles -->
<link rel="stylesheet" href="/static/assets/css/ace.min.css" />
<link rel="stylesheet" href="/static/assets/css/ace-rtl.min.css" />

<script type="text/javascript">
    var LINK_HTTP = {
        "post":function(url,params,callBack,type){
            if(!url){
                alert("URL 不能为空");
                return false;
            }
            $.post(url,params,function(result){
                if(!!callBack&&typeof(callBack)=="function"){
                    callBack(result);
                }
            },"JSON");
        },
        "get":function(url,params,callBack){
            if(!url){
                alert("URL 不能为空");
                return false;
            }
            $.get(url,params,function(result){
                if(!!callBack&&typeof(callBack)=="function"){
                    callBack(result);
                }
            },"JSON");
        },
        "load":function(target,url,params,callBack){
            $(target).load(url,params,function(){
                if(!!callBack&&typeof(callBack)=="function"){
                    callBack();
                }
                //启动back
                LINK_BTN.BACK_BTN();
            });
        }
    };

    var Util = {
        "formToJson":function(arr){
            var result = {};
            $.each(arr, function() {
                if (result[this.name]) {
                    if (!result[this.name].push) {
                        result[this.name] = [result[this.name]];
                    }
                    result[this.name].push(this.value || '');
                } else {
                    result[this.name] = this.value || '';
                }
            });
            console.log(result);
            return result;
        }
    };
</script>

<div style="z-index: 99999;display: none; " id="LINK_ADMIN_ERROR_TIPS"  >
</div>

<script src="/static/assets/module/backBtn.js"></script>
