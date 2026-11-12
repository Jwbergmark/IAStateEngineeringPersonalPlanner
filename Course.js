class Course {
    constructor(id, title, credits, prerequisites = [], corequisites = []) {
        this.id = id;
        this.title = title;
        this.credits = credits;
        this.prerequisites = prerequisites;
        this.corequisites = corequisites;
        this.isSatisfied = false;
        this.taking = false;
    }

    /**
    * Use to set a course as taken.
    */
    markAsTaken() {
        this.isSatisfied = true;
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
    canTake() {
        const prereqOptions = this.prerequisites.filter(prereq => prereq instanceof Array);
        const singlePrereqs = this.prerequisites.filter(prereq => prereq instanceof Course);
        let prereqsTaken = false;

        if (prereqOptions.length > 0) {
            // Logic: If every option in the prereqOptions array has at least one course that is satisfied, then the prerequisites are satisfied.
            if (singlePrereqs.length > 0) {
                prereqsTaken = singlePrereqs.every(prereq => prereq.isSatisfied) &&
                prereqOptions.every(option => option.some(prereq => prereq.isSatisfied));
            } else prereqsTaken = prereqOptions.every(option => option.some(prereq => prereq.isSatisfied));
        } else prereqsTaken = this.prerequisites.every(prereq => prereq.isSatisfied);

        const coreqsTaking = this.corequisites.some(coreq => coreq.taking);
        const coreqsTaken = this.corequisites.every(coreq => coreq.isSatisfied);
    
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

    getCredits() {
        return this.credits;
    }
       
          
}