const apiURL  ="https://api.themoviedb.org/3"
const apiKey = '745e3c3bff583e9fff9e0766bd6c54a4'
const urlposter = 'https://image.tmdb.org/t/p/original';
const containercards = document.querySelector('#pelis')
const actores = document.querySelector('#actores')

const queryParams = new  URLSearchParams(window.location.search)  //se obitenen todos los query strings
const id =  queryParams.get('id')  //se obitene el id de peliculas

console.log(id)



const recuperarPelicula = () => {
    const url = `${apiURL}/movie/${id}?api_key=${apiKey}&language=es-MX&region=MX&`;
    fetch(url)
    .then(respuesta => respuesta.json())
    .then((body) => {
        const card =`
        <div class="card col">
            <img src="${urlposter}${body.backdrop_path}" class="img-card-custom " alt="${body.original_title}">
            <div class="card-body d-flex p-0 mt-2">
            <img src="${urlposter}${body.backdrop_path}" class="img-list " alt="${body.original_title}">
                <div class="p-4" >
                    <h3 class="text-center">${body.original_title}</h3>
                    <p class="card-text">${body.overview}</p>
                </div>
            </div>        
        </div>`
        containercards.insertAdjacentHTML('afterbegin', card);
        console.log(body);
    });
}


const recuperarCreditos = () => {
    const url = `${apiURL}/movie/${id}/credits?api_key=${apiKey}&language=es-MX&region=MX&`;
    fetch(url)
    .then(respuesta => respuesta.json())
    .then((body) => {
       const creditos = body.cast;
       console.log (creditos)
      
   
       creditos.forEach((credito) => {
        const card = `
        <div class="card col-sm-5">
            <img src="${urlposter}${credito.profile_path}" class="" alt="#">
                
        </div>`
        
        actores.insertAdjacentHTML('afterbegin', card);
        });
    });

    
    
}


recuperarPelicula ();
recuperarCreditos ();