<script lang="ts">
    // eslint-disable-next-line init-declarations
    export let href: string;
</script>

<a
    {href}
    target="_blank"
    class="inline-flex items-center gap-2 rounded-lg bg-green-700 px-5 py-2.5 align-middle text-sm font-medium text-white no-underline hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    ><slot /></a
>
