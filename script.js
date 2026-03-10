const noBtn = document.getElementById('no-btn');
const mainContent = document.getElementById('main-content');

noBtn.addEventListener('mouseover', () => {
    // Definimos un rango de movimiento de 100px
    const limit = 100; 
    
    // Generamos un movimiento aleatorio entre -100 y 100
    const randomX = Math.floor(Math.random() * (limit * 3)) - limit;
    const randomY = Math.floor(Math.random() * (limit * 3)) - limit;

    // Aplicamos la transformación sin sacarlo del flujo normal (usando translate)
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    noBtn.style.transition = "0.1s ease";
});

function celebrate() {
    mainContent.innerHTML = `
        <div class="hearts">❤️</div>
        <h1>Ehhhhh!! pasare por ti c:</h1>
        <img src="el.gif" alt="Happy Cat" style="width:150px;">
        <p class="success-msg">La función empieza a las 8:00 PM, pero podriamos salir antes y caminar por el centro c:</p>
    `;
setTimeout(() => {
        const mensaje = "Holi! Si acepto ir al teatro contigo c:";
        const miTelefono = "51946419138"; // Pon tu número con código de país (51 para Perú)
        window.open(`https://wa.me/${miTelefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
    }, 5000); // Se abre 5 segundos después de que vea el video
}