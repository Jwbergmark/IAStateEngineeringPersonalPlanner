let minors = 1;
const addButton = document.getElementById('add');
const minor1 = document.getElementById('minor1');
const minor2 = document.getElementById('minor2');
const minor3 = document.getElementById('minor3');

let totalCredits = 0;
const major = document.getElementById('major');

// Minor Wrappers
const minor1Wrapper = document.getElementById('minor1-wrapper');
const minor2Wrapper = document.getElementById('minor2-wrapper');
const minor3Wrapper = document.getElementById('minor3-wrapper');

// Transfer Credit
const transferTitle = document.getElementById('transfer-title');
transferTitle.style.display = 'none';
const transferSectionLine = document.getElementById('transfer-section-line');
transferSectionLine.style.display = 'none';
const majorCoursesTitle = document.getElementById('major-courses-title');
majorCoursesTitle.style.display = 'none';
const generalEducationTitle = document.getElementById('general-education-title');
generalEducationTitle.style.display = 'none';

const moreButton = document.getElementById('more-button');
moreButton.style.display = 'none';

const humanitiesTitle = document.getElementById('humanities-title');
humanitiesTitle.style.display = 'none';
const ssTitle = document.getElementById('ss-title');
ssTitle.style.display = 'none';

// Transfer Wrappers
const humanitiesWrapper = document.getElementById('humanities-wrapper');
humanitiesWrapper.style.display = 'none';
const socialSciencesWrapper = document.getElementById('ss-wrapper');
socialSciencesWrapper.style.display = 'none';

// Transfer Selections
const humanities = document.getElementById('humanities');
const socialSciences = document.getElementById('social-sciences');

// Generate
const generateButton = document.getElementById('generate');

// Reset
const resetButton = document.getElementById('reset');

// Major Options
const agriculturalOptions = document.getElementById('agricultural-options');
const biologicalSystemsOptions = document.getElementById('biological-systems-options');
const biomedicalEmphasisOptions = document.getElementById('biomedical-emphasis-options');
const civilOptions = document.getElementById('civil-options');
const constructionOptions = document.getElementById('construction-options');

// Major Selection Wrappers
const agriculturalOptionsWrapper = document.getElementById('agricultural-options-wrapper');
agriculturalOptionsWrapper.style.display = 'none';
const biologicalSystemsOptionsWrapper = document.getElementById('biological-systems-options-wrapper');
biologicalSystemsOptionsWrapper.style.display = 'none';
const biomedicalEmphasisWrapper = document.getElementById('biomedical-emphasis-wrapper');
biomedicalEmphasisWrapper.style.display = 'none';
const civilOptionsWrapper = document.getElementById('civil-options-wrapper');
civilOptionsWrapper.style.display = 'none';
const constructionOptionsWrapper = document.getElementById('construction-options-wrapper');
constructionOptionsWrapper.style.display = 'none';

// Views
const setupView = document.getElementById('setup-view');
const planView = document.getElementById('plan-view');
planView.style.display = 'none';

// Specifications
const semestersWrapper = document.getElementById('semesters-wrapper');
const semestersOptions = document.getElementById('semesters');

const econWrapper = document.getElementById('econ-options-wrapper');
econWrapper.style.display = 'none';
const commsWrapper = document.getElementById('comms-options-wrapper');
commsWrapper.style.display = 'none';
const econOptions = document.getElementById('econ-options');
const commsOptions = document.getElementById('comms-options');

// Logic to show additional minors upon selection
minor2Wrapper.style.display = 'none';
minor3Wrapper.style.display = 'none';
addButton.addEventListener('click', () => {
    if (minors == 1) {
        minor2Wrapper.style.display = 'block';
    } else if (minors == 2) {
        addButton.style.display = 'none';
        minor3Wrapper.style.display = 'block';
    } 
    minors++;
});

