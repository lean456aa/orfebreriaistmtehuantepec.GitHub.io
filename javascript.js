// Función para manejar el menú hamburguesa
function toggleMenu() {
    document.getElementById('menu').classList.toggle('active');
}

// Mostrar imágenes dinámicas con Bootstrap
function mostrarImagen(tipo) {
    const imagenContainer = document.getElementById('imagen-container');
    const datos = {
        centenario: {
            img: "https://joyeriaelmexicano.com/cdn/shop/products/image_8fc69447-773d-472b-8707-de883e8365e5.jpg?v=1679295121&width=533.jpg",
            info: "<h3>CENTENARIO</h3><p>Detalles de oro, símbolo de tradición y cultura.</p>"
        },
        anillos: {
            img: "https://oaxaca.quadratin.com.mx/www/wp-content/uploads/2016/08/filigrana.jpg",
            info: "<h3>Anillo ARTESANAL</h3><p>Diseños del istmo de tehuantepec y muy bonitos.</p>"
        },
        aretes: {
            img: "https://m.media-amazon.com/images/I/91qq7z30p0L._UF1000,1000_QL80_.jpg",
            info: "<h3>ARETES MEXICANOS.</h3><p>Aretes elaborados por artesanos oaxaqueños donde el cobre es fundido en moldes dando formas de pavo reales, moños, monedas, flor, hamaca, margaritas, corbatas, etc.; y después se les da un baño de oro.</p>"
        },
        pulseras: {
            img: "https://m.media-amazon.com/images/I/81RgI38wqNL._UF1000,1000_QL80_.jpg",
            info: "<h3>PULSERAS SEMANARIO.</h3><p>Las Pulseras son de cobre vaciado en moldes y con un baño de oro, la filigrana se realiza por artesanos de la Heróica Ciudad de Juchitán de Zaragoza, Oaxaca. Rescatando diseños en filigrana de la región del Istmo Tehuantepec..</p>"
        }
    };

    const { img, info } = datos[tipo];
    imagenContainer.innerHTML = `
        <div class="col-lg-6 mx-auto fade-in">
            <img src="${img}" class="img-fluid rounded shadow" alt="${tipo}">
            <div class="text-center mt-3">${info}</div>
        </div>
    `;
    scrollToSection('#contenido-principal');
}

// Función para agregar comentarios dinámicos
function agregarComentario(event) {
    event.preventDefault();
    const comentarioInput = document.getElementById('comentario');
    const listaComentarios = document.getElementById('lista-comentarios');

    const nuevoComentario = document.createElement('p');
    nuevoComentario.textContent = comentarioInput.value;
    nuevoComentario.classList.add('bg-dark', 'text-light', 'p-2', 'rounded', 'mt-2');
    
    listaComentarios.appendChild(nuevoComentario);
    comentarioInput.value = ''; // Limpiar el campo
}