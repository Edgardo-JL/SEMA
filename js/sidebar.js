const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");

if(localStorage.getItem("sidebar") === "collapsed"){
    sidebar.classList.add("collapsed");

    if(main){
        main.classList.add("expanded");
    }
}

menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("collapsed");

    if(main){
        main.classList.toggle("expanded");
    }

    localStorage.setItem(
        "sidebar",
        sidebar.classList.contains("collapsed")
        ? "collapsed"
        : "expanded"
    );

});