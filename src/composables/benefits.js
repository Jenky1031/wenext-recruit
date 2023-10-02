import { ref, computed } from "vue"
import benefitsData from "@/data/benefits"

export default function useBenefits() {
	const benefitsTitle = benefitsData.title
	const benefitsList = ref(benefitsData.list)

	const benefitsActiveIdx = ref(0)
	const benefitsActiveItem = computed(() => benefitsList.value[benefitsActiveIdx.value])

	const benefitsCarousel = ref(null)
	function prev() {
		benefitsCarousel.value.prev()
	}
	function next() {
		benefitsCarousel.value.next()
	}
	function changeBenefitsCarousel(activeIdx) {
		benefitsCarousel.value.setActiveItem(activeIdx)
		benefitsActiveIdx.value = activeIdx
		benefitsList.value.forEach((i) => {
			i.active = false
		})
		benefitsList.value[activeIdx].active = true
	}

	return {
		benefitsTitle,
		benefitsList,
		benefitsActiveIdx,
		benefitsActiveItem,
		benefitsCarousel,
		prev,
		next,
		changeBenefitsCarousel,
	}
}
