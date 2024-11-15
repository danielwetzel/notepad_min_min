<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { toasts } from '$lib/stores/toast';
	import { 
		Save,
		XCircle,
		FileText,
		Info,
		FileCode,
		Loader2
	} from 'lucide-svelte';

	let title = '';
	let content = '';
	let saving = false;

	function handleKeyDown(event: KeyboardEvent) {
		if ((event.ctrlKey || event.metaKey) && event.key === 's') {
			event.preventDefault();
			const form = document.querySelector('form');
			if (form) form.requestSubmit();
		}
	}

	function handleSubmit() {
		saving = true;
		return async ({ result, update }: { result: { type: string; data?: any }; update: () => Promise<void> }) => {
			saving = false;

			// Always update the form to show any validation errors
			await update();

			if (result.type === 'success') {
				const data = result.data as { path: string };
				toasts.success('Note created successfully');
				goto(data.path);
			} else if (result.type === 'failure') {
				toasts.error(result.data?.error || 'Failed to create note');
			}
		};
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="container mx-auto p-4">
	<form
		method="POST"
		use:enhance={handleSubmit}
		class="space-y-4 max-w-4xl mx-auto"
	>
		<div class="flex items-center justify-between">
			<h1 class="text-2xl font-bold">New Note</h1>
			<div class="flex items-center gap-2">
				<Button type="button" variant="ghost" class="rounded-2xl font-medium" on:click={() => goto('/')}>
					<XCircle class="h-4 w-4 mr-2" />
					Cancel
				</Button>
				<Button type="submit" variant="default" class="rounded-2xl font-medium text-primary-foreground text-white" disabled={saving}>
					{#if saving}
						<Loader2 class="h-4 w-4 mr-2 animate-spin" />
						Creating...
					{:else}
						<Save class="h-4 w-4 mr-2" />
						Save
					{/if}
				</Button>
			</div>
		</div>

		<div class="space-y-4">
			<div class="space-y-2">
				<label for="title" class="text-sm font-medium">Title</label>
				<div class="relative">
					<FileText class="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						id="title"
						name="title"
						bind:value={title}
						placeholder="Note title..."
						required
						pattern="[a-zA-Z0-9\s-]+"
						title="Only letters, numbers, spaces, and hyphens are allowed"
						class="pl-9 rounded-2xl font-medium"
					/>
				</div>
				<p class="text-xs text-muted-foreground flex items-center gap-2 font-medium">
					<Info class="h-4 w-4" />
					Only letters, numbers, spaces, and hyphens are allowed in the title.
				</p>
			</div>
			<div class="space-y-2">
				<label for="content" class="text-sm font-medium">Content</label>
				<Textarea
					id="content"
					name="content"
					bind:value={content}
					class="min-h-[500px] font-mono rounded-2xl"
					placeholder="Write your markdown here..."
					required
				/>
				<p class="text-xs text-muted-foreground flex items-center gap-2 font-medium">
					<FileCode class="h-4 w-4" />
					Use markdown to format your note. Press Ctrl+S (Cmd+S on Mac) to save.
				</p>
			</div>
		</div>
	</form>
</div>
