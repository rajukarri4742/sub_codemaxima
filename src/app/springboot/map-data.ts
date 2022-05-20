import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpringBootMapData {

  readonly chapters = [
    {
      name: "Introduction",
      lessons: [
        { name:"Prerequsites",url: "springboot/intro/pre"},
        { name:"XML Files",url: "springboot/intro/xml"},
        { name:"JSON Object",url: "springboot/intro/json"},
        { name:"REST APIs",url: "springboot/intro/rest"},
        { name:"Maven Dependencies",url: "springboot/intro/maven"}
      ],
    },

    {
      name: "Spring Boot",
      lessons: [
       
        { name:"Spring Boot Starter",url: "springboot/boot/start"},
        { name:"Initilization Of Application",url: "springboot/boot/initi"},
        { name:"Spring Boot Properties",url: "springboot/boot/properties"},
        { name:"POSTMAN",url: "springboot/boot/postman"},
        { name:"Entity Classes",url: "springboot/boot/entity"}
      ],
    },

    {
      name: "Controller",
      lessons: [

        { name:"Controller Introduction Introduction",url: "springboot/controller/controlerintro"},
        { name:"Annotations",url: "springboot/controller/annotations"},
        { name:"Example - 1",url: "springboot/controller/example1"},
        { name:"Example - 2",url: "springboot/controller/example2"},
        { name:"Example - 3",url: "springboot/controller/example3"}
       
      ],
    },

    {
      name: "Service",
      lessons: [

        { name:"Service Introduction",url: "springboot/service/serviceintro"},
        { name:"Example - 1",url: "springboot/service/example1"},
        { name:"Example - 2",url: "springboot/service/example2"},
        { name:"Example - 3",url: "springboot/service/example3"}
       
      ],
    },

    {
      name: "Repository",
      lessons: [

        { name:"Repository Introduction",url: "springboot/repository/repositoryintro"},
        { name:"Example - 1",url: "springboot/repository/example1"},
        { name:"Example - 2",url: "springboot/repository/example2"},
        { name:"Example - 3",url: "springboot/repository/example3"},
        { name:"Example - 4",url: "springboot/repository/example4"}
       
      ],
    },

    {
      name: "Core Concepts",
      lessons: [
        { name:"Dependency Injection",url: "springboot/coreconcepts/dependency"},
        { name:"Spring Components",url: "springboot/coreconcepts/component"},
        { name:"Spring Beans",url: "springboot/coreconcepts/beans"},
        { name:"Spring IoC Container",url: "springboot/coreconcepts/ioc"},
        { name:"Spring Accuator",url: "springboot/coreconcepts/accuator"}
      ],
    },

    {
      name: "Error Handing / Exceptions",
      lessons: [
       
      ],
    },

    {
      name: "Spring AOP",
      lessons: [
       
        { name:"Spring AOP",url: "springboot/springaop/aop"},
        { name:"Example - 1",url: "springboot/springaop/example1"},
        { name:"Example - 2",url: "springboot/springaop/example2"}
      ],
    },

    {
      name: "Swagger",
      lessons: [
       
      ],
    },

    {
      name: "Spring Sequrity",
      lessons: [
       
      ],
    },

    {
      name: "Courier Service Application",
      lessons: [
       
      ],
    },

    {
      name: "Library Management Application",
      lessons: [
       
      ],
    },
   
  ];

}
