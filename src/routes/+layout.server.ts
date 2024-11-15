import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

export const load = async () => {
	const notesDir = join(process.cwd(), 'data', 'notes');
	try {
		const files = await readdir(notesDir);
		const notes = files.filter((file: string) => file.endsWith('.md'));
		return {
			notes
		};
	} catch (error) {
		console.error('Error reading notes directory:', error);
		return {
			notes: [] as string[]
		};
	}
};
