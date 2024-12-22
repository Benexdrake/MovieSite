export let cardBlock = async (anime) => 
{
    let card = document.createElement('div')
    card.className = 'card';
    card.style.backgroundImage = `url(${anime.imageUrl})`
    console.log(anime.imageUrl)

    return card;
}