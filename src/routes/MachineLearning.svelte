<p>
    From the data, certain linear trends are apparent. To supplement the findings above, an <dfn
        >ordinary least-squares regression model <abbr title="Ordinary Least-Squares Regression">(OLS)</abbr></dfn
    >
    is trained to predict the number of injuries when given a subset of hospital capacity features (e.g., bed occupancy,
    medical staff readiness, and medical equipment availability). As an application of the project's findings, this model
    is in line with the research questions raised earlier.
</p>
<h3>Predicting the Minor Injuries</h3>
<p>
    The first <abbr title="Ordinary Least-Squares Regression">OLS</abbr> model attempts to predict the total weekly
    number of <em>minor</em> injuries given the nationwide hospital capacity for that week. The baseline (null) model is
    one that always predicts the mean of the entire weekly aggregation, which is
    <math xmlns="http://www.w3.org/1998/Math/MathML"
        ><mrow
            ><mover><mi>x</mi><mo stretchy="true" style="math-style:normal;math-depth:0;">&#x2212;</mo></mover><mo
                >&#x2248;</mo
            ><mn>2</mn><mi>.</mi><mn>9767</mn></mrow
        ></math
    >. Hence, the null model has a
    <dfn>root mean-squared error <abbr title="Root Mean-Squared Error">(RMSE)</abbr></dfn>
    of
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mi>.</mi><mn>8849</mn></mrow></math> (i.e., the "score"
    to beat as a baseline).
</p>
<p>In accordance with the findings in the previous section, the selected features for hospital capacity are:</p>
<ol>
    <li>
        the weekly total number of <abbr title="Intensive Care Unit">ICU</abbr> beds occupied by COVID-19 patients (<code
            >icu_o_c</code
        >);
    </li>
    <li>the weekly total number of vacant beds dedicated to COVID-19 patients (<code>total_covid_v</code>);</li>
    <li>and the weekly total number of used mechanical ventilation units (<code>mechvents_used</code>).</li>
</ol>
<p>
    It turns out that this subset of features yields the least <abbr title="Root Mean-Squared Error">RMSE</abbr>
    out of the other subsets that have been exhaustively tried. A 10-fold cross-validation of the model reports
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mi>.</mi><mn>4178</mn></mrow></math>
    as the
    <abbr title="Root Mean-Squared Error">RMSE</abbr> and
    <math xmlns="http://www.w3.org/1998/Math/MathML"
        ><mrow><mo>&#x2212;</mo><mn>8</mn><mi>.</mi><mn>4825</mn></mrow></math
    >
    as the <math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>R</mi><mn>2</mn></msup></math> score. Note that
    the <abbr title="Root Mean-Squared Error">RMSE</abbr> of the
    <abbr title="Ordinary Least-Squares Regression">OLS</abbr> model is better than that of the null model.
    Unfortunately, the negative
    <math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>R</mi><mn>2</mn></msup></math> score is an indicator for a
    poorly fitted model, but this is the best that can be done with the data.
</p>
<h3>Predicting the Serious Injuries</h3>
<p>
    The second <abbr title="Ordinary Least-Squares Regression">OLS</abbr> model attempts to predict the total weekly
    number of <em>serious</em> injuries given the nationwide hospital capacity for that week. The baseline (null) model
    uses the mean
    <math xmlns="http://www.w3.org/1998/Math/MathML"
        ><mrow
            ><mover><mi>x</mi><mo stretchy="true" style="math-style:normal;math-depth:0;">&#x2212;</mo></mover><mo
                >&#x2248;</mo
            ><mn>2</mn><mi>.</mi><mn>9767</mn></mrow
        ></math
    >. Hence, the null model has a
    <dfn>root mean-squared error <abbr title="Root Mean-Squared Error">(RMSE)</abbr></dfn>
    of
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mi>.</mi><mn>4058</mn></mrow></math> (i.e., the "score"
    to beat as a baseline).
</p>
<p>In accordance with the findings in the previous section, the selected features for hospital capacity are:</p>
<ol>
    <li>
        the weekly total number of <abbr title="Intensive Care Unit">ICU</abbr> beds occupied by non-COVID-19 patients (<code
            >icu_o_nc</code
        >);
    </li>
    <li>the weekly total number of available beds (both ICU and non-ICU) (<code>total_beds_v</code>);</li>
    <li>the weekly total number of vacant mechanical ventilation units (<code>total_mechvent_v</code>);</li>
    <li>and the weekly total number of available surgical masks (<code>surgmask</code>).</li>
</ol>
<p>
    A 10-fold cross-validation of the model reports an <abbr title="Root Mean-Squared Error">RMSE</abbr> of
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>9627</mn></mrow></math>
    and an
    <math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>R</mi><mn>2</mn></msup></math>
    score of
    <math xmlns="http://www.w3.org/1998/Math/MathML"
        ><mrow><mo>&#x2212;</mo><mn>0</mn><mi>.</mi><mn>4616</mn></mrow></math
    >
    given this subset of features. An exhaustive search over all possible feature subsets shows that this yields the best
    metrics. Just like in the previous model, although the
    <abbr title="Ordinary Least-Squares Regression">OLS</abbr>
    model performs better than the null model, the slightly negative
    <math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>R</mi><mn>2</mn></msup></math> score indicates a poorly fitted
    model.
</p>
<h3>Predicting the Fatal Injuries</h3>
<p>
    The final <abbr title="Ordinary Least-Squares Regression">OLS</abbr> model attempts to predict the total weekly
    number of <em>fatal</em> injuries given the nationwide hospital capacity for that week. The baseline (null) model
    uses the mean
    <math xmlns="http://www.w3.org/1998/Math/MathML"
        ><mrow
            ><mover><mi>x</mi><mo stretchy="true" style="math-style:normal;math-depth:0;">&#x2212;</mo></mover><mo
                >&#x2248;</mo
            ><mn>0</mn><mi>.</mi><mn>4651</mn></mrow
        ></math
    >. Hence, the null model has a
    <dfn>root mean-squared error <abbr title="Root Mean-Squared Error">(RMSE)</abbr></dfn>
    of
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mi>.</mi><mn>4996</mn></mrow></math> (i.e., the "score"
    to beat as a baseline).
</p>
<p>In accordance with the findings in the previous section, the selected features for hospital capacity are:</p>
<ol>
    <li>the weekly total number of occupied beds (both ICU and non-ICU) (<code>total_beds_o</code>);</li>
    <li>the weekly total number of used mechanical ventilation units (<code>mechvents_used</code>);</li>
    <li>the weekly total number of available surgical masks (<code>surgmask</code>);</li>
    <li>and the weekly total number of available N95 masks (<code>n95</code>).</li>
</ol>
<p>
    A 10-fold cross-validation of the model reports an <abbr title="Root Mean-Squared Error">RMSE</abbr> of
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mi>.</mi><mn>9143</mn></mrow></math>
    and an
    <math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>R</mi><mn>2</mn></msup></math>
    score of
    <math xmlns="http://www.w3.org/1998/Math/MathML"
        ><mrow><mo>&#x2212;</mo><mn>0</mn><mi>.</mi><mn>6221</mn></mrow></math
    >
    given this subset of features. An exhaustive search over all possible feature subsets shows that this yields the best
    metrics. Just like in the previous model, although the
    <abbr title="Ordinary Least-Squares Regression">OLS</abbr>
    model performs better than the null model, the slightly negative
    <math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>R</mi><mn>2</mn></msup></math> score indicates a poorly fitted
    model.
</p>
