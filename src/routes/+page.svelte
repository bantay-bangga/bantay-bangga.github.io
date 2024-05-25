<script>
    import Hero from './Hero.svelte';
</script>

<Hero />
<article class="prose prose-invert max-w-none">
    <h1>Overview</h1>
    <p>
        The <b>Bantay Bangga</b> project is a data science initiative undertaken in fulfillment of CS 132 during the second
        semester of the academic year 2023-2024 at the University of the Philippines - Diliman. The project aims to analyze
        hospital occupancy in relation with road-related fatalities starting during the peaks of the pandemic in 2020 and
        2021 to its eventual downtrend in 2022. The road-related records from prior to the pandemic (2020 and below) would
        also be used as a baseline to see if there was an increase in road-related fatalities compared to before the pandemic.
        The datasets used for this analysis contains approximately 46000 road incident records spanning from the years 2016
        to 2024, and approximately 1 million hospital records ranging from the 2020 to 2022.
    </p>
    <h2>Background</h2>
    <p>
        Recently, the Philippine's Department of Transportation (DOTr) alongside the World Health Organization (WHO)
        launched the Global Status Report on Road Safety for the year 2023 [1]. In the report, an alarming increase of
        road-related deaths throughout the past decade was shown. Road traffic deaths increased from 7938 annual deaths
        in 2011 to 11096 deaths in 2021, which is about a 39% increase. Another important statistical detail would be
        that road traffic injuries and casualties were estimated to cost approximately 2.6% of the country's gross
        domestic product. This is a decently sizeable allocation of the country's entire budget. Additionally, the
        current DOTR Secretary Jaime Bautista concluded that there was definitely a need for upgrading road protection
        and safety measures. According to him, this would include road safety being integrated into other types of
        government policy agendas such as child protection.
    </p>
    <p>
        In response to the alarming growth of road and traffic-related incidents over the past years, DOTr and WHO had
        devised the Philippine Road Safety Action Plan encompassing 2023 to 2028 [2]. This plan seeks to reduce the
        number of annual road traffic deaths by 35% in the year 2028. To do this and to create an overall safer road
        environment, the plan focuses on 5 particular aspects: (1) Road safety management, which includes enhancing
        research, gaining trust from stockholders, and adopting global best practices, (2) Safer roads, which includes
        improving infrastructure design, road and street maintenance, and addressing safety and mobility needs of
        vulnerable road users (e.g., cyclists, motorcyclists, pedestrians, children, elderly, persons with
        disabilities), (3) Safer vehicles, which focuses on enhancing vehicle registration and inspection, as well as
        regulating compliance with vehicle standards, (4) Safer road users, which emphasizes to increase public
        awareness and mass support for road safety, which includes the strict enforcement of government laws and the
        media's perspective on the importance of road safety, (5) Post crash response, which focuses on improving access
        and timeliness to care and rehabilitation.
    </p>
    <p>
        <a
            href="https://www.who.int/philippines/news/detail/18-12-2023-dotr--who--road-safety-partners-launch-global-status-report-on-road-safety-2023-in-the-philippines"
            target="_blank">[1]</a
        >
        <a
            href="https://www.who.int/philippines/news/detail/31-05-2023-department-of-transportation--world-health-organization-launch-philippine-road-safety-action-plan-2023-2028"
            target="_blank">[2]</a
        >
    </p>
    <h2>Research Questions</h2>
    <h3>Primary</h3>
    <p>
        Did the pandemic significantly affect the amount and quality of hospital care that went into treating
        road-related casualties and fatalities?
    </p>
    <h3>Secondary</h3>
    <p>
        What were the trends regarding the nature of road crashes before and during the pandemic (e.g., vehicle type and
        classification, cause of the accident)?
    </p>
    <h2>Hypotheses</h2>
    <h3>Null</h3>
    <p>
        There were no observable differences in the overall amount and quality of hospital care received by road-related
        incident victims.
    </p>
    <h3>Alternative</h3>
    <p>
        The pandemic caused hospitals to prioritize COVID-19 afflicted patients, resulting in less care given to
        road-related incident victims.
    </p>
    <h2>Action Plan</h2>
    <p>
        Examine the frequency and severity of recorded road incidents before and after the implementation of new LTO
        policy on January 2020. Succeeding the analysis and assessment of road crashes before and after the LTO driver's
        license issuance changes, we'll provide researchers and government personnel tangible and quantitative proof on
        the improvements (or lack thereof) brought by these modifications. These may be used by local road and traffic
        enforcement to see which certain aspects of road safety in the Philippines are lacking, and act accordingly.
    </p>
    <h2>Data Collection</h2>
    <p>
        Data on the road crash incidents was obtained from the <a
            href="https://itslab.ncts.upd.edu.ph/create/"
            target="_blank"
            >Project <abbr title="Collection, Recording, and Analysis of Traffic Incidence Data">CREATE</abbr></a
        >
        SQL databases of the
        <a href="https://itslab.ncts.upd.edu.ph/" target="_blank"
            >Intelligent Transport Systems Laboratory <dfn
                ><abbr title="Intelligent Transport Systems Laboratory">(ITSLab)</abbr></dfn
            ></a
        >
        at the
        <a href="https://ncts.upd.edu.ph/" target="_blank"
            >National Center for Transportation Studies <dfn
                ><abbr title="National Center for Transportation Studies">(NCTS)</abbr></dfn
            ></a
        >. As of writing, the data set includes incidents as far back as 2016 up to 2024, which amounts to
        <strong>46,209 road crash incidents</strong> in total. Each data point records pertinent information on the nature
        of the road crash: date of incident, time of incident, collision type, incident location, weather condition, and
        light condition. Moreover, for each road crash incident, the data set notes each person involved (e.g., drivers,
        passengers, pedestrians, and witnesses) with their respective ages, sexes, sustained injuries, resulting fatalities,
        and usage of safety equipment (e.g., seatbelts and helmets). Finally, for each road crash incident, the data set
        also encodes the model and make of each vehicle involved in the incident as well as their intended function (e.g.,
        private, public, government, or for-hire).
    </p>
    <p>
        Out of respect for the privacy of the individuals involved (sometimes fatally) in these road crash incidents,
        personally identifiable columns such as names, plate numbers, license numbers, addresses, and hospitals have
        been intentionally redacted from the original databases. Although these are readily available from the raw
        databases, Bantay Bangga deems this data unnecessary and irrelevant to the data analysis.
    </p>
    <p>The resulting data set is a left-join of all the one-to-many relationships represented by the database.</p>
    <ul>
        <li>
            One incident is to many involved persons. Note that these include drivers, passengers, pedestrians, and
            witnesses.
        </li>
        <li>
            One incident is to many involved vehicles. Note that most collisions occur between two vehicles, but it is
            totally possible to be involved in a mass collision.
        </li>
    </ul>
    <a
        href="https://docs.google.com/spreadsheets/d/11p-dVOkn23gm96M7nfzS0bfT7h5TYGks1wgk4W-c4GY"
        target="_blank"
        class="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white no-underline hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >See the Data Set with UP Mail</a
    >
    <p>
        One major limitation of the data set is the ubiquity of null data and misspelled categories. To address these
        concerns, only non-null entries of column-specific analyses will be considered. For misspellings and variations
        in letter casing, text data will be standardized in lower case or upper case. Either is sufficient as long as
        the scheme is consistent for a particular analysis.
    </p>

    <h2>Results</h2>

    <h3>Research Question 1: To what extent does hospital capacity affect the fatality rate of road incidents?</h3>
    <div class="grid grid-flow-row grid-cols-2 gap-2">
        <div class="col-span-full rounded-lg bg-yellow-600 sm:col-span-1">Plot1 (No injuries versus bed occupancy)</div>
        <div class="col-span-full rounded-lg bg-red-600 sm:col-span-1">Plot2 (Minor injuries versus bed occupancy)</div>
        <div class="col-span-full rounded-lg bg-blue-600 sm:col-span-1">
            Plot3 (Serious injuries versus bed occupancy)
        </div>
        <div class="col-span-full rounded-lg bg-green-600 sm:col-span-1">
            Plot4 (Fatal injuries versus bed occupancy)
        </div>
        <div class="col-span-full rounded-lg bg-violet-600">Plot5 (Total injuries versus bed occupancy)</div>
    </div>
    <p>Insert summary here.</p>
    <p>Insert conclusion here (disagree with null hypothesis).</p>

    <h3>Research Question 2: What factors contribute to a hospital's overall capacity to provide care to patients?</h3>
    <div class="grid grid-flow-row grid-cols-2 gap-2">
        <div class="col-span-full rounded-lg bg-yellow-600">Plot1 (Total injuries versus bed occupancy)</div>
        <div class="col-span-full rounded-lg bg-red-600 sm:col-span-1">
            Plot2 (Total injuries versus staff availability)
        </div>
        <div class="col-span-full rounded-lg bg-blue-600 sm:col-span-1">
            Plot3 (Total injuries versus equipment availability)
        </div>
    </div>
    <p>Insert summary here.</p>
    <p>Insert conclusion here (disagree with null hypothesis).</p>

    <h3>Pilipinas in a Nutshell</h3>
    <div class="rounded-lg bg-violet-600">Nutshell Plot (injury trends)</div>
    <p>Insert summary here.</p>
    <p>Insert conclusion here (disagree with null hypothesis).</p>
</article>
