window.courses = (() => {
    const techElective1 = new Course('', 'Technical Elective', 3, 'both');
    const techElective2 = new Course('', 'Technical Elective', 3, 'both');
    const techElective3 = new Course('', 'Technical Elective', 3, 'both');
    const techElective4 = new Course('', 'Technical Elective', 3, 'both');
    const techElective5 = new Course('', 'Technical Elective', 3, 'both');

    const humanitiesElective1 = new Course('', 'Humanities Elective', 3, 'both', 'genEd');
    const humanitiesElective2 = new Course('', 'Humanities Elective', 3, 'both', 'genEd');
    const socialSciencesElective1 = new Course('', 'Social Sciences Elective', 3, 'both', 'genEd');
    const socialSciencesElective2 = new Course('', 'Social Sciences Elective', 3, 'both', 'genEd');
    const eitherOrElective3 = new Course('', 'Humanities/Social Sciences Elective', 3, 'both', 'genEd');

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

    return {
        techElective1, techElective2, techElective3, techElective4, techElective5,
        humanitiesElective1, humanitiesElective2, socialSciencesElective1, socialSciencesElective2, eitherOrElective3,
        engr1010, engrChem, chem1, chem2, calc1, calc2, calc3, difEq,
        engl1500, library, engl2500, busComm, engl3090, techComm, spcm2120,
        micro, macro, physics1, physics2, statics1, statics2, engrStats,
        aero1600, aero1610, aero1920, ee4420, ee4480, em3240, mate2730,
        me1600, me1700, thermo1, me2700, me2020, dynamics, thermo2, me3240L,
        me3250, fluids, me3700, me3240, me4210, me4360, me4150
    };
})();
