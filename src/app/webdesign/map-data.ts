import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebDesignMapData {
  readonly chapters = [
    {
      name: "HTML",
      lessons: [
        {name:"Introduction", url:"webdesign/html/intro"},
        {name:"Headings & Paragraphs",url:"webdesign/html/headingsparagraph"},
        {name:"Lists",url:"webdesign/html/list"},
        {name:"Links & Buttons",url:"webdesign/html/links"},
        {name:"Tables",url:"webdesign/html/tables"},
        {name:"Multimedia",url:"webdesign/html/multimedia"},
        {name:"Blocks",url:"webdesign/html/attributes"},
        {name:"Attributes",url:"webdesign/html/blocks"},
      ],
    },
    {
      name: "CSS",
      lessons: [
        {name:"Introduction", url:"webdesign/css/intro"},
      ]
    },

    {
      name: "Web Application(Static)",
      lessons: [
        {name:"Your Place",url:""},
        {name:"Fan Pages",url:""},
        {name:"Favorite Sport",url:""},
        {name:"Personal Website(Biography)",url:""},
      ]
    },
    
  ];

}
