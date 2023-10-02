import { handleImgUrl } from "@/utils"

const benefits_bg_01 = handleImgUrl("/common/benefits_1.png")
const benefits_bg_02 = handleImgUrl("/common/benefits_2.png")
const benefits_bg_03 = handleImgUrl("/common/benefits_3.png")
const benefits_bg_04 = handleImgUrl("/common/benefits_4.png")

export default {
	title: "成长与回报",
	list: [
		{
			id: 1,
			img: benefits_bg_01,
			title: "培养与发展",
			content: "管培生1v1培养，安排经历1v1导师带教、多部门轮岗、项目历练、核心岗位考验后，选拔成为未来公司管理层的优秀储备干部人才。",
			active: true,
		},
		{
			id: 2,
			img: benefits_bg_02,
			title: "薪资激励",
			content:
				"公司实行标准薪酬+月度/年度绩效奖金，具有市场竞争力的薪酬水平，并结合城市社平工资变化进行年度调薪，表现优秀的员工还会有特别加薪、晋升加薪以及丰厚奖金；完善的薪酬和激励体系，只为鼓励您的发展，回报您的拼搏。",
			active: false,
		},
		{
			id: 3,
			img: benefits_bg_03,
			title: " 公司福利",
			content:
				"公司具有人才保障房配额，为初入社会的您大幅降低生活成本；年度免费体检，健康的体魄需要我们长期关注；员工生日贺仪、节日关怀活动及礼品、迎新晚宴等多样化福利，优秀的您值得方方面面的保障。",
			active: false,
		},
		{
			id: 4,
			img: benefits_bg_04,
			title: "兴趣社团",
			content: "多个运动社团，多样户外团建活动。",
			active: false,
		},
	],
}
