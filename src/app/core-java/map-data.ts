import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreJavaMapData {
  readonly chapters = [
    {
      name: "Introduction",
      lessons: [
        {name:"Java Installation",url:"core-java/intro/install"},
        {name:"Introduction",url:""},
        {name:"Data Types",url:"core-java/intro/datatypes"},
        {name:"Arithmetic Operators",url:"core-java/intro/arthmatic"},
        {name:"Relational Operators",url:"core-java/intro/relational"},
        {name:"Logical Operators",url:"core-java/intro/logical"},
        {name:"Assignment Operators",url:"core-java/intro/assignment"},
        {name:"Control Statements",url:"core-java/intro/control"},
        {name:"Flow/Iterative Statements",url:"core-java/intro/flow"},
        {name:"Reading Input",url:"core-java/intro/readinput"}
      ],
    },
    {
      name: "Basic Problems",
      lessons: [
        {name:"Even or Odd",url:"core-java/basic_program/Even_or_Odd"},
        {name:"Smaller Number",url:"core-java/basic_program/smaller_number"},
        {name:"Greater Number",url:"core-java/basic_program/grater_number"},
        {name:"Reverse of Number",url:"core-java/basic_program/Reverse_of_number"},
        {name:"Palindrome",url:"core-java/basic_program/Palindrome"},
        {name:"Armstrong Number",url:"core-java/basic_program/Armstrong_number"},
        {name:"Neon Number",url:"core-java/basic_program/Neon_number"},
        {name:"SPY Number",url:"core-java/basic_program/SPY_number"},
        {name:"Factorial",url:"core-java/basic_program/Factorial"},
        {name:"Strong Number",url:"core-java/basic_program/Strong_Number"},
        {name:"Prime Number",url:"core-java/basic_program/Prime_number"},
        {name:"Perfect Number",url:"core-java/basic_program/Perfect_number"},
        {name:"Fibonacci Series",url:"core-java/basic_program/Fibonacci_Series"},
        {name:"Pronic Number",url:"core-java/basic_program/Pronic_Number"},
        {name:"Automorphic Number",url:"core-java/basic_program/Automorphic_number"}, 
        {name:"Trimorphic Number",url:"core-java/basic_program/Trimorphic_Number"},
        {name:"Weighted Sum of Digits",url:"core-java/basic_program/Weighted_Sum_of_Digits"},
        {name:"Sunny Number",url:"core-java/basic_program/Sunny_Number"}],
    },
    {
      name: "Patterns",
      lessons: [

        {name:"Pattern 1",url:"core-java/pattren/pattren1"},
        {name:"Pattern 2",url:"core-java/pattren/pattren2"},
        {name:"Pattern 3",url:"core-java/pattren/pattren3"},
        {name:"Pattern 4",url:"core-java/pattren/pattren4"},
        {name:"Pattern 5",url:"core-java/pattren/pattren5"},
        {name:"Pattern 6",url:"core-java/pattren/pattren6"},
        {name:"Pattern 7",url:"core-java/pattren/pattren7"},
        {name:"Pattern 8",url:"core-java/pattren/pattren8"},
        {name:"Pattern 9",url:"core-java/pattren/pattren9"},
        {name:"Pattern 10",url:"core-java/pattren/pattren10"},
        {name:"Pattern 11",url:"core-java/pattren/pattren11"},
        {name:"Pattern 12",url:"core-java/pattren/pattren12"},
        {name:"Pattern 13",url:"core-java/pattren/pattren13"},
        {name:"Pattern 14",url:"core-java/pattren/pattren14"},
        {name:"Pattern 15",url:"core-java/pattren/pattren15"},
        {name:"Pattern 16",url:"core-java/pattren/pattren16"},
      ],
    },
    {
      name: "Methods",
      lessons: [

        {name:"Introduction",url:"core-java/methods/introduction"},
        {name:"Example",url:"core-java/methods/example"},
        {name:"EvenOdd(Method)",url:"core-java/methods/evenoddmethod"},
        {name:"Reverse of Number(Method)",url:"core-java/methods/revnumbermethod"},
        {name:"Palindrom or not(Method)",url:"core-java/methods/palindromemethod"},
        {name:"Method Overloading",url:"core-java/methods/methodoverloading"}
      ],
    },
    {
      name: "Arrays",
      lessons: [

        {name:"Introduction",url: "core-java/arrays/introductionarray"},
       /* {name:"Static Array",url: "core-java/arrays/static"},
        {name:"Dynamic Array",url: "core-java/arrays/dynamic"},*/
        {name:"All Arrays",url: "core-java/arrays/readandprint"},
        {name:"Find Element",url: "core-java/arrays/findelement"},
        {name:"Key Count",url: "core-java/arrays/keycount"},
        {name:"Find Key Positions",url: "core-java/arrays/findkeypositions"},
        {name:"Max of Array",url: "core-java/arrays/maxofarray"},
        {name:"Min of Array",url: "core-java/arrays/minofarray"},
        {name:"Reverse of Array",url: "core-java/arrays/reverseofarray"},
        {name:"Second Max",url: "core-java/arrays/secondmax"},
        {name:"Count Primes in Array",url: "core-java/arrays/countprimes"},
        {name:"Reverse Each Element",url: "core-java/arrays/reverseeachelement"},
        {name:"Exclude Value",url: "core-java/arrays/excludenumber"},
        {name:"Each Number Count",url: "core-java/arrays/eachnumbercount"},  
        {name:"Number of Pairs",url: "core-java/arrays/numberofpairs"},       
        {name:"Super Array",url: "core-java/arrays/superarray"}

      ],
    },
    {
      name: "Wrapper Classes",
      lessons: [
        {name:"Introduction",url:"core-java/wrapper/introduction"},
        {name:"Integer",url:"core-java/wrapper/integer"},
        {name:"Double",url:"core-java/wrapper/double"},
        {name:"Character",url:"core-java/wrapper/character"}
      ],
    },
    {
      name: "Strings",
      lessons: [
        {name:"Introduction",url: "core-java/strings/stringintro"},
        {name:"String Pool Memory",url: "core-java/strings/stringpool"},
        {name:"Different Strings",url: "core-java/strings/diffstrings"},
        {name:"Find Letter",url: "core-java/strings/findletter"},
        {name:"Reverse Of String",url: "core-java/strings/reverse"},
        {name:"Palindrome",url: "core-java/strings/palindromestring"},
        {name:"Swap First Last Letters",url: "core-java/strings/swapfirstlast"},
        {name:"Vowels Count",url: "core-java/strings/vowels"},
        {name:"Vowel and Consonents Count",url: "core-java/strings/vowelsconsonents"},
        {name:"Different Characters",url: "core-java/strings/diffchars"},
        {name:"Special String",url: "core-java/strings/specialstring"}
      ],
    },
    
    {
      name: "Collections",
      lessons: [

        { name:"ArrayList Introduction",url: "core-java/collections/arraylistintro"},
        { name:"Find Value",url: "core-java/collections/findele"},
        { name:"Find String",url: "core-java/collections/strings"},
        { name:"Min Value",url: "core-java/collections/min"},
        { name:"Max Value",url: "core-java/collections/max"},
        { name:"Reverse",url: "core-java/collections/reverse"},
        { name:"Second Max",url: "core-java/collections/secondmax"},
        { name:"HashSet Introduction",url: "core-java/collections/hashsetintro"},
        { name:"All Strings(Unique)",url: "core-java/collections/uniquestring"},
        { name:"All Numbers(Unique)",url: "core-java/collections/uniquenumbers"},
      ],
    },
    {
      name: "Hash Map",
      lessons: [
        {name:"Introduction",url: "core-java/hashmap/introduction"},
        {name:"Read & Print",url:"core-java/hashmap/readandprint"},
        {name:"Number Occurrence",url:"core-java/hashmap/numberoccurance"},
        {name:"Most Occurrence Number",url:"core-java/hashmap/mostoccurancenumber"},
        {name:"Character Occurrence",url:"core-java/hashmap/charoccurance"},
        {name:"Most Occurrence Character",url:"core-java/hashmap/mostoccurancechar"},
        {name:"Duplicate Characters",url:"core-java/hashmap/duplicatechars"},
        {name:"Most Occurrence String",url:"core-java/hashmap/mostoccurancestring"},
        {name:"Longest String",url:"core-java/hashmap/longeststring"},
        {name:"Unique Numbers",url:"core-java/hashmap/getuniquenumber"},
        {name:"Unique Numbers Sum",url:"core-java/hashmap/uniquenumbersum"}
      ],
    },

    {
      name: "Multi Dimention Arrays & Collections",
      lessons: [
        { name:"Mutidimention Array Introduction", url: "core-java/multi/multiintro"},
        { name:"Matrix Addtion", url: "core-java/multi/matrixaddtion"},
        { name:"Matrix Subtraction", url: "core-java/multi/matrixsubtraction"},
        { name:"Matrix Multiplication", url: "core-java/multi/matrixmultiplication"},
        { name:"Diagonal Sum of Matrix", url: "core-java/multi/diognalsum"},
        { name:"Multidimention ArrayList", url: "core-java/multi/multiarraylist"},
        { name:"HashMap in the ArrayList", url: "core-java/multi/listwithmap"},
        { name:"ArrayList in the HashMap", url: "core-java/multi/mapwithlist"}
      ],
    },

    {
      name: "Keywords",
      lessons: [
        {name:"Static Keyword",url : "core-java/keywords/static"},
        {name:"Final Keyword",url : "core-java/keywords/final"},
        {name:"This Keyword",url : "core-java/keywords/this"},
        {name:"Super Keyword",url : "core-java/keywords/super"}
      ],
    },
    {
      name: "Classes & Objects",
      lessons: [
        { name:"Object Intoduction",url: "core-java/objectclass/objectintro"},
        { name:"Class Introduction",url: "core-java/objectclass/classintro"},
        { name:"Student Class",url: "core-java/objectclass/student"},
        { name:"Employee Class",url: "core-java/objectclass/employee"},
        { name:"House Class",url: "core-java/objectclass/house"},
        { name:"Human Class",url: "core-java/objectclass/human"},
        { name:"Store Class",url: "core-java/objectclass/store"},
        { name:"City Class",url: "core-java/objectclass/city"}
      ],
    },

    {
      name: "Pojo Classes",
      lessons: [
        { name:"Constructors, Getters&Setters, toString()",url: "core-java/pojoclasses/intro"},
        { name:"Student PojoClass",url: "core-java/pojoclasses/student"},
        { name:"Employee PojoClass",url: "core-java/pojoclasses/employee"},
        { name:"House PojoClass",url: "core-java/pojoclasses/house"},
        { name:"Human PojoClass",url: "core-java/pojoclasses/human"},
        { name:"Store PojoClass",url: "core-java/pojoclasses/store"},
        { name:"City PojoClass",url: "core-java/pojoclasses/city"},
        { name:"College PojoClass",url: "core-java/pojoclasses/college"}
      ],
    },

    {
      name: "Classes Relations",
      lessons: [
        { name:"Student - Branch",url: "core-java/classesrelations/studentbranch"},
        { name:"User - Movies",url: "core-java/classesrelations/usermovie"},
        { name:"College - Branch",url: "core-java/classesrelations/collegebranch"},
        { name:"Employee - Designation",url: "core-java/classesrelations/employeedesgnation"},
        { name:"House - Room",url: "core-java/classesrelations/houseroom"},
        { name:"Apartment - Flat - Room",url: "core-java/classesrelations/aptflatroom"},
        { name:"District - City",url: "core-java/classesrelations/districtcity"},
      ],
    },
    {
      name: "Management Systems",
      lessons: [
        { name:"Student Branch Managment System",url: "core-java/managementsystem/stdbranchmng"},
        { name:"College Branch Managment System",url: "core-java/managementsystem/clgbranchmng"},
        { name:"Employee Designation Managment System",url: "core-java/managementsystem/empdesgmng"},
        { name:"Teacher Subject Managment System",url: "core-java/managementsystem/teachersubmng"},
        { name:"Apartment Flat Room Managment System",url: "core-java/managementsystem/aptflatmng"}
      ],
    },
    {
      name: "Object Oriented Concepts",
      lessons: [
        { name:"Encaptulation",url: "core-java/oops/encaptulation"},
        { name:"Inheritance",url: "core-java/oops/inheritance"},
        { name:"Inheritance Example-1",url: "core-java/oops/inheritanceexample1"},
        { name:"Inheritance Example-2",url: "core-java/oops/inheritanceexample2"},
        { name:"Inheritance Example-3",url: "core-java/oops/inheritanceexample3"},
        { name:"Abstraction",url: "core-java/oops/abstraction"},
        { name:"Abstract Class",url: "core-java/oops/abstractclass"},
        { name:"Interface",url: "core-java/oops/interface"},
        { name:"Abstract Class (VS) Interface",url: "core-java/oops/absitr"},
        { name:"Multiple Inheritance",url: "core-java/oops/multipleinhertance"},
        { name:"Ploymorphism",url: "core-java/oops/polymorphisam"}
      ],
    },
    {
      name: "Exceptions",
      lessons: [
        { name:"Exceptions Introduction",url: "core-java/exceptions/exceptionintro"},
        { name:"Checked Exceptions",url: "core-java/exceptions/checked"},
        { name:"UnChecked Exceptions",url: "core-java/exceptions/unchecked"},
        { name:"Try - Catch - Throw - Throws - Finally",url: "core-java/exceptions/trycatchthrowthrows"},
        { name:"Userdefined Exceptions",url: "core-java/exceptions/userdefined"}
      ],
    },
    {
      name: "File Handling",
      lessons: [],
    },
   
    {
      name: "Multi Threading",
      lessons: [],
    }
  ];

}
