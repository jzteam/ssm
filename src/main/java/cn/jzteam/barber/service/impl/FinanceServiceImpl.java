package cn.jzteam.barber.service.impl;

import cn.jzteam.barber.dao.entity.FinanceEntity;
import cn.jzteam.barber.dao.query.FinanceBaseQuery;
import cn.jzteam.barber.form.FinanceForm;
import cn.jzteam.barber.service.FinanceService;
import cn.jzteam.swift.service.impl.AbstractBaseServiceImpl;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

@Service
public class FinanceServiceImpl extends AbstractBaseServiceImpl<FinanceEntity, Integer>
	implements FinanceService{

	private FinanceEntity convertForm2entity(FinanceForm form){
		if(form == null){
			return null;
		}
		FinanceEntity entity = new FinanceEntity();
		entity.setId(form.getId());
		entity.setUserId(form.getUserId());
		entity.setOrderId(form.getOrderId());
		entity.setType(form.getType());
		entity.setAmount(form.getAmount());
		entity.setCreateTime(form.getCreateTime());
		entity.setDeleteFlag(form.getDeleteFlag());
		return entity;
	}

	private FinanceForm convertEntity2form(FinanceEntity entity){
		if(entity == null){
			return null;
		}
		FinanceForm form = new FinanceForm();
		form.setId(entity.getId());
		form.setUserId(entity.getUserId());
		form.setOrderId(entity.getOrderId());
		form.setType(entity.getType());
		form.setAmount(entity.getAmount());
		form.setCreateTime(entity.getCreateTime());
		form.setDeleteFlag(entity.getDeleteFlag());
		return form;
	}


	/**
	 * 修改与保存
	 */
	@Override
	public Integer saveForm(FinanceForm form){
		// 条件判断

		// 转换
		FinanceEntity entity = convertForm2entity(form);
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
	public List<FinanceForm> selectFormByQuery(FinanceBaseQuery query){
		if(query == null){
			return null;
		}

		List<FinanceForm> formList = new ArrayList<>();
		List<FinanceEntity> entityList = this.selectList(query);
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
	public FinanceForm getFormById(Integer id){
		if(id == null){
			return null;
		}
		FinanceEntity entity = this.selectById(id);

		return convertEntity2form(entity);
	}

}
