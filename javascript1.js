window.addEventListener('DOMContentLoaded',   (event)  =>  {
    var submit = document.getElementById("submit");
    let form = document.getElementById("formid");
    var namefill = document.querySelector("#namee");
    var email = document.getElementById("email");

    form.addEventListener("focus", function(event) {
        console.log(event.target);
    }, true);

    btn.addEventListener("click", function(e) {
        changeColor();
    })

    submit.addEventListener("click", function(e) {
        console.log("click")

        if (namefill.value.trim() == "") {
            e.preventDefault();
            namefill.getElementsByClassName.border = "solid 5px pink";
            document.getElementById("hello").style.visibility = "visible";
        }
        if (email.value.trim() == "") {
            e.preventDefault();
            namefill.getElementsByClassName.border = "solid 5px pink";
            document.getElementById("please").style.visibility = "visible";
        }

        if (!nameIsValid(namefill.value)) {
            e.preventDefault();
            alert("Valid Name Required");
        }

        if (!emailIsValid(email.value)) {
            e.preventDefault();
            alert("Valid Email Required");
        }



    })

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    function nameIsValid(namefill) {
        return /^[a-zA-Z]+ [a-zA-Z]+$/.test(namefill);
    }

    function changeColor() {
        var button = document.getElementById("btn").classList;

        if (button.contains("blue")) {
            button.remove("blue");
        } else {
            button.add("blue");
        }
        if (button.contains("red")) {
            button.remove("red");
        } else {
            button.add("red");
        }
    }

});