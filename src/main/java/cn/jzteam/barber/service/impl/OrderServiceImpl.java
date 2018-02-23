package cn.jzteam.barber.service.impl;

import cn.jzteam.barber.dao.entity.OrderEntity;
import cn.jzteam.barber.dao.query.OrderBaseQuery;
import cn.jzteam.barber.form.OrderForm;
import cn.jzteam.barber.service.OrderService;
import cn.jzteam.swift.service.impl.AbstractBaseServiceImpl;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl extends AbstractBaseServiceImpl<OrderEntity, Integer>
	implements OrderService{

	private OrderEntity convertForm2entity(OrderForm form){
		if(form == null){
			return null;
		}
		OrderEntity entity = new OrderEntity();
		entity.setId(form.getId());
		entity.setUserId(form.getUserId());
		entity.setEmployeeId(form.getEmployeeId());
		entity.setProductId(form.getProductId());
		entity.setAmount(form.getAmount());
		entity.setStatus(form.getStatus());
		entity.setCreateTime(form.getCreateTime());
		entity.setModifyTime(form.getModifyTime());
		entity.setDeleteFlag(form.getDeleteFlag());
		return entity;
	}

	private OrderForm convertEntity2form(OrderEntity entity){
		if(entity == null){
			return null;
		}
		OrderForm form = new OrderForm();
		form.setId(entity.getId());
		form.setUserId(entity.getUserId());
		form.setEmployeeId(entity.getEmployeeId());
		form.setProductId(entity.getProductId());
		form.setAmount(entity.getAmount());
		form.setStatus(entity.getStatus());
		form.setCreateTime(entity.getCreateTime());
		form.setModifyTime(entity.getModifyTime());
		form.setDeleteFlag(entity.getDeleteFlag());
		return form;
	}


	/**
	 * 修改与保存
	 */
	@Override
	public Integer saveForm(OrderForm form){
		// 条件判断

		// 转换
		OrderEntity entity = convertForm2entity(form);
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
	public List<OrderForm> selectFormByQuery(OrderBaseQuery query){
		if(query == null){
			return null;
		}

		List<OrderForm> formList = new ArrayList<>();
		List<OrderEntity> entityList = this.selectList(query);
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
	public OrderForm getFormById(Integer id){
		if(id == null){
			return null;
		}
		OrderEntity entity = this.selectById(id);

		return convertEntity2form(entity);
	}

}
