<script setup>
import useBenefits from "@/composables/benefits"

import { handleImgUrl } from "@/utils"

/* 成长与回报 */
const { benefitsTitle, benefitsList, benefitsActiveIdx, benefitsActiveItem, benefitsCarousel, changeBenefitsCarousel } = useBenefits()
</script>

<template>
	<div class="m-home">
		<div class="m-banner banner">
			<div class="banner-gif">
				<img :src="handleImgUrl('/mobile/banner.png')" alt="" />
			</div>
		</div>
		<div class="home_wrapper flex_center_col">
			<!-- 小导航 -->
			<div class="nav_wrapper">
				<img :src="handleImgUrl('/mobile/deliver.png')" alt="" @click="$router.push('/deliver')" />
				<img :src="handleImgUrl('/mobile/faq.png')" alt="" @click="$router.push('/faq')" />
			</div>

			<!-- 关于未来工场 -->
			<div class="about_wrapper flex_center_col">
				<div class="title_bold">关于未来工场</div>
				<div class="about_content_wrapper">
					<img :src="handleImgUrl('/mobile/about.png')" alt="" />
					<div class="about_text">
						<p>
							wenext稳诺（未来工场）是国内知名的“互联网+制造”供应链服务平台，拥有为全球硬件开发企业、科研院所提供开放式服务的专家团队和配套设施，提供工业设计，3D打印，CNC机加工，钣金加工，模具制造，注塑大批量生产和供应链咨询服务。
						</p>
						<p>
							wenext稳诺（未来工场）致力于打造<span>柔性制造时代下的智能云平台</span>，以数字化、信息化、网络化和平台建设为途径，<span>为“多品种小批量短周期快迭代”的非标零部件各产业提供“生产+流通+服务”全链条解决方案。</span>发展至今我们拥有35项软件著作权，17
							项实用新型专利，5
							项发明专利。目前公司是<span>国家级高新科技企业</span>，累计获得<span>全球顶级投资机构超过数亿元的战略融资</span>。
						</p>
					</div>
				</div>
			</div>

			<!-- 面向对象 -->
			<div class="target_wrapper flex_center_col">
				<div class="title_bold">面向对象</div>
				<div class="target_content_wrapper flex_center_col">
					<img :src="handleImgUrl('/common/target.png')" alt="" />
					<div class="target_title flex_center_col">
						<span>2023、2024届应届毕业生</span>
						<span>（毕业时间：2022年9月－2024年8月）</span>
					</div>
					<div class="target_tips">
						<p>*中国境内高校的毕业生以毕业证、学位证时间为准；</p>
						<p>中国境外高校的毕业生以毕业证、教育部学历认证为准。</p>
					</div>
				</div>
			</div>

			<!-- 培养计划/发展路径图 -->
			<div class="plan_wrapper flex_center_col">
				<div class="title_bold">培养计划/发展路径图</div>
				<div class="plan_content_wrapper">
					<img :src="handleImgUrl('/mobile/plan.png')" alt="" />
				</div>
			</div>

			<!-- 成长与回报 -->
			<div class="benefits_wrapper">
				<div class="title_bold" style="text-align: center">成长与回报</div>
				<div class="benefits_banner_wrapper">
					<el-carousel
						:autoplay="false"
						:initial-index="benefitsActiveIdx"
						indicator-position="none"
						arrow="never"
						ref="benefitsCarousel"
						@change="changeBenefitsCarousel">
						<el-carousel-item v-for="item in benefitsList" :key="item.id">
							<img :src="item.img" alt="" />
						</el-carousel-item>
					</el-carousel>
				</div>
				<div class="benefits_content_wrapper">
					<div class="benefits_tabs m-box">
						<div
							v-for="(item, index) in benefitsList"
							:key="item.id"
							@click="changeBenefitsCarousel(index)"
							:class="['benefits_tab_wrapper', { active: item.active }]">
							<div class="benefits_tab">{{ item.title }}</div>
						</div>
					</div>
					<div class="benefits_tab_desc m-box">{{ benefitsActiveItem.content }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.title_bold {
	font-size: 1rem;
	font-family: Source Han Sans CN;
	font-weight: bold;
	color: #4a4a4a;
	margin: 1rem 0 0.5rem;
}

.m-home {
	--mt: -1.3rem;
	width: 100%;
	background-color: rgb(244, 244, 244);
	font-family: Source Han Sans CN;
	.home_wrapper {
		padding: 1rem 0 1rem;
		.nav_wrapper {
			width: 100%;
			padding: 0 1.1rem;
			display: flex;
			justify-content: space-between;
			img {
				width: 5.5rem;
			}
		}

		.about_wrapper {
			width: 100%;
			padding: 0 1.1rem;
			.about_content_wrapper {
				padding: 0.4rem 0.8rem;
				background: #ffffff;
				border-radius: 10px;
				img {
					width: 100%;
				}
				.about_text {
					font-size: 0.5rem;
					font-weight: 300;
					color: #595959;
					line-height: 0.8rem;
					p:not(:last-child) {
						margin-bottom: 1rem;
					}
					p span {
						font-weight: 500;
					}
				}
			}
		}

		.target_wrapper {
			width: 100%;
			padding: 0 1.1rem;
			.target_content_wrapper {
				border-radius: 10px;
				background: #ffffff;
				width: 100%;
				height: 8.5rem;
				justify-content: space-around;
				padding: 0.5rem 0;
				img {
					width: 3rem;
					height: auto;
				}
				.target_title {
					span:nth-child(1) {
						font-size: 0.6rem;
						color: #606262;
						font-weight: bold;
					}
					span:nth-child(2) {
						font-size: 0.5rem;
						color: #989898;
						font-weight: 300;
					}
				}
				.target_tips {
					p {
						font-size: 0.4rem;
						font-weight: 300;
						color: #595959;
						line-height: 0.8rem;
					}
				}
			}
		}

		.plan_content_wrapper {
			padding: 0 1.1rem;
			img {
				border-radius: 10px;
			}
		}

		.benefits_wrapper {
			width: 100%;
			padding: 0 1.1rem;
			font-size: 0.52rem;
			:deep(.el-carousel) {
				border-radius: 10px;
			}
			.benefits_banner_wrapper {
				width: 100%;
				height: 6.6rem;
				:deep(.el-carousel) {
					height: 100%;
					.el-carousel__container {
						height: 100%;
					}
				}
			}
			.benefits_content_wrapper {
				height: 8.8rem;
				width: 100%;
				position: relative;
				z-index: 99;
				margin-top: var(--mt);
				display: flex;
				justify-content: space-between;
				.benefits_tabs {
					width: 30%;
					padding: 0.3rem 0.6rem;
					display: flex;
					flex-direction: column;
					.benefits_tab_wrapper {
						width: 100%;
						flex: 1;
						display: flex;
						justify-content: center;
						align-items: center;
						font-weight: 400;
						color: #bfbfbf;
						&:not(:last-child) {
							border-bottom: 1px solid #9e9e9e;
						}
						&.active {
							color: #606262;
						}
						.benefits_tab {
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
				}
				.benefits_tab_desc {
					width: 67%;
					padding: 0.65rem 0.5rem;
					font-family: Source Han Sans CN;
					font-weight: 300;
					color: #606060;
					line-height: 0.94rem;
				}
			}
		}
	}
}
</style>
