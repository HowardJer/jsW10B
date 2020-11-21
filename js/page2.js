var age = Cookies.get("age");
console.log(age);

Cookies.remove("age");
console.log(Cookies.get("age"));