import { useEffect, useState } from 'react';

export default function useDarkMode() {
	const [isDarkMode, setIsDarkMode]: [boolean, (isDark: boolean) => void] = useState(false);
	useEffect(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (evt) => {
			setIsDarkMode(evt.matches);
		});
	}, []);
	return isDarkMode;
}
