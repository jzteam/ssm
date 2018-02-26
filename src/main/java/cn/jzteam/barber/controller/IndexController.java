package cn.jzteam.barber.controller;

import cn.jzteam.barber.dao.query.UserBaseQuery;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/index")
public class IndexController {


    /**
     * 列表页
     */
    @RequestMapping(value = {"", "/"})
    public String index(UserBaseQuery query, HttpServletRequest request){
        return "home/index";
    }

}