<script>
    import Hero from './Hero.svelte';
</script>

<Hero />

<article class="prose prose-invert">
    <h1> Overview </h1>

    <p>
        The Bantay Bangga project is a data science initiative undertaken in fulfillment of CS 132 during the second semester of the academic year 2023-2024 at the University of the Philippines - Diliman.
        The project aims to analyze and assess the change in road safety caused by the modified procedure of the issuance of driver's licenses by the Land Transportation Office (LTO) in the Philippines this past January 2020.
        The dataset to be used for this analysis contains approximately 46000 entries of road accidents that span from the years 2016 to 2024.
    </p>

    <h1> Background </h1>
    <!-- CONTENT -->
    <p>
        <!-- NOTE: We only need 1-3 references, so far we've got 2. -->

        <!-- FIRST REFERENCE -->
        Recently, the Philippine's Department of Transportation (DOTr) alongside the World Health Organization (WHO) launched the Global Status Report on Road Safety for the year 2023 [1].
        In the report, an alarming increase of road-related deaths throughout the past decade was shown. 
        Road traffic deaths increased from 7938 annual deaths in 2011 to 11096 deaths in 2021, which is about a 39% increase.
        Another important statistical detail would be that road traffic injuries and casualties were estimated to cost approximately 2.6% of the country's gross domestic product.
        This is a decently sizeable allocation of the country's entire budget.
        Additionally, the current DOTR Secretary Jaime Bautista concluded that there was definitely a need for upgrading road protection and safety measures.
        According to him, this would include road safety being integrated into other types of government policy agendas such as child protection.

        <br/>
        <!-- SECOND REFERENCE-->
        In response to the alarming growth of road and traffic-related incidents over the past years, DOTr and WHO had devised the Philippine Road Safety Action Plan encompassing 2023 to 2028 [2].
        This plan seeks to reduce the number of annual road traffic deaths by 35% in the year 2028.
        To do this and to create an overall safer road environment, the plan focuses on 5 particular aspects:
        (1) Road safety management, which includes enhancing research, gaining trust from stockholders, and adopting global best practices,
        (2) Safer roads, which includes improving infrastructure design, road and street maintenance, and addressing safety and mobility needs of vulnerable road users [e.g., cyclists, motorcyclists, pedestrians, children, elderly, persons with disabilities],
        (3) Safer vehicles, which focuses on enhancing vehicle registration and inspection, as well as regulating compliance with vehicle standards,
        (4) Safer road users, which emphasizes to increase public awareness and mass support for road safety, which includes the strict enforcement of government laws and the media's perspective on the importance of road safety,
        (5) Post crash response, which focuses on improving access and timeliness to care and rehabilitation

        <br/>
        <!-- THIRD REFERENCE -->

    </p>
    <!-- REFERENCES -->
    <p>
        <a href="https://www.who.int/philippines/news/detail/18-12-2023-dotr--who--road-safety-partners-launch-global-status-report-on-road-safety-2023-in-the-philippines" target="_blank">[1]</a>
        <a href="https://www.who.int/philippines/news/detail/31-05-2023-department-of-transportation--world-health-organization-launch-philippine-road-safety-action-plan-2023-2028" target="_blank">[2]</a>
    </p>    

    <h1> Research Questions </h1>

    <h2> Primary </h2>
    <p>
        Has the recent changes in the issuance of driver's licenses by the LTO improved overall road safety in Metro Manila?
    </p>

    <h2> Secondary </h2>
    <p>
        How has the number of road crashes in the Philippines changed from before to after January 2020? 
    </p>

    <h1> Hypotheses </h1>

    <h2> Null </h2>
    <p>
        There were no observable differences in overall road safety of the Philippines after the changes in driver's license issuance made by the LTO.
    </p>

    <h2> Alternative </h2>
    <p>
        The changes made to driver's license issuance by the LTO have resulted in improved overall road safety within the Philippines.
    </p>

    <h1> Action Plan </h1>

    <p>
        Examine the frequency and severity of recorded road incidents before and after the implementation of new LTO policy on January 2020.
        Succeeding the analysis and assessment of road crashes before and after the LTO driver's license issuance changes,
            we'll provide researchers and government personnel tangible and quantitative proof on the improvements (or lack thereof) brought by these modifications.
        These may be used by local road and traffic enforcement to see which certain aspects of road safety in the Philippines are lacking, and act accordingly.
    </p>
</article>