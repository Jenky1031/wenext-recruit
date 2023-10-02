export default [
	{
		path: "/",
		component: () => import("@/layouts/mobile/index.vue"),
		children: [
			{
				path: "",
				name: "home",
				component: () => import("@/pages/mobile/home/index.vue"),
			},
			{
				path: "deliver/:id?",
				name: "deliver",
				component: () => import("@/pages/mobile/deliver/index.vue"),
			},
			{
				path: "faq",
				name: "faq",
				component: () => import("@/pages/mobile/faq/index.vue"),
			},
		],
	},
]
