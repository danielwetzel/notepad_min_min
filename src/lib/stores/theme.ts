import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark' | 'system';

function createThemeStore() {
	const defaultTheme: Theme = browser ? (localStorage.getItem('theme') as Theme ?? 'system') : 'system';
	const { subscribe, set } = writable<Theme>(defaultTheme);

	return {
		subscribe,
		set: (theme: Theme) => {
			if (browser) {
				localStorage.setItem('theme', theme);
				if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
			}
			set(theme);
		}
	};
}

export const theme = createThemeStore();
