<script setup>
import { computed, ref } from "vue"
import { ArrowDown, Right } from "@element-plus/icons-vue"

import useBenefits from "@/composables/benefits"
import useScrollAnimation from "@/composables/scrollContentAnimation"

import structureData from "@/data/structure"
import seniorData from "@/data/senior"
import faqData from "@/data/faq"

import { handleImgUrl } from "@/utils"

useScrollAnimation()

/* 成长与回报 */
const { benefitsTitle, benefitsList, benefitsActiveIdx, benefitsCarousel, prev, next, changeBenefitsCarousel, arrowRight } = useBenefits()

/* 公司组织架构 */
const structureList = ref(structureData.list)
const changeStructureItem = (activeIdx) => {
	structureList.value.forEach((i) => {
		i.active = false
	})
	structureList.value[activeIdx].active = true
}
const structureActiveItem = computed(() => structureList.value.find((i) => i.active))

/* 未来工场2023校园招聘Q&A */
const QAList = ref(faqData)
const showMorQA = (item) => {
	item.showQACount = item.list.length
	item.isShowQA = false
}
</script>

<template>
	<img class="nav-bg" alt="" />
	<div class="w-full bg-gray">
		<video class="w-full" id="video" :src="handleImgUrl('/pc/x_lab.mp4')" loop autoplay muted>
			Your browser does not support the video tag.
		</video>
	</div>
	<div class="introduce_wrapper_bg">
		<div class="introduce_wrapper">
			<!-- 关于「X-Lab」 -->
			<div class="about flex_center_col js-scroll fade-in-bottom">
				<div class="about_title title_bold">关于「X-Lab」</div>
				<div class="about_content content_wrapper">
					<img :src="handleImgUrl('/pc/welly.png')" alt="" />
					<div class="about_content_text">
						wenext「X-Lab」校园招聘是公司基于中长期战略发展目标，
						<span>由公司统一招聘于培养的未来领军人才培养项目。</span
						>校招品牌「X-Lab」，意为设立探索未来未知的智能制造理想国。<span>「X-Lab」项目经历1v1导师带教、多部门轮岗、项目历练、核心岗位考验后，选拔成为储备干部于中坚力量，</span>支撑公司战略实现。
					</div>
				</div>
			</div>

			<!-- 面向对象 -->
			<div class="target flex_center_col js-scroll fade-in-bottom">
				<div class="target_title title_bold">面向对象</div>
				<div class="target_content content_wrapper">
					<div class="img_wrapper">
						<img :src="handleImgUrl('/common/target.png')" alt="" />
					</div>
					<div class="target_content_text">
						2023、2024届应届毕业生（毕业时间：2022年9月－2024年8月）
						<p>*中国境内高校的毕业生以毕业证、学位证时间为准；中国境外高校的毕业生以毕业证、教育部学历认证为准。</p>
					</div>
				</div>
			</div>

			<!-- 培养计划/发展路径图 -->
			<div class="plan flex_center_col js-scroll fade-in-bottom">
				<div class="plan_title title_bold">培养计划/发展路径图</div>
				<div class="content_wrapper flex flex-col align-center w-full">
					<div class="plan_container">
						<div class="plan_box">
							<img :src="handleImgUrl('/pc/plan_1.png')" alt="" />
							<div class="plan_title">第一阶段（1-2年）</div>
							<div class="plan_detail">
								<p>关键业务领域轮岗学习</p>
								<p>建立跨职能视角与全局认知</p>
								<p>完成从学生向优秀职场人蜕变</p>
							</div>
						</div>
						<img class="icon_arrow" :src="handleImgUrl('/pc/arrow_right_70.png')" alt="" />
						<div class="plan_box">
							<img :src="handleImgUrl('/pc/plan_2.png')" alt="" />
							<div class="plan_title">第二阶段（3-4年）</div>
							<div class="plan_detail">
								<p>成为团队的中坚力量</p>
								<p>参与战略级项目，独当一面</p>
								<p>带领小团队攻坚探索</p>
							</div>
						</div>
						<img class="icon_arrow" :src="handleImgUrl('/pc/arrow_right_70.png')" alt="" />
						<div class="plan_box">
							<img :src="handleImgUrl('/pc/plan_3.png')" alt="" />
							<div class="plan_title">第三阶段（4年以上）</div>
							<div class="plan_detail">
								<p>成为大型项目负责人</p>
								<p>探索开拓业务的创新领域</p>
								<p>择优成为储备干部</p>
							</div>
						</div>
					</div>
					<img class="plan_text" :src="handleImgUrl('/pc/plan_text.png')" alt="" />
				</div>
			</div>

			<!-- 成长与回报 -->
			<div class="benefits_wrapper flex_center_col js-scroll fade-in-bottom">
				<div class="benefits_title title_bold">成长与回报</div>
				<div class="benefits_content_wrapper content_wrapper">
					<div class="benefits_swiper">
						<el-carousel
							:autoplay="false"
							:initial-index="benefitsActiveIdx"
							indicator-position="none"
							arrow="never"
							ref="benefitsCarousel"
							@change="changeBenefitsCarousel">
							<el-carousel-item v-for="item in benefitsList" :key="item.id">
								<div class="benefits_swiper_item">
									<div class="benefits_swiper_text">
										<div class="benefits_swiper_title">{{ item.title }}</div>
										<div class="benefits_swiper_content">{{ item.content }}</div>
									</div>
									<div class="benefits_swiper_img"><img :src="item.img" alt="" /></div>
								</div>
							</el-carousel-item>
						</el-carousel>
					</div>
				</div>
				<div class="benefits_tabs">
					<template v-for="(item, index) in benefitsList" :key="item.id">
						<div :class="['benefits_tab_title', { active: item.active }]" @mouseenter="changeBenefitsCarousel(index)">
							{{ item.title }}
						</div>
						<img :src="handleImgUrl('/pc/arrow_right_b5.png')" alt="" v-if="index < benefitsList.length - 1" />
					</template>
				</div>
			</div>

			<!-- 招聘流程 -->
			<div class="process_wrapper flex_center_col js-scroll fade-in-bottom">
				<div class="process_title title_bold">招聘流程</div>
				<div class="process_content_wrapper">
					<div class="img_wrapper">
						<img :src="handleImgUrl('/pc/process.png')" alt="" />
					</div>
					<div class="process_text_wrapper">
						<span>简历初筛</span>
						<span>测评/笔试</span>
						<span>一面</span>
						<span>终面</span>
						<span>发放OFFER</span>
					</div>
				</div>
			</div>

			<!-- 公司组织架构 -->
			<div class="structure_wrapper flex_center_col js-scroll fade-in-bottom">
				<div class="structure_title title_bold">公司组织架构</div>
				<div class="structure_content_wrapper content_wrapper">
					<img :src="handleImgUrl('/common/logo_big.png')" alt="" />
					<div class="line"></div>
					<div class="structure_tabs">
						<div
							v-for="(item, index) in structureList"
							:key="item.id"
							:class="['structure_tab', { active: item.active }]"
							@mouseenter="changeStructureItem(index)">
							{{ item.title }}
						</div>
					</div>
					<div class="structure_detail">{{ structureActiveItem.content }}</div>
				</div>
			</div>

			<!-- 师兄师姐说 -->
			<div class="senior_wrapper flex_center_col js-scroll fade-in-bottom">
				<div class="senior_title title_bold">师兄师姐说</div>
				<div class="senior_content_wrapper">
					<el-carousel :interval="2000" type="card" indicator-position="none" :autoplay="true" arrow="never">
						<el-carousel-item v-for="item in seniorData" :key="item.id">
							<div class="senior_img">
								<img :src="item.img" alt="" />
							</div>
						</el-carousel-item>
					</el-carousel>
				</div>
			</div>

			<!-- 常见问题 -->
			<div class="Q_A flex_center_col js-scroll fade-in-bottom">
				<div class="Q_A-title title_bold">常见问题</div>
				<div class="w-full">
					<div v-for="item in QAList" :key="item.title" class="Q_A-content">
						<div class="Q_A_sub_title">{{ item.title }}</div>
						<div v-for="i in item.list.slice(0, item.showQACount)" :key="i.q" class="Q_A-item">
							<div class="Q">{{ i.q }}</div>
							<div class="A">{{ i.a }}</div>
						</div>
						<img
							class="arrow_down"
							:src="handleImgUrl('/pc/arrow_down.png')"
							alt=""
							@click="showMorQA(item)"
							v-show="item.isShowQA" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.i-title {
	font-size: 38px;
	font-family: YouSheBiaoTiHei;
	font-weight: 400;
	color: #474443;
}

