let age = 14;

if (age >= 19){
    console.log(`You are enough age for this one`);
}
else{
    console.log(`please wait ${19 - age} years`);
}

let isStudent = true;
if(isStudent && age <= 18){
    console.log(`You are a student`);
}
else{
    console.log(`You are not a student`);
}

age = 19;
if(age >= 18){
    console.log(`You are old enough to enter this site`);
}
else if(age < 0){
    console.log(`You have even not born yet`);
}
else{
    console.log(`you must be 18+ to enter this site`);
}