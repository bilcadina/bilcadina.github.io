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
    var link = document.querySelector(`#top-menu-bar a[data-page="${activePage}"]`);
    link.classList.remove("active");
}

function showPage(pageId) {
   hidePreviousPage();
    document.getElementById(pageId).style.display = "";
    var link = document.querySelector(`#top-menu-bar a[data-page="${pageId}"]`);
    link.classList.add("active");
    activePage = pageId;
}

function initMenu(){
    document.addEventListener("click", function(e){
            var link = e.target;
        if (link.matches("#top-menu-bar a")) {
            var id = link.innerHTML.toLowerCase();
            console.info(id);
            showPage(id);
            link.classList.add("active");
        }
    })
}

initMenu();

showPage(activePage);



var skills = [
    { name: "HTML", endorsments: 10 },
    { name: "CSS" , endorsments: 7 },
    { name: "JS", endorsments: 7 }
];
var skillsLi = skills.map(function(skill,i){
    var endorsments = ` <span>&middot; ${skill.endorsments}</span>`;
        return "<li>" + skill.name + endorsments +"</li>";
});

// TO DO add skill favorite
var ul = document.querySelector("#skills ul")
ul.innerHTML =  skillsLi.join("");

               