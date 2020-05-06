const btnTemas = document.getElementById('btn-temas');
const divTemas = document.querySelector('.temas');

btnTemas.addEventListener('click', function() {
    divTemas.classList.toggle('show');
});

divTemas.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        if (e.target.id === 'dia') {
            document.body.className = '';
        } else if (e.target.id === 'noche') {
            document.body.className = 'dark';
        }
    }
});

//*LINK NEW HTML*/

function abrirCrear(){
    document.location.href="Crear.html";
}
