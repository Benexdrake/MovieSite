const url = 'https://scraped-api.vercel.app/api/animes';

const options = {method:'GET', headers: { 'Content-Type': 'application/json' }}

export let getAnimes = async () =>
{
    return await fetch(url, options).then(x => {return x.json()})
}

export let getAnimeInfos = async () =>
{
    return await fetch(url+'?info=true', options).then(x => {return x.json()})
}

// export let getAnimesByRating = async () =>
// {
//     return await fetch(url+'', options).then(x => {return x.json()})
// }

export let getAnimesByTitle = async (title) =>
{
    return await fetch(`${url}?title=${title}`, options).then(x => {return x.json()})
}