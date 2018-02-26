package cn.jzteam.barber.form;

import java.util.Date;

import java.io.Serializable;
public class ProductForm implements Serializable{

	/** ID */
	private Integer id;
	/** 产品名称 */
	private Integer name;
	/** 产品标价 */
	private Integer price;
	/** 产品状态：0-正常，1-下架 */
	private Integer status;
	/** 创建时间 */
	private Date createTime;
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
	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date value) {
		this.createTime = value;
	}
	public Integer getDeleteFlag() {
		return this.deleteFlag;
	}

	public void setDeleteFlag(Integer value) {
		this.deleteFlag = value;
	}

}

