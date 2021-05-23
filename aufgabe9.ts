namespace aufgabe9 {


    let counting: number = 0;
    let userTask: any = document.querySelector("#newTask");
    let clickBool: boolean = false;
    let preventEventBool: boolean = false;

    document.addEventListener("keydown", function (event: KeyboardEvent): void {

        if (event.code === "Enter" && clickBool === true && userTask.value !== "") {
            createNewTask();
            setTimeout(function (): void {
                clearInput();
            }, 100);
            preventEventBool = false;
        }
    });


    document.addEventListener("click", function (): void {
        if (preventEventBool === false) {
            clickBool = false;
        }
    });


    userTask.addEventListener("click", function (): void {
        clickBool = true;
        preventEventBool = true;
    });

    function createNewTask(): void {

        let container: HTMLElement = document.createElement("li");
        container.className = "task";
        let divText: HTMLElement = document.createElement("div");
        divText.className = "divText";
        let icon1: HTMLElement = document.createElement("i");
        icon1.className = "far fa-circle";
        let icon2: HTMLElement = document.createElement("i");
        icon2.className = "fas fa-check-circle is hidden";
        let text: HTMLElement = document.createElement("p");
        text.className = "task-text";
        text.innerHTML = userTask.value;
        let icon3: HTMLElement = document.createElement("i");
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


        icon1.addEventListener("click", function (): void {
            icon1.classList.add("isHidden");
            icon2.classList.remove("isHidden");
            text.setAttribute("style", "text-decoration: " + "line-through");
        });

        icon2.addEventListener("click", function (): void {
            icon2.classList.add("isHidden");
            icon1.classList.remove("isHidden");
            text.setAttribute("style", "text-decoration: " + "none");
        });

        icon3.addEventListener("click", function (): void {
            document.querySelector("#myUl").removeChild(container);
            console.log(container);
            counting--;
            tocounter();
        });
    }

    function tocounter(): void {
        document.querySelector("#counter").innerHTML = counting + " tasks";
    }

    function clearInput(): void {
        userTask.value = "";
    }
