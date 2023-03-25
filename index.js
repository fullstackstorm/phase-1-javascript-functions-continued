saturdayFun = (activity = "roller-skate") => `This Saturday, I want to ${activity}!`;
    
/*
const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
*/

function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*"){
    return (adjective = "special") => `You are ${flair}${adjective}${flair}!`;
}
