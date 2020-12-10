// const todos=[
//     {
//         id:1,
//         text:"take out trash",
//         iscompleted: true
//     },
//     {
//         id:2,
//         text:"Meeting with boss",
//         iscompleted: true
//     },
//     {
//         id:3,
//         text:"Dentist appt",
//         iscompleted: false
//     }
// ];

// // // forEach
// todos.forEach((todo)=>console.log(todo.text));
// // //map
// //  const todotext=todos.map=todo=>{
// //      return todo.text;
// // };
// console.log(todotext);

// //filter
// const todocompleted=todos.filter(function(todo){
//     return todo.iscompleted===true;
// }).map(function(todo){
//     return todo.text;
// })
// console.log(todocompleted)


// const addnums=(num1=2,num2=6)=>(num1+num2);
// console.log(addnums(5))

// function Person(firstname,lastname,dob){
//     this.firstname= firstname;
//     this.lastname= lastname;
//     this.dob = new Date(dob);
//     this.getBirthYear=function(){
//         return this.dob.getFullYear();
//     }
//     this.getFullName=function(){
//         return `${this.firstname} ${this.lastname}`;
//     }
// };

// const Person1= new Person('Anurodh','Dubey','04-10-2000');
// console.log(Person1.getBirthYear());
// console.log(Person1.getFullName());


//forEach
//Filter
//map
//sort 
//reduce

const companies=[
    {name:'company one',category:'finance',start:1981,end:2003},
    {name:'company two',category:'Retail',start:1992,end:2008},
    {name:'company three',category:'Auto',start:1999,end:2007},
    {name:'company four',category:'Retail',start:1989,end:2010},
    {name:'company five',category:'technology',start:2009,end:2014},
    {name:'company six',category:'Finance',start:1987,end:2010},
    {name:'company seven',category:'Auto',start:1986,end:1996},
    {name:'company eight',category:'Technology',start:2011,end:2016},
    {name:'company nine',category:'Retail',start:1981,end:1989},
];

const ages=[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

    // for(let i=0;i<companies.length;i++){
    //     console.log(companies[i])
    // }
//forEach

// companies.forEach(function(company){
//     console.log(company)
// })

//filter
// let candrink=[];
// for(let i=0;i<ages.length;i++){
//     if(ages[i]>=21){
//         candrink.push(ages[i]);
//     }
// }
// console.log(candrink);

// const candrink=ages.filter(function(age){
//     if(age>=21){
//         return true;
//     }
// });
// console.log(candrink);

// const candrink=ages.filter(age=> age>=21);
// console.log(candrink);


// const retailcompanies=companies.filter(function(company){
//     if(company.category==="Retail"){
//         return true;
//     }
// });


// const retailcompanies=companies.filter(company=> company.category==="Retail")
// console.log(retailcompanies);

//map-it creates an array:-
// const testmap=companies.map(company =>`${company.name} [${company.start}-${company.end}]`);
// console.log(testmap);


// const agesSquare= ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

//sort
// const sortedcompanies= companies.sort(function(c1,c2) {
//     if(c1.start>c2.start){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });


// const sortedcompanies=companies.sort((a,b) =>(a.start>b.start ? 1:-1));
// console.log(sortedcompanies);


// const sortages= ages.sort((a,b)=> a-b);
// console.log(sortages);


//reduce

// let agesum =0;
// for(let i=0;i<ages.length;i++){
//     agesum+=ages[i];
// }
// console.log(agesum);

// const agesum = ages.reduce(function(total,age){
//     return total +age;
// },0);
// console.log(agesum);


// const agesum = ages.reduce((total,age)=>{
//     return total +age;
// },0);
// console.log(agesum);



