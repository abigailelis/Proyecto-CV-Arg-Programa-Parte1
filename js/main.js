addEventListener('DOMContentLoaded', iniciarPagina);
function iniciarPagina(){
    let info_redes_ocultas = document.querySelector(".info-redes-ocultas");    
    let btn_ver_mas = document.querySelector(".ver-mas");
    btn_ver_mas.addEventListener('click', desplegarRedes);
    function desplegarRedes(){
        btn_ver_mas.classList.toggle("ver-mas-desplegado");
        info_redes_ocultas.classList.toggle("oculto");
    } 
}
