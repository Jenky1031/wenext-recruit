import { ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { Search, ArrowRight } from "@element-plus/icons-vue"
import { getCategoryList, getJobList } from "@/api/deliver"

export default function useJob() {
	const route = useRoute()
	const router = useRouter()

	const { id = null } = route.params

	const categoryId = ref(parseInt(id))
	const categoryList = ref([])
	const limit = 10
	const page = ref(1)
	const total = ref(0)
	const keyword = ref("")
	const jobsList = ref([])

	getCategoryListApi()
	getJobListApi()

	watch([categoryId, page], () => {
		getJobListApi()
	})

	function search() {
		categoryId.value = null
		getJobListApi()
	}

	function changePage(curPage) {
		page.value = curPage
	}

	function postJob(link) {
		window.open(link, "_blank")
	}

	function toggleShowDetail(idx) {
		if (!jobsList.value[idx].showDetail) {
			jobsList.value.forEach((i, idx, arr) => {
				arr[idx].showDetail = false
			})
		}
		jobsList.value[idx].showDetail = !jobsList.value[idx].showDetail
	}

	async function getCategoryListApi() {
		categoryList.value = (await getCategoryList())?.jobs
	}

	async function getJobListApi() {
		const query = {
			limit,
			offset: page.value === 1 ? 0 : limit * (page.value - 1),
		}
		if (keyword.value) {
			query.keyword = keyword.value
		}
		if (categoryId.value) {
			query.zhinengId = categoryId.value
			router.push(`/deliver/${categoryId.value}`)
		}
		const { jobs = [], total: totalCount = 0 } = await getJobList(query)
		jobsList.value = jobs
		total.value = totalCount
		jobsList.value.forEach((i, idx, arr) => {
			arr[idx].showDetail = false
			arr[idx].link = `${import.meta.env.VITE_POST_BASE_URL}/${i.id}/apply?pure=1`
		})
	}

	return {
		Search,
		ArrowRight,
		id,
		categoryId,
		categoryList,
		limit,
		page,
		total,
		keyword,
		jobsList,
		getJobListApi,
		changePage,
		search,
		postJob,
		toggleShowDetail,
	}
}
