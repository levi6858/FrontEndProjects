function validateAdd() {
    var theNewWord = document.forms["myForm"]["newWord"].value;
    var theNewNumber = document.forms["myForm"]["newNumber"].value;

    if (theNewWord == ""){
        alert("Please enter a word to check")
        return false;
    }else if (theNewNumber != ("1") && theNewNumber != ("2")){
        alert("Please enter a 1 or 2")
        return false;
    }else if (theNewNumber == "1") {
        for(var i = 0; i<((theNewWord.length)/2); i++){
            if (theNewWord.charAt(i) != theNewWord.charAt((theNewWord.length - i-1))){
                var tableRef = document.getElementById("list1");
                (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord +" False";
                return;
            }
        }
        var tableRef = document.getElementById("list1");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord +" True";
        }else{
            for(var i = 0; i<((theNewWord.length)/2); i++){
                if (theNewWord.charAt(i) != theNewWord.charAt((theNewWord.length - i-1))){
                    var tableRef = document.getElementById("list2");
                    (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord +" False" ;
                    return;
                }
            }
            var tableRef = document.getElementById("list2");
                (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord +" True";
    }
}

function clearList1() {
    var tableRef = document.getElementById("list1");
    tableRef.innerHTML = " ";
}

function clearList2() {
    var tableRef = document.getElementById("list2");
    tableRef.innerHTML = " ";
}

function makeUpper() {
    var tableRef = document.getElementById("list1");
    for(var i = 0; tableRef.rows.length > i; i++){
        tableRef.row[i].toUpperCase();
    }
}


