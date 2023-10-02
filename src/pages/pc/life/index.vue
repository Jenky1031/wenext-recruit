<script setup>
import {} from "vue"
import { handleImgUrl } from "@/utils"

const arrowRight = `url(${handleImgUrl("/pc/arrow_right.png")}) no-repeat`
</script>

<template>
	<img class="nav-bg" alt="" />
	<div class="lift_banner">
		<img :src="handleImgUrl('/pc/life_banner.png')" alt="" />
	</div>
	<div class="life_wrapper">
		<div class="lift_content">
			<div class="lift_block">
				<div class="lift_text_area">
					<div class="lift_title_en">company culture</div>
					<div class="lift_title">企业文化</div>
					<div class="lift_desc">
						<div class="lift_desc_title">使命</div>
						<div class="lift_desc_text">构建数字制造生态，推动全球供应链创新。</div>
					</div>
					<div class="lift_desc">
						<div class="lift_desc_title">愿景</div>
						<div class="lift_desc_text">
							<p>将心注入，通过不断的自我成功，为他人尽力；</p>
							<p>服务1000万家客户，管理100万台设备，成就1万个合作伙伴；</p>
							<p>引领行业人才发展，让每个参与者有付出，有收获，有成长。</p>
						</div>
					</div>
				</div>
				<div class="lift_swiper">
					<el-carousel :autoplay="true" indicator-position="none" arrow="never">
						<el-carousel-item>
							<img :src="handleImgUrl('/pc/culture_1.png')" alt="" />
						</el-carousel-item>
						<el-carousel-item>
							<img :src="handleImgUrl('/pc/culture_2.png')" alt="" />
						</el-carousel-item>
						<el-carousel-item>
							<img :src="handleImgUrl('/pc/culture_3.png')" alt="" />
						</el-carousel-item>
					</el-carousel>
				</div>
			</div>
			<div class="lift_block" style="flex-direction: row-reverse">
				<div class="lift_text_area">
					<div class="lift_title_en">Values</div>
					<div class="lift_title">核心价值观</div>
					<div class="lift_desc">
						<div class="lift_desc_title">坚韧</div>
						<div class="lift_desc_text">
							经得起挫折，内心强大, 勇敢但不鲁莽主动管理挫折，鼓舞他人, 坚定目标，有定力，不轻言放弃
						</div>
					</div>
					<div class="lift_desc">
						<div class="lift_desc_title">童真</div>
						<div class="lift_desc_text">
							实事求是，坦诚相待, 简单纯粹, 永葆好奇，乐于探索与尝试, 明辨是非，坚守原则, 心怀善意，不作恶
						</div>
					</div>
					<div class="lift_desc">
						<div class="lift_desc_title">开放</div>
						<div class="lift_desc_text">拥抱变化，不保守, 空杯心态，主动听取他人想法, 不藏着掖着，乐于分享</div>
					</div>
					<div class="lift_desc">
						<div class="lift_desc_title">有爱</div>
						<div class="lift_desc_text">心怀热爱，发现美好, 有温度，关爱伙伴，与人为善, 互相尊重，密切协作，共创共担</div>
					</div>
				</div>
				<div class="lift_swiper">
					<el-carousel :autoplay="true" indicator-position="none" arrow="never">
						<el-carousel-item>
							<img :src="handleImgUrl('/pc/values_1.png')" alt="" />
						</el-carousel-item>
					</el-carousel>
				</div>
			</div>
			<div class="lift_block">
				<div class="lift_text_area">
					<div class="lift_title_en">Driving force</div>
					<div class="lift_title">驱动力</div>
					<div class="lift_desc">
						<div class="lift_desc_title">客户为先</div>
						<div class="lift_desc_text">
							从客户利益出发，为客户创造价值，发掘客户潜在需求，绝不做损害用户利益的事情，帮助客户持续获得成功。
						</div>
					</div>
					<div class="lift_desc">
						<div class="lift_desc_title">技术驱动</div>
						<div class="lift_desc_text">坚定信奉技术变革生产力，通过数字化手段推动制造业效率提升与产业变革。</div>
					</div>
					<div class="lift_desc">
						<div class="lift_desc_title">立即行动</div>
						<div class="lift_desc_text">即时响应问题与需求，高效决策，立即行动，全力以赴。</div>
					</div>
					<div class="lift_desc">
						<div class="lift_desc_title">体系优势</div>
						<div class="lift_desc_text">
							<p>合理规划资源并分解目标，建立先进机制、方法及工具，敏捷迭代；</p>
							<p>在每个环节追求极致，持续提升投入产出比，形成系统竞争优势。</p>
						</div>
					</div>
					<div class="lift_desc">
						<div class="lift_desc_title">长期主义</div>
						<div class="lift_desc_text">
							坚持长期目标，不急功近利，不短期投机；永远保持敏锐洞察和远见卓识，布局未来；长期主义不是一成不变，是追求动态演进和持续成长。
						</div>
					</div>
				</div>
				<div class="lift_swiper">
					<el-carousel :autoplay="true" indicator-position="none" arrow="never">
						<el-carousel-item>
							<img :src="handleImgUrl('/pc/force_1.png')" alt="" />
						</el-carousel-item>
					</el-carousel>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.lift_banner {
	width: 100%;
}
.life_wrapper {
	min-width: var(--app-min-width);
	max-width: var(--app-max-width);
	width: 100%;
	font-family: Source Han Sans CN;
	padding: 0 20px;
	.lift_content {
		.lift_block {
			padding: var(--px_40) 0;
			font-weight: 300;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.lift_text_area {
				width: 46%;
				color: #3e3f3f;
				display: flex;
				flex-direction: column;
				.lift_title_en {
					display: flex;
					align-items: center;
					height: var(--px_50);
					background: v-bind(arrowRight);
					background-size: auto 100%;
					font-size: var(--px_18);
					letter-spacing: 2px;
				}
				.lift_title {
					font-size: var(--px_36);
					font-weight: bold;
					margin: var(--px_10) 0 var(--px_30);
				}
				.lift_desc {
					margin-bottom: var(--px_20);
					.lift_desc_title {
						color: #494a4a;
						font-weight: 500;
						font-size: var(--px_20);
						margin-bottom: var(--px_10);
					}
					.lift_desc_text {
						color: #989e9e;
						font-size: var(--px_16);
						line-height: var(--px_30);
						display: flex;
						flex-direction: column;
					}
				}
			}
			.lift_swiper {
				width: 46%;
				height: var(--px_450);
				:deep(.el-carousel) {
					width: 100%;
					height: 100%;
					animation: transform 25s ease-in-out infinite both alternate;
					transform-style: preserve-3d;
				}
			}
		}
	}
}

@keyframes transform {
	0%,
	100% {
		border-radius: 63% 37% 54% 46%/55% 48% 52% 45%;
	}
	14% {
		border-radius: 40% 60% 54% 46%/49% 60% 40% 51%;
	}
	28% {
		border-radius: 54% 46% 38% 62%/49% 70% 30% 51%;
	}
	42% {
		border-radius: 61% 39% 55% 45%/61% 38% 62% 39%;
	}
	56% {
		border-radius: 61% 39% 67% 33%/70% 50% 50% 30%;
	}
	70% {
		border-radius: 50% 50% 34% 66%/56% 68% 32% 44%;
	}
	84% {
		border-radius: 46% 54% 50% 50%/35% 61% 39% 65%;
	}
}
</style>
