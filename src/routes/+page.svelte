<script>
    import { ArrowTopRightOnSquare } from '@steeze-ui/heroicons';
    import DataLink from './DataLink.svelte';
    import Hero from './Hero.svelte';
    import { Icon } from '@steeze-ui/svelte-icon';
    import Researcher from './Researcher.svelte';

    import basti from '$lib/images/basti.png?enhanced';
    import ellis from '$lib/images/ellis.png?enhanced';
    import jelly from '$lib/images/jelly.png?enhanced';
</script>

<Hero />
<article class="prose prose-invert max-w-none">
    <h2>Overview</h2>
    <p>
        The <b>Bantay Bangga</b> project is a data science project undertaken in fulfillment of CS 132 during the second
        semester of the academic year 2023-2024 at the
        <a target="_blank" href="https://upd.edu.ph/">University of the Philippines Diliman</a>. The project
        investigates correlations between road crash injuries (e.g., minor, serious, and fatal) and hospital capacity
        (for some definition of "capacity" involving bed occupancy, equipment availability, and staff manpower). The
        analysis relies on two sources of data: (1) approximately 46,000 road incident records spanning from 2016 to
        2024 and (2) approximately one million records of hospital bed occupancy, human resources, and medical equipment
        from the Department of Health <dfn><abbr title="Department of Health">(DOH)</abbr></dfn> from 2020 to 2022 during
        the height of the COVID-19 pandemic.
    </p>
    <h2>Background</h2>
    <p>
        Recently, the Philippine Department of Transportation <dfn
            ><abbr title="Department of Transportation">(DOTr)</abbr></dfn
        >
        alongside the World Health Organization <dfn><abbr title="World Health Organization">(WHO)</abbr></dfn>
        launched the
        <a
            target="_blank"
            href="https://www.who.int/philippines/news/detail/18-12-2023-dotr--who--road-safety-partners-launch-global-status-report-on-road-safety-2023-in-the-philippines"
            >2023 Global Status Report on Road Safety</a
        >. The report finds an alarming increase of road-related deaths in the past decade. Road traffic deaths
        increased from 7,938 annual deaths in 2011 to 11,096 deaths in 2021, which is roughly a 39% increase. Moreover,
        road traffic injuries and casualties were estimated to cost approximately 2.6% of the country's gross domestic
        product. This is a rather sizeable allocation of the country's entire budget. Given these results,
        <abbr title="Department of Transportation">DOTr</abbr> Secretary Jaime Bautista expressed the need to deliver impactful
        multi-sector improvements by upgrading road protection and safety measures.
    </p>
    <p>
        In response to the alarming growth of road and traffic-related incidents over the past years, <abbr
            title="Department of Transportation">DOTr</abbr
        >
        and <abbr title="World Health Organization">WHO</abbr> had devised the
        <a
            target="_blank"
            href="https://www.who.int/philippines/news/detail/31-05-2023-department-of-transportation--world-health-organization-launch-philippine-road-safety-action-plan-2023-2028"
            >Philippine Road Safety Action Plan</a
        >, which spans five years of development from 2023 to 2028. This plan seeks to reduce the number of annual road
        traffic deaths by 35% by the year 2028. To do this and to create an overall safer road environment, the plan
        focuses on five particular aspects:
    </p>
    <ol>
        <li>
            <strong>road safety management</strong>, which includes enhancing research, gaining the trust of
            stockholders, and adopting global best practices.
        </li>
        <li>
            <strong>safer roads</strong>, which includes improving infrastructure design, road and street maintenance,
            and addressing safety and mobility needs of vulnerable road users (e.g., cyclists, motorcyclists,
            pedestrians, children, elderly, and persons with disabilities).
        </li>
        <li>
            <strong>safer vehicles</strong>, which focuses on enhancing vehicle registration and inspection, as well as
            regulating compliance with vehicle standards.
        </li>
        <li>
            <strong>safer road users</strong>, which emphasizes to increase public awareness and mass support for road
            safety, which includes the strict enforcement of government laws and the media's perspective on the
            importance of road safety.
        </li>
        <li>
            <strong>post-crash response</strong>, which focuses on improving access and timeliness to care and
            rehabilitation.
        </li>
    </ol>
    <h2>Research Questions</h2>
    <ol>
        <li><em>To what extent does hospital capacity affect the fatality rate of road incidents?</em></li>
        <li><em>What factors contribute to a hospital's overall capacity to provide care to patients?</em></li>
    </ol>
    <h2>Action Plan</h2>
    <p>
        We examine the injury types of recorded road incidents starting from the onset of the COVID-19 pandemic in 2020
        to its slumps in 2022. We then relate the number of minor, serious, and fatal injuries with different factors of
        hospital capacity (e.g., bed occupancy, staff availability, and equipment availability) using statistical
        analysis with hypothesis testing. Researchers, government officials, and hospital organizations can use these
        results to strengthen or deprioritize (if necessary) certain factors of hospital capacity to reduce road-related
        injuries overall.
    </p>
    <h2>Data Collection</h2>
    <h3>Road Crash Incidents</h3>
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
    <p>
        One major limitation of the data set is the ubiquity of null data and misspelled categories. To address these
        concerns, only non-null entries of column-specific analyses will be considered. For misspellings and variations
        in letter casing, text data will be standardized in lower case or upper case. Either is sufficient as long as
        the scheme is consistent for a particular analysis.
    </p>
    <div class="flex flex-wrap justify-center gap-2">
        <DataLink href="https://docs.google.com/spreadsheets/d/11p-dVOkn23gm96M7nfzS0bfT7h5TYGks1wgk4W-c4GY">
            <span>ACDA Road Crash Incidents</span>
            <Icon src={ArrowTopRightOnSquare} class="inline size-4" />
        </DataLink>
    </div>
    <h3>Hospital Capacity during the COVID-19 Pandemic</h3>
    <p>
        The <abbr title="Department of Health">DOH</abbr> maintains a regularly updated data drop of patient and hospital
        information on the COVID-19 pandemic. This project relates this data with road crash incidents during that time.
        Specifically, the data analysis used the datasets on bed occupancy, medical staff, and medical equipment. Some data
        (i.e., medical staff data) has changed columns and data formats over the years, which required appropriate renaming
        during the data analysis.
    </p>
    <div class="flex flex-wrap justify-center gap-2">
        <DataLink href="https://drive.google.com/file/d/1FbKwqW3Qp8tM-dAcN-yfTZsMB7XtmmH2/view">
            <span>Bed Occupancy (November 19, 2022)</span>
            <Icon src={ArrowTopRightOnSquare} class="inline size-4" />
        </DataLink>
        <DataLink href="https://drive.google.com/file/d/1az_8HACj8bURqvn_gQLgBuPt-DGcBLyW/view">
            <span>Medical Staff (December 31, 2021)</span>
            <Icon src={ArrowTopRightOnSquare} class="inline size-4" />
        </DataLink>
        <DataLink href="https://drive.google.com/file/d/1BVm-JeuPJSScawlnKjmmdElYQfPDGz0G/view">
            <span>Medical Staff (November 19, 2022)</span>
            <Icon src={ArrowTopRightOnSquare} class="inline size-4" />
        </DataLink>
        <DataLink href="https://drive.google.com/file/d/1tbqoHLtWfu4hKakE7HtuNgkr7EiYBg1F/view">
            <span>Medical Equipment (November 18, 2022)</span>
            <Icon src={ArrowTopRightOnSquare} class="inline size-4" />
        </DataLink>
    </div>

    <h2>Results</h2>
    <h3>Research Question 1: To what extent does hospital capacity affect the fatality rate of road incidents?</h3>
    <h4>Bed Occupancy vs. Minor Injuries</h4>
    <div class="rounded-lg bg-red-600 sm:col-span-1">Plot2 (Minor injuries versus bed occupancy)</div>
    <p>
        First, the total number of road crash victims with <b>minor</b> injuries is compared to the total bed occupancy.
        Eyeballing the plot shows a slight linear relationship between the two variables with a correlation coefficient
        <math xmlns="http://www.w3.org/1998/Math/MathML"
            ><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mi>.</mi><mn>0045</mn></mrow></math
        >
        and a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value to be
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>5849</mn></mrow></math>. However,
        these results are unfortunately not statistically significant at a significance level of 90%. That is, we fail
        to reject the null hypothesis: the total number of minor injuries is not linearly related to the total bed
        occupancy.
    </p>
    <p>
        However, a multivariate linear regression shows more promising results. The best and simplest set of predictors
        involve the beds occupied by COVID-19 patients. Specifically, these two variables are:
    </p>
    <ol>
        <li>
            The total number of COVID-19 patients in <dfn
                >Intensive Care Unit <abbr title="Intensive Care Unit">(ICU)</abbr></dfn
            >
            beds
        </li>
        <li>
            The total number of COVID-19 patients in non-<abbr title="Intensive Care Unit">ICU</abbr> beds.
        </li>
    </ol>
    <p>
        These two variables yield <math xmlns="http://www.w3.org/1998/Math/MathML"
            ><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mi>.</mi><mn>0666</mn></mrow></math
        >
        with the <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-values
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0341</mn></mrow></math>
        and
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0381</mn></mrow></math>,
        respectively. At a significance level of 95%, the null hypothesis may therefore be rejected with statistical
        certainty. That is, the total number of COVID-19 patients in <abbr title="Intensive Care Unit">ICU</abbr> beds
        and non-<abbr title="Intensive Care Unit">ICU</abbr> beds form a linear combination that determines the total number
        of minor injuries in road crash incidents.
    </p>

    <h4>Bed Occupancy vs. Serious Injuries</h4>
    <div class="rounded-lg bg-blue-600 sm:col-span-1">Plot3 (Serious injuries versus bed occupancy)</div>
    <p>
        A similar analysis can be done for serious injuries. Plotting the weekly total number of beds versus the weekly
        total number of serious injuries yields the scatter plot above. The regression results in <math
            xmlns="http://www.w3.org/1998/Math/MathML"
            ><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mi>.</mi><mn>0133</mn></mrow></math
        >
        with a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>3449</mn></mrow></math>. Again,
        these results are not statistically significant. We thus fail to reject the null hypothesis: these two variables
        are not linearly related.
    </p>
    <p>
        Unfortunately, searching for a stronger correlation involving COVID-19 patients and <abbr
            title="Intensive Care Unit">ICU</abbr
        > beds (just like in the previous section) leads to the same negative results. There is no statistically significant
        way to linearly relate the weekly total bed occupancy with the total weekly number of serious injuries in road crash
        incidents.
    </p>

    <h4>Bed Occupancy vs. Fatal Injuries</h4>
    <div class="rounded-lg bg-green-600 sm:col-span-1">Plot4 (Fatal injuries versus bed occupancy)</div>
    <p>
        For fatal injuries, the correlation with hospitcal capacity is stronger. With the weekly total number of
        occupied beds being the metric for hospital capacity, we obtain a correlation with
        <math xmlns="http://www.w3.org/1998/Math/MathML"
            ><mrow
                ><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo separator="true">.</mo><mrow
                    ><mn>0941</mn></mrow
                ></mrow
            ></math
        >
        and a
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0104</mn></mrow></math>. At a
        significance level of 95%, we may reject the null hypothesis with statistical certainty: the two variables are
        indeed linearly related.
        <em
            >Contrary to our initial hypotheses, when the weekly total number of occupied beds increase, the weekly
            total number of fatal road crash incidents decreases.</em
        >
    </p>
    <p>
        Meanwhile, with the weekly total number of occupied <abbr title="Intensive Care Unit">ICU</abbr> beds by
        COVID-19 patients as the metric for hospital capacity, we obtain a correlation with
        <math xmlns="http://www.w3.org/1998/Math/MathML"
            ><mrow
                ><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo separator="true">.</mo><mrow
                    ><mn>0964</mn></mrow
                ></mrow
            ></math
        >
        and a
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0094</mn></mrow></math>. At a
        significance level of 95%, we may reject the null hypothesis with statistical certainty: the two variables are
        indeed linearly related. When the weekly total number of occupied <abbr title="Intensive Care Unit">ICU</abbr> beds
        with COVID-19 patients increase,
    </p>
    <p>
        Finally, with the weekly total number of occupied non-<abbr title="Intensive Care Unit">ICU</abbr> beds by
        COVID-19 patients as the metric for hospital capacity, we obtain a negative correlation with
        <math xmlns="http://www.w3.org/1998/Math/MathML"
            ><mrow
                ><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo separator="true">.</mo><mrow
                    ><mn>0663</mn></mrow
                ></mrow
            ></math
        >
        with a
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0327</mn></mrow></math>. At a
        significance level of 95%, we may reject the null hypothesis with statistical certainty: the two variables are
        indeed linearly related.
    </p>

    <h4>Staff Resources vs. Minor Injuries</h4>

    <h4>Staff Resources vs. Serious Injuries</h4>

    <h4>Staff Resources vs. Fatal Injuries</h4>

    <h4>Medical Equipment vs. Minor Injuries</h4>

    <h4>Medical Equipment vs. Serious Injuries</h4>

    <h4>Medical Equipment vs. Fatal Injuries</h4>

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

    <h3>Pilipinas in a Nutshell (PILIPINUTS 2023)</h3>
    <p>
        Recorded road incidents in the Philippines reached a peak in November 2019, with 369 cases of minor injuries and
        38 fatalities. Lessened road traffic following the onset of the pandemic in 2020 led to a decline in these
        incidents; however, they did not drop to zero. This analysis aims to study the impact of the pandemic on
        healthcare resources for road incident victims.
    </p>
    <p>Insert conclusion here (disagree with null hypothesis).</p>
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
