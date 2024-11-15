<script lang="ts">
	import "../app.css";
	import * as Sheet from "$lib/components/ui/sheet";
	import { Button } from "$lib/components/ui/button";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import { Separator } from "$lib/components/ui/separator";
	import NoteList from "$lib/components/NoteList.svelte";
	import Toast from "$lib/components/Toast.svelte";
	import { theme } from "$lib/stores/theme";
	import { 
		Menu,
		PanelLeftOpen,
		Sun,
		Moon,
		Monitor
	} from 'lucide-svelte';

	interface PageData {
		notes: string[];
	}

	export let data: PageData;
	let open = false;
	let sidebarVisible = true;

	$: ({ notes } = data);

	function toggleTheme(newTheme: 'light' | 'dark' | 'system') {
		theme.set(newTheme);
	}
</script>

<Toast />

<div class="relative flex min-h-screen flex-col">
	<header class="sticky top-0 z-50 w-full bg-titlebar border-b">
		<div class="flex h-16 items-center px-4">
			<div class="flex items-center gap-4">
				<Button variant="ghost" size="icon" class="md:hidden rounded-2xl" on:click={() => (open = true)}>
					<Menu class="h-5 w-5" />
					<span class="sr-only">Toggle Menu</span>
				</Button>
				<Button 
					variant="ghost" 
					size="icon" 
					class="hidden md:inline-flex rounded-2xl" 
					on:click={() => (sidebarVisible = !sidebarVisible)}
				>
					<PanelLeftOpen class="h-5 w-5" />
					<span class="sr-only">Toggle Sidebar</span>
				</Button>
				<a href="/" class="font-bold text-xl">notepad --</a>
			</div>
			<div class="flex items-center gap-2 ml-auto">
				{#if $theme === 'dark'}
					<Button
						variant="ghost"
						size="icon"
						class="rounded-2xl"
						on:click={() => toggleTheme('light')}
					>
						<Sun class="h-5 w-5" />
						<span class="sr-only">Light Mode</span>
					</Button>
				{:else if $theme === 'light'}
					<Button
						variant="ghost"
						size="icon"
						class="rounded-2xl"
						on:click={() => toggleTheme('dark')}
					>
						<Moon class="h-5 w-5" />
						<span class="sr-only">Dark Mode</span>
					</Button>
				{:else}
					<Button
						variant="ghost"
						size="icon"
						class="rounded-2xl"
						on:click={() => toggleTheme('dark')}
					>
						<Monitor class="h-5 w-5" />
						<span class="sr-only">System Theme</span>
					</Button>
				{/if}
			</div>
		</div>
	</header>

	<div class="flex flex-1">
		<aside 
			class="fixed left-0 top-16 bottom-0 z-30 w-64 bg-sidebar border-r
				transition-transform duration-300 ease-in-out
				{sidebarVisible ? 'translate-x-0' : '-translate-x-full'}
				md:sticky md:top-16 md:block"
		>
			<ScrollArea class="h-[calc(100vh-4rem)] px-4 py-6">
				<h2 class="text-lg font-semibold px-2">Notes</h2>
				<Separator class="my-4" />
				<NoteList {notes} />
			</ScrollArea>
		</aside>

		<main class="flex-1 min-w-0 px-4 py-6 transition-all duration-300 ease-in-out
			{sidebarVisible ? 'md:pl-4' : 'md:pl-4'} max-w-full">
			<div class="max-w-4xl mx-auto">
				<slot />
			</div>
		</main>

		<Sheet.Root bind:open>
			<Sheet.Content side="left" class="w-64">
				<nav class="flex flex-col gap-4 p-4">
					<h2 class="px-2 text-lg font-semibold">Notes</h2>
					<Separator />
					<ScrollArea class="h-[calc(100vh-8rem)]">
						<NoteList {notes} />
					</ScrollArea>
				</nav>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</div>
