var userPicks = Cookies.get("picked");

if(userPicks == "suiMai") {
    document.getElementById("dimSum-choice").innerHTML = "<h2>You picked Pork Sui Mai</h2>";
} else if (userPicks == "shrimpDumpling") {
    document.getElementById("dimSum-choice").innerHTML = "<h2>You picked Shrimp Dumplings</h2>";
} else if (userPicks == "beefBall") {
    document.getElementById("dimSum-choice").innerHTML = "<h2>You picked Beef Balls</h2>";
} else {
    document.getElementById("dimSum-choice").innerHTML = "<h2>We don't have that item, Please pick again</h2>";
}


