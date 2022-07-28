//constantes API
const API_KEY='api_key=3e4100618a94d5284e4d8e17d17d1984';
const BASE_URL='https://api.themoviedb.org/3/';
const BASE_LAG='language=es-MX';

//Constantes box-movies
const boxMovies_latest=document.querySelector('#box-movies-latest');
const boxMovies_accion=document.querySelector('#box-movies-accion');
const boxMovies_aventura=document.querySelector('#box-movies-aventura');
const boxMovies_animacion=document.querySelector('#box-movies-animacion');
const boxMovies_comedia=document.querySelector('#box-movies-comedia');
const boxMovies_crimen=document.querySelector('#box-movies-crimen');
const boxMovies_documental=document.querySelector('#box-movies-documental');
const boxMovies_drama=document.querySelector('#box-movies-drama');
const boxMovies_familia=document.querySelector('#box-movies-familia');
const boxMovies_fantasia=document.querySelector('#box-movies-fantasia');
const boxMovies_historia=document.querySelector('#box-movies-historia');
const boxMovies_terror=document.querySelector('#box-movies-terror');
const boxMovies_musica=document.querySelector('#box-movies-musica');
const boxMovies_misterio=document.querySelector('#box-movies-misterio');
const boxMovies_romance=document.querySelector('#box-movies-romance');
const boxMovies_cf=document.querySelector('#box-movies-cf');
const boxMovies_tv=document.querySelector('#box-movies-tv');
const boxMovies_suspense=document.querySelector('#box-movies-suspense');
const boxMovies_belica=document.querySelector('#box-movies-belica');
const boxMovies_western=document.querySelector('#box-movies-western');

//constante main
const boxMain=document.querySelector('#main');

//constantes buscar pelicula
const formSearch=document.querySelector('#form-searchMovie');
const inputMovie=document.querySelector('#inputMovie');

//Mostrar error warning en pantalla
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const alertWarning = (message, type) => {
    alertPlaceholder.innerHTML='';
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div> <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg> ${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.appendChild(wrapper)
}

//Mostrar error success en pantalla
const alertSuccess = (message, type) => {
    alertPlaceholder.innerHTML='';
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div> <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg> ${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.appendChild(wrapper)
}

async function allTitles(url, arr){
    try{
        const response=await fetch(url);
        const data=await response.json();
        let count=0;
        data.results.every(movies =>{
            let movie={};
            if(count>14){
                return false;
            }
            movie['title']=movies.title;
            arr.push(movie);
            count++;
            return true;
        });
    }catch(error){
        console.log(error);
    }
    return arr;
}

//buscar pelicula en catalogo
formSearch.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const searchValue=inputMovie.value.toLowerCase();
    
    if(searchValue!==''){
        let allMovies=[];
        await allTitles(`${BASE_URL}movie/now_playing?${API_KEY}&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=28&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=12&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=16&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=35&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=80&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=99&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=18&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=10751&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=14&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=36&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=27&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=10402&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=9648&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=10749&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=878&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=10770&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=53&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=10752&${BASE_LAG}&page=1&region=MX`, allMovies);
        await allTitles(`${BASE_URL}discover/movie?${API_KEY}&with_genres=37&${BASE_LAG}&page=1&region=MX`, allMovies);    
        allMovies.every((movie)=>{
            if(movie.title.toLowerCase()==searchValue){
                alertSuccess('La pelicula se encuentra en el catálogo.', 'success');
                return false;
            }else{
                alertWarning('No se encuentra la pelicula en el catálogo.', 'warning');
                return true;
            }
        })
    }else{
        alertWarning('Ingresa un valor.', 'warning');
    }
})

//Cargar cast
// async function loadCredits(id){
//     let actores=[];
//     try{
//         const response=await fetch(`${BASE_URL}movie/${id}/credits?${API_KEY}&${BASE_LAG}`);
//         const data=await response.json();
//         data.cast.forEach(actor=>{
//             actores.push(actor.name);
//         })
//     }catch(error){
//         console.log(error);
//     }
//     return actores;
// }

