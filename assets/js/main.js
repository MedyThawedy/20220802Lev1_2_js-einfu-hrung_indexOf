let stringToSearch;
let stringToExaminate;
let output_txt;
const txt = 'How inappropriate to call this planet Earth, when clearly it is Ocean.';

let var1 = 'h';
let var2 = 'eart';
let var3 = 'moon';

const arrow_fn_wert_assign_values = (stringToSearch, stringToExaminate) => {
    stringToSearch = document.getElementById('idStr').value;
    stringToExaminate = document.getElementById('idStrTxt').value;
    arrow_fn_show_pos(stringToSearch, stringToExaminate);
    console.log(stringToSearch + ' = ' + stringToExaminate);
}

const arrow_fn_show_pos = (stringToSearch, stringToExaminate) => {
    let position_of_stringToSearch = stringToExaminate.indexOf(stringToSearch);
    ausgabe = `Position of ${stringToSearch} in ${stringToExaminate} ist = 
    ${position_of_stringToSearch}`;
    console.log(ausgabe);
    document.getElementById('pOutput').innerHTML = ausgabe;
    // Second part of the exercie "h", "earth", "moon"
    let myArray = [var1, var2, var3];
    console.log(myArray, txt);
    arrow_fn_show_pos2(myArray, txt);
}

// To be continued

const arrow_fn_show_pos2 = (myArray, txt) => {
    let array2 = myArray;
    console.log(array2);
    console.log(myArray[var1]);
    for (let index; index <= array2.length; i++) {
        let position_of_stringToSearch = stringToExaminate.indexOf(array2[index]);
        ausgabe = `Position of ${array2[index]} in ${txt} ist = ${position_of_stringToSearch}`;
        console.log(ausgabe);
        document.getElementById('pOutput2').innerHTML = document.getElementById('pOutput2').innerHTML + ausgabe + '^br°';
    }
}





