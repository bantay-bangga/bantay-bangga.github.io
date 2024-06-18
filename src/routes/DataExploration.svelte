<script>
</script>

<h3>Research Question 1: To what extent does hospital capacity affect the fatality rate of road incidents?</h3>
<h4>Bed Occupancy vs. Minor Injuries</h4>
<enhanced:img
    src="$lib/plots/totalbeds_vs_minor.png"
    alt="A scatter plot of total occupied hospital bed percentage vs minor road incident injuries"
    class="mx-auto block max-w-2xl"
/>
<p>
    First, the total number of road crash victims with <b>minor</b> injuries is compared to the total bed occupancy.
    Eyeballing the plot shows a slight linear relationship between the two variables with a correlation coefficient
    <math xmlns="http://www.w3.org/1998/Math/MathML"
        ><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mi>.</mi><mn>0045</mn></mrow></math
    >
    and a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value to be
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>5849</mn></mrow></math>. However,
    these results are unfortunately not statistically significant at a significance level of 90%. That is, we fail to
    reject the null hypothesis: the total number of minor injuries is not linearly related to the total bed occupancy.
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
    certainty. That is, the total number of COVID-19 patients in <abbr title="Intensive Care Unit">ICU</abbr> beds and
    non-<abbr title="Intensive Care Unit">ICU</abbr> beds form a linear combination that determines the total number of minor
    injuries in road crash incidents.
</p>

<h4>Bed Occupancy vs. Serious Injuries</h4>
<enhanced:img
    src="$lib/plots/totalbeds_vs_serious.png"
    alt="A scatter plot of total occupied hospital bed percentage vs serious road incident injuries"
    class="mx-auto block max-w-2xl"
/>
<p>
    A similar analysis can be done for serious injuries. Plotting the weekly total number of beds versus the weekly
    total number of serious injuries yields the scatter plot above. The regression results in <math
        xmlns="http://www.w3.org/1998/Math/MathML"
        ><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mi>.</mi><mn>0133</mn></mrow></math
    >
    with a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>3449</mn></mrow></math>. Again, these
    results are not statistically significant. We thus fail to reject the null hypothesis: these two variables are not
    linearly related.
</p>
<p>
    Unfortunately, searching for a stronger correlation involving COVID-19 patients and <abbr
        title="Intensive Care Unit">ICU</abbr
    > beds (just like in the previous section) leads to the same negative results. There is no statistically significant
    way to linearly relate the weekly total bed occupancy with the total weekly number of serious injuries in road crash
    incidents.
</p>

<h4>Bed Occupancy vs. Fatal Injuries</h4>
<enhanced:img
    src="$lib/plots/totalbeds_vs_fatal.png"
    alt="A scatter plot of total occupied hospital bed percentage vs fatal road incident injuries"
    class="mx-auto block max-w-2xl"
/>
<div class="grid grid-flow-col gap-2">
    <enhanced:img
        src="$lib/plots/icu-o-c_vs_fatal.png"
        alt="A scatter plot of occupied ICUs vs fatal road incident injuries"
        class="mx-auto block max-w-xl"
    />
    <enhanced:img
        src="$lib/plots/nonicu-o-c_vs_fatal.png"
        alt="A scatter plot of occupied non-ICU rooms vs fatal road incident injuries"
        class="mx-auto block max-w-xl"
    />
</div>
<p>
    For fatal injuries, the correlation with hospital capacity is stronger. With the weekly total number of occupied
    beds being the metric for hospital capacity, we obtain a (negative) correlation with
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
        >Contrary to our initial hypotheses, when the weekly total number of occupied beds increase, the weekly total
        number of fatal road crash incidents decreases.</em
    >
</p>
<p>
    Meanwhile, with the weekly total number of occupied <abbr title="Intensive Care Unit">ICU</abbr> beds by COVID-19
    patients as the metric for hospital capacity, we obtain a (negative) correlation with
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
    indeed linearly related. In other words, when the weekly total number of occupied
    <abbr title="Intensive Care Unit">ICU</abbr>
    beds (by COVID-19 patient) increase, the weekly total number of fatal injuries in road crash incidents decrease.
</p>
<p>
    Finally, with the weekly total number of occupied non-<abbr title="Intensive Care Unit">ICU</abbr> beds by COVID-19
    patients as the metric for hospital capacity, we obtain a negative correlation with
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
    indeed linearly related. In other words, when the weekly total number of occupied non-<abbr
        title="Intensive Care Unit">ICU</abbr
    >
    beds (by COVID-19 patient) increase, the weekly total number of fatal injuries in road crash incidents decrease.
