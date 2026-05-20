import { useEffect, useState } from 'react';

export default function useDarkMode() {
	const [isDarkMode, setIsDarkMode] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);
	useEffect(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (evt) => {
			setIsDarkMode(evt.matches);
		});
	}, []);
	return isDarkMode;
}
