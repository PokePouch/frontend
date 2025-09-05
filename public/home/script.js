//---- neccessary functions ----
// - display correct welcome message
// - remove label when input has value
// - edit search for every few seconds
// - search

document.addEventListener('DOMContentLoaded', () => {
    // welcome user
    let greetingUser = document.getElementById('greetingUser');
    let user = getCookieValue('username') ?? 'zukünftiger Poucher';
    let whitespace = user ? ', ' : '';
    let message = 'Willkommen' + whitespace + user;

    greetingUser.innerText = message;

    // -- searchbar --
    // replace text
    const possibleTexts = [
        'Serien',
        'Sets',
        'Benutzern',
        'Pokémon'
    ]
    replaceText(possibleTexts);

    let searchbarInput = document.getElementById('search');
    searchbarInput.addEventListener('input', (i) => {
        moveLabel(); //remove label when input has value
        searchSuggestions(searchbarInput.value); // suggest results
    });
    moveLabel();


    // search itself
    searchbarInput.addEventListener('keydown', (k) => {
        if (k.key === 'Enter') {
            search(searchbarInput.value);
        }
    })

    let startQueryButton = document.getElementById('startQuery')
    startQueryButton.addEventListener('click', () => {
        search(searchbarInput.value)
    });
    startQueryButton.addEventListener('keydown', (k) => {
        if (k.key === 'Enter') {
            search(searchbarInput.value);
        }
    })
})


//helper functions to replace text
async function replaceText(possibleTexts) {
    while (true) {
        for (const text of possibleTexts) {
            await sleep(2000); // 1 sec = 1000 ms
            await replaceSeachbarText(text);
        }
    }
}

async function replaceSeachbarText(nText) {
    let cText = document.getElementById('searchFor').innerText;
    let cLenght = cText.length;

    while (cLenght > -1) {
        cText = cText.substring(0, cLenght );
        cLenght--;
        document.getElementById('searchFor').innerText = cText;

        await sleep(75);
    }

    const textArray = nText.split('')
    let currentText = '';

    for (const char of textArray) {
        currentText += char;
        document.getElementById('searchFor').innerText = currentText;

        await sleep(75);
    }
    return true;
}


//helper functions to move label away
function moveLabel() {
    let searchbarInput = document.getElementById('search');
    let searchbarLabel = document.getElementById('searchbarLabel');

    if (searchbarInput.value.length > 0) {
        searchbarLabel.classList.add('removeLabel');
    } else {
        searchbarLabel.classList.remove('removeLabel');
    }
}


// helper function for search
async function searchSuggestions(input) {
    if (input.length >= 3) {
        console.log('Vorschläge basierend auf: ', input);

        const searchWrapper = document.querySelector('section.search');
        const suggBox = document.createElement('div');

        suggBox.classList.add('suggBox');


        //get top 5 results in top5 variable with type

        const top5 = [
            ['name' = 'Lorem', 'type' = 'pokémon'],
            ['name' = 'ipsum', 'type' = 'series'],
            ['name' = 'dolor', 'type' = 'set'],
            ['name' = 'sit', 'type' = 'user'],
            ['name' = 'amet', 'type' = 'pokémon']
        ]

        top5.forEach(result =>{
            const resultBox = document.createAttribute('div');
            resultBox.innerText = result.name;
            resultBox.classList.add(result.type);
            suggBox.appendChild(resultBox);
        })
        searchWrapper.appendChild(suggBox);
    }
}

function search(querystring) {
    let q = encodeURI(querystring);
    window.open(window.location.origin + '/s?q=' + q)
}