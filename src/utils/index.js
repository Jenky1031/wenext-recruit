export const throttle = (fn, delay = 100) => {
	let context, args
	let timeout = null
	return function () {
		context = this
		args = arguments
		if (!timeout) {
			timeout = setTimeout(() => {
				timeout = null
				fn.apply(context, args)
			}, delay)
		}
	}
}

export function debounce(func, wait) {
	let timeout
	return function () {
		let context = this
		let args = arguments
		clearTimeout(timeout)
		timeout = setTimeout(function () {
			func.apply(context, args)
		}, wait)
	}
}

export function isMobile() {
	let flag = navigator.userAgent.match(
		/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
	)
	return flag
}

export function handleImgUrl(path) {
	const imgBaseUrl = import.meta.env.DEV ? "/src/assets/images" : import.meta.env.VITE_IMG_BASE_URL
	return `${imgBaseUrl}${path}`
}
