import { createRouter, createWebHistory } from "vue-router"

import pcRoutes from "./pcRoutes"
import mobileRoutes from "./mobileRoutes"

import { isMobile } from "@/utils"

const routes = [
	{
		path: "/campus-recruitment/wenext/45156",
		beforeEnter: () => {
			return {
				path: "/",
				hash: "",
			}
		},
	},
	{
		path: "/:catchAll(.*)",
		redirect: "/",
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes: isMobile() ? [...routes, ...mobileRoutes] : [...routes, ...pcRoutes],
	scrollBehavior(to, from) {
		if (to.name === from.name) return
		return { top: 0 } // 页面滚到顶部
	},
})

export default router
