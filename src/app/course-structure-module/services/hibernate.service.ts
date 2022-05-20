import { Injectable } from '@angular/core';
import { HibernateMapData } from 'src/app/hibernate/map-data';
import { ICourse } from "../course.interface";
import { Chapter } from '../course.model';
@Injectable({
    providedIn: 'root'
})
export class Hibernate implements ICourse{
    constructor(private hibernateMapData:HibernateMapData){
    }
    loadChapters():Chapter[]{
        return this.hibernateMapData.chapters;
    }
}