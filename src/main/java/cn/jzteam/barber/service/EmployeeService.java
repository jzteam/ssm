package cn.jzteam.barber.service;

import cn.jzteam.barber.dao.entity.EmployeeEntity;
import cn.jzteam.barber.dao.query.EmployeeBaseQuery;
import cn.jzteam.barber.form.EmployeeForm;
import cn.jzteam.swift.service.BaseService;

import java.util.ArrayList;
import java.util.List;

public interface EmployeeService extends BaseService<EmployeeEntity, Integer>{
    /**
     * 修改与保存
     */
    Integer saveForm(EmployeeForm form);

    /**
     * 查询列表
     */
    List<EmployeeForm> selectFormByQuery(EmployeeBaseQuery query);

    /**
     * 查询单条
     */
    EmployeeForm getFormById(Integer id);


}
