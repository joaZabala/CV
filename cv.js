var menu_visile = false

let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visile==false){
        menu.style.display = "inline-block";
        menu_visile = true;
    }else{
        menu.style.display = "none";
        menu_visile = false;
    }
}

//esconder el menu una vez echo click

 let links = document.querySelectorAll("#nav a");
 for(let i = 0 ; i<links.length ; i++){
    links[i].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;

    }
 }