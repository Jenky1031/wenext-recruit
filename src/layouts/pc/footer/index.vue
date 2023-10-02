<script setup>
import { handleImgUrl } from "@/utils"
</script>

<template>
	<div class="footer">
		<img :src="handleImgUrl('/common/logo_small.png')" alt="" />
	</div>
</template>

<style lang="scss" scoped>
.footer {
	width: 100%;
	height: 75px;
	background: #2e2e2e;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 160px;
		height: auto;
	}
}
</style>
