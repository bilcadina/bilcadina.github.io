function hide(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("pagina nu exista");
    }
}

function hideAllPages(){
    var pages = document.querySelectorAll(".page");
    for(var i = 0; i < pages.lenght; i++) {
        var page = pages[i];
        var id = page.id; 
        hide(id);  
    }
}

function showPage(pageId) {
    hideAllPages();
    document.getElementById(pageId).style.display = "";
}