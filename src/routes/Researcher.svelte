<script lang="ts">
    import { Devdotto, Github, Linkedin } from '@steeze-ui/simple-icons';
    import { Envelope, Link } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';

    // eslint-disable-next-line init-declarations
    export let src: string;
    // eslint-disable-next-line init-declarations
    export let alt: string;
    // eslint-disable-next-line no-undefined
    export let email = undefined as string | undefined;
    // eslint-disable-next-line no-undefined
    export let website = undefined as string | undefined;
    // eslint-disable-next-line no-undefined
    export let devto = undefined as string | undefined;
    // eslint-disable-next-line no-undefined
    export let github = undefined as string | undefined;
    // eslint-disable-next-line no-undefined
    export let linkedin = undefined as string | undefined;
</script>

<div class="inline-block space-y-2 rounded-lg border border-surface-200 bg-surface-900 p-6 shadow hover:bg-surface-800">
    <enhanced:img {src} {alt} class="mx-auto block size-32 rounded-full border-4 border-primary" />
    <h4 class="text-center text-2xl font-bold tracking-tight text-surface-50"><slot /></h4>
    <ol class="align-middle underline">
        {#if email}
            <li class="flex items-center gap-2">
                <Icon src={Envelope} class="inline size-4" />
                <a target="_blank" href="mailto:{email}">{email}</a>
            </li>
        {/if}
        {#if website}
            <li class="flex items-center gap-2">
                <Icon src={Link} class="inline size-4" />
                <a target="_blank" href="https://{website}/">{website}</a>
            </li>
        {/if}
        {#if devto}
            <li class="flex items-center gap-2">
                <Icon src={Devdotto} class="inline size-4" />
                <a target="_blank" href="https://dev.to/{devto}">@{devto}</a>
            </li>
        {/if}
        {#if github}
            <li class="flex items-center gap-2">
                <Icon src={Github} class="inline size-4" />
                <a target="_blank" href="https://github.com/{github}">@{github}</a>
            </li>
        {/if}
        {#if linkedin}
            <li class="flex items-center gap-2">
                <Icon src={Linkedin} class="inline size-4" />
                <a target="_blank" href="https://www.linkedin.com/in/{linkedin}/">in/{linkedin}</a>
            </li>
        {/if}
    </ol>
</div>
