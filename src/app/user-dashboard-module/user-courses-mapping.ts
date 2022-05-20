import { Injectable } from '@angular/core';
export interface UserMapModel{
    [token:string] : string[] 
}
@Injectable({
    providedIn: 'root'
})
export class UserCoursesMapping {
    userMap:{ [token:string] : string[] } = {
        "12":[
            "Core-Java","My-Sql",
        ],
        "123":[
            "Core-Java","My-Sql", "Hibernate",
        ],
        "1234":[
            "Core-Java","My-Sql", "Hibernate", "Spring Boot",
        ],
        "12345":[
            "Core-Java","My-Sql", "Hibernate", "Spring Boot", "Low Level Design"
        ]
    }
}