class Course {
    constructor(id, title, credits, seasons, prerequisites = [], corequisites = [], years = []) {
        this.id = id;
        this.title = title;
        this.credits = credits;
        this.seasons = seasons; // Will be spring, fall, or both
        this.prerequisites = prerequisites;
        this.corequisites = corequisites;
        this.years = years;
        this.taken = false; // Has been taken
        this.taking = false; // Currently taking
        this.priority = 0;
    }

    static allCourses = [];


    /**
    * Use to set a course as taken.
    */
    markAsTaken() {
        this.taken = true;
    }

    /**
    * Use to set a course as being taken in the current semester.
    */
    markAsTaking() {
        this.taking = true;
    }

    /**
    * Checks if the prerequisites and corequisites for a course are satisfied. If satisfied, the course can be taken.
    */
    canTake(currentYear) {
        const prereqOptions = this.prerequisites.filter(prereq => prereq instanceof Array);
        const singlePrereqs = this.prerequisites.filter(prereq => prereq instanceof Course);
        let prereqsTaken = false;

        if (this.taken || this.taking){
            return false;
        } else {
            if (this.years.length > 0 && !this.years.includes(currentYear)) {
                return false;
            } else {
                if (prereqOptions.length > 0) {
                    // Logic: If every option in the prereqOptions array has at least one course that is satisfied, then the prerequisites are satisfied.
                    if (singlePrereqs.length > 0) {
                        prereqsTaken = singlePrereqs.every(prereq => prereq.taken) &&
                        prereqOptions.every(option => option.some(prereq => prereq.taken));
                    } else prereqsTaken = prereqOptions.every(option => option.some(prereq => prereq.taken));
                } else prereqsTaken = this.prerequisites.every(prereq => prereq.taken);

                const coreqsTaking = this.corequisites.some(coreq => coreq.taking);
                const coreqsTaken = this.corequisites.every(coreq => coreq.taken);
            
                if (this.prerequisites.length === 0) {
                    if (this.corequisites.length === 0) {
                        return true;
                    } else return (coreqsTaking || coreqsTaken);
                } else {
                    if (this.corequisites.length === 0) {
                        return prereqsTaken;
                    } else return prereqsTaken && (coreqsTaking || coreqsTaken);
                } 
            }
        }
    }

    /**
    * Finds the number of courses that depend on this course as a prerequisite or corequisite. This is used to determine the priority of a course in the degree plan.
    */
    findNumberOfDependents(requiredCourses) {
        const dependents = new Set();
        const coursesToCheck = [this];

        while (coursesToCheck.length > 0) {
            const course = coursesToCheck.shift();
            const directDependents = requiredCourses.filter(dependent =>
                dependent !== this &&
                (dependent.prerequisites.includes(course)
                || dependent.prerequisites.filter(prereq => prereq instanceof Array).some(option => option.includes(course))
                || dependent.corequisites.includes(course))
            );

            for (const dependent of directDependents) {
                if (!dependents.has(dependent)) {
                    dependents.add(dependent);
                    coursesToCheck.push(dependent);
                }
            }
        }

        return dependents.size;
    }

    /**
    * Sets the priority of the course. Should only be used on courses that can be taken.
    */
    setPriority(requiredCourses) {
        if (this.findNumberOfDependents(requiredCourses) > 0) {
            this.priority = this.findNumberOfDependents(requiredCourses);
            this.priority += 1; // Add a constant 1 to priority to indicate significance of having at least one dependent.
        }
        if (this.seasons != 'both') {
            this.priority += 1; 
        }
    }

    /**
    * Checks if the course has been taken.
    */
    isTaken() {
        return this.taken;
    }

    isTaking() {
        return this.taking;
    }

    getCredits() {
        return this.credits;
    }
    
    getSeasons() {
        return this.seasons;
    }

    getYears() {
        return this.years;
    }
          
}