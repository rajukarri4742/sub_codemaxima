import { CoursesList } from "./courses-list.enum";
import { CoreJava } from './services/core-java.service';
import { Hibernate } from "./services/hibernate.service";
import { LowLevelDesign } from "./services/low-level-design.service";
import { MySql } from './services/my-sql.service';
import { SpringBoot } from "./services/spring-boot.service";
import { WebDesign } from "./services/webdesign.service";

export const COURSES_MAP:{ [courseName:string] : any } = {
    [CoursesList.CoreJava] : CoreJava,
    [CoursesList.MySql]    : MySql,
    [CoursesList.Hibernate]: Hibernate,
    [CoursesList.LowlevelDesign]:LowLevelDesign,
    [CoursesList.SpringBoot]:SpringBoot,
    [CoursesList.WebDesign]:WebDesign,
    ["core-java"]:CoreJava,
    ["my-sql"]:MySql,
    ["hibernate"]:Hibernate,
    ["lowl-level-design"]:LowLevelDesign,
    ["springboot"]:SpringBoot,
    ["webdesign"]:WebDesign
}