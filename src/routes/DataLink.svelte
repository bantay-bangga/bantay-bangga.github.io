<script lang="ts">
    // eslint-disable-next-line init-declarations
    export let href: string;
</script>

<a
    {href}
    target="_blank"
    class="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 align-middle text-sm font-medium text-primary-950 no-underline shadow-md hover:bg-primary-600"
    ><slot /></a
>
