// Person
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}
// Instructor
class Instructor extends Person {
    constructor(InstructorAttrs) {
        super(InstructorAttrs);
        this.specialty = InstructorAttrs.specialty;
        this.favLanguage = InstructorAttrs.favLanguage;
        this.catchPhrase = InstructorAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`;
    }
    addSubtract() {
        return Math.floor(Math.random() * 11);
    }
}
// Student
class Student extends Person {
    constructor(StudentAttrs) {
        super(StudentAttrs)
        this.previousBackground = StudentAttrs.previousBackground;
        this.className = StudentAttrs.className;
        this.favSubjects = StudentAttrs.favSubjects;
        this.grade = Math.floor(Math.random() * 100);
    }
    listsSubjects() {
        const favSubjs = this.favSubjects.forEach((subject) => console.log(subject));
        return favSubjs;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        if (this.grade > 70) {
            return `${this.name} has graduated`;
        } else {
            return `Sorry ${this.name} try harder next time`;
        }
    }
}

// Project Manager
class ProjectManager extends Instructor {
    constructor(ProjectManagerAttrs) {
        super(ProjectManagerAttrs)
        this.gradClassName = ProjectManagerAttrs.gradClassName
        this.favInstructor = ProjectManagerAttrs.favInstructor
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}

const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
const kevin = new Student({
    name: "Kevin",
    age: 28,
    location: "California",
    previousBackground: "Table Games Dealer",
    className: "WEB21",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
const nisa = new Student({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    previousBackground: 'Debt Collector',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});

const joscelyn = new Student({
    name: "Joscelyn",
    age: 29,
    location: "California",
    previousBackground: "English teacher",
    className: 'Web21',
    favSubjects: ["Computer Science", "Philosophy", "English"],
});

const marguel = new ProjectManager({
    name: 'Marguel',
    age: 'Maybe 26',
    gradClassName: 'WEBPT2',
    favInstructor: 'Me?',
    location: 'California',
    specialty: 'React',
    favLanguage: 'JavaScript, Python, Elm etc.',
    catchPhrase: "Practice Flex Zombies !!!",
});

const brandon = new ProjectManager({
    name: 'Brandon',
    age: '34',
    gradClassName: 'WEB18',
    favInstructor: 'Professor Lambda',
    location: 'Maine',
    specialty: 'Redux',
    favLanguage: 'JavaScript, C++, Python.',
    catchPhrase: "You shall not pass!",
});

const mary = new ProjectManager({
    name: 'Mary',
    age: '24',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'New York',
    specialty: 'Express and Node.js',
    favLanguage: 'Javascript',
    catchPhrase: "That looks AWESOME",
});

const christian = new ProjectManager({
    name: 'Christian',
    age: '32',
    gradClassName: 'WEB18',
    favInstructor: 'Every Instructor in Lambda',
    location: 'Seattle, WA',
    specialty: 'Data Structures & Algorithms',
    favLanguage: 'JavaScript',
    catchPhrase: "Dont forget your daily commit.",
});

const pat = new ProjectManager({
    name: 'Pat',
    age: '38',
    gradClassName: 'WEB18',
    favInstructor: 'Brett Madrid',
    location: 'Petaluma, Ca',
    specialty: 'Empathetic to the struggle of Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lets google that together.'
});

const darren = new ProjectManager({
    name: 'Darren',
    age: '25',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'North Carolina',
    specialty: 'React',
    favLanguage: 'Javascript',
    catchPhrase: 'Gang. Gang.',
});
const austin = new ProjectManager({
    name: 'Austin',
    age: '23',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'Somewhere',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: ":eggplant:",
});

console.log('Instructor Dan:', dan)
console.log('Greeting:', dan.speak()) // Shows where person is from and name
console.log('Grade:', dan.grade(isaiah.name, 'Javascript')) // Shows Instructor grading assignment
console.log('Student Me:', isaiah)
console.log('Student Kevin:', kevin)
console.log('Student Nisa:', nisa)
console.log('Student Joscelyn:', joscelyn)
console.log('Favorite Subjects:', isaiah.listsSubjects()) // Shows the students favorite subject one by one
console.log('Pull Request:', isaiah.PRAssignment('HTML')) // Shows submission for pull request
console.log('Sprint Start:', isaiah.sprintChallenge('CSS')) // Shows student started Sprint
console.log('Isaiah\'s Previous Background:', isaiah.previousBackground)
console.log('Kevin\'s Previous Background:', kevin.previousBackground)
console.log('Nisa\'s Previous Background:', nisa.previousBackground)
console.log('Joscelyn\'s Previous Background:', joscelyn.previousBackground)
console.log('Project Manager Marguel:', marguel)
console.log('Project Manager Brandon:', brandon)
console.log('Project Manager Mary:', mary)
console.log('Project Manager Christian:', christian)
console.log('Project Manager Pat:', pat)
console.log('Project Manager Darren:', darren)
console.log('Project Manager Austin:', austin)
console.log('Marguel\'s Catch Phrase:', marguel.catchPhrase) // Prints Marguels Catch Phrase
console.log('Brandon\'s Catch Phrase:', brandon.catchPhrase)
console.log('Mary\'s Catch Phrase:', mary.catchPhrase)
console.log('Dan\'s Catch Phrase:', dan.catchPhrase)
console.log('Christian\'s Catch Phrase:', christian.catchPhrase)
console.log('Pat\'s Catch Phrase:', pat.catchPhrase)
console.log('Darren\'s Catch Phrase:', darren.catchPhrase)
console.log('Austin\'s Catch Phrase:', austin.catchPhrase)
console.log('Demo:', marguel.demo('Javascript')) // Instructor says what subject we are learning
console.log('Standup Alert:', marguel.standUp('@web21_marguel')) // Shows Marguel reminding chat of standup
console.log('Debug Alert:', marguel.debugsCode(isaiah.name, 'Ruby'))
isaiah.graduate(); // If you run code multiple times it will show me graduating and failing
