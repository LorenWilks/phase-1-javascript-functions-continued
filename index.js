// code your solution here
function saturdayFun(target = 'roller-skate') {
    return `This Saturday, I want to ${target}!`
}

let mondayWork = function(mW = 'go to the office') {
    return `This Monday, I will ${mW}.`
}

let wrapAdjective = function(flair = '*') {
    return function(adj ='special') {
        return `You are ${flair}${adj}${flair}!`
    }
}