//constantes API
const API_KEY='api_key=3e4100618a94d5284e4d8e17d17d1984';
const BASE_URL='https://api.themoviedb.org/3/';
const BASE_LAG='language=es-MX';

//Variables box peliculas
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

//Cargar y mostrar peliculas
async function loadMovies(url, section){
    try{
        let response=await fetch(url);
        console.log(response);
        let data=await response.json();
        console.log(data);
        let count=0;

        data.results.every(movie =>{
            if(count>14){
                return false;
            }
            const cardMovie=document.createElement('div');
            cardMovie.classList.add('col', 'mb-3');
        
            cardMovie.innerHTML = `
            <a href="#modal${movie.id}" data-bs-toggle="modal" data-bs-target="#modal${movie.id}"><img id="img-movie" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="img-fluid" alt=""></a>
            `;

            const cardMovieInfo=document.createElement('div');
            cardMovieInfo.innerHTML=`
            <div class="modal fade" id="modal${movie.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content text-black">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${movie.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                        <div class="col-4">
                            <img id="img-movie" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="img-fluid" alt="">   
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
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <h5>Puntuación</h5>
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
            count++;
            return true;
        });
    }catch(error){
        console.log(error);
    }
}

loadMovies(`${BASE_URL}movie/now_playing?${API_KEY}&${BASE_LAG}&page=1&region=MX`, boxMovies_latest);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=28&${BASE_LAG}&page=1&region=MX`, boxMovies_accion);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=12&${BASE_LAG}&page=1&region=MX`, boxMovies_aventura);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=16&${BASE_LAG}&page=1&region=MX`, boxMovies_animacion);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=35&${BASE_LAG}&page=1&region=MX`, boxMovies_comedia);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=80&${BASE_LAG}&page=1&region=MX`, boxMovies_crimen);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=99&${BASE_LAG}&page=1&region=MX`, boxMovies_documental);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=18&${BASE_LAG}&page=1&region=MX`, boxMovies_drama);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=10751&${BASE_LAG}&page=1&region=MX`, boxMovies_familia);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=14&${BASE_LAG}&page=1&region=MX`, boxMovies_fantasia);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=36&${BASE_LAG}&page=1&region=MX`, boxMovies_historia);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=27&${BASE_LAG}&page=1&region=MX`, boxMovies_terror);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=10402&${BASE_LAG}&page=1&region=MX`, boxMovies_musica);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=9648&${BASE_LAG}&page=1&region=MX`, boxMovies_misterio);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=10749&${BASE_LAG}&page=1&region=MX`, boxMovies_romance);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=878&${BASE_LAG}&page=1&region=MX`, boxMovies_cf);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=10770&${BASE_LAG}&page=1&region=MX`, boxMovies_tv);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=53&${BASE_LAG}&page=1&region=MX`, boxMovies_suspense);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=10752&${BASE_LAG}&page=1&region=MX`, boxMovies_belica);
loadMovies(`${BASE_URL}discover/movie?${API_KEY}&with_genres=37&${BASE_LAG}&page=1&region=MX`, boxMovies_western);


