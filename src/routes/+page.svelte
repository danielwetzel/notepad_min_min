<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { goto } from "$app/navigation";
	import { 
		PlusCircle,
		RocketIcon,
		FileText,
		Eye,
		PanelLeftOpen,
		Save,
		Moon,
		Keyboard
	} from 'lucide-svelte';

</script>

<div class="flex flex-col gap-8 p-4">
	<div class="flex items-center justify-between">
		<h1 class="text-4xl font-bold tracking-tight">Welcome to notepad --</h1>
		<Button class="rounded-2xl font-medium text-white" on:click={() => goto('/new')}>
			<PlusCircle class="h-4 w-4 mr-2" />
			New Note
		</Button>
	</div>
	<div class="grid gap-8 md:grid-cols-2">
		<div class="rounded-2xl border-2 border-muted p-6 shadow-sm hover:shadow-md transition-all duration-200 bg-muted/5">
			<h2 class="text-xl font-semibold mb-6 flex items-center gap-2">
				<RocketIcon class="h-5 w-5 text-primary" />
				Getting Started
			</h2>
			<ul class="space-y-4 text-sm text-muted-foreground font-medium">
				<li class="flex items-center gap-3 group">
					<PlusCircle class="h-4 w-4 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
					<span class="group-hover:text-foreground transition-colors">Create a new note using the button above</span>
				</li>
				<li class="flex items-center gap-3 group">
					<FileText class="h-4 w-4 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
					<span class="group-hover:text-foreground transition-colors">Write your notes using Markdown</span>
				</li>
				<li class="flex items-center gap-3 group">
					<Eye class="h-4 w-4 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
					<span class="group-hover:text-foreground transition-colors">Preview your notes in real-time</span>
				</li>
				<li class="flex items-center gap-3 group">
					<PanelLeftOpen class="h-4 w-4 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
					<span class="group-hover:text-foreground transition-colors">Toggle the sidebar to focus on your content</span>
				</li>
			</ul>
		</div>
		<div class="rounded-2xl border-2 border-muted p-6 shadow-sm hover:shadow-md transition-all duration-200 bg-muted/5">
			<h2 class="text-xl font-semibold mb-6 flex items-center gap-2">
				<Keyboard class="h-5 w-5 text-primary" />
				Keyboard Shortcuts
			</h2>
			<ul class="space-y-4 text-sm text-muted-foreground font-medium">
				<li class="flex items-center justify-between group">
					<span class="flex items-center gap-3">
						<Save class="h-4 w-4 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
						<span class="group-hover:text-foreground transition-colors">Save note</span>
					</span>
					<kbd class="rounded-xl border-2 border-muted px-3 py-1 text-xs bg-muted/20 font-medium">Ctrl/⌘ + S</kbd>
				</li>
				<li class="flex items-center justify-between group">
					<span class="flex items-center gap-3">
						<Eye class="h-4 w-4 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
						<span class="group-hover:text-foreground transition-colors">Toggle preview</span>
					</span>
					<kbd class="rounded-xl border-2 border-muted px-3 py-1 text-xs bg-muted/20 font-medium">Preview tab</kbd>
				</li>
				<li class="flex items-center justify-between group">
					<span class="flex items-center gap-3">
						<Moon class="h-4 w-4 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
						<span class="group-hover:text-foreground transition-colors">Toggle theme</span>
					</span>
					<kbd class="rounded-xl border-2 border-muted px-3 py-1 text-xs bg-muted/20 font-medium">Theme button</kbd>
				</li>
				<li class="flex items-center justify-between group">
					<span class="flex items-center gap-3">
						<PanelLeftOpen class="h-4 w-4 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
						<span class="group-hover:text-foreground transition-colors">Toggle sidebar</span>
					</span>
					<kbd class="rounded-xl border-2 border-muted px-3 py-1 text-xs bg-muted/20 font-medium">Sidebar button</kbd>
				</li>
			</ul>
		</div>
	</div>
</div>
