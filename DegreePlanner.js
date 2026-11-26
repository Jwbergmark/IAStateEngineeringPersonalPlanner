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

// Courses
const techElective1 = new Course('', 'Technical Elective', 3, 'both');
const techElective2 = new Course('', 'Technical Elective', 3, 'both');
const techElective3 = new Course('', 'Technical Elective', 3, 'both');
const techElective4 = new Course('', 'Technical Elective', 3, 'both');
const techElective5 = new Course('', 'Technical Elective', 3, 'both');

const humanitiesElective1 = new Course('', 'Humanities Elective', 3, 'both');
const humanitiesElective2 = new Course('', 'Humanities Elective', 3, 'both');
const socialSciencesElective1 = new Course('', 'Social Sciences Elective', 3, 'both');
const socialSciencesElective2 = new Course('', 'Social Sciences Elective', 3, 'both');
const eitherOrElective3 = new Course('', 'Humanities/Social Sciences Elective', 3, 'both');

const engr1010 = new Course('ENGR 1010', 'Engineering Orientation', 0, 'both', 'freshmen');

const engrChem = new Course('CHEM 1670', 'General Chemistry for Engineering Students', 4, 'both', 'freshmen');
const chem1 = new Course('CHEM 1770 + L', 'General Chemistry I', 5, 'both', 'freshmen');
const chem2 = new Course('CHEM 1780 + L', 'General Chemistry II', 4, 'both', 'freshmen', [[chem1, engrChem]]);

const calc1 = new Course('MATH 1650', 'Calculus I', 4, 'both', 'freshmen');
const calc2 = new Course('MATH 1660', 'Calculus II', 4, 'both', 'freshmen', [calc1]);
const calc3 = new Course('MATH 2650', 'Calculus III', 4, 'both', 'sophomore', [calc2]);
const difEq = new Course('MATH 2670', 'Differential Equations', 4, 'both', 'sophomore', [calc2]);

const engl1500 = new Course('ENGL 1500', 'College Composition', 3, 'both', 'freshmen');
const library = new Course('LIB 1600', ' Introduction to College Level Research', 1, 'both', 'freshmen');
const engl2500 = new Course('ENGL 2500', 'Advanced Composition', 3, 'both', 'sophomore', [engl1500], [library]);
const busComm = new Course('ENGL 3020', 'Business Communication', 3, 'both', 'junior', [engl2500], [], ['junior', 'senior']);
const engl3090 = new Course('ENGL 3090', 'Proposal and Report Writing', 3, 'both', 'junior', [engl2500], [], ['junior', 'senior']);
const techComm = new Course('ENGL 3140', 'Technical Communication', 3, 'both', 'junior', [engl2500], [], ['junior', 'senior']);
const spcm2120 = new Course('SPCM 2120', 'Fundamentals of Public Speaking', 3, 'both', 'sophomore', [engl2500]);

const micro = new Course('ECON 1010', 'Principles of Microeconomics', 3, 'both', 'freshmen');
const macro = new Course('ECON 1020', 'Principles of Macroeconomics', 3, 'both', 'freshmen');

const physics1 = new Course('PHYS 2310 + L', 'Physics I', 5, 'both', 'freshmen', [calc1], [calc2]);
const physics2 = new Course('PHYS 2320 + L', 'Physics II', 5, 'both', 'sophomore', [physics1, calc2]);

const statics1 = new Course('CE 2710', 'Foundations of Statics', 1, 'both', 'freshmen', [calc1], [physics1]);
const statics2 = new Course('CE 2720', 'Applied Statics', 2, 'both', 'sophomore', [statics1, physics1], [calc2]);

const engrStats = new Course('STAT 3050', 'Engineering Statistics', 3, 'both', 'junior', [calc1]);

// AERO
const aero1600 = new Course('AERO 1600', 'Aerospace Engineering Problems With Computer Applications Laboratory', 3, 'both', 'freshmen', [], [calc1]);
const aero1610 = new Course('AERO 1610', 'Numerical, Graphical and Laboratory Techniques for Aerospace Engineering', 4, 'both', 'freshmen', [], [aero1600]);
const aero1920 = new Course('AERO 1920', 'Aerospace Seminar', 0, 'spring', 'freshmen');

// EE
const ee4420 = new Course('EE 4420', 'Introduction to Circuits and Instruments', 2, 'both', 'junior', [difEq, physics2]);
const ee4480 = new Course('EE 4480', 'Introduction to AC Circuits and Motors', 2, 'both', 'junior', [], [ee4420]);

