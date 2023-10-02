<script setup>
import { ref } from "vue"
import { QuestionFilled } from "@element-plus/icons-vue"

import { handleImgUrl } from "@/utils"

import Header from "./header/index.vue"
import Footer from "./footer/index.vue"

const isShowBig = ref(false)
</script>

<template>
	<Header />
	<div class="main">
		<router-view></router-view>
	</div>
	<Footer />
	<div class="affix big box" v-show="isShowBig" @mouseleave="isShowBig = false">
		<div class="affix-title">有什么疑问？</div>
		<div class="line"></div>
		<div class="affix-content">欢迎关注未来工场 招聘微信公众号咨询</div>
		<img class="affix-qrcode" :src="handleImgUrl('/pc/qrcode.jpeg')" alt="" />
	</div>
	<div class="affix small" v-show="!isShowBig" @mouseenter="isShowBig = true">
		<el-icon color="#77D7CF" size="40px"><question-filled /></el-icon>
	</div>
	<el-backtop :right="40" :bottom="100" />
</template>

<style lang="scss">
#app {
	min-width: var(--app-min-width);
}
.img-box {
	width: 160px;
	margin-bottom: 40px;
	img {
		width: 100%;
	}
}
.main {
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-size: cover;
	font-size: 16px;
}
.affix {
	position: fixed;
	z-index: 999;
	top: 50%;
	transform: translateY(-50%);
	right: 40px;
	&.big {
		width: 173px;
		height: 260px;
		color: #474443;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding: 27px 19px 17px 19px;
		text-align: center;
	}
	.line {
		width: 110px;
		height: 1px;
		background: #9b9b9b;
	}
	.affix-title {
		font-size: 21px;
		font-family: YouSheBiaoTiHei;
		font-weight: 400;
	}
	.affix-content {
		font-size: 15px;
		font-family: Source Han Sans CN;
		font-weight: 300;
		line-height: 23px;
	}
	.affix-qrcode {
		width: 109px;
		height: 109px;
	}
}
</style>
