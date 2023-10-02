<script setup>
import useJob from "@/composables/job"

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
</script>

<template>
	<img class="nav-bg" alt="" />
	<div class="banner">
		<img :src="handleImgUrl('/pc/banner_deliver.png')" alt="" />
	</div>
	<div class="deliver">
		<div class="flex_center_col">
			<div class="deliver_title">秋季校园招聘</div>
			<div class="deliver_sub_title">2023、2024届应届毕业生（毕业时间：2022年9月－2024年8月）</div>
		</div>
		<div class="deliver_line"></div>
		<div class="deliver_content_wrapper">
			<div class="deliver_selector">
				<div class="search-input">
					<el-input v-model.trim.lazy="keyword" placeholder="搜索工作岗位" clearable @keyup.enter="search">
						<template #prefix>
							<Search class="search-icon" />
						</template>
						<template #suffix>
							<span class="search-label pointer" @click="search">查看</span>
							<ArrowRight class="arrow-icon" />
						</template>
					</el-input>
				</div>
				<div class="search-content">
					<div class="label">岗位类别</div>
					<div class="category_wrap">
						<el-radio
							v-for="item in categoryList"
							:key="item.id"
							:label="item.id"
							v-model="categoryId"
							size="large"
							style="font-size: var(--px_18)">
							{{ item.label }}
						</el-radio>
					</div>
				</div>
			</div>
			<div class="deliver_content">
				<div class="label">找到{{ total }}个岗位</div>
				<div class="list">
					<div class="item" v-for="(item, index) in jobsList" :key="item.id">
						<div class="item-top">
							<div class="item-left">
								<div class="name">{{ item.title }}</div>
								<div class="type">
									<span v-if="item.locations.length">{{
										item.locations.map((i) => i.city || i.province).join("/")
									}}</span>
									<span v-if="item.zhineng.name">{{ item.zhineng.name }}</span>
									<span>校园招聘</span>
								</div>
								<div class="post-content" :class="{ ellipsis: !item.showDetail }" v-html="item.description"></div>
							</div>
							<div class="item-right">
								<div class="deliver-btn pointer" @click="postJob(item.link)">投递职位</div>
								<div class="pointer small-grey" v-show="!item.showDetail" @click="toggleShowDetail(index)">显示详情</div>
							</div>
						</div>
						<!-- 岗位职责 -->
						<div class="item-bottom" v-show="item.showDetail">
							<div class="small-grey shrink pointer" @click="toggleShowDetail(index)">收起</div>
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
		</div>
	</div>
</template>

<style lang="scss" scoped>
.small-grey {
	font-size: var(--px_18);
	font-family: Source Han Sans CN;
	font-weight: 300;
	color: #a8a8a8;
}
.pointer {
	cursor: pointer;
}

.banner {
	img {
		height: 350px;
	}
}

.deliver {
	margin-top: 50px;
	margin-bottom: 88px;
	min-width: var(--app-min-width);
	max-width: var(--app-max-width);
	padding: 0 var(--px_40);
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	.deliver_title {
		font-size: var(--px_50);
		font-family: Source Han Sans CN;
		font-weight: bold;
		color: #414141;
	}
	.deliver_sub_title {
		font-size: var(--px_24);
		font-family: Source Han Sans CN;
		font-weight: 300;
		color: #777777;
	}
	.deliver_line {
		width: 100%;
		height: 1px;
		border: 1px solid #d7d7d7;
		margin-top: var(--px_30);
		margin-bottom: var(--px_30);
	}
	.deliver_content_wrapper {
		display: flex;
		justify-content: space-between;
		width: 100%;
		.label {
			font-size: var(--px_24);
			font-family: Source Han Sans CN;
			font-weight: bold;
			color: #414141;
		}
		.deliver_selector {
			padding: var(--px_24) 0;
			width: 24%;
			.search-content {
				// margin: var(--px_20) var(--px_30) 0;
				margin-top: var(--px_20);
				:deep(.el-collapse) {
					border: none;
					.el-collapse-item__wrap {
						border: none;
					}
					.el-collapse-item__header {
						color: #474443;
						font-size: var(--px_20);
						font-family: Source Han Sans CN;
						font-weight: 400;
						border-bottom: none;
					}
				}
				.category_wrap {
					margin-top: var(--px_20);
					display: flex;
					flex-direction: column;
					:deep(.el-radio) {
						color: #272727;
						.el-radio__input.is-checked .el-radio__inner {
							border-color: #77d7cf;
							background: #77d7cf;
						}
						.el-radio__input.is-checked + .el-radio__label {
							color: #272727;
						}
						.el-radio__inner::after {
							width: 6px;
							height: 6px;
						}
					}
				}
			}
		}
		.deliver_content {
			padding: var(--px_24) 0;
			width: 72%;
			display: flex;
			flex-direction: column;
			align-items: start;

			.list {
				width: 100%;
				display: flex;
				flex-direction: column;
				margin-top: var(--px_20);
				margin-bottom: 7px;
				.item {
					background: #f5f5f5;
					border-radius: 10px;
					width: 100%;
					border-radius: 10px;
					padding: 20px 24px;
					margin-bottom: 23px;
					.item-top {
						position: relative;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.item-left {
							width: 100%;
							.name {
								font-family: Source Han Sans CN;
								font-weight: 300;
								color: #474443;
								margin-bottom: 12px;
							}
							.type {
								margin-bottom: 24px;
								span {
									font-size: 17px;
									font-family: Source Han Sans CN;
									font-weight: 300;
									color: #474443;
									padding: 0 16px;
									border-left: 1px solid #474443;
									&:first-child {
										padding-left: 0;
										border: none;
									}
								}
							}
						}
						.item-right {
							position: absolute;
							top: 0;
							right: 0;
							margin-right: 50px;
							align-self: start;
							display: flex;
							flex-direction: column;
							align-items: center;
							height: 110px;
							.deliver-btn {
								border: 1px solid #777777;
								border-radius: 10px;
								margin-top: var(--px_30);
								margin-bottom: var(--px_24);
								display: flex;
								align-items: center;
								justify-content: center;
								padding: 5px 10px;
								font-size: var(--px_18);
								font-family: Source Han Sans CN;
								font-weight: 300;
								color: #414141;
							}
						}
					}
					.item-bottom {
						display: flex;
						flex-direction: column;
						align-items: center;
						.post {
							display: flex;
							flex-direction: column;
							width: 100%;
							.post-title {
								font-size: 21px;
								font-family: Source Han Sans CN;
								font-weight: 400;
								font-weight: 400;
								color: #474443;
								margin-bottom: 24px;
								margin-top: 40px;
							}
							.post-content {
								font-size: 17px;
								font-family: Source Han Sans CN;
								font-weight: 300;
								color: #474443;
								line-height: 29px;
							}
						}
						.shrink {
							margin-top: var(--px_20);
						}
					}
				}
			}
		}
	}
}
</style>
