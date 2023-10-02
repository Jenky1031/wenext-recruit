<script setup>
import faqData from "@/data/faq"
</script>

<template>
	<div class="m-faq">
		<div class="banner"></div>
		<div class="m-faq_box" v-for="item in faqData" :key="item.title">
			<div class="title_bold">{{ item.title }}</div>
			<div class="m-faq-content">
				<div class="m-faq-item" v-for="i in item.list" :key="i.q">
					<div class="m-faq-right">
						<div class="Q">{{ i.q }}</div>
						<div class="A">A：{{ i.a }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.title_bold {
	font-size: 0.9rem;
	font-weight: bold;
	color: #3d3d3d;
	margin-bottom: 1rem;
}

.m-faq {
	font-family: Source Han Sans CN;
	width: 100%;
	margin-top: var(--m-header-height);
	margin-bottom: 2rem;
	padding: 0.8rem 0.9rem;
	.m-faq_box {
		margin-bottom: 3rem;
	}
	.m-faq-content {
		color: #404040;
		.m-faq-item {
			width: 100%;
			display: flex;
			align-items: flex-start;
			margin-bottom: 0.6rem;
			.m-faq-right {
				.Q {
					font-size: 0.6rem;
					margin-bottom: 0.3rem;
				}
				.A {
					color: #777777;
					font-size: 0.48rem;
					line-height: 0.9rem;
					font-weight: 300;
				}
			}
		}
	}
}
</style>
