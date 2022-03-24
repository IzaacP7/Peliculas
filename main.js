//  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWQ4ZjQ3NTBiOWI5NzJlMjE1ZGViMDIyMDY3ZDdiNSIsInN1YiI6IjYyMzkxYmNjOWVlMGVmMDA0NmRkNDQ1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.665AUkh60H3q8Ms6QXv2vMlhiz-Ef1i9c-SXxqX9zZs
//https://api.themoviedb.org/3/movie/550?api_key=1ad8f4750b9b972e215deb022067d7b5
//key  1ad8f4750b9b972e215deb022067d7b5
const apiURL  ="https://api.themoviedb.org/3"
const apiKey = '745e3c3bff583e9fff9e0766bd6c54a4'
const urlposter = 'https://image.tmdb.org/t/p/original';
const containercards = document.querySelector('.row')

const recuperarpopulares =()=>{
    const url = `${apiURL}/movie/popular?api_key=${apiKey}&language=es-MX&region=MX&page=1`
    fetch(url)
    .then((respuesta)=> respuesta.json())                       //promesa
    .then((body)=>{
        const peliculas = body.results;     
        peliculas.forEach((pelicula)=>{
        //const pelicula = peliculas[0]    
        const card = `
        <div class="card  col-sm-4"  ondblclick ="irPelicula(${pelicula.id})" >
        <img src="${urlposter}${pelicula.backdrop_path}" class="card-img-top" alt="${pelicula.original_title}">
            <div class="card-body">
            <h3>${pelicula.original_title}</h3>
            <p class="card-text">${pelicula.overview}</p>
  
            </div>
        </div>
        `
      containercards.insertAdjacentHTML('afterbegin', card)
    })    
})
}

const irPelicula =(peliculaId)=>{
    window.location.assign(`./peliculas.html?id=${peliculaId}`)

}


recuperarpopulares()


