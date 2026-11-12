let minors = 1;
const addButton = document.getElementById('add');
const minor1 = document.getElementById('minor1');
const minor2 = document.getElementById('minor2');
const minor3 = document.getElementById('minor3');

// Wrappers
const minor1Wrapper = document.getElementById('minor1-wrapper');
const minor2Wrapper = document.getElementById('minor2-wrapper');
const minor3Wrapper = document.getElementById('minor3-wrapper');

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

// Majors
let totalCredits = 0;
const major = document.getElementById('major');

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

// Courses
const engr1010 = new Course('ENGR 1010', 'Engineering Orientation', 0);

const engrChem = new Course('CHEM 1670', 'General Chemistry for Engineering Students', 4);
const chem1 = new Course('CHEM 1770 + L', 'General Chemistry I', 5);
const chem2 = new Course('CHEM 1780 + L', 'General Chemistry II', 4, [[chem1, engrChem]]);

const calc1 = new Course('MATH 1650', 'Calculus I', 4);
const calc2 = new Course('MATH 1660', 'Calculus II', 4, [calc1]);
const calc3 = new Course('MATH 2650', 'Calculus III', 4, [calc2]);
const difEq = new Course('MATH 2670', 'Differential Equations', 4, [calc2]);

const engl1500 = new Course('ENGL 1500', 'College Composition', 3);
const library = new Course('LIB 1600', ' Introduction to College Level Research', 1);
const engl2500 = new Course('ENGL 2500', 'Advanced Composition', 3, [engl1500], [library]);
const busComm = new Course('ENGL 3020', 'Business Communication', 3, [engl2500]);
const engl3090 = new Course('ENGL 3090', 'Proposal and Report Writing', 3, [engl2500]);
const techComm = new Course('ENGL 3140', 'Technical Communication', 3, [engl2500]);
const spcm2120 = new Course('SPCM 2120', 'Fundamentals of Public Speaking', 3, [engl2500]);

const micro = new Course('ECON 1010', 'Principles of Microeconomics', 3);
const macro = new Course('ECON 1020', 'Principles of Macroeconomics', 3);

const physics1 = new Course('PHYS 2310 + L', 'Physics I', 5, [calc1], [calc2]);
const physics2 = new Course('PHYS 2320 + L', 'Physics II', 5, [physics1, calc2]);

const statics1 = new Course('CE 2710', 'Foundations of Statics', 1, [calc1], [physics1]);
const statics2 = new Course('CE 2720', 'Applied Statics', 2, [statics1, physics1], [calc2]);

const engrStats = new Course('STAT 3050', 'Engineering Statistics', 3, [calc1]);

// EE
const ee4420 = new Course('EE 4420', 'Introduction to Circuits and Instruments', 2, [difEq, physics2]);
const ee4480 = new Course('EE 4480', 'Introduction to AC Circuits and Motors', 2, [], [ee4420]);

// EM
const em3240 = new Course('EM 3240', 'Mechanics of Materials', 3, [statics1, statics2]);

// MATE
const mate2730 = new Course('MATE 2730', 'Principles of Materials Engineering', 3, [[engrChem, chem1], calc1]);

// ME
const me1600 = new Course('ME 1600', 'Mechanical Engineering Problem Solving with Computer Applications', 3, [], [calc1, calc2, calc3, difEq]);
const me1700 = new Course('ME 1700', 'Engineering Graphics and Introductory Design', 3, [], [calc1]);
const thermo1 = new Course('ME 23100', 'Thermodynamics I', 3, [engrChem, calc2, physics1]);
const me2700 = new Course('ME 2700', 'Introduction to Mechanical Engineering Design', 3, [me1600, me1700, physics1]);
const me2020 = new Course('ME 2020', 'Professional Planning', 0);
const dynamics = new Course('ME 3450', 'Dynamics', 3, [statics1, statics2], [difEq]);
const thermo2 = new Course('ME 3320', 'Thermodynamics II', 3, [thermo1]);
const me3240L = new Course('ME 3240L', 'Manufacturing Engineering Laboratory', 1, [engl2500, me2700]);
const me3250 = new Course('ME 3250', 'Mechanical Component Design', 3, [em3240, me1700, engrStats]);
const fluids = new Course('ME 3350', 'Fluid Flow', 4, [calc3, dynamics], [thermo2, difEq]);
const me3700 = new Course('ME 3700', 'Engineering Measurements', 3, [ee4420, engrStats]);
const me3240 = new Course('ME 3240', 'Manufacturing Engineering', 3, [me2700, me3240L]);
const me4210 = new Course('ME 4210', 'System Dynamics and Control', 4, [ee4420, ee4480, dynamics, difEq]);
const me4360 = new Course('ME 4360', 'Heat Transfer', 4, [thermo2, fluids]);


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
            me3700, me3240, me4210, me4360, ee4420, ee4480, em3240, mate2730,
            engl1500, library, engl2500];
        const englishElectives = [busComm, engl3090, techComm, spcm2120];
        const economicsElectives = [micro, macro];

        const canTakeCourses = requiredCourses.filter(course => course.canTake());
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