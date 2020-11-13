function hide(id){
    var el = document.getElementById(id)
    console.info("hide:" + id,el);
   
    if (el) {
        el.style.display = "none";
    } else {
        console.error("pagina nu exista");
    }
}


    var pages = document.querySelectorAll(".page");
    //for(initializare; conditie; post execute)
    for(var i = 0; i < pages.lenght; i++)
        var page = pages[i];
        var id = pages[i].id; {
        console.info("i=", i, id);
        hide(id)
    }
}

function showHome() {
    hideAllPages();
    document.getElementById('home').style.display = '';
}

function showSkills() {
    hideAllPages();
    document.getElementById('skills').style.display = '';
}

function showProjects() {
    hideAllPages();
    document.getElementById("projects").style.display = "";
}

function showLanguages() {
    hideAllPages();
    document.getElementById("languages").style.display = "";
}