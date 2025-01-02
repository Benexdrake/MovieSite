import { getAnimes,getAnimeInfos,getAnimesByTitle } from "./anime_service.js";
import { task } from "./libs/helper.js";
import { cardBlock } from "./components/card.js";

export let showAllAnimes = async () => 
{
    let grid = document.getElementById('grid')
    if(!grid) return;

    grid.innerHTML = '';

    await task(async () => {
        let animes = await getAnimes();

        for(let anime of animes.slice(0,27))
        {
            let card = await cardBlock(anime);
            grid.appendChild(card)
        }
    })
}

export let showAnimesByTitle = async (title) => {
    let grid = document.getElementById('grid')
    if(!grid) return;

    grid.innerHTML = '';

    await task(async () => {
        let animes = await getAnimesByTitle(title)

        for(let anime of animes.slice(0,27))
        {
            let card = await cardBlock(anime);
            grid.appendChild(card)
        }
    })
}