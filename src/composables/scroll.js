import { throttle } from "@/utils"
import { onUnmounted } from "vue"

export default function useScroll(scrollHandler) {
	window.addEventListener("scroll", throttle(scrollHandler, 300))
	onUnmounted(() => {
		window.removeEventListener("scroll", scrollHandler)
	})
}
