//let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//{name: 'Baba', id: 101, marks : 23 },
//{name: 'yaga', id: 200, marks : 45 },
//{name: 'Wick', id: 115, marks : 75 } ] 
//We are interested in retrieving only the name of the students and all the names should be in caps.

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
{name: 'Baba', id: 101, marks : 23 },
{name: 'yaga', id: 200, marks : 45 },
 {name: 'Wick', id: 115, marks : 75 } ] 
 let arr=[];

 for(let i of studentRecords){
    arr.push(i["name"].toUpperCase());
 }
 console.log(arr);

//"Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
//[{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

let arr1=[];
for(let i of studentRecords){
    if(i["marks"]>50){
        arr1.push(i);
    }
}
console.log(arr1);

//Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let arr2=[];
for(let i of studentRecords){
    if(i["marks"]>50 && i["id"]>120){
        arr2.push(i);
    }
}
console.log(arr2);

//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let sum=0;
for(let i of studentRecords){
    sum=sum+i["marks"];
}
console.log(sum);

//Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.
let arr3=[];
for(let i of studentRecords){
    if(i["marks"]>50){
        arr3.push(i["name"]);
    }
}
console.log(arr3);

// Question 6: This time we are required to print the sum of marks of the students with id > 120.
let arr4=[];
arr4.push(studentRecords.filter(checkId))

function checkId(i){
    return i.id>120;
}

let sum2=arr4.reduce(function(acc,ele){
    acc=acc+ele.marks;
},0);
console.log(sum2);

//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

for(let i of studentRecords){
    if(i.marks<50){ 
        i.marks = i.marks + 15;
    }
}

let arr5 = studentRecords.filter(x => x.marks > 50);
console.log(arr5);
let sum3= arr5.reduce((accu, curr) => accu + curr.marks,0);
console.log(sum3);

//Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 
let student1={
    name:"Anushikha",
    rollno:100,
    class:"physics"
}
let student2={
    name:"Smriti",
    rollno:101,
    class:"math"
}
let student3={
    name:"Lisha",
    rollno:102,
    class:"biology"
}
let student4={
    name:"Shiwani",
    rollno:103,
    class:"physics"
}
let student5={
    name:"Monika",
    rollno:104,
    class:"social-science"
}
let student6={
    name:"Rani",
    rollno:105,
    class:"chemistry"
}
let arr6=[{...student1},{...student2},{...student3},{...student4},{...student5},{...student6}];
console.log(arr6);