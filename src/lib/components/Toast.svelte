<script lang="ts">
	import { fly } from 'svelte/transition';
	import { toasts } from '$lib/stores/toast';
	import * as Alert from '$lib/components/ui/alert';
	import { cn } from '$lib/utils';
</script>

<div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
	{#each $toasts as toast (toast.id)}
		<div
			transition:fly={{ x: 100, duration: 300 }}
			class="min-w-[320px]"
		>
			<Alert.Root
				class={cn(
					'transition-all duration-200 rounded-2xl shadow-lg border-2',
					toast.type === 'success' && 'bg-green-500/10 text-green-500 border-green-500/20',
					toast.type === 'error' && 'bg-red-500/10 text-red-500 border-red-500/20',
					toast.type === 'default' && 'bg-primary/10 text-primary border-primary/20'
				)}
			>
				<div class="flex items-center gap-3 p-3">
					{#if toast.type === 'success'}
						<i class="bi bi-check-circle-fill text-xl"></i>
					{:else if toast.type === 'error'}
						<i class="bi bi-x-circle-fill text-xl"></i>
					{:else}
						<i class="bi bi-info-circle-fill text-xl"></i>
					{/if}
					<Alert.Description class="text-sm font-medium">
						{toast.message}
					</Alert.Description>
				</div>
			</Alert.Root>
		</div>
	{/each}
</div>

<style>
	:global(.dark) {
		color-scheme: dark;
	}
</style>