//Cargar peliculas
async function loadMovies(url, obj){
    try{
        const response=await fetch(url);
        const data=await response.json();
        let count=0;
        data.results.every(movies =>{
            let movie={};
            if(count>14){
                return false;
            }
            movie['id']=movies.id;
            movie['title']=movies.title;
            movie['poster_path']=movies.poster_path;
            movie['release_date']=movies.release_date;
            movie['vote_average']=movies.vote_average;
            if(movies.overview==''){
                movie['overview']="Sin descripción disponible.";
            }
            else{
                movie['overview']=movies.overview;
            }
            obj.push(movie);
            // total.push(movie);
            count++;
            return true;
        });

    }catch(error){
        console.log(error);
    }
    return obj;
}

async function showMovies(url, section){
    let moviesToShow=[];
    await loadMovies(url, moviesToShow);
    moviesToShow.forEach(movie =>{
        const cardMovie = document.createElement("div");
        cardMovie.classList.add("col", "mb-3");

        cardMovie.innerHTML = `
            <a href="#modal${movie.id}" data-bs-toggle="modal" data-bs-target="#modal${movie.id}"><img id="img-movie" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="img-fluid" alt=""></a>
            `;

        const cardMovieInfo = document.createElement("div");
        cardMovieInfo.innerHTML = `
            <div class="modal fade " id="modal${movie.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content text-black">
                  <div class="modal-header">
                    <h5 class="modal-title text-center" id="exampleModalLabel">${movie.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                        <div class="col-4">
                            <img id="img-movie" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="img-card img-fluid" alt="">   
                        </div>
                        <div class="col-8">
                            <div class="row">
                                <div class="col-12">
                                    <h5>Resumen</h5>
                                    <p>${movie.overview}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <h5>Actores</h5>
                                    <p>${movie.cast}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <h5>Puntuación promedio</h5>
                                    <p>${movie.vote_average}/10</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <h5>Fecha de estreno</h5>
                                    <p>${movie.release_date}</p>
                                </div>
                            </div>
                        </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div>
            `;
        section.appendChild(cardMovie);
        boxMain.appendChild(cardMovieInfo);
    });
}  

function main(){
    showMovies(`${BASE_URL}movie/now_playing?${API_KEY}&${BASE_LAG}&page=1&region=MX`, boxMovies_latest);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=28&${BASE_LAG}&page=1&region=MX`, boxMovies_accion);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=12&${BASE_LAG}&page=1&region=MX`, boxMovies_aventura);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=16&${BASE_LAG}&page=1&region=MX`, boxMovies_animacion);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=35&${BASE_LAG}&page=1&region=MX`, boxMovies_comedia);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=80&${BASE_LAG}&page=1&region=MX`, boxMovies_crimen);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=99&${BASE_LAG}&page=1&region=MX`, boxMovies_documental);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=18&${BASE_LAG}&page=1&region=MX`, boxMovies_drama);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=10751&${BASE_LAG}&page=1&region=MX`, boxMovies_familia);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=14&${BASE_LAG}&page=1&region=MX`, boxMovies_fantasia);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=36&${BASE_LAG}&page=1&region=MX`, boxMovies_historia);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=27&${BASE_LAG}&page=1&region=MX`, boxMovies_terror);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=10402&${BASE_LAG}&page=1&region=MX`, boxMovies_musica);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=9648&${BASE_LAG}&page=1&region=MX`, boxMovies_misterio);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=10749&${BASE_LAG}&page=1&region=MX`, boxMovies_romance);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=878&${BASE_LAG}&page=1&region=MX`, boxMovies_cf);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=10770&${BASE_LAG}&page=1&region=MX`, boxMovies_tv);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=53&${BASE_LAG}&page=1&region=MX`, boxMovies_suspense);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=10752&${BASE_LAG}&page=1&region=MX`, boxMovies_belica);
    showMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=37&${BASE_LAG}&page=1&region=MX`, boxMovies_western);    
}

main();