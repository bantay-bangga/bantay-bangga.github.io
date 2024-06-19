<script>
    import {
        ArrowTrendingUp,
        ClipboardDocumentList,
        PresentationChartLine,
        QuestionMarkCircle,
    } from '@steeze-ui/heroicons';
    import AsideCard from '$lib/components/AsideCard.svelte';
    import { CarCrash, LocalHospital } from '@steeze-ui/material-design-icons';
    import DataCollection from './DataCollection.svelte';
    import DataExploration from './DataExploration.svelte';
    import Hero from './Hero.svelte';
    import { Icon } from '@steeze-ui/svelte-icon';
    import MachineLearning from './MachineLearning.svelte';
    import Researcher from './Researcher.svelte';

    import basti from '$lib/images/basti.png?enhanced';
    import ellis from '$lib/images/ellis.png?enhanced';
    import jelly from '$lib/images/jelly.png?enhanced';
</script>

<Hero />
<article class="max-w-none">
    <h2>Overview</h2>
    <div class="grid gap-8 gap-x-20 md:grid-cols-2">
        <AsideCard>
            <p class="text-2xl" slot="card-content">
                The <b>Bantay Bangga</b> project investigates correlations between road crash injuries of varying severity
                (e.g., minor, serious, and fatal) and hospital capacity (for some definition of "capacity" involving bed
                occupancy, equipment availability, and staff manpower).
            </p>
        </AsideCard>
        <div class="row-span-1 grid auto-rows-min gap-4">
            <p>The analysis relies on two sources of data:</p>
            <div class="grid grid-cols-[auto_1fr] items-center gap-4">
                <Icon src={CarCrash} class="inline size-8" />
                <p class="text-lg">
                    approximately <strong>46,000 road incident records</strong> in the Philippines spanning from 2016 to
                    2024
                </p>
            </div>
            <div class="grid grid-cols-[auto_1fr] items-center gap-4">
                <Icon src={LocalHospital} class="inline size-8" />
                <p class="text-lg">
                    approximately <strong
                        >one million records of hospital bed occupancy, human resources, and medical equipment from the
                        Department of Health
                    </strong><dfn> <abbr title="Department of Health">(DOH)</abbr></dfn> from 2020 to 2022 during the height
                    of the COVID-19 pandemic.
                </p>
            </div>
        </div>
        <div class="md:col-span-2">
            <p>
                <b>Bantay Bangga</b> is a data science project undertaken in fulfillment of CS 132 under Professor Paul
                Regonia, during the second semester of the academic year 2023-2024 at the
                <a target="_blank" href="https://upd.edu.ph/">University of the Philippines Diliman</a>.
            </p>
        </div>
    </div>

    <h2>Background</h2>
    <p>
        The past decade has seen an alarming <strong>39% increase</strong> in road-related deaths from 2011-2021,
        according to the
        <a
            target="_blank"
            href="https://www.who.int/philippines/news/detail/18-12-2023-dotr--who--road-safety-partners-launch-global-status-report-on-road-safety-2023-in-the-philippines"
            >2023 Global Status Report on Road Safety</a
        >
        by the Department of Transportation <dfn><abbr title="Department of Transportation">(DOTr)</abbr></dfn>
        alongside the World Health Organization <dfn><abbr title="World Health Organization">(WHO)</abbr></dfn>.
    </p>
    <div class="my-4 flex flex-row flex-wrap items-center justify-around gap-2">
        <div class="rounded-xl border border-tertiary-700 bg-tertiary-900 p-6 text-center">
            <p class="text-lg">Increase in annual road casualties in the PH</p>
            <div class="grid-cols-auto grid grid-flow-col">
                <div class="grid grid-rows-[auto_1fr_auto] p-2">
                    <p class="font-anon text-4xl font-bold">7938</p>
                    <p>in 2011</p>
                </div>
                <Icon src={ArrowTrendingUp} class="inline size-12 self-center justify-self-center" />
                <div class="grid-rows-auto grid p-2 text-secondary">
                    <p class="font-anon text-4xl font-bold">11096</p>
                    <p>in 2021</p>
                </div>
            </div>
        </div>
        <div class="grid auto-rows-min rounded-xl border border-tertiary-700 bg-tertiary-900 p-6 text-center">
            <p class="text-lg">Road injuries cost approx.</p>
            <p class="font-anon text-4xl font-bold text-secondary">2.6%</p>
            <p class="text-lg">of the country's GDP</p>
        </div>
    </div>
    <p>
        In response, <abbr title="Department of Transportation">DOTr</abbr> and
        <abbr title="World Health Organization">WHO</abbr>
        had devised the
        <a
            target="_blank"
            href="https://www.who.int/philippines/news/detail/31-05-2023-department-of-transportation--world-health-organization-launch-philippine-road-safety-action-plan-2023-2028"
            >Philippine Road Safety Action Plan</a
        >. This plan seeks to reduce annual road traffic deaths by 35% by the year 2028 by focusing on five aspects:
    </p>

    <div class="m-4 overflow-x-auto rounded-lg shadow-md">
        <table class="w-auto text-left font-raleway text-sm tracking-wide">
            <tbody>
                <tr class="border-b border-surface-500">
                    <th scope="row" class="bg-surface-900 px-4 py-2"> Road safety management </th>
                    <td class="px-6 py-4">
                        enhancing research, gaining the trust of stockholders, adopting global best practices
                    </td>
                </tr>
                <tr class="border-b border-surface-500">
                    <th scope="row" class="bg-surface-900 px-4 py-2"> Safer roads </th>
                    <td class="px-6 py-4">
                        improving infrastructure, road maintenance, addressing the needs of vulnerable road users (e.g.,
                        cyclists, motorcyclists, pedestrians, children, elderly, PWD)
                    </td>
                </tr>
                <tr class="border-b border-surface-500">
                    <th scope="row" class="bg-surface-900 px-4 py-2"> Safer vehicles </th>
                    <td class="px-6 py-4">
                        enhancing vehicle registration, inspection, and regulation in compliance with vehicle standards
                    </td>
                </tr>
                <tr class="border-b border-surface-500">
                    <th scope="row" class="bg-surface-900 px-4 py-2"> Safer road users </th>
                    <td class="px-6 py-4">
                        increasing public awareness of road safety, enforcement of government laws
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="bg-surface-900 px-4 py-2"> Post-crash response </th>
                    <td class="px-6 py-4 font-bold"> improving access and timeliness to care and rehabilitation </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="grid gap-x-20 md:grid-cols-[1.75fr_1.25fr]">
        <div class="grid gap-2">
            <h2 class="col-span-2">Action Plan</h2>
            <span>✔</span>
            <p>
                We examine the injury types of recorded road incidents starting from the onset of the COVID-19 pandemic
                in 2020 to its slumps in 2022.
            </p>
            <span>✔</span>
            <p>
                We then relate the number of minor, serious, and fatal injuries with different factors of hospital
                capacity (e.g., bed occupancy, staff availability, and equipment availability) using statistical
                analysis with hypothesis testing.
            </p>
            <span>✔</span>
            <p>
                Researchers, government officials, and hospital organizations can use these results to strengthen or
                deprioritize (if necessary) certain factors of hospital capacity to reduce road-related injuries
                overall.
            </p>
        </div>
        <div class="grid auto-rows-min gap-2">
            <h2 class="col-span-2">Research Questions</h2>
            <span>❓</span>
            <p>To what extent does hospital capacity affect the fatality rate of road incidents?</p>
            <span>❓</span>
            <p>What factors contribute to a hospital's overall capacity to provide care to patients?</p>
        </div>
    </div>

    <div class="prose prose-invert max-w-none">
        <h2 class="not-prose">Data Collection</h2>
        <DataCollection />
        <h2 class="not-prose">Data Exploration</h2>
        <DataExploration />
        <h2 class="not-prose">Ordinary Least-Squares Linear Regression</h2>
        <MachineLearning />
        <h3 class="not-prose">Pilipinas in a Nutshell (PILIPINUTS 2023)</h3>
        <enhanced:img src="$lib/images/Bantay-Bangga-Nutshell.png" alt="Bantay Bangga plot for Pilipinuts 2023" />
        <p>
            Road incidents in the Philippines are commonly reported. A fatality rate of 25% of incidents was recorded in
            November 2020, in addition to widespread cases of minor and serious injuries resulting from road incidents.
            Hospital capacity and quality of care should be kept at a sufficient level for these road crash victims.
            However, as the COVID-19 pandemic demanded the world's full attention, this unique situation poses an
            interesting inquiry into what could possibly affect road crash incident fatalities and their possible
            avenues for recovery in a time where something else (i.e., the pandemic) was the top priority.
        </p>
        <p>
            The features include hospital bed occupancy (with COVID-19 and non-COVID-19 beds being noted), hospital
            staff availability, and medical equipment availability. A significance level of 95% was set as the standard
            to see linear relationships between features of hospital capacity and road-related fatality rates. Among
            these features, hospital bed occupancy is linearly related with minor and fatal injuries through a linear
            combination consisting of the total number of COVID-19 patients in both <abbr title="Intensive Care Unit"
                >ICU</abbr
            >
            beds and non-<abbr title="Intensive Care Unit">ICU</abbr>
            beds. Unfortunately, staff resources showed no linear relationship with any of the fatality types and cannot
            be considered a predictor. Medical equipment is linearly related with serious injuries through a linear combination
            of surgical masks, gloves, and face shields. All of the features mentioned above have a significance level of
            at least 95%, which is sufficient for determining the potential of these features as predictors.
        </p>
    </div>

    <h2>About Us</h2>
    <div class="not-prose grid grid-cols-1 gap-4 md:grid-cols-3">
        <Researcher
            src={ellis}
            email="josecaluag6@gmail.com"
            github="Dox-Dev"
            linkedin="ellis-caluag"
            alt="picture of Ellis Caluag with headphones against a red backdrop">Jose Ellis Miguel C. Caluag</Researcher
        >
        <Researcher
            src={basti}
            website="bastidood.github.io"
            email="ortizbasti16@gmail.com"
            devto="somedood"
            github="BastiDood"
            linkedin="basti-ortiz"
            alt="picture of Basti Ortiz against a grassy background">Sebastian Luis S. Ortiz</Researcher
        >
        <Researcher
            src={jelly}
            email="jelly.rika.rbr@gmail.com"
            github="Anjellyrika"
            linkedin="jelly-raborar"
            alt="picture of Jelly Raborar against a background with a lot of trees"
            >Angelica Julianne A. Raborar</Researcher
        >
    </div>
</article>
