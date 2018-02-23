package cn.jzteam.barber.service;

import cn.jzteam.barber.dao.entity.ProductEntity;
import cn.jzteam.barber.dao.query.ProductBaseQuery;
import cn.jzteam.barber.form.ProductForm;
import cn.jzteam.swift.service.BaseService;

import java.util.ArrayList;
import java.util.List;

public interface ProductService extends BaseService<ProductEntity, Integer>{
    /**
     * 修改与保存
     */
    Integer saveForm(ProductForm form);

    /**
     * 查询列表
     */
    List<ProductForm> selectFormByQuery(ProductBaseQuery query);

    /**
     * 查询单条
     */
    ProductForm getFormById(Integer id);


}
