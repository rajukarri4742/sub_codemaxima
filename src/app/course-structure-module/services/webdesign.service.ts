import { Injectable } from '@angular/core';
import { ICourse } from "../course.interface";
import { WebDesignMapData } from 'src/app/webdesign/map-data';
import { Chapter } from '../course.model';
@Injectable({
    providedIn: 'root'
})
export class WebDesign implements ICourse{
    constructor(private webDesignMapData:WebDesignMapData){
    }
    loadChapters():Chapter[]{
        return this.webDesignMapData.chapters;
    }
}