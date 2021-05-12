async function getData(){

    var apiString = "https://api.quotable.io/random";

    var inputValue = document.getElementById("para").value;
    apiString= apiString + "?type=meat-and-filler&paras=" + inputValue;
    alert(apiString);

    var response = await fetch(apiString);
  

    document.getElementById("myRawData").innerHTML = "";
    document.getElementById("myFormattedData").innerHTML= "";


    var jsonData = await response.json();

    document.getElementById("myRawData").innerHTML = JSON.stringify(jsonData);

    for(var i in jsonData){
        document.getElementById("myFormattedData").innerHTML += "<p>" + jsonData[i] + "<p>";
    }

    return true;
}