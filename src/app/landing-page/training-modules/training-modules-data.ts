import { Injectable } from '@angular/core';

export interface Module{
    id:string,
    name:string,
    modules:ModuleDetails[]
}
export interface ModuleDetails{
    title:string,
    titleDescription:string,
    titlePoints:string[],
    duration:string,
    lessons:string[]
}

@Injectable({
    providedIn: 'root'
})


export class TrainingModulesData{
    public data:Module[] = [
        {
            id:"programming",
            name:"Programming",
            modules:[
                {
                    title:"Java",
                    titleDescription:"Coding Maxima will founs on coding and it will improve your problem solving skills by using JAVA.",
                    titlePoints:["150+ Coding Question & Answers",
                                 "100+ Coding Debugging Animation videos",
                                 "52+ Hours of Classes",
                                 "Java Interview Question & Answers Kit"],
                    lessons:[
                        "Introductions and Installations",
                        "Datatypes and Operators",
                        "Control statements and Loops",
                        "Basic Mathematical problems",
                        "Patterns Designs",
                        "Methods",
                        "Arrays and Wrapper classes",
                        "Strings",
                        "Collections framework",
                        "Hashmap",
                        "Multidimensional Arrays and Collections",
                        "Keywords",
                        "Classes and Objects",
                        "Pojo classes and Relations",
                        "Management Systems",
                        "Object Oriented concepts",
                        "Exceptions",
                        "File Handling",
                        "Multi Threading"
                    ],
                    duration:"30 Days",
                },
                {
                    title:"Python",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["100+ Practice programs"],
                    lessons:[
                        "How to write code for problems",
                        "Operators Control Structure and Flow Structure",
                        "Mathematical problems and patterns",
                        "Problems on strings and Arrays",
                        "Multi Dimentional Array problems",
                    ],
                    duration:"30 Days",
                },
                {
                    title:"JavaScript",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["200+ Practice programs","100+ Content"],
                    lessons:[
                        "Sequencing",
                        "Block-based Coding",
                        "Algorithms",
                        "Time and direction",
                        "Loops, variables,operators",
                        "Arithmetic operators",
                        "Logical operators",
                        "Ternary operators",
                        "Pre defined , user defined methods and other concepts of language",
                    ],
                    duration:"40 Days"
                },
            ]
        },
        {
            id:"backend",
            name:"Backend",
            modules:[
                {
                    title:"Beginner",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["150+ Practice programs",
                                 "100+ Coding Debugging Animation videos"],
                    lessons:[
                        "Git, Github & Maven",
                        "Sql Quaries and Relations",
                        "Hibernate",
                        "Spring Boot",
                        "Node js and mongodb",
                    ],
                    duration:"30 Days",
                },
                {
                    title:"Intermediate",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["200+ Practice programs","100+ Content"],
                    lessons:[
                        "Sever side Java script",
                        "Block-based Coding",
                        "Algorithms",
                        "Time and direction",
                        "Loops, variables,operators",
                        "Arithmetic operators",
                        "Logical operators",
                        "Ternary operators",
                        "Pre defined , user defined methods and other concepts of language",
                    ],
                    duration:"40 Days"
                },
                {
                    title:"Advanced",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["500+ Practice programs"],
                    lessons:[
                        "Functions, variables, data types",
                        "UI development",
                        "Basic Javascript",
                        "Complex loops",
                        "Cryptography",
                        "Array of Strings",
                    ],
                    duration:"50 Days"
                }
            ]
        },
        {
            id:"frontend",
            name:"Front-end (UI & UX)",
            modules:[
                {
                    title:"Beginner",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["100+ Practice programs"],
                    lessons:[
                        "Interview Trainings",
                        "Resume Preparations"
                    ],
                    duration:"30 Days",
                },
                {
                    title:"Intermediate",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["200+ Practice programs","100+ Content"],
                    lessons:[
                        "Mock interviews with real-life interviewers from the different MNCs",
                        "Creating profiles on different coding platforms",
                        "Training on use of online coding platforms",
                    ],
                    duration:"40 Days"
                },
                {
                    title:"Advanced",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["500+ Practice programs"],
                    lessons:[
                        "Functions, variables, data types",
                        "UI development",
                        "Basic Javascript",
                        "Complex loops",
                        "Cryptography",
                        "Array of Strings",
                    ],
                    duration:"50 Days"
                }
            ]
        },
        {
            id:"topcourses",
            name:"Top Courses",
            modules:[
                {
                    title:"Angular",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["100+ Practice programs"],
                    lessons:[
                        "Interview Trainings",
                        "Resume Preparations"
                    ],
                    duration:"30 Days",
                },
                {
                    title:"React",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["200+ Practice programs","100+ Content"],
                    lessons:[
                        "Mock interviews with real-life interviewers from the different MNCs",
                        "Creating profiles on different coding platforms",
                        "Training on use of online coding platforms",
                    ],
                    duration:"40 Days"
                },
                {
                    title:"Node",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["500+ Practice programs"],
                    lessons:[
                        "Functions, variables, data types",
                        "UI development",
                        "Basic Javascript",
                        "Complex loops",
                        "Cryptography",
                        "Array of Strings",
                    ],
                    duration:"50 Days"
                },
                {
                    title:"My-SQL Databse",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["500+ Practice programs"],
                    lessons:[
                        "Functions, variables, data types",
                        "UI development",
                        "Basic Javascript",
                        "Complex loops",
                        "Cryptography",
                        "Array of Strings",
                    ],
                    duration:"50 Days"
                },
                {
                    title:"Mongo DB - Database",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["500+ Practice programs"],
                    lessons:[
                        "Functions, variables, data types",
                        "UI development",
                        "Basic Javascript",
                        "Complex loops",
                        "Cryptography",
                        "Array of Strings",
                    ],
                    duration:"50 Days"
                }
            ]
        },
        {
            id:"fullstack",
            name:"Full Stack Development",
            modules:[
                {
                    title:"FullStack with Java",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["100+ Practice programs"],
                    lessons:[
                        "Strings in Java (Mutability & Immutability)",
                        "Packaging Structure and Keywords(static, final, this)",
                        "Collections Freamwork",
                    ],
                    duration:"30 Days",
                },
                {
                    title:"Full Stack with JavaScript",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["200+ Practice programs","100+ Content"],
                    lessons:[
                        "Object Oriented Programming(OOPS)",
                        "Arithmetic operators",
                        "Logical operators",
                        "Ternary operators",
                        "Exception Handling Mechanism",
                        "File Handling Concepts",
                        "MultiThreading",
                        "MySql introduction & JDBC",
                        "Pre defined , user defined methods and other concepts of language",
                    ],
                    duration:"40 Days"
                },
                {
                    title:"Full Stack with Python",
                    titleDescription:"An ideal course to help kids quickly grasp the basics of coding and start writing code using blocks.",
                    titlePoints:["500+ Practice programs"],
                    lessons:[
                        "What is Spring and WebServices",
                        "Introduction on REST APIs",
                        "SpringBoot Controller, Service and Repository",
                        "Dependency Injectioin and IoC Container",
                        "Spring Beans and BeanFactory",
                        "Different Components in Spring",
                        "Spring AOP (Aspect Oriented Programming)",
                        "Spring Qualifiers and Profiles",
                    ],
                    duration:"50 Days"
                }
            ]
        },
    ]
}