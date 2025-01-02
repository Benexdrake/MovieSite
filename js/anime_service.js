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

export let getAnimesByRating = async (rating) =>
{
    return await fetch(url+'?rating='+rating, options).then(x => {return x.json()})
}

export let getAnimesByPublisher = async (publisher) =>
{
    return await fetch(url+'?publisher='+publisher, options).then(x => {return x.json()})
}

export let getAnimesByGenre = async (genre) =>
{
    return await fetch(url+'?genre='+genre, options).then(x => {return x.json()})
}

export let getAnimesByTitle = async (title) =>
{
    return await fetch(`${url}?title=${title}`, options).then(x => {return x.json()})
}