<script setup>
import { ref, watch } from "vue"
import useJob from "@/composables/job"
import { ArrowLeftBold } from "@element-plus/icons-vue"

import { handleImgUrl } from "@/utils"

const {
	Search,
	ArrowRight,
	categoryId,
	categoryList,
	limit,
	page,
	total,
	keyword,
	jobsList,
	changePage,
	search,
	postJob,
	toggleShowDetail,
} = useJob()

const showSelector = ref(false)

watch(categoryId, () => {
	returnToList()
})

function returnToList() {
	showSelector.value = false
	window.scrollTo(0, 0)
}
</script>

<template>
	<div class="deliver_wrapper">
		<!-- banner -->
		<div class="deliver_banner">
			<img :src="handleImgUrl('/mobile/deliver_banner.png')" alt="" />
		</div>

		<!-- 主体 -->
		<div class="deliver_main_wrapper">
			<div class="deliver_title">
				<p>秋季校园招聘</p>
				<p>2023、2024届应届毕业生（毕业时间：2022年9月－2024年8月）</p>
			</div>
			<div class="line"></div>
			<div class="deliver_content">
				<div class="deliver_content_top">
					<span>找到{{ total }}个岗位</span>
					<span @click="showSelector = true">岗位类别</span>
				</div>
				<div class="deliver_content_items">
					<div class="deliver_content_item" v-for="(item, index) in jobsList" :key="item.id">
						<div class="deliver_content_item_left">
							<p class="item_title">{{ item.title }}</p>
							<p class="item_label">
								<span v-if="item.locations.length">{{ item.locations.map((i) => i.city || i.province).join("/") }}</span>
								<span v-if="item.zhineng.name">{{ item.zhineng.name }}</span>
								<span>校园招聘</span>
							</p>
							<div class="item_desc" :class="{ ellipsis: !item.showDetail }" v-html="item.description"></div>
							<div class="item_bottom more" v-show="item.showDetail" @click="toggleShowDetail(index)">收起</div>
						</div>
						<div class="deliver_content_item_right">
							<div class="deliver_btn" @click="postJob(item.link)">投递职位</div>
							<div class="more" v-show="!item.showDetail" @click="toggleShowDetail(index)">查看更多</div>
						</div>
					</div>
				</div>
			</div>
			<el-pagination
				hide-on-single-page
				background
				layout="prev, pager, next"
				:total="total"
				v-model:page-size="limit"
				v-model:current-page="page"
				@current-change="changePage" />
		</div>

		<!-- 岗位类别选择 -->
		<teleport to="body" v-if="showSelector">
			<div class="deliver-cate">
				<div class="deliver-cate-nav" @click="returnToList">
					<el-icon><ArrowLeftBold /></el-icon>
					<div class="deliver-cate-nav-title">返回岗位列表</div>
				</div>
				<div class="deliver-cate-content-wrapper">
					<div class="deliver-cate-content">
						<el-radio
							v-for="item in categoryList"
							:key="item.id"
							:label="item.id"
							v-model="categoryId"
							size="large"
							style="font-size: 0.36rem">
							{{ item.label }}
						</el-radio>
					</div>
				</div>
				<!-- <div class="deliver-cate-bottom">
					<div class="deliver-cate-bottom-confirm" @click="selectConfirm">确定</div>
				</div> -->
			</div>
		</teleport>
	</div>
</template>

<style lang="scss" scoped>
.more {
	font-size: 0.48rem;
	font-family: Source Han Sans CN;
	font-weight: 300;
	color: #7f7f7f;
}

