document.addEventListener('DOMContentLoaded', () => {
    let pathArray = window.location.pathname.split('/').filter(String);

    const url = new URL('/', 'https://api.felixstaude.de');
    url.pathname = '/api/' + pathArray[0]
    if (pathArray[1]) {
        url.searchParams.set('q', pathArray[1])
    }

    fetchItems(url);
})

async function fetchItems(url) {
    const father = document.getElementById('allItems');
    let snail = startSnail(father);

    const results = await getAPIData(url);


    if (results) {
        results.forEach(result => {
            const wrapper = document.createElement('a');
            wrapper.classList.add('itemWrapper')
            const title = document.createElement('h3');
            title.innerText = result.name;
            const year = document.createElement('span');
            year.innerText = result.releaseYear;
            const img = document.createElement('img');
            img.src = `https://assets.tcgdex.net/en/${result.id}/${result.firstSet}/logo.webp`;
            img.alt = result.name;

            wrapper.appendChild(title);
            wrapper.appendChild(year);
            wrapper.appendChild(img);
            father.appendChild(wrapper);
        })
    }
    snail.remove();
}