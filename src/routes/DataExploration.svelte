<script>
    import BedsvsFatal from '$lib/plots/data/totalbeds-vs-fatal.json';
    import BedsvsMinor from '$lib/plots/data/totalbeds-vs-minor.json';
    import BedsvsSerious from '$lib/plots/data/totalbeds-vs-serious.json';
    import BedsvsTotal from '$lib/plots/data/totalbeds-vs-totalinjury.json';
    import DoctorvsFatal from '$lib/plots/data/doc-vs-fatal.json';
    import EquipvsFatal from '$lib/plots/data/equip-vs-fatal.json';
    import EquipvsMinor from '$lib/plots/data/equip-vs-minor.json';
    import EquipvsSerious from '$lib/plots/data/equip-vs-serious.json';
    import FaceShieldvsSerious from '$lib/plots/data/faceshield-vs-serious.json';
    import GlovesvsSerious from '$lib/plots/data/gloves-vs-serious.json';
    import ICUOCvsFatal from '$lib/plots/data/icuoc-vs-fatal.json';
    import NonICUOCvsFatal from '$lib/plots/data/nonicuoc-vs-fatal.json';
    import NursevsFatal from '$lib/plots/data/nurse-vs-fatal.json';
    import PlotlyScatter from '$lib/components/PlotlyScatter.svelte';
    import StaffvsFatal from '$lib/plots/data/staff-vs-fatal.json';
    import StaffvsMinor from '$lib/plots/data/staff-vs-minor.json';
    import StaffvsSerious from '$lib/plots/data/staff-vs-serious.json';
    import SurgMaskvsSerious from '$lib/plots/data/surgmask-vs-serious.json';
    import WeeklyBedData from '$lib/plots/data/weekly-bed-occupancy.json';
    import WeeklyEquipData from '$lib/plots/data/weekly-equip.json';
    import WeeklyInjuryData from '$lib/plots/data/weekly-injuries.json';
    import WeeklyStaffData from '$lib/plots/data/weekly-staff.json';
</script>

<h3 class="not-prose">Weekly Trends</h3>
<div class="flex flex-col gap-2">
    <div class="grid items-center gap-x-8 md:grid-cols-[1.75fr_1fr]">
        <PlotlyScatter data={WeeklyInjuryData} />
        <div>
            <h4 class="not-prose">Road Injury Types by Week</h4>
            <p>
                The road incident data set is first aggregated by each recorded date, accounting for the number of minor
                injuries, serious injuries, fatal injuries, and total injuries on that day. The rate of each incident
                severity is also computed using the number of incidents of a particular severity over the total number
                of incidents. The data is then aggregated by week and by month.
            </p>
        </div>
    </div>
    <div class="grid items-center gap-x-8 md:grid-cols-[1.75fr_1fr]">
        <PlotlyScatter data={WeeklyBedData} />
        <div>
            <h4 class="not-prose">Bed Occupancy Percentage by Week</h4>
            <p>
                The hospital bed occupancy data is aggregated as a percentage: occupied beds over the total beds (sum of
                occupied and vacant). The data is then aggregated by week and by month by getting the mean occupancy
                percentage for the week/month.
            </p>
        </div>
    </div>
    <div class="grid items-center gap-x-8 md:grid-cols-[1.75fr_1fr]">
        <PlotlyScatter data={WeeklyStaffData} />
        <div>
            <h4 class="not-prose">Average Medical Staff Availability by Week</h4>
            <p>The medical staff data is aggregated as a sum per day, and by the mean per week and per month.</p>
        </div>
    </div>
    <div class="grid items-center gap-x-8 md:grid-cols-[1.75fr_1fr]">
        <PlotlyScatter data={WeeklyEquipData} />
        <div>
            <h4 class="not-prose">Total Medical Equipment by Week</h4>
            <p>The medical equipment data is aggregated as a sum per day, week and month.</p>
        </div>
    </div>
</div>

<h3 class="not-prose">
    Research Question 1: To what extent does hospital capacity affect the fatality rate of road incidents?
</h3>

