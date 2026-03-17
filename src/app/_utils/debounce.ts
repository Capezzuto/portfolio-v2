export default function debounce<T extends (...args: any[]) => void>(callback: T, wait: number, immediate?: boolean) {
	let timeoutToken: ReturnType<typeof setTimeout> | undefined;

	return function <U>(this: U, ...args: Parameters<typeof callback>) {
		const context = this;

		const callNow = immediate && !timeoutToken;

		if (typeof timeoutToken !== 'undefined') {
			clearTimeout(timeoutToken);
		}

		timeoutToken = setTimeout(() => {
			timeoutToken = undefined;
			if (!immediate) {
				callback.apply(context, args);
			}
		}, wait);

		if (callNow) {
			callback.apply(context, args);
		}
	};
}
