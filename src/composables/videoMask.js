import { nextTick, onUnmounted } from "vue"
import { debounce } from "@/utils"

export default function () {
	window.addEventListener("resize", debounce(setVideoMaskHeight, 300), false)

	onUnmounted(() => {
		window.removeEventListener("resize", setVideoMaskHeight)
	})

	nextTick(() => {
		setVideoMaskHeight()
	})

	let video
	let videoMask
	let home
	let videoHeight

	function setVideoMaskHeight() {
		video = document.getElementById("video")
		videoMask = document.getElementById("video-mask")
		home = document.getElementById("home")
		video.oncanplay = setHeight
		setHeight()
	}

	function setHeight() {
		videoHeight = video?.offsetHeight || 0
		videoMask.style.height = `${videoHeight}px`
		home.style.paddingTop = `${videoHeight}px`
	}
}