<div class="flex flex-col gap-2">
    <div class="grid items-center gap-x-8 md:grid-cols-[1fr_auto]">
        <div>
            <h4 class="not-prose">Bed Occupancy vs. Minor Injuries</h4>
            <p>
                First, the total number of road crash victims with <b>minor</b> injuries is compared to the total bed
                occupancy. Eyeballing the plot shows a slight linear relationship between the two variables with a
                correlation coefficient
                <math xmlns="http://www.w3.org/1998/Math/MathML"
                    ><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mi>.</mi><mn>0045</mn></mrow></math
                >
                and a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value to be
                <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>5849</mn></mrow></math>.
                However, these results are unfortunately not statistically significant at a significance level of 90%.
                That is, we fail to reject the null hypothesis: the total number of minor injuries is not linearly
                related to the total bed occupancy.
            </p>
        </div>
        <PlotlyScatter
            data={BedsvsMinor}
            showLegend={false}
            xaxisLabel="Total beds occupied"
            yaxisLabel="Minor injuries"
        />
    </div>
    <div>
        <p>
            However, a multivariate linear regression shows more promising results. The best and simplest set of
            predictors involve the beds occupied by COVID-19 patients. Specifically, these two variables are:
        </p>
        <ol>
            <li>
                The total number of COVID-19 patients in <abbr title="Intensive Care Unit">(ICU)</abbr> beds
            </li>
            <li>
                The total number of COVID-19 patients in non-<abbr title="Intensive Care Unit">ICU</abbr> beds
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
            certainty. That is, the total number of COVID-19 patients in <abbr title="Intensive Care Unit">ICU</abbr>
            beds and non-<abbr title="Intensive Care Unit">ICU</abbr> beds form a linear combination that determines the
            total number of minor injuries in road crash incidents.
        </p>
    </div>
    <div class="grid items-center gap-x-8 md:grid-cols-[1fr_auto]">
        <div>
            <h4 class="not-prose">Bed Occupancy vs. Serious Injuries</h4>
            <p>
                A similar analysis can be done for serious injuries. Plotting the weekly total number of beds versus the
                weekly total number of serious injuries yields the scatter plot above. The regression results in <math
                    xmlns="http://www.w3.org/1998/Math/MathML"
                    ><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mi>.</mi><mn>0133</mn></mrow
                    ></math
                >
                with a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
                <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>3449</mn></mrow></math>.
                Again, these results are not statistically significant. We thus fail to reject the null hypothesis:
                these two variables are not linearly related.
            </p>
            <p>
                Unfortunately, searching for a stronger correlation involving COVID-19 patients and <abbr
                    title="Intensive Care Unit">ICU</abbr
                > beds (just like in the previous section) leads to the same negative results. There is no statistically
                significant way to linearly relate the weekly total bed occupancy with the total weekly number of serious
                injuries in road crash incidents.
            </p>
        </div>
        <PlotlyScatter
            data={BedsvsSerious}
            showLegend={false}
            xaxisLabel="Total beds occupied"
            yaxisLabel="Serious injuries"
        />
    </div>
    <div class="grid items-center gap-x-8 md:grid-cols-[1fr_auto]">
        <div>
            <h4 class="not-prose">Bed Occupancy vs. Fatal Injuries</h4>
            <p>
                For fatal injuries, the correlation with hospital capacity is stronger. With the weekly total number of
                occupied beds being the metric for hospital capacity, we obtain a (negative) correlation with
                <math xmlns="http://www.w3.org/1998/Math/MathML"
                    ><mrow
                        ><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo separator="true">.</mo><mrow
                            ><mn>0941</mn></mrow
                        ></mrow
                    ></math
                >
                and a
                <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
                <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0104</mn></mrow></math>.
                At a significance level of 95%, we may reject the null hypothesis with statistical certainty: the two
                variables are indeed linearly related.
                <em
                    >Contrary to our initial hypotheses, when the weekly total number of occupied beds increase, the
                    weekly total number of fatal road crash incidents decreases.</em
                >
            </p>
        </div>
        <PlotlyScatter
            data={BedsvsFatal}
            showLegend={false}
            xaxisLabel="Total beds occupied"
            yaxisLabel="Fatal injuries"
        />
    </div>
    <div class="grid grid-flow-col gap-2">
        <PlotlyScatter
            data={ICUOCvsFatal}
            showLegend={false}
            xaxisLabel="Total occupied ICU beds for COVID patients"
            yaxisLabel="Fatal injuries"
        />
        <PlotlyScatter
            data={NonICUOCvsFatal}
            showLegend={false}
            xaxisLabel="Total occupied non-ICU beds for COVID patients"
            yaxisLabel="Fatal injuries"
        />
    </div>
    <div>
        <p>
            Meanwhile, with the weekly total number of occupied <abbr title="Intensive Care Unit">ICU</abbr> beds by
            COVID-19 patients as the metric for hospital capacity, we obtain a (negative) correlation with
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
            significance level of 95%, we may reject the null hypothesis with statistical certainty: the two variables
            are indeed linearly related. In other words, when the weekly total number of occupied
            <abbr title="Intensive Care Unit">ICU</abbr>
            beds (by COVID-19 patient) increase, the weekly total number of fatal injuries in road crash incidents decrease.
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
            significance level of 95%, we may reject the null hypothesis with statistical certainty: the two variables
            are indeed linearly related. In other words, when the weekly total number of occupied non-<abbr
                title="Intensive Care Unit">ICU</abbr
            >
            beds (by COVID-19 patient) increase, the weekly total number of fatal injuries in road crash incidents decrease.
        </p>
    </div>
    <h4 class="not-prose">Bed Occupancy vs. Total Injuries</h4>
    <PlotlyScatter data={BedsvsTotal} showLegend={false} xaxisLabel="Total beds occupied" yaxisLabel="Total injuries" />
    <div class="grid items-center gap-x-8 md:grid-cols-[1fr_auto]">
        <div>
            <h4 class="not-prose">Staff Resources vs. Minor Injuries</h4>
            <p>
                Plotting the weekly total number of staff members (i.e., doctors, nurses, and support staff) versus the
                weekly total number of minor injuries from road crash incidents yields <math
                    xmlns="http://www.w3.org/1998/Math/MathML"
                    ><mrow
                        ><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo separator="true">.</mo><mrow
                            ><mn>0000</mn></mrow
                        ></mrow
                    ></math
                >
                with a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
                <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>9902</mn></mrow></math>.
                From these results alone, it is apparent that there is no linear relationship between these two
                variables. A similar analysis into the weekly total number of doctors, nurses, and support staff
                (individually) yields no better conclusions. That is, staff resources are not a good predictor for the
                weekly total number of minor injuries in road crash incidents.
            </p>
        </div>
        <PlotlyScatter
            data={StaffvsMinor}
            showLegend={false}
            xaxisLabel="Total medical staff"
            yaxisLabel="Minor injuries"
        />
    </div>
    <div class="grid items-center gap-x-8 md:grid-cols-[1fr_auto]">
        <div>
            <h4 class="not-prose">Staff Resources vs. Serious Injuries</h4>
            <p>
                Plotting the weekly total number of staff members (i.e., doctors, nurses, and support staff) versus the
                weekly total number of serious injuries from road crash incidents yields <math
                    xmlns="http://www.w3.org/1998/Math/MathML"
                    ><mrow
                        ><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo separator="true">.</mo><mrow
                            ><mn>0029</mn></mrow
                        ></mrow
                    ></math
                >
                with a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
                <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>6668</mn></mrow></math>.
                From these results alone, it is apparent that there is no linear relationship between these two
                variables. A similar analysis into the weekly total number of doctors, nurses, and support staff
                (individually) yields no better conclusions. That is, staff resources are not a good predictor for the
                weekly total number of serious injuries in road crash incidents.
            </p>
        </div>
        <PlotlyScatter
            data={StaffvsSerious}
            showLegend={false}
            xaxisLabel="Total medical staff"
            yaxisLabel="Serious injuries"
        />
    </div>
    <div class="grid items-center gap-x-8 md:grid-cols-[1fr_auto]">
        <div>
            <h4 class="not-prose">Staff Resources vs. Fatal Injuries</h4>
            <p>
                Plotting the weekly total number of staff members (i.e., doctors, nurses, and support staff) versus the
                weekly total number of fatal injuries from road crash incidents yields <math
                    xmlns="http://www.w3.org/1998/Math/MathML"
                    ><mrow
                        ><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo separator="true">.</mo><mrow
                            ><mn>0564</mn></mrow
                        ></mrow
                    ></math
                >
                with a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
                <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0549</mn></mrow></math>.
                From these results alone, it is apparent that there is no linear relationship between these two
                variables. However, a similar analysis into the weekly total number of doctors, nurses, and support
                staff (individually) yields better conclusions in multivariate linear regression.
            </p>
        </div>
        <PlotlyScatter
            data={StaffvsFatal}
            showLegend={false}
            xaxisLabel="Total medical staff"
            yaxisLabel="Fatal injuries"
        />
    </div>
    <div class="grid grid-flow-col gap-2">
        <PlotlyScatter data={DoctorvsFatal} showLegend={false} xaxisLabel="Total doctors" yaxisLabel="Fatal injuries" />
        <PlotlyScatter data={NursevsFatal} showLegend={false} xaxisLabel="Total nurse" yaxisLabel="Fatal injuries" />
    </div>
    <div>
        <p>
            With the weekly total number of doctors as the metric for hospital capacity, we obtain a positive
            correlation with
            <math xmlns="http://www.w3.org/1998/Math/MathML"
                ><mrow
                    ><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo>.</mo><mrow><mn>0907</mn></mrow
                    ></mrow
                ></math
            >
            and a
            <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
            <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0140</mn></mrow></math>. At a
            significance level of 95%, we may reject the null hypothesis with statistical certainty: the two variables
            are indeed linearly related. Interestingly, when the weekly total number of doctors increase, so do the
            weekly total number of fatal injuries in road crash incidents. An alternate interpretation is that the
            weekly total number of nurses increase when the weekly total number of fatal injuries also increase (to meet
            the demand).
        </p>
        <p>
            With the weekly total number of nurses as the metric for hospital capacity, we obtain a positive correlation
            with
            <math xmlns="http://www.w3.org/1998/Math/MathML"
                ><mrow
                    ><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo>.</mo><mrow><mn>0615</mn></mrow
                    ></mrow
                ></math
            >
            and a
            <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
            <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0447</mn></mrow></math>. At a
            significance level of 95%, we may reject the null hypothesis with statistical certainty: the two variables
            are indeed linearly related. Interestingly, when the weekly total number of nurses increase, so do the
            weekly total number of fatal injuries in road crash incidents. An alternate interpretation is that the
            weekly total number of nurses increase when the weekly total number of fatal injuries also increase (to meet
            the demand).
        </p>
    </div>
    <div class="grid items-center gap-x-8 md:grid-cols-[1fr_auto]">
        <div>
            <h4 class="not-prose">Medical Equipment vs. Minor Injuries</h4>
            <p>
                Here, the total number of road crash victims who sustained <b>minor</b> injuries is compared to the
                weekly total medical equipment. Looking at the plot would reveal a slight linear relationship between
                the two variables with a correlation coefficient of
                <math xmlns="http://www.w3.org/1998/Math/MathML"
                    ><mrow
                        ><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo>.</mo><mrow><mn>0247</mn></mrow
                        ></mrow
                    ></math
                >
                and a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
                <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>2655</mn></mrow></math>.
                These results are unfortunately insufficient to conclude any statistical significance given our proposed
                significance level of 95%. Thus, for this, we fail to reject the null hypothesis: the total number of
                minor injuries is not linearly related to the weekly total medical equipment.
            </p>
            <p>
                Looking at the multivariate linear regression did not conclude any promising results, with there being
                no predictors (i.e., specific medical equipment) that was within the desired significance level. There
                is no statistically significant way to linearly relate the weekly total medical equipment with the total
                weekly number of minor injuries in road crash incidents.
            </p>
        </div>
        <PlotlyScatter
            data={EquipvsMinor}
            showLegend={false}
            xaxisLabel="Total medical equipment"
            yaxisLabel="Minor injuries"
        />
    </div>
    <div>
        <h4 class="not-prose">Medical Equipment vs. Serious Injuries</h4>
        <div class="grid grid-flow-col grid-rows-2 gap-2">
            <PlotlyScatter
                data={EquipvsSerious}
                showLegend={false}
                xaxisLabel="Total medical equipment"
                yaxisLabel="Serious injuries"
            />
            <PlotlyScatter
                data={GlovesvsSerious}
                showLegend={false}
                xaxisLabel="Total medical gloves"
                yaxisLabel="Serious injuries"
            />
            <PlotlyScatter
                data={FaceShieldvsSerious}
                showLegend={false}
                xaxisLabel="Total face shields"
                yaxisLabel="Serious injuries"
            />
            <PlotlyScatter
                data={SurgMaskvsSerious}
                showLegend={false}
                xaxisLabel="Total surgical masks"
                yaxisLabel="Serious injuries"
            />
        </div>
        <p>
            Plotting the total number of road crash victims with <b>serious</b> injuries in relation to weekly total
            medical equipment shows a linear relationship between the two, with a correlation coefficient of
            <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mrow><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mi>.</mi><mn>1480</mn></mrow>
            </math>
            and a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
            <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0048</mn></mrow></math>.
            These results fall under the proposed 95% significance level set by the researchers, and thus we reject our
            null hypothesis.
            <em
                >In fact, opposite to what was predicted by the hypotheses, as the total number of medical equipment
                increases, the number of weekly total road crash incidents increase as well.</em
            >
        </p>
        <p>
            Following that, a multivariate linear regression confirms our predictions with some interesting and
            promising results. More specifically, the predictors being gloves, face shields, and surgical masks all
            scored well within the 95% significance level with
            <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-values of
            <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0174</mn></mrow></math>,
            <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0035</mn></mrow></math>, and
            <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0209</mn></mrow></math>,
            respectively. They scored
            <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>R</mi> </math> values of
            <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mrow><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mi>.</mi><mn>1078</mn></mrow>
            </math>,
            <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mn>0</mn><mi>.</mi><mn>1579</mn>
            </math>, and
            <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mn>0</mn><mi>.</mi><mn>1020</mn>
            </math>, respectively.
        </p>
        <p></p>
        <p>
            These three variables are also well-within the 95% significance level, meaning the weekly total of gloves,
            face shields, and surgical masks all form a linear combination that determines the total weekly number of
            serious injuries in road crash incidents.
        </p>
    </div>
    <div class="grid items-center gap-x-8 md:grid-cols-[1fr_auto]">
        <div>
            <h4 class="not-prose">Medical Equipment vs. Fatal Injuries</h4>
            <p>
                Plotting the weekly total number of medical equipment (i.e., <code>gown</code>, <code>gloves</code>,
                <code>head_cover</code>, <code>goggles</code>,
                <code>coverall</code>, <code>shoe_cover</code>, <code>face_shield</code>, <code>surgmask</code>, and
                <code>n95mask</code>) versus the weekly total number of fatal injuries from road crash incidents yields
                <math xmlns="http://www.w3.org/1998/Math/MathML"
                    ><mrow
                        ><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo separator="true">.</mo><mrow
                            ><mn>0558</mn></mrow
                        ></mrow
                    ></math
                >
                with a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
                <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0915</mn></mrow></math>.
                From the results alone, it is apparent that there is no linear relationship between these two variables.
                A similar analysis into weekly totals of each individual equipment type yields no better conclusions.
                That is, medical equipment are not good predictors for the weekly total number of fatal injuries in road
                crash incidents.
            </p>
        </div>
        <PlotlyScatter
            data={EquipvsFatal}
            showLegend={false}
            xaxisLabel="Total medical equipment"
            yaxisLabel="Fatal injuries"
        />
    </div>
</div>

<h3 class="not-prose">
    Research Question 2: What factors contribute to a hospital's overall capacity to provide care to patients?
</h3>
<p>
    As seen in the previous section, there are several factors that contribute to a hospital's overall capacity to
    provide care to its patients. During the pandemic, the bed occupancy of COVID-19 patients is one of the more
    statistically significant predictors for the eventual severity of road crash injuries (namely that of minor and
    fatal injuries).
</p>
<p>
    Meanwhile, the total number of medical staff plays little to no role when predicting the severity of injuries. The
    only exception occurs with fatal injuries, where the weekly total number of doctors and nurses are statistically
    significant predictors.
</p>
<p>
    Finally, the available medical equipment also plays little to no role when predicting the severity of injuries. The
    only exception occurs with serious injuries, where the weekly total number of gloves, surgical masks, and face
    shields interestingly are statistically significant predictors.
</p>
