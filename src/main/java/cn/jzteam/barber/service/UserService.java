package cn.jzteam.barber.service;

import cn.jzteam.barber.dao.entity.UserEntity;
import cn.jzteam.barber.dao.query.UserBaseQuery;
import cn.jzteam.barber.form.UserForm;
import cn.jzteam.swift.service.BaseService;

import java.util.ArrayList;
import java.util.List;

public interface UserService extends BaseService<UserEntity, Integer>{
    /**
     * 修改与保存
     */
    Integer saveForm(UserForm form);

    /**
     * 查询列表
     */
    List<UserForm> selectFormByQuery(UserBaseQuery query);

    /**
     * 查询单条
     */
    UserForm getFormById(Integer id);


}
