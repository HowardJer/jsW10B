var userSelection = Cookies.get("selection");

if(userSelection == 'porkSuiMai') {
    document.getElementById("selection-container").innerHTML = "<p> Pork Sui Mai </p>"

} else if(userSelection == 'shrimpDumpling') {
    document.getElementById("selection-container").innerHTML = "<p> Shrimp Dumpling </p>"
} else if(userSelection == 'beefBall') {
    document.getElementById("selection-container").innerHTML = "<p> Beef Ball </p>"
} else {
    document.getElementById("selection-container").innerHTML = "<p> Choice does not Exist</p> <p> Please return and make another choice </p>"
}


