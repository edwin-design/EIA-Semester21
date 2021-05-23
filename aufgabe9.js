var aufgabe9;
(function (aufgabe9) {
    var counting = 0;
    var userTask = document.querySelector("#newTask");
    var clickBool = false;
    var preventEventBool = false;
    document.addEventListener("keydown", function (event) {
        if (event.code === "Enter" && clickBool === true && userTask.value !== "") {
            createNewTask();
            setTimeout(function () {
                clearInput();
            }, 100);
            preventEventBool = false;
        }
    });
    document.addEventListener("click", function () {
        if (preventEventBool === false) {
            clickBool = false;
        }
    });
    userTask.addEventListener("click", function () {
        clickBool = true;
        preventEventBool = true;
    });
    function createNewTask() {
        var container = document.createElement("li");
        container.className = "task";
        var divText = document.createElement("div");
        divText.className = "divText";
        var icon1 = document.createElement("i");
        icon1.className = "far fa-circle";
        var icon2 = document.createElement("i");
        icon2.className = "fas fa-check-circle is hidden";
        var text = document.createElement("p");
        text.className = "task-text";
        text.innerHTML = userTask.value;
        var icon3 = document.createElement("i");
        icon3.className = "fas fa-trash";
        console.log(document.getElementById("myUl"));
        document.getElementById("myUl").appendChild(container);
        container.appendChild(divText);
        divText.appendChild(icon1);
        divText.appendChild(icon2);
        divText.appendChild(text);
        container.appendChild(icon3);
        counting++;
        tocounter();
        icon1.addEventListener("click", function () {
            icon1.classList.add("isHidden");
            icon2.classList.remove("isHidden");
            text.setAttribute("style", "text-decoration: " + "line-through");
        });
        icon2.addEventListener("click", function () {
            icon2.classList.add("isHidden");
            icon1.classList.remove("isHidden");
            text.setAttribute("style", "text-decoration: " + "none");
        });
        icon3.addEventListener("click", function () {
            document.querySelector("#myUl").removeChild(container);
            console.log(container);
            counting--;
            tocounter();
        });
    }
    function tocounter() {
        document.querySelector("#counter").innerHTML = counting + " tasks";
    }
    function clearInput() {
        userTask.value = "";
    }
})(aufgabe9 || (aufgabe9 = {}));
//# sourceMappingURL=aufgabe9.js.map