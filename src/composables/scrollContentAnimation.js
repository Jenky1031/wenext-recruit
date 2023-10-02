import useScroll from "./scroll"

export default function useScrollAnimation() {
	useScroll(scrollHandler)

	function scrollHandler() {
		handleScrollAnimation()
	}

	function handleScrollAnimation() {
		const scrollElements = document.querySelectorAll(".js-scroll")
		scrollElements.forEach((el) => {
			if (elementInView(el, 100)) {
				displayScrollElement(el)
			}
		})
	}

	function elementInView(el, scrollOffset = 0) {
		const elementTop = el.getBoundingClientRect().top
		return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
	}

	function displayScrollElement(el) {
		el.classList.add("scrolled")
	}
}
