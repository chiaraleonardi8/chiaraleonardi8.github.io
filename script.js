function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("Python");
        habilidades[3].classList.add("Comunicación");
        habilidades[4].classList.add("TrabajoenEquipo");
        habilidades[5].classList.add("Creatividad");
        habilidades[6].classList.add("Dedicación");



    }

}


window.onscroll = function(){
    efectoHabilidades ();
}
