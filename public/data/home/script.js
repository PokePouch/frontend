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
    searchbarInput.addEventListener('input', () => {
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
        const suggBox = document.getElementById('suggBox');
        
        let snail;

        if (input.length >= 3 && input.length <= 25) {
            if (! checkForSnail(suggBox)) {
                suggBox.innerText = '';
                snail = startSnail(suggBox);
            } else {
                let children = suggBox.children;
                snail = children.find((e) => e === document.getElementsByClassName('loadingSnail')[0]);
            }

            const searchWrapper = document.querySelector('section.search');

            //get top 5 results in top5 variable with type

            try {
                let url = `https://api.felixstaude.de/api/cards?q=${input}&size=5`
                const data = await fetch(url);
                let response = await data.json();
                let results = response.content;

                results.forEach(result =>{
                    const resultBox = document.createElement('a');
                    resultBox.innerText = result.name +  ' - ' + result.set.name;
                    resultBox.href = window.location.origin + '/card/' + result.id;
                    resultBox.classList.add('singleResult');
                    resultBox.classList.add(result.type);
                    suggBox.appendChild(resultBox);
                })
                destroySnail(snail);
                searchWrapper.appendChild(suggBox);
            } catch (e) {
                console.warn(e)
            }
        }

    if (input.lenght === 0 ) {
        destroySnail(snail);
    }
}

function search(querystring) {
    let q = encodeURI(querystring);
    window.open(window.location.origin + '/s?q=' + q)
}