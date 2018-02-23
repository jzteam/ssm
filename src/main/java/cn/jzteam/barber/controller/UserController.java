package cn.jzteam.barber.controller;

import cn.jzteam.barber.dao.query.UserBaseQuery;
import cn.jzteam.barber.form.UserForm;
import cn.jzteam.barber.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService service;

	/**
	 * 列表页
	 */
	@RequestMapping("/index")
	public String index(UserBaseQuery query, HttpServletRequest request){
		// 查询数据列表
		request.setAttribute("formList", this.listByQuery(query));
		return "user/index";
	}

	/**
	 * 查询列表
	 */
	@RequestMapping("/list")
	@ResponseBody
	public List<UserForm> listByQuery(UserBaseQuery query){
		return service.selectFormByQuery(query);
	}

	/**
	 * 查询单条
	 */
	@RequestMapping("/get/{id}")
	@ResponseBody
	public UserForm getById(@PathVariable("id") Integer id, HttpServletRequest request){

		return service.getFormById(id);
	}

	/**
	 * 保存
	 */
	@RequestMapping("/save")
	public void save(UserForm form, HttpServletRequest request){
		service.saveForm(form);
		return;
	}

	/**
	 * 删除
	 */
	@RequestMapping("/delete/{id}")
	public void save(@PathVariable("id") Integer id){
		service.delete(id);
		return;
	}

}
