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

var allSkills = [
    //tema se le aranjam cu functia sort cu endorsm mai mare sau alfabet
    { name: "HTML", endorsments: 15 },
    { name: "CSS" , endorsments: 5 },
    { name: "JS", endorsments: 20 }
];

function getHTMLSkills(skills) {
    var skillsLi = skills.map(function(skill){
        var endorsments = ` <span>&middot; ${skill.endorsments}</span>`;
            return "<li>" + skill.name + endorsments +"</li>";

});
return skillsLi.join("");
}

function showSkills(skills) {
    var html = getHTMLSkills(skills);

// TO DO add skill favorite

    var ul = document.querySelector("#skills ul")
    ul.innerHTML =  html;
    }

fetch("data/skills.json").then(function(r) {
    return r.json();
}).then(function(r2) {
    console.info(`allSkills`, allSkills);
    showSkills(allSkills);
});

