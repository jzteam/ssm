package cn.jzteam.barber.dao;

import cn.jzteam.swift.dao.BaseDao;
import cn.jzteam.barber.dao.entity.ProductEntity;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

@Component
@Mapper
public interface ProductDao extends BaseDao<ProductEntity, Integer>{

}