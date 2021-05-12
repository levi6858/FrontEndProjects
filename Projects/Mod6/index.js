function formRun(){
    var name = "Name: ";
    var email = "Email: ";
    var gaming = "Hours Played: ";
    var time = "Gaming Console: ";
    var text = document.getElementById("textarea").value;

    name = name + document.getElementById("nameinput").value;
    email = email + document.getElementById("emailinput").value;
    time = gaming + document.getElementById("time").value;


    var radios = document.getElementsByName('percent');

    for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // do whatever you want with the checked radio
        gaming = gaming  + radios[i].value;
        // only one radio can be logically checked, don't check the rest
        break;
  }
}

    alert(name + "\n\n" + email + "\n\n" + time + "\n\n" + gaming + "\n\n" + text)

}