</p>
<h4>Bed Occupancy vs. Total Injuries</h4>
<enhanced:img
    src="$lib/plots/totalbeds_vs_totalinjury.png"
    alt="A scatter plot of total occupied hospital bed percentage vs overall total road incident injuries"
    class="mx-auto block max-w-2xl"
/>

<h4>Staff Resources vs. Minor Injuries</h4>
<enhanced:img
    src="$lib/plots/staff_vs_minor.png"
    alt="A scatter plot of total medical staff on duty vs minor road incident injuries"
    class="mx-auto block max-w-2xl"
/>
<p>
    Plotting the weekly total number of staff members (i.e., doctors, nurses, and support staff) versus the weekly total
    number of minor injuries from road crash incidents yields <math xmlns="http://www.w3.org/1998/Math/MathML"
        ><mrow
            ><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo separator="true">.</mo><mrow
                ><mn>0000</mn></mrow
            ></mrow
        ></math
    >
    with a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>9902</mn></mrow></math>. From these
    results alone, it is apparent that there is no linear relationship between these two variables. A similar analysis
    into the weekly total number of doctors, nurses, and support staff (individually) yields no better conclusions. That
    is, staff resources are not a good predictor for the weekly total number of minor injuries in road crash incidents.
</p>

<h4>Staff Resources vs. Serious Injuries</h4>
<enhanced:img
    src="$lib/plots/staff_vs_serious.png"
    alt="A scatter plot of total medical staff on duty vs serious road incident injuries"
    class="mx-auto block max-w-2xl"
/>
<p>
    Plotting the weekly total number of staff members (i.e., doctors, nurses, and support staff) versus the weekly total
    number of serious injuries from road crash incidents yields <math xmlns="http://www.w3.org/1998/Math/MathML"
        ><mrow
            ><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo separator="true">.</mo><mrow
                ><mn>0029</mn></mrow
            ></mrow
        ></math
    >
    with a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>6668</mn></mrow></math>. From these
    results alone, it is apparent that there is no linear relationship between these two variables. A similar analysis
    into the weekly total number of doctors, nurses, and support staff (individually) yields no better conclusions. That
    is, staff resources are not a good predictor for the weekly total number of serious injuries in road crash
    incidents.
</p>

<h4>Staff Resources vs. Fatal Injuries</h4>
<enhanced:img
    src="$lib/plots/staff_vs_fatal.png"
    alt="A scatter plot of total medical staff on duty vs fatal road incident injuries"
    class="mx-auto block max-w-2xl"
/>
<div class="grid grid-flow-col gap-2">
    <enhanced:img
        src="$lib/plots/doc_vs_fatal.png"
        alt="A scatter plot of total doctors on duty vs fatal road incident injuries"
        class="mx-auto block max-w-xl"
    />
    <enhanced:img
        src="$lib/plots/nurse_vs_fatal.png"
        alt="A scatter plot of total nurses on duty vs fatal road incident injuries"
        class="mx-auto block max-w-xl"
    />
</div>
<p>
    Plotting the weekly total number of staff members (i.e., doctors, nurses, and support staff) versus the weekly total
    number of fatal injuries from road crash incidents yields <math xmlns="http://www.w3.org/1998/Math/MathML"
        ><mrow
            ><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo separator="true">.</mo><mrow
                ><mn>0564</mn></mrow
            ></mrow
        ></math
    >
    with a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0549</mn></mrow></math>. From these
    results alone, it is apparent that there is no linear relationship between these two variables. However, a similar
    analysis into the weekly total number of doctors, nurses, and support staff (individually) yields better conclusions
    in multivariate linear regression.
</p>
<p>
    With the weekly total number of doctors as the metric for hospital capacity, we obtain a positive correlation with
    <math xmlns="http://www.w3.org/1998/Math/MathML"
        ><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo>.</mo><mrow><mn>0907</mn></mrow></mrow
        ></math
    >
    and a
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0140</mn></mrow></math>. At a
    significance level of 95%, we may reject the null hypothesis with statistical certainty: the two variables are
    indeed linearly related. Interestingly, when the weekly total number of doctors increase, so do the weekly total
    number of fatal injuries in road crash incidents. An alternate interpretation is that the weekly total number of
    nurses increase when the weekly total number of fatal injuries also increase (to meet the demand).
