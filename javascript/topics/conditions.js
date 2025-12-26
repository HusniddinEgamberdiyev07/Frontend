// -- Conditional statement --

// Syntax:

// if(condition1){
//      runs if condition1 is true
// } esle if(condition2){
//      runs if condition2 is true
// } else{
//      runs if all above conditions are false
// }

let score = 78;

if (score >= 90){
    console.log("Great");
}else if(score >= 70){
    console.log("Good");
}else{
    console.log("Go study");
}


// -- Switch statement -- 

// It is useful when you want to compare same value against multiple possibilities.

// Syntax:

// switch(expression){
//     case value1:
//         runs if expression === value1
//         break;

//     case value1:
//         runs if expression === value1
//         break;

//     default:
//         runs if no case match
// }

let day = 3;

switch(day){
    case 1:
        console.log("Mon");
        break;
    case 2:
        console.log("Tue");
        break;
    case 3:
        console.log("Wed");
        break;
    case 4:
        console.log("Thu");
        break;
    case 5:
        console.log("Fri");
        break;
    case 6:
        console.log("Sat");
        break;
    case 7:
        console.log("Sun");
        break;
    default:
        console.log("No day");
}


// Multiple cases doing the same thing.

switch(day){
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Weekday");
}

// Using expressions in switch.

switch(true){
    case score >= 90:
        console.log("Great");
        break;
    case score >= 70:
        console.log("Good");
        break;
    default:
        console.log("Go study");
}