import { error, fail } from '@sveltejs/kit';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { Actions } from './$types';

function formatTitle(title: string): string {
	// Replace spaces with underscores
	return title.replace(/\s+/g, '_');
}

function validateTitle(title: string): boolean {
	// Allow letters, numbers, spaces, and hyphens
	return /^[a-zA-Z0-9\s-]+$/.test(title);
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const title = formData.get('title')?.toString().trim();
		const content = formData.get('content')?.toString();

		if (!title || !content) {
			return fail(400, {
				error: 'Title and content are required',
				values: { title, content }
			});
		}

		// Validate title format
		if (!validateTitle(title)) {
			return fail(400, {
				error: 'Title can only contain letters, numbers, spaces, and hyphens',
				values: { title, content }
			});
		}

		const formattedTitle = formatTitle(title);
		const notePath = join(process.cwd(), 'data', 'notes', `${formattedTitle}.md`);

		try {
			await writeFile(notePath, content, 'utf-8');
			return {
				success: true,
				path: `/${formattedTitle}`
			};
		} catch (e) {
			console.error('Failed to create note:', e);
			return fail(500, {
				error: 'Failed to create note. Please try again.',
				values: { title, content }
			});
		}
	}
} satisfies Actions;
