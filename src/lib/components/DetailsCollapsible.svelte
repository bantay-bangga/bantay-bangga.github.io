<script>
    import { ChevronDown, ChevronUp } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';

    let isExpanded = false;

    function toggleDetails() {
        isExpanded = !isExpanded;
    }
</script>

<div>
    <button
        type="button"
        on:click={toggleDetails}
        class="flex w-full items-center justify-between border-b border-surface-500 pr-2"
    >
        <slot name="title">Placeholder title</slot>
        <span>
            <Icon src={isExpanded ? ChevronUp : ChevronDown} class="inline size-4" />
        </span>
    </button>
    {#if isExpanded}
        <div class="prose prose-invert max-w-full border-b border-surface-500 p-4">
            <slot name="content">Placeholder content</slot>
        </div>
    {/if}
</div>
