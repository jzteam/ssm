package cn.jzteam.barber.dao;

import cn.jzteam.swift.dao.BaseDao;
import cn.jzteam.barber.dao.entity.EmployeeEntity;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

@Component
@Mapper
public interface EmployeeDao extends BaseDao<EmployeeEntity, Integer>{

}