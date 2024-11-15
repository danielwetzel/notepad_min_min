<script lang="ts">
	import { marked } from 'marked';
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import * as Tabs from '$lib/components/ui/tabs';
	import { Textarea } from '$lib/components/ui/textarea';
	import { theme } from '$lib/stores/theme';
	import { toasts } from '$lib/stores/toast';
	import { 
		Save,
		Eye,
		Pencil,
		Loader2
	} from 'lucide-svelte';

	export let data: { content: string; title: string };

	let content = '';
	let preview = '';
	let activeTab = 'edit';
	let saving = false;

	// Update content when data changes
	$: {
		content = data.content;
	}
	
	// Update preview when content changes
	$: {
		const parsed = marked(content);
		if (typeof parsed === 'string') {
			preview = parsed;
		} else {
			parsed.then(result => {
				preview = result;
			});
		}
	}

	function formatDisplayTitle(title: string): string {
		return title.replace(/_/g, ' ');
	}

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
				toasts.success('Note saved successfully');
			} else if (result.type === 'failure') {
				toasts.error(result.data?.error || 'Failed to save note');
			}
		};
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="container mx-auto p-4">
	<form method="POST" use:enhance={handleSubmit} class="space-y-4 max-w-4xl mx-auto">
		<div class="flex items-center justify-between">
			<h1 class="text-2xl font-bold">{formatDisplayTitle(data.title)}</h1>
			<div class="flex items-center gap-2">
				<Button 
					type="button" 
					variant="secondary" 
					class="rounded-2xl font-medium"
					on:click={() => activeTab = activeTab === 'edit' ? 'preview' : 'edit'}
				>
					{#if activeTab === 'edit'}
						<Eye class="h-4 w-4 mr-2" />
						Preview
					{:else}
						<Pencil class="h-4 w-4 mr-2" />
						Edit
					{/if}
				</Button>
				<Button type="submit" variant="default" class="rounded-2xl font-medium text-primary-foreground text-white" disabled={saving}>
					{#if saving}
						<Loader2 class="h-4 w-4 mr-2 animate-spin" />
						Saving...
					{:else}
						<Save class="h-4 w-4 mr-2" />
						Save
					{/if}
				</Button>

			</div>
		</div>

		<Tabs.Root bind:value={activeTab} class="w-full">
			<Tabs.List class="rounded-2xl bg-muted/50">
				<Tabs.Trigger value="edit" class="rounded-2xl data-[state=active]:bg-background font-medium">
					<Pencil class="h-4 w-4 mr-2" />
					Edit
				</Tabs.Trigger>
				<Tabs.Trigger value="preview" class="rounded-2xl data-[state=active]:bg-background font-medium">
					<Eye class="h-4 w-4 mr-2" />
					Preview
				</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="edit" class="mt-4">
				<Textarea
					name="content"
					bind:value={content}
					class="min-h-[calc(100vh-12rem)] font-mono rounded-2xl"
					placeholder="Write your markdown here..."
				/>
			</Tabs.Content>
			<Tabs.Content value="preview" class="mt-4">
				<div class="prose dark:prose-invert max-w-none min-h-[calc(100vh-12rem)] p-6 border rounded-2xl overflow-auto bg-muted/50">
					{@html preview}
				</div>
			</Tabs.Content>
		</Tabs.Root>
	</form>
</div>

<style>
	:global(.dark) {
		color-scheme: dark;
	}

	:global(.prose) {
		font-family: inherit;
	}

	:global(.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
		font-family: inherit;
		font-weight: 600;
		letter-spacing: -0.025em;
	}

	:global(.prose p, .prose ul, .prose ol) {
		font-family: inherit;
		font-weight: 400;
	}
</style>
