import { Injectable } from '@angular/core';
import { ICourse } from "../course.interface";
import { CoreJavaMapData } from 'src/app/core-java/map-data';
import { Chapter } from '../course.model';
@Injectable({
    providedIn: 'root'
})
export class CoreJava implements ICourse{
    constructor(private coreJavaMapData:CoreJavaMapData){
    }
    loadChapters():Chapter[]{
        return this.coreJavaMapData.chapters;
    }
}