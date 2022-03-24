const apiURL  ="https://api.themoviedb.org/3"
const apiKey = '745e3c3bff583e9fff9e0766bd6c54a4'
const urlposter = 'https://image.tmdb.org/t/p/original';
const containercards = document.querySelector('.row')

const recuperarseries =()=>{
    
    const url = `${apiURL}/tv/popular?api_key=${apiKey}&language=es-MX&region=MX&page=1`

    fetch(url)
    .then((respuesta)=> respuesta.json())                       //promesa
    .then((body)=>{
        console.log(body)
        const series = body.results;     
        series.forEach((serie)=>{
        //const serie = series[0]    
        const card = `
        <div class="card  col-sm-4"  ondblclick ="irserie(${serie.id})" >
        <img src="${urlposter}${serie.poster_path}" class="card-img-top" alt="${serie.backdrop_path}">
            <div class="card-body">
            <h3>${serie.original_name}</h3>
            <p class="card-text">${serie.overview}</p>
  
            </div>
        </div>
        `
      containercards.insertAdjacentHTML('afterbegin', card)
    })  ;  
});
}

const irserie =(serieId)=>{
    window.location.assign(`./series.html?id=${serieId}`)

}


recuperarseries()