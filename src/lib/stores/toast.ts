import { writable } from 'svelte/store';

export type Toast = {
	id: number;
	message: string;
	type: 'default' | 'success' | 'error';
};

function createToastStore() {
	const { subscribe, update } = writable<Toast[]>([]);
	let id = 0;

	function add(message: string, type: Toast['type'] = 'default') {
		const toast: Toast = {
			id: id++,
			message,
			type
		};

		update(toasts => [...toasts, toast]);
		setTimeout(() => {
			remove(toast.id);
		}, 3000);
	}

	function remove(id: number) {
		update(toasts => toasts.filter(t => t.id !== id));
	}

	return {
		subscribe,
		success: (message: string) => add(message, 'success'),
		error: (message: string) => add(message, 'error'),
		info: (message: string) => add(message, 'default'),
		remove
	};
}

export const toasts = createToastStore();
