<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
	import * as AlertDialog from "$lib/components/ui/alert-dialog";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { toasts } from "$lib/stores/toast";
	import { 
		PlusCircle,
		FileText,
		Trash2,
		XCircle,
		Loader2
	} from 'lucide-svelte';

	export let notes: string[] = [];

	$: currentNote = $page.params.note;
	$: sortedNotes = [...notes].sort((a, b) => a.localeCompare(b));

	let noteToDelete: string | null = null;
	let deleting = false;

	function formatDisplayTitle(filename: string): string {
		return filename.replace('.md', '').replace(/_/g, ' ');
	}

	function navigateToNote(path: string) {
		goto(path);
	}

	async function deleteNote() {
		if (!noteToDelete) return;
		deleting = true;

		try {
			const res = await fetch(`/${noteToDelete}`, {
				method: 'DELETE'
			});

			if (!res.ok) {
				const data = await res.json();
				throw new Error(data.error || 'Failed to delete note');
			}

			toasts.success('Note deleted successfully');
			noteToDelete = null;
			// Refresh the page to update the note list
			goto('/', { invalidateAll: true });
		} catch (error) {
			if (error instanceof Error) {
				toasts.error(error.message);
			} else {
				toasts.error('Failed to delete note');
			}
		} finally {
			deleting = false;
		}
	}
</script>

<div class="flex flex-col gap-2">
	<Button 
		variant="ghost" 
		class="flex w-full items-center justify-start gap-2 px-4 py-3 rounded-2xl hover:bg-muted transition-colors duration-200 font-medium" 
		on:click={() => navigateToNote('/new')}
	>
		<PlusCircle class="h-4 w-4 text-primary" />
		<span>New Note</span>
	</Button>
	<Separator class="my-2" />
	{#if notes.length === 0}
		<p class="px-4 text-sm text-muted-foreground font-medium">No notes yet. Create one to get started!</p>
	{:else}
		{#each sortedNotes as note}
			{@const noteName = note.replace('.md', '')}
			{@const displayTitle = formatDisplayTitle(note)}
			<div class="group flex items-center gap-1 px-2">
				<Button
					variant="ghost"
					class="flex flex-1 items-center justify-start gap-2 px-4 py-3 rounded-2xl hover:bg-muted transition-colors duration-200 font-medium
						{currentNote === noteName ? 'bg-muted/80 shadow-sm' : ''}"
					on:click={() => navigateToNote(`/${noteName}`)}
				>
					<FileText class="h-4 w-4 {currentNote === noteName ? 'text-primary' : 'text-muted-foreground'}" />
					<span class="truncate">{displayTitle}</span>
				</Button>
				<Button
					variant="ghost"
					size="icon"
					class="h-9 w-9 opacity-0 group-hover:opacity-100 transition-all duration-200 rounded-2xl hover:bg-destructive/10 hover:text-destructive"
					on:click={() => noteToDelete = noteName}
				>
					<Trash2 class="h-4 w-4" />
				</Button>
			</div>
		{/each}
	{/if}
</div>

<AlertDialog.Root open={!!noteToDelete}>
	<AlertDialog.Content class="rounded-2xl">
		<AlertDialog.Header>
			<AlertDialog.Title>Delete Note</AlertDialog.Title>
			<AlertDialog.Description>
				Are you sure you want to delete "{formatDisplayTitle(noteToDelete + '.md')}"? This action cannot be undone.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel class="rounded-2xl font-medium" on:click={() => noteToDelete = null}>
				<XCircle class="h-4 w-4 mr-2" />
				Cancel
			</AlertDialog.Cancel>
			<AlertDialog.Action class="rounded-2xl font-medium" on:click={deleteNote} disabled={deleting}>
				{#if deleting}
					<Loader2 class="h-4 w-4 mr-2 animate-spin" />
					Deleting...
				{:else}
					<Trash2 class="h-4 w-4 mr-2" />
					Delete
				{/if}
			</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
