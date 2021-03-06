package cn.jzteam.barber.dao.query;

import cn.jzteam.swift.query.QueryCondition;

import java.math.BigDecimal;
import java.util.Date;

import java.io.Serializable;
public class OrderBaseQuery extends QueryCondition implements Serializable{
	private static final long serialVersionUID=-1L;

	/** ID */
	private Integer id;
	/** 用户id */
	private Integer userId;
	/** 员工id */
	private Integer employeeId;
	/** 消费产品id */
	private Integer productId;
	/** 结算金额 */
	private Double amount;
	/** 订单状态：0-创建，1-完成 */
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

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer value) {
		this.userId = value;
	}

	public Integer getEmployeeId() {
		return this.employeeId;
	}

	public void setEmployeeId(Integer value) {
		this.employeeId = value;
	}

	public Integer getProductId() {
		return this.productId;
	}

	public void setProductId(Integer value) {
		this.productId = value;
	}

	public Double getAmount() {
		return this.amount;
	}

	public void setAmount(Double value) {
		this.amount = value;
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

