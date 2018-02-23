package cn.jzteam.barber.service;

import cn.jzteam.barber.dao.entity.OrderEntity;
import cn.jzteam.barber.dao.query.OrderBaseQuery;
import cn.jzteam.barber.form.OrderForm;
import cn.jzteam.swift.service.BaseService;

import java.util.ArrayList;
import java.util.List;

public interface OrderService extends BaseService<OrderEntity, Integer>{
    /**
     * 修改与保存
     */
    Integer saveForm(OrderForm form);

    /**
     * 查询列表
     */
    List<OrderForm> selectFormByQuery(OrderBaseQuery query);

    /**
     * 查询单条
     */
    OrderForm getFormById(Integer id);


}
