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
  if(this.grade > 70 ){
    return `${this.name} has graduated`;
  }
  else {
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

  console.log('Instructor Dan:',dan)
  console.log('Greeting:',dan.speak()) // Shows where person is from and name
  console.log('Grade:',dan.grade(isaiah.name, 'Javascript')) // Shows Instructor grading assignment
  console.log('Student:',isaiah)
  console.log('Favorite Subjects:',isaiah.listsSubjects()) // Shows the students favorite subject one by one
  console.log('Pull Request:',isaiah.PRAssignment('HTML')) // Shows submission for pull request
  console.log('Sprint Start:',isaiah.sprintChallenge('CSS')) // Shows student started Sprint
  console.log('Project Manager Marguel:',marguel)
  console.log('Project Manager Brandon:',brandon)
  console.log('Project Manager Mary:',mary)
  console.log('Marguel Catch Phrase:',marguel.catchPhrase) // Prints Marguels Catch Phrase
  console.log('Brandon Catch Phrase:',brandon.catchPhrase)
  console.log('Mary Catch Phrase:',mary.catchPhrase)
  console.log('Dan Catch Phrase:',dan.catchPhrase)
  console.log('Demo:',marguel.demo('Javascript')) // Instructor says what subject we are learning
  console.log('Standup Alert:',marguel.standUp('@web21_marguel'))// Shows Marguel reminding chat of standup
  console.log('Debug Alert:',marguel.debugsCode(isaiah.name, 'Ruby'))
  isaiah.graduate(); // If you run code multiple times it will show me graduating and failing
