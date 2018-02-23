package cn.jzteam.barber.service.impl;

import cn.jzteam.barber.dao.entity.UserEntity;
import cn.jzteam.barber.dao.query.UserBaseQuery;
import cn.jzteam.barber.form.UserForm;
import cn.jzteam.barber.service.UserService;
import cn.jzteam.swift.service.impl.AbstractBaseServiceImpl;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl extends AbstractBaseServiceImpl<UserEntity, Integer>
	implements UserService{

	private UserEntity convertForm2entity(UserForm form){
		if(form == null){
			return null;
		}
		UserEntity entity = new UserEntity();
		entity.setId(form.getId());
		entity.setPhone(form.getPhone());
		entity.setName(form.getName());
		entity.setSex(form.getSex());
		entity.setMoney(form.getMoney());
		entity.setCreateTime(form.getCreateTime());
		entity.setModifyTime(form.getModifyTime());
		entity.setDeleteFlag(form.getDeleteFlag());
		return entity;
	}

	private UserForm convertEntity2form(UserEntity entity){
		if(entity == null){
			return null;
		}
		UserForm form = new UserForm();
		form.setId(entity.getId());
		form.setPhone(entity.getPhone());
		form.setName(entity.getName());
		form.setSex(entity.getSex());
		form.setMoney(entity.getMoney());
		form.setCreateTime(entity.getCreateTime());
		form.setModifyTime(entity.getModifyTime());
		form.setDeleteFlag(entity.getDeleteFlag());
		return form;
	}


	/**
	 * 修改与保存
	 */
	@Override
	public Integer saveForm(UserForm form){
		// 条件判断

		// 转换
		UserEntity entity = convertForm2entity(form);
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
	public List<UserForm> selectFormByQuery(UserBaseQuery query){
		if(query == null){
			return null;
		}

		List<UserForm> formList = new ArrayList<>();
		List<UserEntity> entityList = this.selectList(query);
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
	public UserForm getFormById(Integer id){
		if(id == null){
			return null;
		}
		UserEntity entity = this.selectById(id);

		return convertEntity2form(entity);
	}

}
