import { error, json } from '@sveltejs/kit';
import { unlink } from 'node:fs/promises';
import { join } from 'node:path';
import type { RequestHandler } from './$types';

function getNoteFilePath(noteParam: string | undefined): string {
	if (!noteParam) {
		throw error(400, { message: 'Note name is required' });
	}
	return join(process.cwd(), 'data', 'notes', noteParam.endsWith('.md') ? noteParam : `${noteParam}.md`);
}

export const DELETE: RequestHandler = async ({ params }) => {
	if (!params.note) {
		return json({ error: 'Note name is required' }, { status: 400 });
	}

	const notePath = getNoteFilePath(params.note);

	try {
		await unlink(notePath);
		return new Response(null, { status: 204 });
	} catch (e) {
		console.error('Failed to delete note:', e);
		return json({ error: 'Failed to delete note. Please try again.' }, { status: 500 });
	}
};