// Logic to reset the website
resetButton.addEventListener('click', () => {

    // Views
    planView.style.display = 'none';
    setupView.style.display = 'block';

    major.selectedIndex = 0; 
    minor1.selectedIndex = 0;
    minor2.selectedIndex = 0;
    minor3.selectedIndex = 0;
    minor2Wrapper.style.display = 'none';
    minor3Wrapper.style.display = 'none';
    addButton.style.display = 'block';
    minors = 1;

    // Options
    agriculturalOptionsWrapper.style.display = 'none';
    biologicalSystemsOptionsWrapper.style.display = 'none';
    biomedicalEmphasisWrapper.style.display = 'none';
    civilOptionsWrapper.style.display = 'none';
    constructionOptionsWrapper.style.display = 'none';

    agriculturalOptions.selectedIndex = 0; 
    biologicalSystemsOptions.selectedIndex = 0;
    biomedicalEmphasisOptions.selectedIndex = 0;
    civilOptions.selectedIndex = 0;
    constructionOptions.selectedIndex = 0;

    // Checkboxes
    document.getElementById('transfer-checkboxes').innerHTML = '';
    Course.allCourses.forEach(course => {
        course.taken = false; 
    });
    moreButton.style.display = 'none';

    transferTitle.style.display = 'none';
    transferSectionLine.style.display = 'none';
    majorCoursesTitle.style.display = 'none';
    generalEducationTitle.style.display = 'none';
    humanitiesWrapper.style.display = 'none';
    socialSciencesWrapper.style.display = 'none';
    humanitiesTitle.style.display = 'none';
    ssTitle.style.display = 'none';

    humanities.selectedIndex = 0;
    socialSciences.selectedIndex = 0;

    // Specifications
    semestersOptions.selectedIndex = 0;
    econWrapper.style.display = 'none';
    commsWrapper.style.display = 'none';
    econOptions.selectedIndex = 0;
    commsOptions.selectedIndex = 0;
});

