var activePage = "skills";

function hide(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("pagina nu exista");
    }
}

function hidePreviousPage () {
    hide(activePage);
}

function showPage(pageId) {
   hidePreviousPage();
    document.getElementById(pageId).style.display = "";
    activePage = pageId;
}

function initMenu(){
    document.addEventListener("click", function(e){
            var link = e.target;
        if (link.matches("#top-menu-bar a")) {
            var id = link.innerHTML.toLowerCase();
            showPage(id);
            link.classList.add("active");
        }
    })
}

initMenu();

showPage(activePage);

var skills = [
    "HTML",
    "CSS",
    "JS"
];
var skillsLi = skills.map(function(skill){
    console.info(skill);
        return "<li>" + skill + "</li>";
});

// TO DO add skill favorite
var ul = document.querySelector("#skills ul")
ul.innerHTML =  skillsLi.join("");

               