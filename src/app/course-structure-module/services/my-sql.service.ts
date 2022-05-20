import { Injectable } from '@angular/core';
import { MySqlMapData } from 'src/app/my-sql/map-data';
import { ICourse } from "../course.interface";
import { Chapter } from '../course.model';
@Injectable({
    providedIn: 'root'
})
export class MySql implements ICourse{
    constructor(private mySqlMapData:MySqlMapData,){
    }
    loadChapters():Chapter[]{
        return this.mySqlMapData.chapters;
    }
}