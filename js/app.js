function pickOne(userPicks) {
    Cookies.set("picked", userPicks);
    window.open("pages/selection.html");

}

document.getElementsByClassName