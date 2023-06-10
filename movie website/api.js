const api_key='api_key=21e85512b9275760dd805db08b035da3';
const BASE_URL='https://api.themoviedb.org/3';
const API_URL=BASE_URL+'/discover/movie?sort_by=popularity.desc&'+api_key;
const IMG_URL='https://image.tmdb.org/t/p/w500';
const search_url=BASE_URL+'/search/movie?'+api_key;
const form=document.querySelector('.form');
const search=document.querySelector('#search');
const form2=document.querySelector('.form2');
const search2=document.querySelector('#search2');



getMovies(API_URL)


function getMovies(url)
{
    fetch(url).then(res=>res.json()).then(data=>{
        showMovies(data.results);
    })
}

function showMovies(data){
    var i=0;
    data.forEach(movie => {
       
        const {title,poster_path,vote_average,overview}=movie;
        
        document.querySelectorAll('.movie-list-item-img')[i].src=IMG_URL+poster_path;
        document.querySelectorAll('.movie-list-item-title')[i].innerHTML=title;
        document.querySelectorAll('.movie-list-item-desc')[i].innerHTML=overview;
        i++;
    
        

        
        
    })
};

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchTerm=search.value;

    if(searchTerm)
    {
        getMovies(search_url+'&query='+searchTerm);
    }
    else
    getMovies(API_URL);

});
form2.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchTerm=search2.value;

    if(searchTerm)
    {
        getMovies(search_url+'&query='+searchTerm);
    }
    else
    getMovies(API_URL);

});