// Make a universal function to plan the degree for each major
function planDegree(requiredCourses, baseTransferCourses, englishElectives, needsEcon) {

    // Transfer Checkboxes
    const moreTransferCourses = requiredCourses.filter(course => !baseTransferCourses.includes(course));
    for (const course of baseTransferCourses) {
        const checkboxRow = document.createElement('div');
        checkboxRow.classList.add('checkbox-row');
        const checkbox = document.createElement('input');
        checkbox.classList.add('isu-checkbox');
        checkbox.type = 'checkbox';
        checkbox.name = 'check';
        checkbox.value = 'yes';
        checkbox.id = `check-${course.id}`;

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                course.markAsTaken();
            } else {
                course.taken = false;
            }
        });

        const label = document.createElement('label');
        label.classList.add('crimson');
        label.htmlFor = `check-${course.id}`;
        label.textContent = `${course.id} ${course.title}`;

        checkboxRow.appendChild(checkbox);
        checkboxRow.appendChild(label);
        document.getElementById('transfer-checkboxes').appendChild(checkboxRow);
    }

    // More Button
    moreButton.style.display = 'block';
    moreButton.onclick = () => {
        for (const course of moreTransferCourses) {
            const checkboxRow = document.createElement('div');
            checkboxRow.classList.add('checkbox-row');
            const checkbox = document.createElement('input');
            checkbox.classList.add('isu-checkbox');
            checkbox.type = 'checkbox';
            checkbox.name = 'check';
            checkbox.value = 'yes';
            checkbox.id = `check-${course.id}`;

            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    course.markAsTaken();
                } else {
                    course.taken = false;
                }
            });

            const label = document.createElement('label');
            label.classList.add('crimson');
            label.htmlFor = `check-${course.id}`;
            label.textContent = `${course.id} ${course.title}`;
            checkboxRow.appendChild(checkbox);
            checkboxRow.appendChild(label);
            document.getElementById('transfer-checkboxes').appendChild(checkboxRow);

            moreButton.style.display = 'none';
        }

        
    }

    transferTitle.style.display = 'block';
    transferSectionLine.style.display = 'block';
    majorCoursesTitle.style.display = 'block';
    generalEducationTitle.style.display = 'block';
    humanitiesWrapper.style.display = 'block';
    socialSciencesWrapper.style.display = 'block';
    humanitiesTitle.style.display = 'block';
    ssTitle.style.display = 'block';

    if (needsEcon){
        econWrapper.style.display = 'block';
    }
    commsWrapper.style.display = 'block';
    for (const course of englishElectives) {
            const commsOption = document.createElement('option');
            commsOption.value = `${course.id}`;
            commsOption.text = `${course.title}`;
            commsOptions.appendChild(commsOption);
        }


    // Generation Algorithm
    generateButton.onclick = () => {
        setupView.style.display = 'none';
        planView.style.display = 'block';
        const semestersToTake = Number(semestersOptions.value) || 8;

        const selectedCommsCourse = englishElectives.find(course => course.id == commsOptions.value);
        requiredCourses.push(selectedCommsCourse);
        if (econOptions.value == 'microeconomics'){
            requiredCourses.push(courses.micro);
        }
        if (econOptions.value == 'macroeconomics'){
            requiredCourses.push(courses.macro);
        }

        for (let semester = 1; semester <= 8; semester++) {
            const semesterElement = document.getElementById(`semester${semester}`);
            semesterElement.innerHTML = '';
        }

        for (let currentSemester = 1; currentSemester <= semestersToTake; currentSemester++) {
            const takenCourses = requiredCourses.filter(course => course.isTaken());

            let creditsTaken = takenCourses.reduce((total, course) => total + course.getCredits(), 0);
            const remainingCredits = requiredCourses.filter(course => !course.isTaken()).reduce((total, course) => total + course.getCredits(), 0);
            const semestersRemaining = semestersToTake - currentSemester + 1;
            let creditLimit = Math.min(18, Math.ceil(remainingCredits / semestersRemaining));

            let currentYear = 'freshmen';
            if (creditsTaken < 30){
                currentYear = 'freshmen';
            } else if (creditsTaken < 60) {
                currentYear = 'sophomore';
            } else if (creditsTaken < 90) {
                currentYear = 'junior';
            } else currentYear = 'senior';

            let currentCredits = 0;
            let canTakeCourses = requiredCourses.filter(course => course.canTake(currentYear));
            for (const course of canTakeCourses) {
                course.setPriority(requiredCourses, currentYear);
            }

            // Sort courses that can be taken by priority
            let sortedCourses = canTakeCourses.sort((a, b) => b.priority - a.priority);
            let plannedCourses = new Set();

            for (const course of sortedCourses) {
                if (currentCredits + course.getCredits() > creditLimit) {
                    continue;
                }

                currentCredits += course.getCredits()
                course.markAsTaking();
                plannedCourses.add(course);
            }

            // Repeat to check for corequisite classes
            let courseFound = true;
            while (courseFound) {
                canTakeCourses = requiredCourses.filter(course => course.canTake(currentYear));
                if (canTakeCourses.length === 0) {
                    courseFound = false;
                    break;
                }
                for (const course of canTakeCourses) {
                    course.setPriority(requiredCourses, currentYear);
                }
                sortedCourses = canTakeCourses.sort((a, b) => b.priority - a.priority);
                for (const course of sortedCourses) {
                    plannedCourses.add(course);
                    course.markAsTaking();
                }
            }

            const finalCourses = Array.from(plannedCourses);
            finalCourses.sort((a, b) => b.priority - a.priority);

            // Telemetry includes courses found by both the initial sort and repeat loop.
            console.table(finalCourses.map(course => ({
                semester: currentSemester,
                id: course.id,
                priority: course.priority,
                dependents: course.findNumberOfDependents(requiredCourses)
            })));

            for (const course of finalCourses) {
                course.taking = false;
            }
            currentCredits = 0;

            for (const course of finalCourses) {
                if (currentCredits + course.getCredits() > creditLimit) {
                    continue;
                }
                currentCredits += course.getCredits()
                const courseDisplay = document.createElement('h3');
                courseDisplay.classList.add('cardinalRed', 'arial');
                courseDisplay.textContent = `${course.id} ${course.title}`;
                document.getElementById(`semester${currentSemester}`).appendChild(courseDisplay);
                course.markAsTaking();
            }

            const takingCourses = requiredCourses.filter(course => course.isTaking());
            const totalCredits = document.createElement('h3');
            totalCredits.classList.add('cardinalRed', 'arial');
            totalCredits.textContent = `Total Credits: ${currentCredits}`;
            document.getElementById(`semester${currentSemester}`).appendChild(totalCredits);
            for (const course of takingCourses) {
                course.markAsTaken();
                course.taking = false;
            }
            
        }
    }
}

major.addEventListener('change', (e) => {
    if (e.target.value === 'select') {
        agriculturalOptionsWrapper.style.display = 'none';
        biologicalSystemsOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'none';
        civilOptionsWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'none';

    }
});

// Aerospace Engineering
major.addEventListener('change', (e) => {
    if (e.target.value === 'aerospace') {
        agriculturalOptionsWrapper.style.display = 'none';
        biologicalSystemsOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'none';
        civilOptionsWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'none';
    }
});

// Agricultural Engineering
major.addEventListener('change', (e) => {
    if (e.target.value === 'agricultural') {
        biologicalSystemsOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'none';
        agriculturalOptionsWrapper.style.display = 'block';
        civilOptionsWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'none';
    }
});

// Biological Systems Engineering
major.addEventListener('change', (e) => {
    if (e.target.value === 'biological systems') {
        agriculturalOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'none';
        civilOptionsWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'none';
        biologicalSystemsOptionsWrapper.style.display = 'block';
    }
});

