import { ref, computed } from "vue"

import useScroll from "./scroll"

import { handleImgUrl } from "@/utils"

export default function useScrollHeaderAnimation() {
	const logoDark = handleImgUrl("/common/logo_small_dark.png")
	const logo = handleImgUrl("/common/logo_small.png")

	const isHide = ref(false)
	const isDark = ref(false)

	const oldScrollTop = ref(0)

	const logoSelected = computed(() => (isDark.value ? logoDark : logo))

	useScroll(scrollHandler)

	function scrollHandler() {
		scrolling()
	}

	function scrolling() {
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		let scrollStep = scrollTop - oldScrollTop.value
		oldScrollTop.value = scrollTop

		const bannerHeight = document.querySelector(".banner")?.offsetHeight

		if (scrollStep > 0 && scrollTop > 90) {
			// 向下
			isHide.value = true
		} else if (scrollStep < 0) {
			// 向上
			isHide.value = false
			isDark.value = scrollTop >= bannerHeight
		}
	}

	return { isHide, isDark, logoSelected, logoDark }
}
