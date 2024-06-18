<script>
    import { ArrowTopRightOnSquare } from '@steeze-ui/heroicons';
    import DataLink from './DataLink.svelte';
    import { Icon } from '@steeze-ui/svelte-icon';
</script>

<div class="grid gap-8 gap-x-16 md:grid-cols-2">
    <article>
        <h3>Road Crash Incidents</h3>
        <h4>Source</h4>
        <div class="grid-auto-rows grid gap-2">
            <p>
                Obtained from the <a href="https://itslab.ncts.upd.edu.ph/create/" target="_blank"
                    >Project <abbr title="Collection, Recording, and Analysis of Traffic Incidence Data">CREATE</abbr
                    ></a
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
                >.
            </p>
            <p>
                As of writing, the data set includes incidents from 2016 up to 2024, amounting to <strong
                    >46,209 total road incidents</strong
                >.
            </p>
            <div class="flex flex-wrap justify-center gap-2">
                <DataLink href="https://docs.google.com/spreadsheets/d/11p-dVOkn23gm96M7nfzS0bfT7h5TYGks1wgk4W-c4GY">
                    <span>ACDA Road Crash Incidents</span>
                    <Icon src={ArrowTopRightOnSquare} class="inline size-4" />
                </DataLink>
            </div>
        </div>
        <h4>Description</h4>
        <p>
            <strong>Road incident details.</strong>
            Each data point records the date of incident, time of incident, collision type, incident location, weather condition,
            and light condition.
        </p>
        <p>
            <strong>Persons involved.</strong>
            For each road incident, the data set encodes persons involved (e.g., drivers, passengers, pedestrians, and witnesses)
            with their respective ages, sexes, sustained injuries, resulting fatalities, and usage of safety equipment (e.g.,
            seatbelts and helmets).
        </p>
        <p>
            <strong>Vehicles involved.</strong>
            For each road incident, the data set encodes the model and make of each vehicle involved as well as their intended
            function (e.g., private, public, government, or for-hire).
        </p>
        <h4>Preprocessing</h4>
        <p>
            <strong>Redacted columns.</strong>
            Out of respect for the privacy of the individuals involved (sometimes fatally) in these road crash incidents,
            personally identifiable columns such as names, plate numbers, license numbers, addresses, and hospitals have
            been intentionally redacted from the original databases. Although these are readily available from the raw databases,
            Bantay Bangga deems this data unnecessary and irrelevant to the data analysis.
        </p>
        <p>
            <strong>Joining related data points.</strong>
            The resulting data set is a left-join of all the one-to-many relationships represented by the database.
        </p>
        <div class="prose prose-invert">
            <ul>
                <li>
                    One incident is to many involved persons. Note that these include drivers, passengers, pedestrians,
                    and witnesses.
                </li>
                <li>
                    One incident is to many involved vehicles. Note that most collisions occur between two vehicles, but
                    it is totally possible to be involved in a mass collision.
                </li>
            </ul>
        </div>
        <p>
            <strong>Addressing null/misspelled entries.</strong>
            One major limitation of the data set is the ubiquity of null data and misspelled categories. To address these
            concerns, only non-null entries of column-specific analyses will be considered. For misspellings and variations
            in letter casing, text data will be standardized in lower case or upper case. Either is sufficient as long as
            the scheme is consistent for a particular analysis.
        </p>
    </article>

    <article>
        <h3>Hospital Capacity <br /> during the COVID-19 Pandemic</h3>
        <h4>Source</h4>
        <div class="grid-auto-rows grid gap-2">
            <p>
                Obtained from the DOH Data Drops, maintained and regularly updated by the <abbr
                    title="Department of Health">DOH</abbr
                >
                on patient and hospital information during the COVID-19 pandemic.
            </p>
            <p>
                The data sets collected for this study span from July 2020 to November 2022, amounting to 1.4 million
                rows of daily reports from medical facilities across the country.
            </p>

            <div class="flex flex-wrap justify-center gap-2">
                <DataLink href="https://drive.google.com/file/d/1FbKwqW3Qp8tM-dAcN-yfTZsMB7XtmmH2/view">
                    <span>Bed Occupancy (November 19, 2022)</span>
                    <Icon src={ArrowTopRightOnSquare} class="inline size-4" />
                </DataLink>
                <DataLink href="https://drive.google.com/file/d/1Rah7TR_z8t7qawR4fiYDlZ4ARlhPilMU/view?">
                    <span>Bed Occupancy (2020)</span>
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
        </div>
        <h4>Description</h4>
        <p>
            <strong>Bed occupancy.</strong>
            The data set contains daily updates on the number of hospital beds occupied in a facility, for each type of bed:
            ICU, non-ICU, ICU for non-COVID patients, non-ICU for non-COVID patients, as well as mechanical ventilators in
            use.
        </p>
        <p>
            <strong>Medical staff.</strong>
            The data set contains updates on the number of active doctors, nurses, and support staff in a facility.
        </p>
        <p>
            <strong>Medical equipment.</strong>
            The data set contains updates on the number of available medical equipment in a facility such as hospital gowns,
            gloves, head cover, goggles, coverall, shoe cover, face shields, surgical masks, and N95 masks.
        </p>
        <h4>Preprocessing</h4>
        <p>
            <strong>Concatenating 2020 and 2022 data sets.</strong>
            For some data sets, column names (i.e., medical staff classifications, bed classifications) and date formats
            have changed over the years, which required appropriate column aliasing during the data analysis.
        </p>
    </article>
</div>