// Biomedical Engineering
major.addEventListener('change', (e) => {
    if (e.target.value === 'biomedical') {
        agriculturalOptionsWrapper.style.display = 'none';
        biologicalSystemsOptionsWrapper.style.display = 'none';
        civilOptionsWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'block';
    }
});

// Chemical Engineering
major.addEventListener('change', (e) => {
    if (e.target.value === 'chemical') {
        agriculturalOptionsWrapper.style.display = 'none';
        biologicalSystemsOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'none';
        civilOptionsWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'none';
    }
});

// Civil Engineering
major.addEventListener('change', (e) => {
    if (e.target.value === 'civil') {
        agriculturalOptionsWrapper.style.display = 'none';
        biologicalSystemsOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'none';
        civilOptionsWrapper.style.display = 'block';
    }
});

// Computer Engineering
major.addEventListener('change', (e) => {
    if (e.target.value === 'computer') {
        agriculturalOptionsWrapper.style.display = 'none';
        biologicalSystemsOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'none';
        civilOptionsWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'none';
    }
});

// Construction Engineering
major.addEventListener('change', (e) => {
    if (e.target.value === 'construction') {
        agriculturalOptionsWrapper.style.display = 'none';
        biologicalSystemsOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'none';
        civilOptionsWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'block';
    }
});

// Cyber Security Engineering
major.addEventListener('change', (e) => {
    if (e.target.value === 'cyber security') {
        agriculturalOptionsWrapper.style.display = 'none';
        biologicalSystemsOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'none';
        civilOptionsWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'none';
    }
});

// Electrical Engineering
major.addEventListener('change', (e) => {
    if (e.target.value === 'electrical') {
        agriculturalOptionsWrapper.style.display = 'none';
        biologicalSystemsOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'none';
        civilOptionsWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'none';
    }
});

// Environmental Engineering
major.addEventListener('change', (e) => {
    if (e.target.value === 'environmental') {
        agriculturalOptionsWrapper.style.display = 'none';
        biologicalSystemsOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'none';
        civilOptionsWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'none';
    }
});

// Industrial Engineering
major.addEventListener('change', (e) => {
    if (e.target.value === 'industrial') {
        agriculturalOptionsWrapper.style.display = 'none';
        biologicalSystemsOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'none';
        civilOptionsWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'none';
    }
});

// Materials Engineering
major.addEventListener('change', (e) => {
    if (e.target.value === 'materials') {
        agriculturalOptionsWrapper.style.display = 'none';
        biologicalSystemsOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'none';
        civilOptionsWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'none';
    }
});

// Mechanical Engineering
major.addEventListener('change', (e) => {
    if (e.target.value === 'mechanical') {
        agriculturalOptionsWrapper.style.display = 'none';
        biologicalSystemsOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'none';
        civilOptionsWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'none';

        totalCredits = 129;
        const requiredCourses = [courses.engr1010, courses.engrChem, courses.calc1, courses.calc2, courses.calc3, courses.difEq,
            courses.me1600, courses.me1700, courses.physics1, courses.physics2, courses.statics1, courses.statics2, courses.engrStats,
            courses.thermo1, courses.me2700, courses.me2020, courses.dynamics, courses.thermo2, courses.me3240L, courses.me3250, courses.fluids,
            courses.me3700, courses.me3240, courses.me4210, courses.me4360, courses.ee4420, courses.ee4480, courses.em3240, courses.mate2730,
            courses.engl1500, courses.library, courses.engl2500, courses.me4150,
            courses.techElective1, courses.techElective2, courses.techElective3, courses.techElective4, courses.techElective5,
            courses.humanitiesElective1, courses.humanitiesElective2, courses.socialSciencesElective1, courses.eitherOrElective3];
        const englishElectives = [courses.busComm, courses.engl3090, courses.techComm, courses.spcm2120];
        const baseTransferCourses = [courses.engrChem, courses.calc1, courses.calc2, courses.calc3, courses.difEq, courses.physics1, courses.physics2, courses.engl1500, courses.library, courses.engl2500, courses.micro, courses.macro];

        planDegree(requiredCourses, baseTransferCourses, englishElectives, true)
    }
});

// Software Engineering
major.addEventListener('change', (e) => {
    if (e.target.value === 'software') {
        agriculturalOptionsWrapper.style.display = 'none';
        biologicalSystemsOptionsWrapper.style.display = 'none';
        biomedicalEmphasisWrapper.style.display = 'none';
        civilOptionsWrapper.style.display = 'none';
        constructionOptionsWrapper.style.display = 'none';
    }
});