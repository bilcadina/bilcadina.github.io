let activePage = "skills";

function hide(id) {
    const el = document.getElementById(id);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("pagina nu exista");
    }
}

function hidePreviousPage () {
    hide(activePage);
    const link = document.querySelector(`#top-menu-bar a[data-page="${activePage}"]`);
    link.classList.remove("active");
}

function showPage(pageId) {
   hidePreviousPage();
    document.getElementById(pageId).style.display = "";
    const link = document.querySelector(`#top-menu-bar a[data-page="${pageId}"]`);
    link.classList.add("active");
    activePage = pageId;
}

function initMenu(){
    document.addEventListener("click", function(e){
            const link = e.target;
        if (link.matches("#top-menu-bar a")) {
            const id = link.getAttribute("data-page");
            showPage(id);   
        }
    })
}

initMenu();

showPage(activePage);

function getHTMLSkills(skills) {
    return skillsLi = skills.map(function(skill){
            return `<li class=" ${skill.endorsments > 9 ? "favorite" : ""}">
            ${skill.name} <span>&middot; ${skill.endorsments}</span>
            </li>`;
}).join("");
}

function showSkills(skills) {
    var ul = document.querySelector("#skills ul");
    ul.innerHTML = getHTMLSkills(skills);
    }

fetch("data/skills.json").then(function(r) {
    return r.json();
}).then(function(allSkills) {
    allSkills.sort(function(s1, s2) {
       return s2.endorsments - s1.endorsments;
    });

    showSkills(allSkills);
});


