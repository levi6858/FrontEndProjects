async function getData(){

    var apiString = "https://baconipsum.com/api/";

    var inputValue = document.getElementById("para").value;
    apiString= apiString + "?type=meat-and-filler&paras=" + inputValue;
    alert(apiString);

    var response = await fetch(apiString);
  


    document.getElementById("rawData").innerHTML = "";
    document.getElementById("formattedData").innerHTML= "";


    var jsonData = await response.json();

    document.getElementById("rawData").innerHTML = JSON.stringify(jsonData);

    for(var i in jsonData){
        document.getElementById("formattedData").innerHTML += "<p>" + jsonData[i] + "<p>";
    }

    return true;
}