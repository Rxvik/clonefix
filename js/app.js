//Api a tvmaze
const API = 'https://api.tvmaze.com/search/shows?q=';

//Elementos del DOM
const rowsContainer = document.getElementById('rowsContainer');
const hero = document.querySelector('.hero');
const heroTitle = document.getElementById('heroTitle');
const heroDesc = document.getElementById('heroDesc');
const heroPlay = document.getElementById('heroPlay');

const init = async () => {
    const trending = await fetchJSON(`${API}/shows?page=1`);
    renderRow("Tendencias", trending.slice(0, 20))
    console.log('@@@ trending =>', trending);
}

const rednderRow = (title, shows) => {
    const section = document.createElement('section');
    section.classList = 'mb-3';
    section.innerHTML = 
    `
    <h3 class="row-title">${title}</h3>
    <div class="rail" data-rail></div>
    `

    //Funcion para crear los poster 
}

const fetchJSON = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Error al cargar datos', url);
    }
    return await res.json();
}

init();