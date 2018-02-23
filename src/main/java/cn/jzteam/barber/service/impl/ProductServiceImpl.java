package cn.jzteam.barber.service.impl;

import cn.jzteam.barber.dao.entity.ProductEntity;
import cn.jzteam.barber.dao.query.ProductBaseQuery;
import cn.jzteam.barber.form.ProductForm;
import cn.jzteam.barber.service.ProductService;
import cn.jzteam.swift.service.impl.AbstractBaseServiceImpl;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceImpl extends AbstractBaseServiceImpl<ProductEntity, Integer>
	implements ProductService{

	private ProductEntity convertForm2entity(ProductForm form){
		if(form == null){
			return null;
		}
		ProductEntity entity = new ProductEntity();
		entity.setId(form.getId());
		entity.setName(form.getName());
		entity.setPrice(form.getPrice());
		entity.setStatus(form.getStatus());
		entity.setCreateTime(form.getCreateTime());
		entity.setModifyTime(form.getModifyTime());
		entity.setDeleteFlag(form.getDeleteFlag());
		return entity;
	}

	private ProductForm convertEntity2form(ProductEntity entity){
		if(entity == null){
			return null;
		}
		ProductForm form = new ProductForm();
		form.setId(entity.getId());
		form.setName(entity.getName());
		form.setPrice(entity.getPrice());
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
	public Integer saveForm(ProductForm form){
		// 条件判断

		// 转换
		ProductEntity entity = convertForm2entity(form);
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
	public List<ProductForm> selectFormByQuery(ProductBaseQuery query){
		if(query == null){
			return null;
		}

		List<ProductForm> formList = new ArrayList<>();
		List<ProductEntity> entityList = this.selectList(query);
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
	public ProductForm getFormById(Integer id){
		if(id == null){
			return null;
		}
		ProductEntity entity = this.selectById(id);

		return convertEntity2form(entity);
	}

}
