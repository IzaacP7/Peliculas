const apiURL  ="https://api.themoviedb.org/3"
const apiKey = '745e3c3bff583e9fff9e0766bd6c54a4'
const urlposter = 'https://image.tmdb.org/t/p/original';
const busqueda = document.querySelector('#busqueda')
const cardsbusqueda = document.querySelector('#cardsbusqueda')


const buscar =(e)=>{
    e.preventDefault();
    let resultadobusqueda = e.target.querySelector('input').value
    recuperarbusqueda (resultadobusqueda)
   // console.log(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-MX&query=${resultadobusqueda}&page=1&include_adult=false`)
}



const recuperarbusqueda =(term)=>{
    
    const url = `${apiURL}/search/movie?api_key=${apiKey}&language=es-MX&query=${term}&page=1&include_adult=false`
    fetch(url)
    .then((respuesta)=> respuesta.json())                       //promesa
    .then((body)=>{
        console.log(body)
        const peliculas = body.results;  
         
        peliculas.forEach((pelicula)=>{
        //const pelicula = peliculas[0]    
        const card = `
        <div class="card  col-sm-4"  >
        <img src="${urlposter}${pelicula.backdrop_path}" class="card-img-top" alt="${pelicula.original_title}">
            <div class="card-body">
            <h3>${pelicula.original_title}</h3>
            <p class="card-text">${pelicula.overview}</p>
  
            </div>
        </div>
        `
        cardsbusqueda.insertAdjacentHTML('afterbegin', card)
    })    
})
}

recuperarbusqueda()