package cn.jzteam.barber.service;

import cn.jzteam.barber.dao.entity.FinanceEntity;
import cn.jzteam.barber.dao.query.FinanceBaseQuery;
import cn.jzteam.barber.form.FinanceForm;
import cn.jzteam.swift.service.BaseService;

import java.util.ArrayList;
import java.util.List;

public interface FinanceService extends BaseService<FinanceEntity, Integer>{
    /**
     * 修改与保存
     */
    Integer saveForm(FinanceForm form);

    /**
     * 查询列表
     */
    List<FinanceForm> selectFormByQuery(FinanceBaseQuery query);

    /**
     * 查询单条
     */
    FinanceForm getFormById(Integer id);


}