</p>
<p>
    With the weekly total number of nurses as the metric for hospital capacity, we obtain a positive correlation with
    <math xmlns="http://www.w3.org/1998/Math/MathML"
        ><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo>.</mo><mrow><mn>0615</mn></mrow></mrow
        ></math
    >
    and a
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0447</mn></mrow></math>. At a
    significance level of 95%, we may reject the null hypothesis with statistical certainty: the two variables are
    indeed linearly related. Interestingly, when the weekly total number of nurses increase, so do the weekly total
    number of fatal injuries in road crash incidents. An alternate interpretation is that the weekly total number of
    nurses increase when the weekly total number of fatal injuries also increase (to meet the demand).
</p>

<h4>Medical Equipment vs. Minor Injuries</h4>
<enhanced:img
    src="$lib/plots/equip_vs_minor.png"
    alt="A scatter plot of total medical equipment vs minor road incident injuries"
    class="mx-auto block max-w-2xl"
/>
<p>
    Here, the total number of road crash victims who sustained <b>minor</b> injuries is compared to the weekly total
    medical equipment. Looking at the plot would reveal a slight linear relationship between the two variables with a
    correlation coefficient of
    <math xmlns="http://www.w3.org/1998/Math/MathML"
        ><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>&#x2248;</mo><mn>0</mn><mo>.</mo><mrow><mn>0247</mn></mrow></mrow
        ></math
    >
    and a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>2655</mn></mrow></math>. These
    results are unfortunately insufficient to conclude any statistical significance given our proposed significance
    level of 95%. Thus, for this, we fail to reject the null hypothesis: the total number of minor injuries is not
    linearly related to the weekly total medical equipment.
</p>
<p>
    Looking at the multivariate linear regression did not conclude any promising results, with there being no predictors
    (i.e., specific medical equipment) that was within the desired significance level. There is no statistically
    significant way to linearly relate the weekly total medical equipment with the total weekly number of minor injuries
    in road crash incidents.
</p>

<h4>Medical Equipment vs. Serious Injuries</h4>
<div class="grid grid-flow-col grid-rows-2 gap-2">
    <enhanced:img
        src="$lib/plots/equip_vs_serious.png"
        alt="A scatter plot of total medical equipment vs serious road incident injuries"
        class="mx-auto block max-w-xl"
    />
    <enhanced:img
        src="$lib/plots/gloves_vs_serious.png"
        alt="A scatter plot of total medical gloves in stock vs fatal road incident injuries"
        class="mx-auto block max-w-xl"
    />
    <enhanced:img
        src="$lib/plots/faceshield_vs_serious.png"
        alt="A scatter plot of total face shields in stock vs fatal road incident injuries"
        class="mx-auto block max-w-xl"
    />
    <enhanced:img
        src="$lib/plots/surgmask_vs_serious.png"
        alt="A scatter plot of total surgical masks in stock vs fatal road incident injuries"
        class="mx-auto block max-w-xl"
    />
</div>
<p>
    Plotting the total number of road crash victims with <b>serious</b> injuries in relation to weekly total medical
    equipment shows a linear relationship between the two, with a correlation coefficient of
    <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mrow><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mi>.</mi><mn>1480</mn></mrow>
    </math>
    and a <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi></math>-value of
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0048</mn></mrow></math>. These
    results fall under the proposed 95% significance level set by the researchers, and thus we reject our null
    hypothesis.
    <em
        >In fact, opposite to what was predicted by the hypotheses, as the total number of medical equipment increases,
        the number of weekly total road crash incidents increase as well.</em
    >
</p>
<p>
    Following that, a multivariate linear regression confirms our predictions with some interesting and promising
    results. More specifically, the predictors being gloves, face shields, and surgical masks all scored well within the
    95% significance level with
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
    These three variables are also well-within the 95% significance level, meaning the weekly total of gloves, face
    shields, and surgical masks all form a linear combination that determines the total weekly number of serious
    injuries in road crash incidents.
</p>

<h4>Medical Equipment vs. Fatal Injuries</h4>
<enhanced:img
    src="$lib/plots/equip_vs_fatal.png"
    alt="A scatter plot of total medical equipment vs fatal road incident injuries"
    class="mx-auto block max-w-2xl"
/>
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
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>0915</mn></mrow></math>. From the
    results alone, it is apparent that there is no linear relationship between these two variables. A similar analysis
    into weekly totals of each individual equipment type yields no better conclusions. That is, medical equipment are
    not good predictors for the weekly total number of fatal injuries in road crash incidents.
</p>

<h3>Research Question 2: What factors contribute to a hospital's overall capacity to provide care to patients?</h3>
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
