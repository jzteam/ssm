        <%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
        <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>


        <div class="breadcrumbs" id="breadcrumbs">
            <ul class="breadcrumb">
                <li><i class="icon-home home-icon"></i> <a href="#">系统管理</a></li>
                <li class="active"><a href="#">Employee管理</a></li>
            </ul>
        </div>

        <div class="page-content">

            <div class="page-header">
                <div style="margin-bottom: 5px;">
                    <button class="btn btn-danger" data-toggle="modal" data-target="#myModal">新增</button>
                </div>
            </div>

            <!-- 列表 -->
            <div class="row">
                <div class="col-xs-12">
                    <div class="table-header">列表</div>

                    <div class="table-responsive">
                        <table id="user_table" class="table table-striped table-bordered table-hover">
                            <thead>
                            <tr>
                                    <th class="center">id</th>
                                    <th class="center">phone</th>
                                    <th class="center">password</th>
                                    <th class="center">name</th>
                                    <th class="center">sex</th>
                                    <th class="center">img</th>
                                    <th class="center">status</th>
                                    <th class="center">entryTime</th>
                                    <th class="center">levaeTime</th>
                                    <th class="center">createTime</th>
                                    <th class="center">deleteFlag</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            <c:forEach items='${formList}' var="item">
                                <tr>
                                        <td class="center">${item.id}</td>
                                        <td class="center">${item.phone}</td>
                                        <td class="center">${item.password}</td>
                                        <td class="center">${item.name}</td>
                                        <td class="center">${item.sex}</td>
                                        <td class="center">${item.img}</td>
                                        <td class="center">${item.status}</td>
                                        <td class="center">${item.entryTime}</td>
                                        <td class="center">${item.levaeTime}</td>
                                        <td class="center">${item.createTime}</td>
                                        <td class="center">${item.deleteFlag}</td>
                                    <td>
                                        <div class="visible-md visible-lg hidden-sm hidden-xs action-buttons">
                                            <a href="javascript:void(0)" class="blue" data-toggle="modal"
                                               data-target="#myModal">编辑</a>&nbsp;&nbsp;
                                            <a href="javascript:void(0)" class="red" data-toggle="modal"
                                               data-target="#myModal">删除</a>
                                        </div>
                                    </td>
                                </tr>
                            </c:forEach>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- 新增弹窗 -->
            <div class="modal fade" id="myModalAdd" tabindex="-1" role="dialog"
                 aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 class="modal-title" id="myModalLabel">Employee创建</h4>
                        </div>
                        <div class="modal-body">
                            <div style="padding: 25px 100px 10px;">
                                <form id="addFormId">
                                        <div class="input-group">
                                            <span class="input-group-addon">id</span>
                                            <input type="text" class="form-control" placeholder="必填参数"
                                                   name="id" id="idAdd"/>
                                        </div>
                                        <div class="input-group">
                                            <span class="input-group-addon">phone</span>
                                            <input type="text" class="form-control" placeholder="必填参数"
                                                   name="phone" id="phoneAdd"/>
                                        </div>
                                        <div class="input-group">
                                            <span class="input-group-addon">password</span>
                                            <input type="text" class="form-control" placeholder="必填参数"
                                                   name="password" id="passwordAdd"/>
                                        </div>
                                        <div class="input-group">
                                            <span class="input-group-addon">name</span>
                                            <input type="text" class="form-control" placeholder="必填参数"
                                                   name="name" id="nameAdd"/>
                                        </div>
                                        <div class="input-group">
                                            <span class="input-group-addon">sex</span>
                                            <input type="text" class="form-control" placeholder="必填参数"
                                                   name="sex" id="sexAdd"/>
                                        </div>
                                        <div class="input-group">
                                            <span class="input-group-addon">img</span>
                                            <input type="text" class="form-control" placeholder="必填参数"
                                                   name="img" id="imgAdd"/>
                                        </div>
                                        <div class="input-group">
                                            <span class="input-group-addon">status</span>
                                            <input type="text" class="form-control" placeholder="必填参数"
                                                   name="status" id="statusAdd"/>
                                        </div>
                                        <div class="input-group">
                                            <span class="input-group-addon">entryTime</span>
                                            <input type="text" class="form-control" placeholder="必填参数"
                                                   name="entryTime" id="entryTimeAdd"/>
                                        </div>
                                        <div class="input-group">
                                            <span class="input-group-addon">levaeTime</span>
                                            <input type="text" class="form-control" placeholder="必填参数"
                                                   name="levaeTime" id="levaeTimeAdd"/>
                                        </div>
                                        <div class="input-group">
                                            <span class="input-group-addon">createTime</span>
                                            <input type="text" class="form-control" placeholder="必填参数"
                                                   name="createTime" id="createTimeAdd"/>
                                        </div>
                                        <div class="input-group">
                                            <span class="input-group-addon">deleteFlag</span>
                                            <input type="text" class="form-control" placeholder="必填参数"
                                                   name="deleteFlag" id="deleteFlagAdd"/>
                                        </div>
                                </form>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" id="submitAdd" class="btn btn-primary">保存</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 编辑弹窗 -->
            <div class="modal fade" id="myModal" tabindex="-1"
                 role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <a class="close" data-dismiss="modal">×</a>
                            <h3>
                                <span id="tipspan"> Employee编辑 </span>
                            </h3>
                        </div>
                        <div class="modal-body" style="padding: 25px 100px 10px;">
                            <form id="editFormId">
                                    <div class="input-group">
                                        <span class="input-group-addon">id</span>
                                        <input type="text" class="form-control" placeholder="必填参数"
                                               name="id" id="idEdit"/>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-addon">phone</span>
                                        <input type="text" class="form-control" placeholder="必填参数"
                                               name="phone" id="phoneEdit"/>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-addon">password</span>
                                        <input type="text" class="form-control" placeholder="必填参数"
                                               name="password" id="passwordEdit"/>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-addon">name</span>
                                        <input type="text" class="form-control" placeholder="必填参数"
                                               name="name" id="nameEdit"/>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-addon">sex</span>
                                        <input type="text" class="form-control" placeholder="必填参数"
                                               name="sex" id="sexEdit"/>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-addon">img</span>
                                        <input type="text" class="form-control" placeholder="必填参数"
                                               name="img" id="imgEdit"/>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-addon">status</span>
                                        <input type="text" class="form-control" placeholder="必填参数"
                                               name="status" id="statusEdit"/>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-addon">entryTime</span>
                                        <input type="text" class="form-control" placeholder="必填参数"
                                               name="entryTime" id="entryTimeEdit"/>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-addon">levaeTime</span>
                                        <input type="text" class="form-control" placeholder="必填参数"
                                               name="levaeTime" id="levaeTimeEdit"/>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-addon">createTime</span>
                                        <input type="text" class="form-control" placeholder="必填参数"
                                               name="createTime" id="createTimeEdit"/>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-addon">deleteFlag</span>
                                        <input type="text" class="form-control" placeholder="必填参数"
                                               name="deleteFlag" id="deleteFlagEdit"/>
                                    </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="submitEdit" class="btn btn-primary">保存</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <script type="text/javascript">
            (function (jQuery) {
                // 新增弹框
                $("#addButton").on("click", function (e) {

                    $("#myModalAdd").modal({
                        keyboard: false, //禁止ESC关闭模态框
                        backdrop: "static" //禁止点击空白关闭
                    });

                });

                // 新增保存
                $("#submitAdd").bind("click", function (e) {

                    var formData = Util.formToJson($("#addFormId").serializeArray());
                    console.log(formData);

                    LINK_HTTP.post("/employee/save", formData, function (data) {
                        if (data != 0) {
                            alert("保存失败！");
                            $('#myModalAdd').modal('hide'); //隐藏模态框
                        } else {
                            alert("保存成功！");
                            $('#myModalAdd').modal('hide'); //隐藏模态框
                        }
                    }, "json");

                });

                // 编辑弹框
                $("#user_table").find("a[class='blue']").on("click", function (e) {
                    $target = $(e.target);
                    $tds = $target.parents("td").siblings();
                    var targetId = $tds.eq(0).text();

                    LINK_HTTP.get("/employee/get/" + targetId, function (result) {
                        if (result) {

                            $("#idEdit").val(result.id);
                            $("#phoneEdit").val(result.phone);
                            $("#passwordEdit").val(result.password);
                            $("#nameEdit").val(result.name);
                            $("#sexEdit").val(result.sex);
                            $("#imgEdit").val(result.img);
                            $("#statusEdit").val(result.status);
                            $("#entryTimeEdit").val(result.entryTime);
                            $("#levaeTimeEdit").val(result.levaeTime);
                            $("#createTimeEdit").val(result.createTime);
                            $("#deleteFlagEdit").val(result.deleteFlag);

                            $("#myModal").modal({
                                keyboard: false, //禁止ESC关闭模态框
                                backdrop: "static" //禁止点击空白关闭
                            });
                        } else {
                            alert("记录不存在！")
                        }
                    }, "JSON")
                });

                // 编辑保存
                $("#submitEdit").bind("click", function () {

                    var formData = Util.formToJson($("#editFormId").serializeArray());
                    console.log(formData);

                    LINK_HTTP.post("/employee/save", formData, function (data) {
                        if (data != 0) {
                            alert("保存失败！");
                            $('#myModal').modal('hide'); //隐藏模态框
                        } else {
                            alert("保存成功！");
                            $('#myModal').modal('hide'); //隐藏模态框
                        }
                    }, "json");

                });


                // 删除
                $("#user_table").find("a[class='red']").bind("click", function (e) {
                    $target = $(e.target);

                    $tds = $target.parents("td").siblings();
                    var targetId = $tds.eq(0).text();

                    if (confirm("你确定删除：" + targetId)) {
                        if (confirm("再次确定删除：" + targetId)) {
                            //提交修改用户信息
                            LINK_HTTP.get("/employee/delete/" + targetId, function (data) {
                                if (data.code == 0) {
                                    LINK_HTTP.load(".main-content", "/employee/index");//刷新页面
                                }
                            }, "json");
                        }
                    }
                });

                //当更新，添加用户成功以后刷新页面
                $('#update_user_info_dialog,#myModal').on("hidden.bs.modal", function (e) {
                    LINK_HTTP.load(".main-content", "/sys/index.do");//刷新页面
                });

            })(jQuery);
        </script>