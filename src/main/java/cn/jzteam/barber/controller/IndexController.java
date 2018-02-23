package cn.jzteam.barber.controller;

import cn.jzteam.barber.dao.query.UserBaseQuery;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/index")
public class IndexController {
	

	/**
	 * 列表页
	 */
	@RequestMapping(value = {"", "/"})
	public String index(UserBaseQuery query, HttpServletRequest request){
		List<String> testList = new ArrayList<>();
		for(int i=0;i<4;i++){
			testList.add("test"+i);
		}
		request.setAttribute("testList",testList);
		return "home/index";
	}

}
