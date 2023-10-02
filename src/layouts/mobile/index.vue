<script setup>
import Header from "./header/index.vue"
import Footer from "./footer/index.vue"
</script>

<template>
	<Header />
	<div class="m-main">
		<router-view></router-view>
	</div>
	<Footer />
	<el-backtop />
</template>

<style lang="scss">
#app {
	width: 100%;
	min-width: 0;
}

.el-backtop {
	z-index: 999999 !important;
	right: 0.4rem !important;
	bottom: 1rem !important;
	width: 1.6rem;
	height: 1.6rem;
	.el-icon {
		width: 0.8rem;
		height: 0.8rem;
		svg {
			width: 100%;
			height: 100%;
		}
	}
}

.m-main {
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.m-box {
	box-shadow: 0rem 0.16rem 0.14rem 0rem rgba(47, 130, 223, 0.12);
	background-color: #fff;
	border-radius: 0.5rem;
}

.m-title {
	font-size: 1.08rem;
	font-family: YouSheBiaoTiHei;
	font-weight: 400;
	color: #333333;
	margin-bottom: 0.6rem;
}
</style>