// EM
const em3240 = new Course('EM 3240', 'Mechanics of Materials', 3, 'both', 'sophomore', [statics1, statics2]);

// MATE
const mate2730 = new Course('MATE 2730', 'Principles of Materials Engineering', 3, 'both', 'sophomore', [[engrChem, chem1], calc1]);

// ME
const me1600 = new Course('ME 1600', 'Mechanical Engineering Problem Solving with Computer Applications', 3, 'both', 'freshmen', [], [[calc1, calc2, calc3, difEq]]);
const me1700 = new Course('ME 1700', 'Engineering Graphics and Introductory Design', 3, 'both', 'freshmen', [calc1]);
const thermo1 = new Course('ME 2310', 'Thermodynamics I', 3, 'both', 'sophomore', [engrChem, calc2, physics1]);
const me2700 = new Course('ME 2700', 'Introduction to Mechanical Engineering Design', 3, 'both', 'sophomore', [me1600, me1700, physics1]);
const me2020 = new Course('ME 2020', 'Professional Planning', 0, 'both', 'sophomore', [], [], ['sophomore', 'junior', 'senior']);
const dynamics = new Course('ME 3450', 'Dynamics', 3, 'both', 'junior', [statics1, statics2], [difEq]);
const thermo2 = new Course('ME 3320', 'Thermodynamics II', 3, 'both', 'junior', [thermo1]);
const me3240L = new Course('ME 3240L', 'Manufacturing Engineering Laboratory', 1, 'both', 'junior', [engl2500, me2700]);
const me3250 = new Course('ME 3250', 'Mechanical Component Design', 3, 'both', 'junior', [em3240, me1700, engrStats]);
const fluids = new Course('ME 3350', 'Fluid Flow', 4, 'both', 'junior', [calc3, dynamics], [thermo2, difEq]);
const me3700 = new Course('ME 3700', 'Engineering Measurements', 3, 'both', 'junior', [ee4420, engrStats]);
const me3240 = new Course('ME 3240', 'Manufacturing Engineering', 3, 'both', 'junior', [me2700, me3240L]);
const me4210 = new Course('ME 4210', 'System Dynamics and Control', 4, 'both', 'senior', [ee4420, ee4480, dynamics, difEq]);
const me4360 = new Course('ME 4360', 'Heat Transfer', 4, 'both', 'senior', [thermo2, fluids]);
const me4150 = new Course('ME 4150', 'Mechanical Systems Design', 3, 'both', 'senior', [me3250, me3240]);

// Make a universal function to plan the degree for each major
function planDegree(requiredCourses, baseTransferCourses, englishElectives, needsEcon) {
    let creditLimit = 18;

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
            requiredCourses.push(micro); 
        }
        if (econOptions.value == 'macroeconomics'){
            requiredCourses.push(macro);
        }

        for (let semester = 1; semester <= 8; semester++) {
            const semesterElement = document.getElementById(`semester${semester}`);
            semesterElement.innerHTML = '';
        }

        for (let currentSemester = 1; currentSemester <= semestersToTake; currentSemester++) {
            const takenCourses = requiredCourses.filter(course => course.isTaken());

            let creditsTaken = takenCourses.reduce((total, course) => total + course.getCredits(), 0);
            const remainingCredits = requiredCourses
                .filter(course => !course.isTaken())
                .reduce((total, course) => total + course.getCredits(), 0);
            const semestersRemaining = semestersToTake - currentSemester + 1;
            const creditLimit = Math.min(18, Math.ceil(remainingCredits / semestersRemaining));

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
        const requiredCourses = [engr1010, engrChem, calc1, calc2, calc3, difEq, 
            me1600, me1700, physics1, physics2, statics1, statics2, engrStats, 
            thermo1, me2700, me2020, dynamics, thermo2, me3240L, me3250, fluids, 
            me3700, me3240, me4210, me4360, ee4420, ee4480, em3240, mate2730 ,
            engl1500, library, engl2500, me4150, 
            techElective1, techElective2, techElective3, techElective4, techElective5,
            humanitiesElective1, humanitiesElective2, socialSciencesElective1, eitherOrElective3];
        const englishElectives = [busComm, engl3090, techComm, spcm2120];
        const baseTransferCourses = [engrChem, calc1, calc2, calc3, difEq, physics1, physics2, engl1500, library, engl2500, micro, macro];

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