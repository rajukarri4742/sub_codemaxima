import { Injectable } from '@angular/core';
export interface MentorSectionRow{
    row:MentorSection[]
}
export interface MentorSection {
    name: string,
    profileImg: string,
    company?: string,
    role?: string,
    social?: Social[],
    description: string
}
export interface Social {
    socialMediaName: string,
    url: string
}
@Injectable({
    providedIn: 'root'
})
export class MentorSectionsData {
    public mentorSections :MentorSectionRow[] = [
        {
            row:[
                {
                    name: "Rajendra",
                    profileImg: "https://codingmentor22.github.io/assets/img/trainers/trainer-1.jpg",
                    role: "Application Developer",
                    company:"Oracle",
                    description: "Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Java, JavaScript, Groovy, Data Structures & Algorithms, and Programming. Strong Engineering Professional with a B-Tech - Bachelor of Technology focused in Computer Science.",
                },
                {
                    name: "Sahas",
                    company: "Ex.Oracle and Ex.Amazon",
                    profileImg: "https://codingmentor22.github.io/assets/img/trainers/trainer-2.jpg",
                    description: "I have been working with design and data structures since my college days and as well as actively mentoring junior developers in the workplace. I will be discussing the different types of interview questions that have been asked in different companies with help of my interview experiences and my strong connections in the IT industry.",
                },
                {
                    name: "Ahmad",
                    profileImg: "https://codingmentor22.github.io/assets/img/trainers/trainer-3.jfif",
                    description: "I was looking to make a move in my career. That’s when I heard about Coding maxima! I immediately applied and started attending classes and got an offer from Amazon.",
                },
                {
                    name: "Vamsi",
                    profileImg: "https://avatars.githubusercontent.com/u/29627131?v=4",
                    role: "Software Developer",
                    description: "The course of Coding maxima is really a very well structured one. I would advise anyone wanting to make a switch or start off with a good product based company, surely one good solution would be to get into Coding maxima",
                },
            ]
        },
        {
            row:[
                {
                    name: "Rajendra",
                    profileImg: "https://codingmentor22.github.io/assets/img/trainers/trainer-1.jpg",
                    role: "Application Developer",
                    company:"Oracle",
                    description: "Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Java, JavaScript, Groovy, Data Structures & Algorithms, and Programming. Strong Engineering Professional with a B-Tech - Bachelor of Technology focused in Computer Science.",
                },
                {
                    name: "Sahas",
                    company: "Ex.Oracle and Ex.Amazon",
                    profileImg: "https://codingmentor22.github.io/assets/img/trainers/trainer-2.jpg",
                    description: "I have been working with design and data structures since my college days and as well as actively mentoring junior developers in the workplace. I will be discussing the different types of interview questions that have been asked in different companies with help of my interview experiences and my strong connections in the IT industry.",
                },
                {
                    name: "Ahmad",
                    profileImg: "https://codingmentor22.github.io/assets/img/trainers/trainer-3.jfif",
                    description: "I was looking to make a move in my career. That’s when I heard about Coding maxima! I immediately applied and started attending classes and got an offer from Amazon.",
                },
                {
                    name: "Vamsi",
                    profileImg: "https://avatars.githubusercontent.com/u/29627131?v=4",
                    role: "Software Developer",
                    description: "The course of Coding maxima is really a very well structured one. I would advise anyone wanting to make a switch or start off with a good product based company, surely one good solution would be to get into Coding maxima",
                },
            ]
        },
        {
            row:[
                {
                    name: "Rajendra",
                    profileImg: "https://codingmentor22.github.io/assets/img/trainers/trainer-1.jpg",
                    role: "Application Developer",
                    company:"Oracle",
                    description: "Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Java, JavaScript, Groovy, Data Structures & Algorithms, and Programming. Strong Engineering Professional with a B-Tech - Bachelor of Technology focused in Computer Science.",
                },
                {
                    name: "Sahas",
                    company: "Ex.Oracle and Ex.Amazon",
                    profileImg: "https://codingmentor22.github.io/assets/img/trainers/trainer-2.jpg",
                    description: "I have been working with design and data structures since my college days and as well as actively mentoring junior developers in the workplace. I will be discussing the different types of interview questions that have been asked in different companies with help of my interview experiences and my strong connections in the IT industry.",
                },
                {
                    name: "Ahmad",
                    profileImg: "https://codingmentor22.github.io/assets/img/trainers/trainer-3.jfif",
                    description: "I was looking to make a move in my career. That’s when I heard about Coding maxima! I immediately applied and started attending classes and got an offer from Amazon.",
                },
                {
                    name: "Vamsi",
                    profileImg: "https://avatars.githubusercontent.com/u/29627131?v=4",
                    role: "Software Developer",
                    description: "The course of Coding maxima is really a very well structured one. I would advise anyone wanting to make a switch or start off with a good product based company, surely one good solution would be to get into Coding maxima",
                },
            ]
        }
    ]
}