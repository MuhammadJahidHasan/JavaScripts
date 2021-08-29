'use strict';

let variablesName = ["underscore_case",
    "first_name",
    "Some_Variable",
    "calculate_AGE",
    "delayed_departure"];
    let newVariableName = [];
    for(var i = 0; i<variablesName.length; i++){

    //console.log(variablesName);
    const it= variablesName[i].indexOf('_') + 1;
   // console.log(variablesName[it]);
    console.log(variablesName[i].toUpperCase());
    //console.log(variablesName);
    //console.log(names[it]);
    let n = variablesName[i].split('_');
    newVariableName.push(n.join(''));
    console.log(variablesName);
}

//console.log(variablesName,t);