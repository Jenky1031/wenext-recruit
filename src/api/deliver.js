import qs from "qs"

import request from "./request"

/* 职位分类列表 */
export const getCategoryList = () => {
	return request({
		url: "/jobs-groupedby-zhineng/wenext?mode=campus",
	})
}

/* 具体职位分类下的列表 */
export const getJobList = (data) => {
	const str = qs.stringify({ mode: "campus", ...data })
	return request({
		url: `/jobs/wenext?${str}`,
	})
}
