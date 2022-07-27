// class Movies{
//     constructor() {
//       this.queue = []
//     }
  
//     enqueue (element) {
//         if(this.queue.length<15){
//             this.queue.push(element)
//             return this.queue
//         }
//         else{
//             console.log('Arreglo a su maxima capacidad: 15')
//         }
      
//     }
  
//     dequeue () {
//       return this.queue.shift()
//     }
  
//     peek (){
//       return this.queue[0]
//     }
  
//     front(){
//       return this.queue[0]
//     }
  
//     back(){
//       return this.queue[this.queue.length - 1]
//     }
  
//     size(){
//       return this.queue.length
//     }
  
//     print(){
//       console.log(this.queue)
//     }
  
//     isEmpty(){
//       return this.queue.length === 0
//     }
  
//     clear(){
//       this.queue = []
//     }
  
//   }

//constantes API
const API_KEY='api_key=3e4100618a94d5284e4d8e17d17d1984';
const BASE_URL='https://api.themoviedb.org/3/';
const BASE_LAG='language=es-MX';

//Variables peliculas nuevas
// let pag=1;
const boxMovies=document.querySelector('#box-movies-latest');
let newMovies=Array();
// let accionMovies=new Movies();
// let aventurasMovies=new Movies();
// const siguiente=document.querySelector('#next-page');
// const anterior=document.querySelector('#past-page');

//  //Funciones siguiente y atras
// siguiente.addEventListener('click', () =>{
//     if(pag<1000){
//         pag+=1;
//         cleanHTML();
//         loadMovies();
//     }
// });
// anterior.addEventListener('click', ()=>{
//     if(pag>1){
//         pag-=1;
//         cleanHTML();
//         loadMovies();
//     }
// })

//Cargar peliculas
// async function loadMovies(){
//     try{
//         const response=await fetch(`${BASE_URL}movie/now_playing?${API_KEY}&${BASE_LAG}&page=1&region=MX`);
//         console.log(response);
//         const data=await response.json();
//         console.log(data);

        // data.results.forEach(movie =>{
        //     const cardMovie=document.createElement('div');
        //     cardMovie.classList.add('col', 'mb-3');
        //     cardMovie.innerHTML=`
        //     <div class="movie text-white">
        //         <img id="img-movie" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="img-fluid" alt="">
        //         <p class="title">${movie.title}</p>
        //     </div>
        //     `;

        //     boxMovies.appendChild(cardMovie);
        // });
//     }catch(error){
//         console.log(error);
//     }
// }

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
            movie['overview']=movies.overview;
            movie['poster_path']=movies.poster_path;
            movie['title']=movies.title;
            obj.push(movie);
            count++;
            return true;
         });

    }catch(error){
        console.log(error);
    }
}

function showMovies(moviesToShow, section){
    console.log(moviesToShow);
    moviesToShow.forEach(movie =>{
        const {poster_path, title}=movie;
        const cardMovie=document.createElement('div');
        cardMovie.classList.add('col', 'mb-3');
        cardMovie.innerHTML=`
        <div class="movie text-white">
            <img id="img-movie" src="https://image.tmdb.org/t/p/w500/${poster_path}" class="img-fluid" alt="">
            <p class="title">${title}</p>
        </div>
        `;
        section.appendChild(cardMovie);
    });
}


// limpiar seccion
// function cleanHTML(){
//     boxMovies.innerHTML='';
// }


loadMovies(`${BASE_URL}movie/now_playing?${API_KEY}&${BASE_LAG}&page=1&region=MX`, newMovies);
showMovies(newMovies, boxMovies);