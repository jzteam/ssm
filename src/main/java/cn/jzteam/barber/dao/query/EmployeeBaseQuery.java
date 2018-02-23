package cn.jzteam.barber.dao.query;

import cn.jzteam.swift.query.QueryCondition;

import java.math.BigDecimal;
import java.util.Date;

import java.io.Serializable;
public class EmployeeBaseQuery extends QueryCondition implements Serializable{
	private static final long serialVersionUID=-1L;

	/** ID */
	private Integer id;
	/** 手机号 */
	private String phone;
	/** 登录密码 */
	private String password;
	/** 员工姓名 */
	private String name;
	/** 性别：0-男，1-女 */
	private Integer sex;
	/** 员工图像 */
	private String img;
	/** 员工状态:0-临时，1-正式，2-离职 */
	private Integer status;
	/** 入职日期 */
	private String entryTime;
	/** 离职日期 */
	private String levaeTime;
	/** 创建时间 */
	private Date createTimeBegin;
	private Date createTimeEnd;
	/** 修改时间 */
	private Date modifyTimeBegin;
	private Date modifyTimeEnd;
	/** 逻辑删除标记：0-未删除，1-已删除 */
	private Integer deleteFlag;

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer value) {
		this.id = value;
	}

	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String value) {
		this.phone = value;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String value) {
		this.password = value;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String value) {
		this.name = value;
	}

	public Integer getSex() {
		return this.sex;
	}

	public void setSex(Integer value) {
		this.sex = value;
	}

	public String getImg() {
		return this.img;
	}

	public void setImg(String value) {
		this.img = value;
	}

	public Integer getStatus() {
		return this.status;
	}

	public void setStatus(Integer value) {
		this.status = value;
	}

	public String getEntryTime() {
		return this.entryTime;
	}

	public void setEntryTime(String value) {
		this.entryTime = value;
	}

	public String getLevaeTime() {
		return this.levaeTime;
	}

	public void setLevaeTime(String value) {
		this.levaeTime = value;
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

	public Date getModifyTimeBegin() {
		return this.modifyTimeBegin;
	}

	public void setModifyTimeBegin(Date value) {
		this.modifyTimeBegin = value;
	}

	public Date getModifyTimeEnd() {
		return this.modifyTimeEnd;
	}

	public void setModifyTimeEnd(Date value) {
		this.modifyTimeEnd = value;
	}

	public Integer getDeleteFlag() {
		return this.deleteFlag;
	}

	public void setDeleteFlag(Integer value) {
		this.deleteFlag = value;
	}


}

