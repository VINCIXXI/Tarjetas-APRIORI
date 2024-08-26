import '../css/styles.css';

// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generar-card');
    const previewContainer = document.getElementById('cardorden');
    const columns = document.querySelectorAll('.parent');

    // Array con los títulos de las tarjetas
    const cardTitles = [
        { title: "Tarjeta 1", imageSrc1: require("../img/1Card-front.png"), imageSrc2: require("../img/1Card-back.png" )},
        { title: "Tarjeta 2", imageSrc1: require("../img/2Card-front.png"), imageSrc2: require("../img/2Card-back.png" )},
        { title: "Tarjeta 3", imageSrc1: require("../img/3Card-front.png"), imageSrc2: require("../img/3Card-back.png" )},
        { title: "Tarjeta 4", imageSrc1: require("../img/4Card-front.png"), imageSrc2: require("../img/4Card-back.png" )},
        { title: "Tarjeta 5", imageSrc1: require("../img/5Card-front.png"), imageSrc2: require("../img/5Card-back.png" )},
        { title: "Tarjeta 6", imageSrc1: require("../img/6Card-front.png"), imageSrc2: require("../img/6Card-back.png" )},
        { title: "Tarjeta 7", imageSrc1: require("../img/7Card-front.png"), imageSrc2: require("../img/7Card-back.png" )},
        { title: "Tarjeta 8", imageSrc1: require("../img/8Card-front.png"), imageSrc2: require("../img/8Card-back.png" )},
        { title: "Tarjeta 9", imageSrc1: require("../img/9Card-front.png"), imageSrc2: require("../img/9Card-back.png" )},
        { title: "Tarjeta 10", imageSrc1: require("../img/10Card-front.png"), imageSrc2: require("../img/10Card-back.png") },
        { title: "Tarjeta 11", imageSrc1: require("../img/11Card-front.png"), imageSrc2: require("../img/11Card-back.png") },
        { title: "Tarjeta 12", imageSrc1: require("../img/12Card-front.png"), imageSrc2: require("../img/12Card-back.png") },
        { title: "Tarjeta 13", imageSrc1: require("../img/13Card-front.png"), imageSrc2: require("../img/13Card-back.png") },
        { title: "Tarjeta 14", imageSrc1: require("../img/14Card-front.png"), imageSrc2: require("../img/14Card-back.png") },
        { title: "Tarjeta 15", imageSrc1: require("../img/15Card-front.png"), imageSrc2: require("../img/15Card-back.png") },
        { title: "Tarjeta 16", imageSrc1: require("../img/16Card-front.png"), imageSrc2: require("../img/16Card-back.png") },
        { title: "Tarjeta 17", imageSrc1: require("../img/17Card-front.png"), imageSrc2: require("../img/17Card-back.png") },
        { title: "Tarjeta 18", imageSrc1: require("../img/18Card-front.png"), imageSrc2: require("../img/18Card-back.png") },
        { title: "Tarjeta 19", imageSrc1: require("../img/19Card-front.png"), imageSrc2: require("../img/19Card-back.png") },
        { title: "Tarjeta 20", imageSrc1: require("../img/20Card-front.png"), imageSrc2: require("../img/20Card-back.png") },
        { title: "Tarjeta 21", imageSrc1: require("../img/21Card-front.png"), imageSrc2: require("../img/21Card-back.png") },
        { title: "Tarjeta 22", imageSrc1: require("../img/22Card-front.png"), imageSrc2: require("../img/22Card-back.png") },
        { title: "Tarjeta 23", imageSrc1: require("../img/23Card-front.png"), imageSrc2: require("../img/23Card-back.png") },
        { title: "Tarjeta 24", imageSrc1: require("../img/24Card-front.png"), imageSrc2: require("../img/24Card-back.png") },
        { title: "Tarjeta 25", imageSrc1: require("../img/25Card-front.png"), imageSrc2: require("../img/25Card-back.png") },
        { title: "Tarjeta 26", imageSrc1: require("../img/26Card-front.png"), imageSrc2: require("../img/26Card-back.png") },
        { title: "Tarjeta 27", imageSrc1: require("../img/27Card-front.png"), imageSrc2: require("../img/27Card-back.png") },
        { title: "Tarjeta 28", imageSrc1: require("../img/28Card-front.png"), imageSrc2: require("../img/28Card-back.png") },
        { title: "Tarjeta 29", imageSrc1: require("../img/29Card-front.png"), imageSrc2: require("../img/29Card-back.png") },
        { title: "Tarjeta 30", imageSrc1: require("../img/30Card-front.png"), imageSrc2: require("../img/30Card-back.png") },
        { title: "Tarjeta 31", imageSrc1: require("../img/31Card-front.png"), imageSrc2: require("../img/31Card-back.png") },
        { title: "Tarjeta 32", imageSrc1: require("../img/32Card-front.png"), imageSrc2: require("../img/32Card-back.png") },
        { title: "Tarjeta 33", imageSrc1: require("../img/33Card-front.png"), imageSrc2: require("../img/33Card-back.png") },
        { title: "Tarjeta 34", imageSrc1: require("../img/34Card-front.png"), imageSrc2: require("../img/34Card-back.png") },
        { title: "Tarjeta 35", imageSrc1: require("../img/35Card-front.png"), imageSrc2: require("../img/35Card-back.png") },
        { title: "Tarjeta 36", imageSrc1: require("../img/36Card-front.png"), imageSrc2: require("../img/36Card-back.png") },
        { title: "Tarjeta 37", imageSrc1: require("../img/37Card-front.png"), imageSrc2: require("../img/37Card-back.png") },
        { title: "Tarjeta 38", imageSrc1: require("../img/38Card-front.png"), imageSrc2: require("../img/38Card-back.png") },
        { title: "Tarjeta 39", imageSrc1: require("../img/39Card-front.png"), imageSrc2: require("../img/39Card-back.png") },
        { title: "Tarjeta 40", imageSrc1: require("../img/40Card-front.png"), imageSrc2: require("../img/40Card-back.png") },
        { title: "Tarjeta 41", imageSrc1: require("../img/41Card-front.png"), imageSrc2: require("../img/41Card-back.png") },
        { title: "Tarjeta 42", imageSrc1: require("../img/42Card-front.png"), imageSrc2: require("../img/42Card-back.png") },
        { title: "Tarjeta 43", imageSrc1: require("../img/43Card-front.png"), imageSrc2: require("../img/43Card-back.png") },
        { title: "Tarjeta 44", imageSrc1: require("../img/44Card-front.png"), imageSrc2: require("../img/44Card-back.png") },
        { title: "Tarjeta 45", imageSrc1: require("../img/45Card-front.png"), imageSrc2: require("../img/45Card-back.png") },
        { title: "Tarjeta 46", imageSrc1: require("../img/46Card-front.png"), imageSrc2: require("../img/46Card-back.png") },
        { title: "Tarjeta 47", imageSrc1: require("../img/47Card-front.png"), imageSrc2: require("../img/47Card-back.png") },
        { title: "Tarjeta 48", imageSrc1: require("../img/48Card-front.png"), imageSrc2: require("../img/48Card-back.png") },
        { title: "Tarjeta 49", imageSrc1: require("../img/49Card-front.png"), imageSrc2: require("../img/49Card-back.png") },
        { title: "Tarjeta 50", imageSrc1: require("../img/50Card-front.png"), imageSrc2: require("../img/50Card-back.png") },
        { title: "Tarjeta 51", imageSrc1: require("../img/51Card-front.png"), imageSrc2: require("../img/51Card-back.png") },
        { title: "Tarjeta 52", imageSrc1: require("../img/52Card-front.png"), imageSrc2: require("../img/52Card-back.png") },
        { title: "Tarjeta 53", imageSrc1: require("../img/53Card-front.png"), imageSrc2: require("../img/53Card-back.png") },
        { title: "Tarjeta 54", imageSrc1: require("../img/54Card-front.png"), imageSrc2: require("../img/54Card-back.png") },
        { title: "Tarjeta 55", imageSrc1: require("../img/55Card-front.png"), imageSrc2: require("../img/55Card-back.png") },
        { title: "Tarjeta 56", imageSrc1: require("../img/56Card-front.png"), imageSrc2: require("../img/56Card-back.png") },
        { title: "Tarjeta 57", imageSrc1: require("../img/57Card-front.png"), imageSrc2: require("../img/57Card-back.png") },
        { title: "Tarjeta 58", imageSrc1: require("../img/58Card-front.png"), imageSrc2: require("../img/58Card-back.png") },
        { title: "Tarjeta 59", imageSrc1: require("../img/59Card-front.png"), imageSrc2: require("../img/59Card-back.png") },
        { title: "Tarjeta 60", imageSrc1: require("../img/60Card-front.png"), imageSrc2: require("../img/60Card-back.png") },
        { title: "Tarjeta 61", imageSrc1: require("../img/61Card-front.png"), imageSrc2: require("../img/61Card-back.png") },
        { title: "Tarjeta 62", imageSrc1: require("../img/62Card-front.png"), imageSrc2: require("../img/62Card-back.png") },
        { title: "Tarjeta 63", imageSrc1: require("../img/63Card-front.png"), imageSrc2: require("../img/63Card-back.png") },
        { title: "Tarjeta 64", imageSrc1: require("../img/64Card-front.png"), imageSrc2: require("../img/64Card-back.png") },
        { title: "Tarjeta 65", imageSrc1: require("../img/65Card-front.png"), imageSrc2: require("../img/65Card-back.png") },
        { title: "Tarjeta 66", imageSrc1: require("../img/66Card-front.png"), imageSrc2: require("../img/66Card-back.png") },
        { title: "Tarjeta 67", imageSrc1: require("../img/67Card-front.png"), imageSrc2: require("../img/67Card-back.png") },
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
                if (newCard.parentElement.id === 'cardorden') {
                    showDetailView(cardData.card.imageSrc1, cardData.card.imageSrc2);
                }
            });
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
        });
    }

    // Eventos para permitir soltar el título en las columnas
    columns.forEach(column => {
        column.addEventListener('dragover', function (e) {
            e.preventDefault(); // Prevenir el comportamiento por defecto
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
            column.appendChild(card);
            
        });
    });

    
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

