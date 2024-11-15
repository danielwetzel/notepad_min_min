import { error, fail } from '@sveltejs/kit';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { PageServerLoad, Actions } from './$types';

interface Params {
	note: string;
}

function getNoteFilePath(noteParam: string | undefined): string {
	if (!noteParam) {
		throw error(400, { message: 'Note name is required' });
	}
	return join(process.cwd(), 'data', 'notes', noteParam.endsWith('.md') ? noteParam : `${noteParam}.md`);
}

export const load = (async ({ params }: { params: Params }) => {
	const notePath = getNoteFilePath(params.note);

	try {
		const content = await readFile(notePath, 'utf-8');
		return {
			content,
			title: params.note?.replace('.md', '') ?? ''
		};
	} catch (e) {
		console.error('Failed to read note:', e);
		throw error(404, {
			message: 'Note not found'
		});
	}
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, params }: { request: Request; params: Params }) => {
		const formData = await request.formData();
		const content = formData.get('content')?.toString();

		if (!content) {
			return fail(400, {
				error: 'Content is required'
			});
		}

		if (!params.note) {
			return fail(400, {
				error: 'Note name is required'
			});
		}

		const notePath = getNoteFilePath(params.note);

		try {
			await writeFile(notePath, content, 'utf-8');
			return {
				success: true
			};
		} catch (e) {
			console.error('Failed to save note:', e);
			return fail(500, {
				error: 'Failed to save note. Please try again.',
				values: { content }
			});
		}
	}
} satisfies Actions;
