import '../css/styles.css';

// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generar-card');
    const previewContainer = document.getElementById('cardorden');
    const columns = document.querySelectorAll('.parent');

    // Contadores de tarjetas
    const siTengoCount = document.getElementById('si-tengo-count');
    const medioTengoCount = document.getElementById('medio-tengo-count');
    const noTengoCount = document.getElementById('no-tengo-count');
 

    // Array con los títulos de las tarjetas
    const cardTitles = [
        { title: "Orientado a la acción", imageSrc1: require("../img/1Card-front.png"), imageSrc2: require("../img/1Card-back.png" )},        
        { title: "Manejo de situaciones ambiguas", imageSrc1: require("../img/2Card-front.png"), imageSrc2: require("../img/2Card-back.png" )},
        { title: "Accesibilidad", imageSrc1: require("../img/3Card-front.png"), imageSrc2: require("../img/3Card-back.png" )},
        { title: "Relación con jefes", imageSrc1: require("../img/4Card-front.png"), imageSrc2: require("../img/4Card-back.png" )},
        { title: "Agudeza en los negocios", imageSrc1: require("../img/5Card-front.png"), imageSrc2: require("../img/5Card-back.png" )},
        { title: "Ambición de hacer carrera", imageSrc1: require("../img/6Card-front.png"), imageSrc2: require("../img/6Card-back.png" )},
        { title: "Preocupación por colaboradores directos", imageSrc1: require("../img/7Card-front.png"), imageSrc2: require("../img/7Card-back.png" )},
        { title: "Comodidad al interactuar con ejecutivos superiores", imageSrc1: require("../img/8Card-front.png"), imageSrc2: require("../img/8Card-back.png" )},
        { title: "Habilidades de mando", imageSrc1: require("../img/9Card-front.png"), imageSrc2: require("../img/9Card-back.png" )},
        { title: "Compasión", imageSrc1: require("../img/10Card-front.png"), imageSrc2: require("../img/10Card-back.png") },
        { title: "Compostura", imageSrc1: require("../img/11Card-front.png"), imageSrc2: require("../img/11Card-back.png") },
        { title: "Manejo de conflictos", imageSrc1: require("../img/12Card-front.png"), imageSrc2: require("../img/12Card-back.png") },
        { title: "Capacidad de confrontar colaboradores directos", imageSrc1: require("../img/13Card-front.png"), imageSrc2: require("../img/13Card-back.png") },
        { title: "Creatividad", imageSrc1: require("../img/14Card-front.png"), imageSrc2: require("../img/14Card-back.png") },
        { title: "Orientación hacia el cliente", imageSrc1: require("../img/15Card-front.png"), imageSrc2: require("../img/15Card-back.png") },
        { title: "Toma de decisiones oportuna", imageSrc1: require("../img/16Card-front.png"), imageSrc2: require("../img/16Card-back.png") },
        { title: "Calidad de las decisiones", imageSrc1: require("../img/17Card-front.png"), imageSrc2: require("../img/17Card-back.png") },
        { title: "Delegación", imageSrc1: require("../img/18Card-front.png"), imageSrc2: require("../img/18Card-back.png") },
        { title: "Desarrollo de colaboradores directos y otros", imageSrc1: require("../img/19Card-front.png"), imageSrc2: require("../img/19Card-back.png") },
        { title: "Dirección de personal", imageSrc1: require("../img/20Card-front.png"), imageSrc2: require("../img/20Card-back.png") },
        { title: "Manejo de la diversidad", imageSrc1: require("../img/21Card-front.png"), imageSrc2: require("../img/21Card-back.png") },
        { title: "Ética y valores", imageSrc1: require("../img/22Card-front.png"), imageSrc2: require("../img/22Card-back.png") },
        { title: "Equidad con colaboradores directos", imageSrc1: require("../img/23Card-front.png"), imageSrc2: require("../img/23Card-back.png") },
        { title: "Habilidades técnicas y prácticas", imageSrc1: require("../img/24Card-front.png"), imageSrc2: require("../img/24Card-back.png") },
        { title: "Contratación y selección de personal", imageSrc1: require("../img/25Card-front.png"), imageSrc2: require("../img/25Card-back.png") },
        { title: "Humor", imageSrc1: require("../img/26Card-front.png"), imageSrc2: require("../img/26Card-back.png") },
        { title: "Habilidad de informar", imageSrc1: require("../img/27Card-front.png"), imageSrc2: require("../img/27Card-back.png") },
        { title: "Administración de innovaciones", imageSrc1: require("../img/28Card-front.png"), imageSrc2: require("../img/28Card-back.png") },
        { title: "Integridad y confianza", imageSrc1: require("../img/29Card-front.png"), imageSrc2: require("../img/29Card-back.png") },
        { title: "Capacidad intelectual", imageSrc1: require("../img/30Card-front.png"), imageSrc2: require("../img/30Card-back.png") },
        { title: "Astucia en las relaciones interpersonales", imageSrc1: require("../img/31Card-front.png"), imageSrc2: require("../img/31Card-back.png") },
        { title: "Aprendizaje rápido", imageSrc1: require("../img/32Card-front.png"), imageSrc2: require("../img/32Card-back.png") },
        { title: "Capacidad para escuchar", imageSrc1: require("../img/33Card-front.png"), imageSrc2: require("../img/33Card-back.png") },
        { title: "Valentía gerencial", imageSrc1: require("../img/34Card-front.png"), imageSrc2: require("../img/34Card-back.png") },
        { title: "Administración y medición del trabajo", imageSrc1: require("../img/35Card-front.png"), imageSrc2: require("../img/35Card-back.png") },
        { title: "Habilidad de motivar a personas", imageSrc1: require("../img/36Card-front.png"), imageSrc2: require("../img/36Card-back.png") },
        { title: "Negociación", imageSrc1: require("../img/37Card-front.png"), imageSrc2: require("../img/37Card-back.png") },
        { title: "Agilidad organizativa", imageSrc1: require("../img/38Card-front.png"), imageSrc2: require("../img/38Card-back.png") },
        { title: "Habilidad organizativa", imageSrc1: require("../img/39Card-front.png"), imageSrc2: require("../img/39Card-back.png") },
        { title: "Manejo de situaciones contradictorias", imageSrc1: require("../img/40Card-front.png"), imageSrc2: require("../img/40Card-back.png") },
        { title: "Paciencia", imageSrc1: require("../img/41Card-front.png"), imageSrc2: require("../img/41Card-back.png") },
        { title: "Habilidad de relacionarse con compañeros", imageSrc1: require("../img/42Card-front.png"), imageSrc2: require("../img/42Card-back.png") },
        { title: "Perseverancia", imageSrc1: require("../img/43Card-front.png"), imageSrc2: require("../img/43Card-back.png") },
        { title: "Apertura hacia los demás y transparencia", imageSrc1: require("../img/44Card-front.png"), imageSrc2: require("../img/44Card-back.png") },
        { title: "Aprendizaje personal", imageSrc1: require("../img/45Card-front.png"), imageSrc2: require("../img/45Card-back.png") },
        { title: "Perspectiva y/o rango de intereses", imageSrc1: require("../img/46Card-front.png"), imageSrc2: require("../img/46Card-back.png") },
        { title: "Planificación", imageSrc1: require("../img/47Card-front.png"), imageSrc2: require("../img/47Card-back.png") },
        { title: "Astucia política", imageSrc1: require("../img/48Card-front.png"), imageSrc2: require("../img/48Card-back.png") },
        { title: "Habilidad para exponer en público", imageSrc1: require("../img/49Card-front.png"), imageSrc2: require("../img/49Card-back.png") },
        { title: "Establecimiento de prioridades", imageSrc1: require("../img/50Card-front.png"), imageSrc2: require("../img/50Card-back.png") },
        { title: "Resolución de problemas", imageSrc1: require("../img/51Card-front.png"), imageSrc2: require("../img/51Card-back.png") },
        { title: "Administración de procesos", imageSrc1: require("../img/52Card-front.png"), imageSrc2: require("../img/52Card-back.png") },
        { title: "Empuje por obtener resultados", imageSrc1: require("../img/53Card-front.png"), imageSrc2: require("../img/53Card-back.png") },
        { title: "Autodesarrollo", imageSrc1: require("../img/54Card-front.png"), imageSrc2: require("../img/54Card-back.png") },
        { title: "Autoconocimiento", imageSrc1: require("../img/55Card-front.png"), imageSrc2: require("../img/55Card-back.png") },
        { title: "Determinación del carácter de las personas", imageSrc1: require("../img/56Card-front.png"), imageSrc2: require("../img/56Card-back.png") },
        { title: "Autosuficiencia", imageSrc1: require("../img/57Card-front.png"), imageSrc2: require("../img/57Card-back.png") },
        { title: "Agudeza estratégica", imageSrc1: require("../img/58Card-front.png"), imageSrc2: require("../img/58Card-back.png") },
        { title: "Manejo a través de sistemas", imageSrc1: require("../img/59Card-front.png"), imageSrc2: require("../img/59Card-back.png") },
        { title: "Creación de equipos efectivos", imageSrc1: require("../img/60Card-front.png"), imageSrc2: require("../img/60Card-back.png") },
        { title: "Aprendizaje técnico", imageSrc1: require("../img/61Card-front.png"), imageSrc2: require("../img/61Card-back.png") },
        { title: "Administración del tiempo", imageSrc1: require("../img/62Card-front.png"), imageSrc2: require("../img/62Card-back.png") },
        { title: "Sistemas de trabajo total (ej.Administración de calidad total/ISO/Six Sigma)", imageSrc1: require("../img/63Card-front.png"), imageSrc2: require("../img/63Card-back.png") },
        { title: "Comprensión de otras personas", imageSrc1: require("../img/64Card-front.png"), imageSrc2: require("../img/64Card-back.png") },
        { title: "Manejo de visión y propósito", imageSrc1: require("../img/65Card-front.png"), imageSrc2: require("../img/65Card-back.png") },
        { title: "Equilibrio entre trabajo y vida personal", imageSrc1: require("../img/66Card-front.png"), imageSrc2: require("../img/66Card-back.png") },
        { title: "Comunicación escrita", imageSrc1: require("../img/67Card-front.png"), imageSrc2: require("../img/67Card-back.png") },
    ];

    // Array para llevar un registro de los títulos que ya se han mostrado
    const usedTitles = [];

    // Función que genera un índice aleatorio y asegura que no se repita
    function getRandomCardTitle() {
        if (usedTitles.length === cardTitles.length) {
            alert("Ya se han mostrado todos los títulos.");
            return null;
        }
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * cardTitles.length);
        } while (usedTitles.includes(cardTitles[randomIndex].title));
        usedTitles.push(cardTitles[randomIndex].title);
        return { card: cardTitles[randomIndex], index: randomIndex };
    }

    // Función para actualizar los contadores
    function updateCounters() {
        siTengoCount.textContent = document.querySelectorAll('#si-tengo .card').length;
        medioTengoCount.textContent = document.querySelectorAll('#medio-tengo .card').length;
        noTengoCount.textContent = document.querySelectorAll('#no-tengo .card').length;
    }

    // Inicializa los contadores
    updateCounters();


    // Evento al hacer clic en el botón
    generateButton.addEventListener('click', function () {
        const cardData = getRandomCardTitle();
        if (cardData) {
            const newCard = document.createElement('div');
            newCard.classList.add('card', 'card-previsualizar');
            newCard.id = 'card-' + usedTitles.length;
    
            const cardTitle = document.createElement('i');
            cardTitle.classList.add('card1');
            cardTitle.innerHTML = cardData.card.title;
    
            const cardImage = document.createElement('img');
            cardImage.classList.add('image-3-icon');
            cardImage.src = require('../img/image 3.png');

            //circulo con numero
            const circulo = document.createElement('div');
            circulo.classList.add('circulo');
            const circuloText = document.createElement('p');
            circuloText.classList.add('p');
            circuloText.innerHTML = cardData.index + 1; // Usar el índice + 1
            circulo.appendChild(circuloText);
    
            newCard.appendChild(cardTitle);
            newCard.appendChild(cardImage);
            newCard.appendChild(circulo);
            newCard.dataset.title = cardData.title;
            newCard.dataset.imageSrc1 = cardData.imageSrc1;
            newCard.dataset.imageSrc2 = cardData.imageSrc2;
            newCard.draggable = true;
            addDragEvents(newCard);
            previewContainer.appendChild(newCard);
            previewContainer.classList.remove('hide');
    
            newCard.addEventListener('click', function () {
                showDetailView(cardData.card.imageSrc1, cardData.card.imageSrc2);
            });
            // Actualizar contadores después de agregar una nueva tarjeta
            updateCounters();
        }
    });

    // Función para añadir eventos de arrastrar a una tarjeta
    function addDragEvents(card) {
        card.addEventListener('dragstart', function (e) {
            e.dataTransfer.setData('text/plain', card.id); // Pasar el ID de la tarjeta
            setTimeout(() => {
                card.classList.add('hide'); // Ocultar temporalmente la tarjeta
            }, 0);
        });

        card.addEventListener('dragend', function () {
            card.classList.remove('hide'); // Mostrar la tarjeta nuevamente
            updateCounters(); // Actualizar contadores después de arrastrar
        });
    }

    // Eventos para permitir soltar el título en las columnas
    columns.forEach(column => {
        column.addEventListener('dragover', function (e) {
            e.preventDefault(); // Prevenir el comportamiento por defecto
            const afterElement = getDragAfterElement(column, e.clientY);
            const draggable = document.querySelector('.dragging');
            if (afterElement == null) {
                column.appendChild(draggable);
            } else {
                column.insertBefore(draggable, afterElement);
            }
        });

        column.addEventListener('dragenter', function (e) {
            e.preventDefault();
            column.classList.add('hovered'); // Añadir estilo al entrar en la columna
        });

        column.addEventListener('dragleave', function () {
            column.classList.remove('hovered'); // Quitar estilo al salir de la columna
        });

        column.addEventListener('drop', function (e) {
            column.classList.remove('hovered');
            const cardId = e.dataTransfer.getData('text/plain'); // Obtener el ID de la tarjeta arrastrada
            const card = document.getElementById(cardId); // Obtener la tarjeta por ID
            const afterElement = getDragAfterElement(column, e.clientY);
            if (afterElement == null) {
                column.appendChild(card);
            } else {
                column.insertBefore(card, afterElement);
            }
            updateCounters(); // Actualizar contadores después de soltar
        });
    });


    // Función para obtener el elemento después del cual se debe insertar la tarjeta arrastrada
    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
    
    // Función para mostrar la vista de detalle
    function showDetailView(imageSrc1, imageSrc2) {
        const blurBackground = document.createElement('div');
        blurBackground.classList.add('blur-background');

        const detailView = document.createElement('div');
        detailView.classList.add('detail-view');
        detailView.innerHTML = `
            <img src="${imageSrc1}" alt="Detalle de la tarjeta">
        `;

        document.body.appendChild(blurBackground);
        document.body.appendChild(detailView);

        let showingImage1 = true;
        const detailImage = detailView.querySelector('img');

        detailImage.addEventListener('click', function () {
            if (showingImage1) {
                detailImage.src = imageSrc2;
            } else {
                detailImage.src = imageSrc1;
            }
            showingImage1 = !showingImage1;
        });

        blurBackground.addEventListener('click', function () {
            hideDetailView(detailView, blurBackground);
        });

        detailView.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }

    // Función para ocultar la vista de detalle
    function hideDetailView(detailView, blurBackground) {
        document.body.removeChild(detailView);
        document.body.removeChild(blurBackground);
    }

});

