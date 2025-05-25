function greet() {
    var name = prompt("What is your name?");
    alert("Hello, " + name);
    var age = prompt("How old are you?");
    age = parseInt(age);
    var birthday = confirm("Have you had a birthday this year?");
    var year = new Date().getFullYear();
    var birthYear;
    if (birthday) {
        birthYear = year - age;
    } else {
        birthYear = currentYear - age - 1;
    }
    alert("You were born in " + birthYear);
}
