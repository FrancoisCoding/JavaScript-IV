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
    this.grade = [...Array(101).keys()];;
   }
  listsSubjects(subject) {
  const favSubjs = favSubjects.map()
  console.log(favSubjs)
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