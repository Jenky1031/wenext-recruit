import axios from "axios"

const service = axios.create({
	method: "GET",
	baseURL: import.meta.env.VITE_API_BASE_URl,
	headers: {},
	transformRequest: [],
})

// 请求拦截器
service.interceptors.request.use(
	(config) => {
		return config // 必须返回配置
	},
	(error) => {
		return Promise.reject(error)
	}
)
// 响应拦截器
service.interceptors.response.use(
	(response) => {
		const { msg } = response.data
		if (msg === "success") {
			return response.data
		}
	},
	(error) => {
		return Promise.reject(error)
	}
)

export default service
