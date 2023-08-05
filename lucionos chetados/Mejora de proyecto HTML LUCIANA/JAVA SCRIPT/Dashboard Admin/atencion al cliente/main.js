//add hovered class to selected list item
let list = document.querySelectorAll(".navigation li")
function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
});
this.classList.add("hovered")
} 

list.forEach((item) => item.addEventListener("mouseover", activeLink));


//menu toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick =function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};

// <!-- boton java -->
                    
                        // const button = document.createElement('button');
                        // button.type = "button";
                        // button.innerText = "boton";
                        // document.body.appendChild('button');
                        // button.innerHTML =
                        // "Volver al dashboard <a href='#' target=_blank>Oprimir Aqui</a>";
                        // button.style.positiion = "absolute";
                        // button.style.bottom = "0";
                        // button.style.right = "0";
                        // button.style.fontSize = "15px";
                        // button.style.color = "#ccc";
                        // button.style.fontFamily = "sans-serif";
                        // button.style.padding = "13px";
                        // button.style.background = "#fff";
                        // button.style.borderTopLeftRadius = "5px";
                        // button.style.borderBottomRightRadius = "5px";
                        // button.style.boxShadow = "0 0 5px #ccc";
                        // document.body.appendChild(osccred);


                        // function defineProperty() {
                        //     var osccred = document.createElement("div");
                        //     osccred.innerHTML =
                        //       "Volver al Dashboard <a href='index.html' target=_blank>Oprimir aqui</a>";
                        //     osccred.style.position = "absolute";
                        //     osccred.style.bottom = "0";
                        //     osccred.style.right = "0";
                        //     osccred.style.fontSize = "15px";
                        //     osccred.style.color = "#ccc";
                        //     osccred.style.fontFamily = "sans-serif";
                        //     osccred.style.padding = "13px";
                        //     osccred.style.background = "#fff";
                        //     osccred.style.borderTopLeftRadius = "5px";
                        //     osccred.style.borderBottomRightRadius = "5px";
                        //     osccred.style.boxShadow = "0 0 5px #ccc";
                        //     document.body.appendChild(osccred);
                        //   }