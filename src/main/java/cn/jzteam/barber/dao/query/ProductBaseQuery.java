package cn.jzteam.barber.dao.query;

import cn.jzteam.swift.query.QueryCondition;

import java.math.BigDecimal;
import java.util.Date;

import java.io.Serializable;
public class ProductBaseQuery extends QueryCondition implements Serializable{
	private static final long serialVersionUID=-1L;

	/** ID */
	private Integer id;
	/** 产品名称 */
	private Integer name;
	/** 产品标价 */
	private Integer price;
	/** 产品状态：0-正常，1-下架 */
	private Integer status;
	/** 创建时间 */
	private Date createTimeBegin;
	private Date createTimeEnd;
	/** 逻辑删除标记：0-未删除，1-已删除 */
	private Integer deleteFlag;

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer value) {
		this.id = value;
	}

	public Integer getName() {
		return this.name;
	}

	public void setName(Integer value) {
		this.name = value;
	}

	public Integer getPrice() {
		return this.price;
	}

	public void setPrice(Integer value) {
		this.price = value;
	}

	public Integer getStatus() {
		return this.status;
	}

	public void setStatus(Integer value) {
		this.status = value;
	}

	public Date getCreateTimeBegin() {
		return this.createTimeBegin;
	}

	public void setCreateTimeBegin(Date value) {
		this.createTimeBegin = value;
	}

	public Date getCreateTimeEnd() {
		return this.createTimeEnd;
	}

	public void setCreateTimeEnd(Date value) {
		this.createTimeEnd = value;
	}

	public Integer getDeleteFlag() {
		return this.deleteFlag;
	}

	public void setDeleteFlag(Integer value) {
		this.deleteFlag = value;
	}


}

