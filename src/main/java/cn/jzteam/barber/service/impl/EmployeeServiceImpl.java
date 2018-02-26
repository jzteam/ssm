package cn.jzteam.barber.service.impl;

import cn.jzteam.barber.dao.entity.EmployeeEntity;
import cn.jzteam.barber.dao.query.EmployeeBaseQuery;
import cn.jzteam.barber.form.EmployeeForm;
import cn.jzteam.barber.service.EmployeeService;
import cn.jzteam.swift.service.impl.AbstractBaseServiceImpl;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServiceImpl extends AbstractBaseServiceImpl<EmployeeEntity, Integer>
	implements EmployeeService{

	private EmployeeEntity convertForm2entity(EmployeeForm form){
		if(form == null){
			return null;
		}
		EmployeeEntity entity = new EmployeeEntity();
		entity.setId(form.getId());
		entity.setPhone(form.getPhone());
		entity.setPassword(form.getPassword());
		entity.setName(form.getName());
		entity.setSex(form.getSex());
		entity.setImg(form.getImg());
		entity.setStatus(form.getStatus());
		entity.setEntryTime(form.getEntryTime());
		entity.setLevaeTime(form.getLevaeTime());
		entity.setCreateTime(form.getCreateTime());
		entity.setDeleteFlag(form.getDeleteFlag());
		return entity;
	}

	private EmployeeForm convertEntity2form(EmployeeEntity entity){
		if(entity == null){
			return null;
		}
		EmployeeForm form = new EmployeeForm();
		form.setId(entity.getId());
		form.setPhone(entity.getPhone());
		form.setPassword(entity.getPassword());
		form.setName(entity.getName());
		form.setSex(entity.getSex());
		form.setImg(entity.getImg());
		form.setStatus(entity.getStatus());
		form.setEntryTime(entity.getEntryTime());
		form.setLevaeTime(entity.getLevaeTime());
		form.setCreateTime(entity.getCreateTime());
		form.setDeleteFlag(entity.getDeleteFlag());
		return form;
	}


	/**
	 * 修改与保存
	 */
	@Override
	public Integer saveForm(EmployeeForm form){
		// 条件判断

		// 转换
		EmployeeEntity entity = convertForm2entity(form);
		if(entity == null){
			return null;
		}

		// 插入返回
		return this.save(entity);

	}


	/**
	 * 查询列表
 	*/
	@Override
	public List<EmployeeForm> selectFormByQuery(EmployeeBaseQuery query){
		if(query == null){
			return null;
		}

		List<EmployeeForm> formList = new ArrayList<>();
		List<EmployeeEntity> entityList = this.selectList(query);
		if(CollectionUtils.isEmpty(entityList)){
			return formList;
		}

		entityList.forEach(x->{
			formList.add(convertEntity2form(x));
		});

		return formList;
	}

	/**
	 * 查询单条
	 */
	@Override
	public EmployeeForm getFormById(Integer id){
		if(id == null){
			return null;
		}
		EmployeeEntity entity = this.selectById(id);

		return convertEntity2form(entity);
	}

}
