export default [
	{
		path: "/",
		component: () => import("@/layouts/pc/index.vue"),
		children: [
			{
				path: "",
				name: "home",
				component: () => import("@/pages/pc/home/index.vue"),
			},
			{
				path: "introduce",
				name: "introduce",
				component: () => import("@/pages/pc/introduce/index.vue"),
			},
			{
				path: "deliver/:id?",
				name: "deliver",
				component: () => import("@/pages/pc/deliver/index.vue"),
			},
			{
				path: "life",
				name: "life",
				component: () => import("@/pages/pc/life/index.vue"),
			},
		],
	},
]
