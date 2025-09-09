document.addEventListener('DOMContentLoaded', () => {

    //start animation fpr pictures as soon as they load
    document.querySelectorAll('.cardWrapper img').forEach(img => {
        img.addEventListener('load', () => {
            img.parentElement.classList.add('startAnimation'); 
        });
    });

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
    replaceTextLoop(possibleTexts, document.getElementById('searchFor'));

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
            if (! suggBox.querySelector('.loadingSnail')) {suggBox.innerText = ''}
            snail = suggBox.querySelector('.loadingSnail') ?? startSnail(suggBox);

            const searchWrapper = document.querySelector('section.search');

            //get top 5 results in top5 variable with type


            let url = `https://api.felixstaude.de/api/cards?q=${input}&size=5`;
            const results = await getAPIData(url);

            if (results) {
                results.forEach(result =>{
                    const resultBox = document.createElement('a');
                    resultBox.innerText = result.name +  ' - ' + result.set.name;
                    resultBox.href = window.location.origin + '/card/' + result.id;
                    resultBox.classList.add('singleResult');
                    resultBox.classList.add(result.type);
                    suggBox.appendChild(resultBox);
                });
            };
            snail.remove();

        } else {
            suggBox.querySelector('.loadingSnail') ? suggBox.querySelector('.loadingSnail').remove() : '';
        }
}

function search(querystring) {
    if (querystring) {
        let q = encodeURI(querystring);
        window.location = window.location.origin + '/s?q=' + q;
    }
}