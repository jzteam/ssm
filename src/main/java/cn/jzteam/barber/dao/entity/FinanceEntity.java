package cn.jzteam.barber.dao.entity;

import java.util.Date;

import java.io.Serializable;
public class FinanceEntity implements Serializable{

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
	private Date createTime;
	/** 修改时间 */
	private Date modifyTime;
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
	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date value) {
		this.createTime = value;
	}
	public Date getModifyTime() {
		return this.modifyTime;
	}

	public void setModifyTime(Date value) {
		this.modifyTime = value;
	}
	public Integer getDeleteFlag() {
		return this.deleteFlag;
	}

	public void setDeleteFlag(Integer value) {
		this.deleteFlag = value;
	}

}

