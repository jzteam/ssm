package cn.jzteam.barber.dao.query;

import cn.jzteam.swift.query.QueryCondition;

import java.math.BigDecimal;
import java.util.Date;

import java.io.Serializable;
public class FinanceBaseQuery extends QueryCondition implements Serializable{
	private static final long serialVersionUID=-1L;

	/** ID */
	private Integer id;
	/** 用户id */
	private Integer userId;
	/** 订单id */
	private Integer orderId;
	/** 变动类型：0-充值，1-消费，2-提现 */
	private Integer type;
	/** 变动金额 */
	private Double amount;
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

	public Integer getOrderId() {
		return this.orderId;
	}

	public void setOrderId(Integer value) {
		this.orderId = value;
	}

	public Integer getType() {
		return this.type;
	}

	public void setType(Integer value) {
		this.type = value;
	}

	public Double getAmount() {
		return this.amount;
	}

	public void setAmount(Double value) {
		this.amount = value;
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

