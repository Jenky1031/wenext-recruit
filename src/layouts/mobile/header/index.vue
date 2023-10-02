<script setup>
import { ref, computed, watch } from "vue"
import { Operation, CloseBold } from "@element-plus/icons-vue"

import useScrollHeaderAnimation from "@/composables/scrollHeaderAnimation"

const { isHide, isDark, logoSelected, logoDark } = useScrollHeaderAnimation()
const iconColor = computed(() => (isDark.value ? "#000" : "#fff"))

const isShowMenu = ref(false)

watch(isShowMenu, (newVal) => {
	if (newVal) {
		document.body.style.overflow = "hidden"
	} else {
		document.body.style.overflow = "auto"
	}
})
</script>

<template>
	<div :class="['m-header-wrapper', 'backdrop', { isHide, isDark }]">
		<div class="m-header-nav-icon" @click="isShowMenu = true">
			<el-icon size="1.2rem" :color="iconColor"><operation /></el-icon>
		</div>
		<div class="m-header-logo">
			<img :src="logoSelected" alt="" />
		</div>
	</div>
	<div :class="['m-header-menu', { active: isShowMenu }]">
		<div class="m-header-menu-top">
			<div class="m-header-logo">
				<img :src="logoDark" alt="" />
			</div>
			<div class="m-header-menu-close" @click="isShowMenu = false">
				<el-icon><close-bold /></el-icon>
			</div>
		</div>
		<div class="m-header-menu-list" @click="isShowMenu = false">
			<router-link to="/" class="m-header-menu-item border-top">首页</router-link>
			<router-link to="/deliver" class="m-header-menu-item border-top">职位投递</router-link>
			<router-link to="/faq" class="m-header-menu-item border-top">Q&A</router-link>
			<a href="https://www.wenext.cn/" target="_blank" class="m-header-menu-item border-top">走进wenext</a>
		</div>
	</div>
	<div class="mask" @click="isShowMenu = false" v-show="isShowMenu"></div>
</template>

<style lang="scss" scoped>
.backdrop {
	background-color: rgba(#b9bebe, 0.8);
}
@supports (-webkit-backdrop-filter: blur(24px)) or (backdrop-filter: blur(24px)) {
	.backdrop {
		backdrop-filter: blur(24px);
		background-color: rgba(#b9bebe, 0.2);
	}
}
.m-header-wrapper {
	position: fixed;
	z-index: 999999;
	top: 0;
	transition: all 0.3s;
	height: var(--m-header-height);
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #000000;
	opacity: 0.7;
	&.isHide {
		top: var(--m-header-height-o);
	}
	&.isDark {
		background-color: #fff;
		border-bottom: 1px solid rgb(248, 249, 249);
		a {
			color: rgba($color: #000000, $alpha: 0.8);
		}
	}
	.m-header-nav-icon {
		position: absolute;
		top: 50%;
		left: 0.5rem;
		transform: translateY(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
	}
}

.m-header-logo {
	width: 4rem;
	img {
		width: 100%;
		height: 100%;
	}
}
.m-header-menu {
	position: fixed;
	top: 0;
	width: 100%;
	height: 0;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	transition: all 0.3s;
	overflow: hidden;
	z-index: 9999999;
	&.active {
		height: 10.9224rem;
	}
	.m-header-menu-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.m-header-logo {
			margin: 0 0.32rem;
		}
		.m-header-menu-close {
			margin: 0.32rem;
		}
	}
	.m-header-menu-list {
		display: flex;
		flex-direction: column;
		margin: 0 0.32rem;
		font-size: 0.64rem;
		.m-header-menu-item {
			line-height: 2.24rem;
		}
	}
}
.mask {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.3);
}
.router-link-exact-active {
	color: var(--app-color-theme);
}
</style>
