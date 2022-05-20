import { Injectable } from '@angular/core';
import { SpringBootMapData } from 'src/app/springboot/map-data';
import { ICourse } from "../course.interface";
import { Chapter } from '../course.model';
@Injectable({
    providedIn: 'root'
})
export class SpringBoot implements ICourse{
    constructor(private springBootMapData:SpringBootMapData){
    }
    loadChapters():Chapter[]{
        return this.springBootMapData.chapters;
    }
}