<script>
    import { Icon } from '@steeze-ui/svelte-icon';
    import { MarkGithub } from '@steeze-ui/octicons';
</script>

<div class="grid grid-cols-2 gap-2 text-surface-950 md:grid-cols-5">
    <div
        class="col-span-full space-y-4 rounded-lg bg-primary-400 px-6 py-12 shadow-md transition-transform hover:scale-105 hover:shadow-2xl md:col-span-4 md:px-10"
    >
        <h1 class="font-anon text-6xl font-bold tracking-wider md:text-7xl">Bantay Bangga</h1>
        <p class="font-raleway">
            What would happen if most hospitals couldn't entertain additional patients? Would more lives be at risk if
            this were the case? Would our roads continue to present vehicular hazards and incidents on the daily?
            <span class="font-bold">Bantay Bangga</span> is here to provide answers through thorough analysis of road crashes
            and hospital records during both the spike and the slump of the pandemic.
        </p>
    </div>
    <div
        class="flex items-center justify-center rounded-lg bg-secondary px-10 py-12 shadow-md transition-transform hover:scale-105 hover:shadow-2xl"
    >
        <span>
            <h2 class="m-0 w-min text-center font-anon text-4xl font-bold tracking-wider text-surface-950">
                2020 to 2022
            </h2>
            <p class="text-center font-raleway text-lg">DOH Data</p>
        </span>
    </div>
    <div
        class="flex items-center justify-center rounded-lg bg-tertiary-300 px-10 py-12 shadow-md transition-transform hover:scale-105 hover:shadow-2xl md:order-last md:col-span-2"
    >
        <p class="w-min text-center font-raleway">
            Approximately <span class="font-anon text-4xl font-bold md:text-6xl">10047</span> recorded road incidents in
            the Philippines
        </p>
    </div>
    <div
        class="col-span-full space-y-2 rounded-lg bg-tertiary-50 px-6 py-12 shadow-md transition-transform hover:scale-105 hover:shadow-2xl md:col-span-3 md:px-10"
    >
        <span class="text-gray-500">Researchers</span>
        <h2 class="font-anon text-2xl font-bold tracking-wider text-surface-950 sm:text-4xl">FerrisWheel&#129408;</h2>
        <ul class="font-raleway underline">
            <li class="flex items-center gap-1">
                <Icon src={MarkGithub} size="3%" /><a href="https://github.com/Dox-Dev" target="_blank"
                    >Jose Ellis Miguel C. Caluag</a
                >
            </li>
            <li class="flex items-center gap-1">
                <Icon src={MarkGithub} size="3%" /><a href="https://github.com/BastiDood" target="_blank"
                    >Sebastian Luis S. Ortiz</a
                >
            </li>
            <li class="flex items-center gap-1">
                <Icon src={MarkGithub} size="3%" /><a href="https://github.com/Anjellyrika" target="_blank"
                    >Angelica Julianne A. Raborar</a
                >
            </li>
        </ul>
    </div>
</div>