.deliver_wrapper {
	font-family: Source Han Sans CN;
	margin-bottom: 1rem;
	.deliver_main_wrapper {
		padding: 0 0.6rem 1.6rem;
		.deliver_title {
			p:nth-child(1) {
				font-size: 1rem;
				font-weight: bold;
				color: #414141;
				margin-bottom: 0.3rem;
			}
			p:nth-child(2) {
				font-size: 0.48rem;
				font-weight: 300;
				color: #777777;
			}
		}
		.line {
			width: 100%;
			height: 2px;
			background: linear-gradient(to right, #d7d7d7, transparent);
			margin: 0.6rem 0;
		}
		.deliver_content {
			width: 100%;
			.deliver_content_top {
				display: flex;
				justify-content: space-between;
				margin-bottom: 0.6rem;
				span:nth-child(1) {
					font-size: 0.6rem;
					font-weight: bold;
					color: #414141;
				}
				span:nth-child(2) {
					font-size: 0.6rem;
					font-weight: 300;
					color: #77d7cf;
				}
			}
			.deliver_content_items {
				width: 100%;
				display: flex;
				flex-direction: column;
				.deliver_content_item {
					position: relative;
					width: 100%;
					background: #f5f5f5;
					border-radius: 0.2rem;
					padding: 0.6rem 0.5rem;
					// display: flex;
					// justify-content: space-between;
					margin-bottom: 0.52rem;
					.deliver_content_item_left {
						// width: 78%;
						display: flex;
						flex-direction: column;
						.item_title {
							font-size: 0.72rem;
							font-weight: 500;
							color: #414141;
							margin-bottom: 0.4rem;
							padding-right: 2.5rem;
						}
						.item_label {
							font-size: 0.48rem;
							font-weight: 300;
							color: #414141;
							margin-bottom: 0.5rem;
							span {
								margin-right: 0.4rem;
								padding-right: 0.4rem;
							}
							span:not(:last-child) {
								border-right: 1px solid #414141;
							}
						}
						.item_desc {
							font-size: 0.48rem;
							font-weight: 300;
							color: #aaaaaa;
							line-height: 0.7rem;
						}
						.item_bottom {
							text-align: center;
							margin-top: 0.3rem;
						}
					}
					.deliver_content_item_right {
						// width: 21%;
						position: absolute;
						top: 1rem;
						right: 0.5rem;
						display: flex;
						flex-direction: column;
						align-items: center;
						.deliver_btn {
							display: flex;
							align-items: center;
							justify-content: center;
							width: 100%;
							border: 1px solid #777777;
							border-radius: 0.2rem;
							padding: 0.2rem 0.3rem;
							font-size: 0.48rem;
							font-weight: 300;
							color: #414141;
							margin-bottom: 0.5rem;
						}
					}
				}
			}
		}
	}
}

.deliver-cate {
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999999;
	width: 100%;
	height: 100vh;
	background-color: rgb(240, 240, 240);
	.deliver-cate-nav {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0.64rem;
		font-size: 0.64rem;
		color: #0052d9;
		font-weight: 500;
		background-color: #fff;
		.deliver-cate-nav-title {
			margin-left: 0.4rem;
		}
	}
	.deliver-cate-content-wrapper {
		flex: 1;
		.deliver-cate-content {
			margin: 0.64rem 0.64rem 2.88rem 0.64rem;
			padding: 0 0.64rem;
			background-color: #fff;
			border-radius: var(--m-radius-s);
			display: flex;
			flex-direction: column;
			:deep(.el-radio) {
				padding: 0.3rem 0;
				color: #8a8a8a;
				.el-radio__input.is-checked .el-radio__inner {
					border-color: #77d7cf;
					background: #77d7cf;
				}
				.el-radio__input.is-checked + .el-radio__label {
					color: #8a8a8a;
				}
				.el-radio__inner::after {
					width: 6px;
					height: 6px;
				}
			}
		}
	}
	.deliver-cate-bottom {
		background-color: #fff;
		padding: 0.48rem 0.64rem;
		border-radius: var(--m-radius-s);
		.deliver-cate-bottom-confirm {
			background-color: var(--app-color-theme);
			font-size: 0.64rem;
			color: #fff;
			padding: 0.64rem 0;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: var(--m-radius-xs);
		}
	}
}
</style>
