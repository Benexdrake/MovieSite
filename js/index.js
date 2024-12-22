import { getAnimes,getAnimeInfos,getAnimesByTitle } from "./anime_service.js";
import { cardBlock } from "./components/card.js";

// let animesByTitle = await getAnimesByTitle('dragon');

let getInformation = async () =>
{
    let infos = await getAnimeInfos();
    createGenres(infos.tags);
    createPublishers(infos.publishers)
}

let createGenres = (genres) =>
{
    let g = document.getElementById('genres');

    let all_genre = document.getElementsByClassName('genre_list')[0];

    if(!all_genre)
        return;

    all_genre.addEventListener('click', async () => {
        let animes = await getAnimes();
        console.log(animes.length)
    })

    
    for(let genre of genres)
    {
        let genre_list = document.createElement('li');
        genre_list.className = 'genre_list';
        genre_list.innerHTML = `<p>${genre.tag}</p><p>${genre.count}</p>`
        
        genre_list.addEventListener('click', () => {
            console.log(genre.tag)
        })
        
        g.appendChild(genre_list);
    }
}

let createPublishers = (publishers) =>
{
    let pl = document.getElementById('publisher_list')

    for(let p of publishers)
    {
        let publisher_list_item = document.createElement('option');
        publisher_list_item.className = 'publisher_list_item';
        publisher_list_item.value = p;
        publisher_list_item.innerText = p;

        publisher_list_item.addEventListener('click', () => {
            console.log(publisher_list_item.value);
        })

        pl.appendChild(publisher_list_item);
    }
}

let showAllAnimes = async () => 
{
    let grid = document.getElementById('grid')
    if(!grid) return;


    let animes = await getAnimes();

    for(let anime of animes.slice(0,27))
    {
        let card = await cardBlock(anime);
        grid.appendChild(card)
    }
}

showAllAnimes();
getInformation();