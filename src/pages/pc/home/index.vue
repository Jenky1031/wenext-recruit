<script setup>
import { computed, ref } from "vue"

import videoMask from "@/composables/videoMask"
import useScrollAnimation from "@/composables/scrollContentAnimation"
import { handleImgUrl } from "@/utils"

import customerData from "@/data/customer"

const advantage_1 = handleImgUrl("/pc/advantage_1.mp4")
const advantage_2 = handleImgUrl("/pc/advantage_2.mp4")
const advantage_3 = handleImgUrl("/pc/advantage_3.mp4")

useScrollAnimation()

/* 视频蒙层 */
videoMask()

/* 平台优势 */
const advList = ref([
	{
		content: `<span>在线即时报价</span>
							<span>上传您的文件并接受即时报价</span>`,
		video: advantage_1,
		active: true,
	},
	{
		content: `<span>内部生产</span>
							<span>自营车间, 一站式制造服务</span>`,
		video: advantage_2,
		active: false,
	},
	{
		content: `<span>3D打印设计指南</span>
							<span>从收到您的CAD文件到交付,我们 保持严格的审查</span>`,
		video: advantage_3,
		active: false,
	},
])
const advCarouselRef = ref()
function setAdvActiveItem(index) {
	// 切换幻灯片
	advCarouselRef.value.setActiveItem(index)
	// 切换tab
	advList.value.forEach((i, idx) => {
		i.active = false
		if (idx === index) {
			i.active = true
		}
	})
}

/* 服务领域 */
const customerList = ref(customerData)
</script>

