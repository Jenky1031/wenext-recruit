import { handleImgUrl } from "@/utils"

const customer_01 = handleImgUrl("/pc/customer_01.png")
const customer_02 = handleImgUrl("/pc/customer_02.png")
const customer_03 = handleImgUrl("/pc/customer_03.png")
const customer_04 = handleImgUrl("/pc/customer_04.png")
const customer_05 = handleImgUrl("/pc/customer_05.png")
const customer_06 = handleImgUrl("/pc/customer_06.png")

export default [
	{
		id: 1,
		img: customer_01,
		label: "健康医疗",
	},
	{
		id: 2,
		img: customer_02,
		label: "电子产品",
	},
	{
		id: 3,
		img: customer_03,
		label: "高端汽车",
	},
	{
		id: 4,
		img: customer_04,
		label: "工业设备",
	},
	{
		id: 5,
		img: customer_05,
		label: "国防航空",
	},
	{
		id: 6,
		img: customer_06,
		label: "家用电器",
	},
]
