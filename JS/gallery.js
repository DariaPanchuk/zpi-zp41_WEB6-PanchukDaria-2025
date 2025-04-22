const images = [
{
    preview:
    './img/1.png',
    original:
    './img/modal/m-1.webp',
    description: 'Планування',
},
{
    preview:
    './img/2.png',
    original:
    './img/modal/m-2.jpg',
    description: 'Ідея',
},
{
    preview:
    './img/3.png',
    original:
    './img/modal/m-3.jpg',
    description: 'Телефон',
},
{
    preview:
    './img/4.png',
    original:
    './img/modal/m-4.webp',
    description: 'Нарада',
},
{
    preview:
    './img/5.png',
    original:
    './img/modal/m-5.avif',
    description: 'Офіс',
},
{
    preview:
    './img/6.png',
    original:
    './img/modal/m-6.jpg',
    description: 'Робота',
},
{
    preview:
    './img/7.png',
    original:
    './img/modal/m-7.jpg',
    description: 'Кава',
},
{
    preview:
    './img/8.png',
    original:
    './img/modal/m-8.webp',
    description: 'Ноутбук',
},
{
    preview:
    './img/9.png',
    original:
    './img/modal/m-9.jpg',
    description: 'Презентація',
},
];

const gallery = document.querySelector(".gallery");

images.forEach((image) => {
    gallery.innerHTML += `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.original}">
                <img
                class="gallery-image img"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
                width="360"
                height="200"
                />
            </a>
        </li>
    `;
});

gallery.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.classList.contains('gallery-image')) {
        const instance = basicLightbox.create(`
            <img src="${event.target.dataset.source}">
        `);
        instance.show();
    }
});

document.querySelectorAll('.gallery-image').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('custom-cursor');
    });
    
    item.addEventListener('mouseout', () => {
        item.classList.remove('custom-cursor');
    });
});