<template>
	<!-- 视频 -->
	<video
		id="video"
		src="https://moka-public.oss-cn-beijing.aliyuncs.com/wenext/e2ed73e03da64d23af845b16c32515dc.mp4?Expires=3798013904&OSSAccessKeyId=LTAIoEXIQWCGUAZO&Signature=WRRPAtkb%2FWDbp5fntdT6mfXGmLE%3D&timestamp=1650530257794"
		:poster="handleImgUrl('/pc/video_cover.png')"
		loop
		autoplay
		muted>
		Your browser does not support the video tag.
	</video>
	<div class="video-mask banner" id="video-mask">
		<div class="mask-box">
			<img :src="handleImgUrl('/pc/title.png')" alt="" />
			<div class="breath-bg mask-btn" @click="$router.push('/deliver')">点击投递</div>
		</div>
	</div>
	<div class="home" id="home">
		<!-- 关于未来工场 -->
		<div class="about_wrapper flex_center_col js-scroll fade-in-bottom">
			<div class="title_bold mt_60 mb_30">关于未来工场</div>
			<div class="about_content_wrapper">
				<img :src="handleImgUrl('/common/about.png')" alt="" />
				<div class="text_light">
					<p>
						未来工场成立于2015年，是提供3D打印、CNC、钣金、模具等多工艺一站式供应链管理服务的智能制造企业。未来工场以订单为抓手数字化重构产线，致力于打造柔性制造时代下的智能云平台，为“多品种小批量短周期快迭代”的非标零部件各产业提供“生产＋流通＋服务”全链条解决方案。在订单端，未来工场打造“云工厂”平台，智能化规模化汇集零散非标零部件的加工需求；在产能端，未来工场数字化改造生产流程与生产工艺，智能化高效交付，通过客户柔性需求与刚性产线的结合，系统提升产品质量稳定性，降低成本，快速交付，为客户创造价值。
					</p>
					<p>
						截至目前，未来工场服务客户约20万家，年生产零部件超3,000万件。卓越的成绩背后一方面验证了市场的巨大需求，另一方面也验证了未来工场在提升传统制造业效率中创造的巨大价值。今后，随着数字化、网络化、智能化科技的进一步应用，未来工场有望重新定义智能加工制造的流程标准。
					</p>
				</div>
			</div>
		</div>

		<!-- 业务范围 -->
		<div class="business_wrapper flex_center_col js-scroll fade-in-bottom">
			<div class="title_bold mt_60 mb_30">业务范围</div>
			<div class="business_content_wrapper flex_around_row">
				<div class="business_item flex_center_col">
					<div class="title_med">3D打印</div>
					<img :src="handleImgUrl('/pc/business_01.png')" alt="" />
					<div class="text_normal mb_10 lh_30">SLA、SLS、MJF、SLM和后处理</div>
					<div class="lh_20 flex_center_col">
						<div class="text_light" style="font-size: var(--px_12)">尼龙、树脂、金属</div>
						<div class="text_light" style="font-size: var(--px_12)">公差低至 0.2mm</div>
					</div>
				</div>
				<div class="business_item flex_center_col">
					<div class="title_med">注塑</div>
					<img :src="handleImgUrl('/pc/business_02.png')" alt="" />
					<div class="text_normal mb_10 lh_30">铣削（3 轴、4 轴和全 5 轴）、车削和后处理</div>
					<div class="lh_20 flex_center_col">
						<div class="text_light" style="font-size: var(--px_12)">50+种金属和塑料材料</div>
						<div class="text_light" style="font-size: var(--px_12)">20+ 表面处理</div>
						<div class="text_light" style="font-size: var(--px_12)">公差低至 0.025mm</div>
					</div>
				</div>
				<div class="business_item flex_center_col">
					<div class="title_med">钣金</div>
					<img :src="handleImgUrl('/pc/business_03.png')" alt="" />
					<div class="lh_20 flex_center_col">
						<div class="text_normal mb_10 lh_30">不锈钢 304(2B) 、铝合金 5052 、镀锌钢板</div>
						<div class="text_light" style="font-size: var(--px_12)">1mm、1.5mm、2mm、3mm</div>
					</div>
				</div>
				<div class="business_item flex_center_col">
					<div class="title_med">模具</div>
					<img :src="handleImgUrl('/pc/business_04.png')" alt="" />
					<div class="lh_20 flex_center_col">
						<div class="text_normal mb_10 lh_30">从80T到600T的20多台注塑机</div>
						<div class="text_light" style="font-size: var(--px_12)">公差±0.02-0.05mm</div>
						<div class="text_light" style="font-size: var(--px_12)">最大零件尺寸700mm</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 平台优势 -->
		<div class="advantage_wrapper flex_center_col js-scroll fade-in-bottom">
			<div class="title_bold mt_60 mb_30">平台优势</div>
			<div class="advantage_content_wrapper">
				<div class="advantage_tabs">
					<div
						class="advantage_tab"
						v-for="(item, index) in advList"
						:key="index"
						:class="{ active: item.active }"
						@click="setAdvActiveItem(index)">
						<div class="advantage_tab_text" v-html="item.content"></div>
					</div>
				</div>
				<div class="advantage_videos">
					<el-carousel ref="advCarouselRef" direction="vertical" :autoplay="false" indicator-position="none" arrow="never">
						<el-carousel-item v-for="item in advList" :key="item">
							<video class="advantage_video" controls :src="item.video"></video>
						</el-carousel-item>
					</el-carousel>
				</div>
			</div>
		</div>

		<!-- 管理系统 -->
		<div class="system_wrapper flex_center_col js-scroll fade-in-bottom">
			<div class="title_bold mt_60 mb_30">管理系统</div>
			<div class="system_content flex_center_col">
				<div class="title_bold" style="font-size: var(--px_24); margin-bottom: var(--px_24)">
					6大智能管理系统，重构互联网制造云平台服务体系
				</div>
				<div class="system_text lh_30 text_light" style="font-size: var(--px_18); text-align: center">
					创新制造中心生产管理系统重构了从用户下单、生产制造、后处理、质检到交付的整个流程，是 wenext 制造云平台的运营支撑。得益于
					6 大智能管理系统的 wenext Hub 1 制造中心，相对于传统加工中心，效率提升 50%，日处理订单量可提升到 6000
					单，设备利用率也有了显著提升，交货准时率达到 98% 以上。
				</div>
				<div class="system_list">
					<img :src="handleImgUrl('/pc/system.png')" alt="" />
					<div class="system_list_text_wrapper">
						<div class="system_list_text">自动报价<br />系统</div>
						<div class="system_list_text">分布式生产<br />管理系统</div>
						<div class="system_list_text">缺陷分析<br />生产系统</div>
						<div class="system_list_text">设备集群<br />自动监测</div>
						<div class="system_list_text">制造单元<br />远程控制</div>
						<div class="system_list_text">可视化<br />生产系统</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 服务领域 -->
		<div class="customer_wrapper flex_center_col js-scroll fade-in-bottom" style="margin-bottom: var(--px_50)">
			<div class="title_bold mt_60 mb_30">服务领域</div>
			<div class="flex_center_col">
				<div class="title_bold" style="font-size: var(--px_24); margin-bottom: 27px">引领我们的客户，实现更高效率的创意生产</div>
				<div class="lh_30 text_light" style="font-size: var(--px_18); text-align: center">
					wenext始终以客户需求为导向，根据客户的差异化需求定制相应的生产策略，从而为客户提供专业的3D打印生产服务及综合解决方案。
				</div>
				<div class="customer-banner-wrapper" style="margin-top: 10px; margin-botton: var(--px_20)">
					<el-carousel :interval="2000" type="card" indicator-position="none" :autoplay="true">
						<el-carousel-item v-for="item in customerList" :key="item.id">
							<div class="customer-banner">
								<img :src="item.img" alt="" />
								<div class="customer-label">{{ item.label }}</div>
							</div>
						</el-carousel-item>
					</el-carousel>
				</div>
				<div class="lh_30 text_light" style="font-size: var(--px_18); text-align: center">
					目前，wenext的服务已涉及电子电器、医学发展、口腔齿科、教育应用、文化创意、建筑、汽车以及航空航天等多个行业领域，累计服务全球创新硬件企业超过20万家，模型制作数量超过1500万件，产业规模位居行业前列，在3D打印领域具有广泛的行业影响力和品牌知名度。
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
#video {
	min-width: var(--app-min-width);
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.video-mask {
	padding-top: var(--header-height);
	position: absolute;
	top: 0;
	width: 100%;
	background-color: rgba(#333, 0.5);
	z-index: 9;
	display: flex;
	justify-content: center;
	align-items: center;

	.mask-box {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		font-weight: 400;
		color: #ffffff;
		font-size: var(--px_60);
		img {
			width: 35%;
			margin-bottom: var(--px_20);
		}
		.mask-btn {
			width: 148px;
			height: 49px;
			backdrop-filter: blur(var(--px_24));
			border-radius: 10px;
			font-size: var(--px_20);
			font-family: Source Han Sans CN;
			font-weight: 300;
			color: rgba(255, 255, 255, 0.6);
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			&:hover {
				background-color: var(--app-color-theme) !important;
				opacity: 1 !important;
				border: 1px solid rgba($color: #474747, $alpha: 0.4);
			}
		}
	}
}

.title_bold {
	font-size: var(--px_40);
	font-family: Source Han Sans CN;
	font-weight: bold;
	color: #4a4a4a;
}

.title_med {
	font-size: var(--px_20);
	font-family: Source Han Sans CN;
	font-weight: 500;
	color: #4a4a4a;
}

.lh_20 {
	font-size: var(--px_20);
}
.lh_30 {
	line-height: var(--px_30);
}

.text_normal {
	font-size: var(--px_15);
	font-family: Source Han Sans CN;
	font-weight: 400;
	color: #4a4a4a;
}

.text_light {
	font-family: Source Han Sans CN;
	font-weight: 300;
	color: #6f6f6f;
}

.mt_60 {
	margin-top: var(--px_60);
}
.mb_30 {
	margin-bottom: var(--px_30);
}
.mb_10 {
	margin-bottom: var(px_10);
}

.flex_between_row {
	display: flex;
	justify-content: space-between;
}

.flex_around_row {
	display: flex;
	justify-content: space-around;
}

.home {
	min-width: var(--app-min-width);
	max-width: var(--app-max-width);
	width: 100%;
	padding: 0 var(--px_30);
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		object-fit: contain;
	}
	.about_wrapper {
		width: 100%;
		.about_content_wrapper {
			width: 100%;
			display: flex;
			align-items: center;
			font-size: var(--px_16);
			img {
				width: 45%;
				height: auto;
				margin-right: var(--px_20);
			}
			p:not(:last-of-type) {
				margin-bottom: var(--px_20);
			}
		}
	}

	.business_wrapper {
		width: 100%;
		.business_content_wrapper {
			width: 100%;
			.business_item {
				margin: 0 10px;
				text-align: center;
				img {
					width: 188px;
					height: 148px;
					margin-top: 28px;
					margin-bottom: var(--px_20);
				}
			}
		}
	}

	.system_wrapper {
		width: 100%;
		padding: 0 var(--px_40);
		.system_content {
			width: 100%;
			.system_text {
				width: 100%;
			}
			.system_list {
				width: 100%;
				img {
					width: 100%;
					height: auto;
					margin-top: var(--px_60);
					margin-bottom: -var(--px_20);
				}
				.system_list_text_wrapper {
					width: 100%;
					display: flex;
					justify-content: space-between;
					padding: 0 var(--px_20);
					.system_list_text {
						width: 100%;
						text-align: center;
						font-size: var(--px_18);
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #4a4a4a;
						line-height: var(--px_24);
						width: 86px;
					}
				}
			}
		}
	}

	.advantage_wrapper {
		width: 100%;
		.advantage_content_wrapper {
			width: 100%;
			display: flex;
			justify-content: space-between;
			.advantage_tabs {
				width: 37%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.advantage_tab {
					flex-grow: 1;
					width: 100%;
					background: #ffffff;
					border-radius: 10px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.advantage_tab.active {
					background: #80bbdf;
					:deep(span) {
						color: #ffffff !important;
					}
				}
				.advantage_tab:not(:last-child) {
					margin-bottom: 13px;
				}
				.advantage_tab_text {
					width: 60%;
					display: flex;
					flex-direction: column;
					font-family: Source Han Sans CN;
					:deep(span:first-child) {
						font-size: min(2vw, var(--px_24));
						font-weight: 400;
						color: #4a4a4a;
					}
					:deep(span:nth-child(2)) {
						font-size: min(1.5vw, 16px);
						font-weight: 300;
						color: #929292;
					}
				}
			}
			.advantage_videos {
				width: 62%;
				aspect-ratio: 750 / 420;
				.advantage_video {
					width: 100%;
				}
			}
		}
	}

	.customer_wrapper {
		.customer-banner-wrapper {
			width: 100%;
			height: 260px;
			:deep(.el-carousel) {
				.el-carousel__item {
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
			.customer-banner {
				position: relative;
				&::after {
					content: "";
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					background-color: rgba(#000000, 0.1);
				}
				img {
					width: 100%;
				}
				.customer-label {
					z-index: 9;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					font-size: var(--px_50);
					font-family: Source Han Sans CN;
					font-weight: 800;
					color: #ffffff;
					text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
				}
			}
		}
		.customer-detail {
			margin-top: var(--px_20);
			text-indent: var(--px_40);
			font-size: var(--px_18);
			font-family: Source Han Sans CN;
			font-weight: 300;
			color: #4a4a4a;
		}
	}
}
</style>
