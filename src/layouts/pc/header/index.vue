<script setup>
import useScrollHeaderAnimation from "@/composables/scrollHeaderAnimation"
import { handleImgUrl } from "@/utils"

const { isHide, isDark, logoSelected } = useScrollHeaderAnimation()
</script>

<template>
	<div :class="['header-wrapper', { isHide, isDark }]">
		<div class="header-container">
			<div class="header-logo">
				<img class="logo" :src="handleImgUrl('/common/logo_small_dark.png')" alt="" />
			</div>
			<div class="header-nav">
				<router-link class="nav-link" to="/">
					首页
					<div class="nav-line"></div>
				</router-link>
				<router-link class="nav-link" to="/introduce">
					校园招聘
					<div class="nav-line"></div>
				</router-link>
				<router-link class="nav-link" to="/deliver">
					职位投递
					<div class="nav-line"></div>
				</router-link>
				<router-link class="nav-link" to="/life">
					未来生活
					<div class="nav-line"></div>
				</router-link>
				<a class="nav-link" href="https://www.wenext.cn/" target="_blank">
					<div>走进<span class="en">wenext</span></div>
					<div class="nav-line"></div>
				</a>
			</div>
		</div>
		<div class="sub_title">
			<div class="sub_title_box">未来工场秋季校园招聘</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.header-wrapper.isDark {
	background: #fff;
	a {
		color: rgba($color: #000000, $alpha: 0.8);
	}
}
.router-link-exact-active {
	color: var(--app-color-theme) !important;
	font-family: Source Han Sans CN !important;
	font-weight: 500 !important;
	&::after {
		position: absolute;
		bottom: 0px;
		content: "";
		width: 87px;
		height: 5px;
		background-color: var(--app-color-theme);
		border-radius: 5px;
	}
}
.nav-line {
	opacity: 0;
	transition: opacity 1s;
	position: absolute;
	bottom: 0px;
	content: "";
	width: 87px;
	height: 5px;
	background-color: var(--app-color-theme);
	border-radius: 5px;
}
.nav-link {
	span.en {
		font-family: arial;
	}
}
.nav-link:hover {
	color: var(--app-color-theme) !important;
	font-family: Source Han Sans CN;
	font-weight: 500;
	.nav-line {
		opacity: 1;
	}
	span.en {
		font-weight: bold;
	}
}

.header-wrapper {
	width: 100%;
	min-width: var(--app-min-width);
	z-index: 999999;
	position: fixed;
	top: 0;
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 19px;
	transition: all 0.3s;
	&.isHide {
		top: -90px;
	}

	a {
		line-height: 90px;
		font-size: 19px;
		font-family: Source Han Sans CN;
		font-weight: 300;
		color: #606262;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.sub_title {
		width: 100%;
		height: 50px;
		background: #2e2e2e;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		font-family: Source Han Sans CN;
		font-weight: bold;
		color: #ffffff;
		.sub_title_box {
			min-width: var(--app-min-width);
			max-width: var(--app-max-width);
			width: 100%;
		}
	}
	.header-container {
		position: relative;
		min-width: var(--app-min-width);
		max-width: var(--app-max-width);
		width: 100%;
		height: 90px;
		.header-logo {
			position: absolute;
			left: 0;
			width: 128px;
			height: auto;
			margin-left: 15px;
		}
		.header-nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
}
</style>
