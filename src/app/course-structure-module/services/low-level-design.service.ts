import { Injectable } from '@angular/core';
import { LowLevelDesignMapData } from 'src/app/lowl-level-design/map-data';
import { ICourse } from "../course.interface";
import { Chapter } from '../course.model';
@Injectable({
    providedIn: 'root'
})
export class LowLevelDesign implements ICourse{
    constructor(private lowLevelDesignMapData:LowLevelDesignMapData){
    }
    loadChapters():Chapter[]{
        return this.lowLevelDesignMapData.chapters;
    }
}