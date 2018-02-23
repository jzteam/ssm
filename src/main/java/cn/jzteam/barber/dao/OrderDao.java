package cn.jzteam.barber.dao;

import cn.jzteam.swift.dao.BaseDao;
import cn.jzteam.barber.dao.entity.OrderEntity;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

@Component
@Mapper
public interface OrderDao extends BaseDao<OrderEntity, Integer>{

}