.title_bold {
	font-size: var(--px_40);
	font-family: Source Han Sans CN;
	font-weight: bold;
	color: #4a4a4a;
	margin-top: var(--px_60);
	margin-bottom: var(--px_30);
}

.content_wrapper {
	padding: 0 var(--px_60);
	background-color: #fff;
	padding: 0.3rem 0.86rem;
	border-radius: 10px;
}

.introduce_wrapper_bg {
	background-color: #f4f4f4;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.introduce_wrapper {
	min-width: var(--app-min-width);
	max-width: var(--app-max-width);
	width: 100%;
	display: flex;
	flex-direction: column;
	.about {
		.about_content {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			img {
				width: 20%;
				height: auto;
			}
			.about_content_text {
				width: 70%;
				font-size: var(--px_18);
				font-family: Source Han Sans CN;
				font-weight: 300;
				color: #595959;
				line-height: 36px;
				padding-bottom: 0.3rem;
				span {
					font-weight: 500;
				}
			}
		}
		.content_wrapper {
			padding-bottom: 0;
		}
	}

	.target {
		.target_content {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: var(--px_50) 0;
			.img_wrapper {
				width: 20%;
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					width: 70%;
					height: auto;
				}
			}
			.target_content_text {
				width: 70%;
				font-size: var(--px_24);
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #606262;
				p {
					margin-top: var(--px_15);
					font-size: var(--px_18);
					font-weight: 300;
					line-height: 26px;
				}
			}
		}
	}

	.plan {
		width: 100%;
		.plan_text {
			width: 30%;
		}
		.plan_container {
			display: flex;
			justify-content: space-between;
			width: 100%;
			margin: 0 0 var(--px_50);
			.icon_arrow {
				width: var(--px_20);
				margin-top: var(--px_60);
			}
			.plan_box {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				width: 20%;
				aspect-ratio: 4 / 5;
				img {
					width: 47%;
					height: auto;
				}
				.plan_title {
					font-size: var(--px_18);
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #4a4a4a;
				}
				.plan_detail {
					display: flex;
					flex-direction: column;
					align-items: center;
					p {
						font-size: var(--px_15);
						font-family: Source Han Sans CN;
						font-weight: 300;
						color: #4a4a4a;
						line-height: var(--px_24);
					}
				}
			}
		}
	}

	.benefits_wrapper {
		width: 100%;
		.benefits_content_wrapper {
			width: 100%;
			display: flex;
			flex-direction: column;
			.benefits_swiper {
				width: 100%;
				height: 245px;
				.benefits_swiper_item {
					height: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.benefits_swiper_text {
						width: 49%;
						.benefits_swiper_title {
							font-size: var(--px_18);
							font-weight: bold;
							color: #606262;
						}
						.benefits_swiper_content {
							font-size: var(--px_15);
							font-family: Source Han Sans CN;
							font-weight: 300;
							color: #606262;
							line-height: var(--px_30);
						}
					}
					.benefits_swiper_img {
						width: 40%;
						height: 100%;
						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}
				}
			}
		}

		.benefits_tabs {
			padding: 0 0.86rem;
			width: 100%;
			display: flex;
			margin-top: var(--px_18);
			display: flex;
			justify-content: space-between;
			align-items: center;
			.benefits_tab_title {
				font-size: var(--px_18);
				font-weight: bold;
				color: #d2d2d2;
				&.active {
					color: #606262;
				}
			}
			img {
				width: var(--px_10);
				object-fit: contain;
			}
		}
	}

	.process_wrapper {
		width: 100%;
		.process_content_wrapper {
			background-color: #fff;
			border-radius: 10px;
			padding: 0.3rem;
			width: 100%;
			.img_wrapper {
				padding: 0 var(--px_50) var(--px_50);
				img {
					width: 100%;
					margin-bottom: -50px;
				}
			}
			.process_text_wrapper {
				width: 100%;
				display: flex;
				justify-content: space-around;
				font-size: var(--px_18);
				font-family: Source Han Sans CN;
				font-weight: 300;
				color: #4a4a4a;
				span:nth-child(3) {
					display: flex;
					margin-right: 20px;
				}
			}
		}
	}

	.structure_wrapper {
		width: 100%;
		.structure_content_wrapper {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			img {
				width: 16%;
				margin: var(--px_30) 0;
			}
			.line {
				width: 100%;
				height: 2px;
				background: linear-gradient(to right, transparent, #848484, transparent);
				opacity: 0.27;
				margin-bottom: var(--px_50);
			}
			.structure_tabs {
				width: 100%;
				display: flex;
				justify-content: space-between;
				font-size: var(--px_20);
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #4a4a4a;
				.structure_tab {
					&.active {
						color: #6cdbd5;
					}
				}
			}
			.structure_detail {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #f4f4f4;
				box-shadow: 3px 4px 4px 0px rgba(46, 46, 46, 0.11);
				border-radius: 10px;
				font-size: var(--px_18);
				font-family: Source Han Sans CN;
				font-weight: 300;
				color: #4a4a4a;
				line-height: var(--px_30);
				padding: var(--px_40);
				margin: var(--px_30) 0 var(--px_10);
			}
		}
	}

	.senior_wrapper {
		width: 100%;
		.senior_content_wrapper {
			width: 100%;
			height: 330px;
			margin-top: -30px;
			:deep(.el-carousel__item) {
				display: flex;
				align-items: center;
				justify-content: center;
				// &.is-active {
				// 	width: 878px;
				// }
			}
			.senior_img {
				img {
					object-fit: contain;
				}
			}
		}
	}

	.Q_A {
		width: 100%;
		border-radius: 10px;
		margin-bottom: 120px;
		.Q_A-title {
			margin-bottom: 45px;
		}
		.Q_A-content {
			width: 100%;
			padding: 40px 80px;
			display: flex;
			flex-direction: column;
			background-color: #fff;
			.Q_A_sub_title {
				font-size: 25px;
				color: #404040;
			}
			.Q_A-item {
				width: 100%;
				padding: 20px 0;
				&:first-child {
					padding-top: 0;
				}
				.Q,
				.A {
					padding: 5px 0 5px 0px;
					position: relative;
					span {
						line-height: 30px;
						position: absolute;
						left: 0;
						font-size: 20px;
						font-family: arial;
					}
				}
				.Q {
					font-size: var(--px_20);
					font-weight: 500;
					color: #404040;
					font-family: Source Han Sans CN;
					font-weight: 500;
					span {
						font-weight: bold;
					}
				}
				.A {
					font-size: var(--px_15);
					font-weight: 300;
					color: #777777;
					font-family: Source Han Sans CN;
				}
			}
			.arrow_down {
				align-self: center;
				margin-top: var(--px_40);
				width: var(--px_40);
			}
		}
	}
}
</style>
