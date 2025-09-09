function setSiteCookie() {
    let path = window.location.pathname;
    let domain = window.location.hostname;

    const d = new Date();
    let time = d.getTime() / 1000;
    d.setTime(d.getTime() + 30 * 86400000);
    let expires = "expires="+ d.toUTCString();

    document.cookie = `lastSeen=${time}; expires=''; path=/; domain=${domain}; secure=true;`; // probably check if the site is the same and only if not refresh the timer 
    document.cookie = `lastSite=${path}; expires=${expires}; path=/; domain=${domain}; samesite=none; secure=true;`;
}

setSiteCookie();


function getCookieValue(name) {
     const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
     if (match) return match[2];
     return null;
}

async function getAPIData(url) {
    try {

        const data = await fetch(url, {
            method: 'GET',
            cache: 'force-cache',
        });

        if (data.ok) {
            let response = await data.json();
            let results = response.content;
            return results;
        } else {
            throw(data.status);
        }

    } catch (e) {
        console.warn(e)
        return false;
    }
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

function startSnail(father) {

    const snail = document.createElement('div');
    snail.classList.add('loadingSnail');
    father.appendChild(snail);

    return snail;
}

function checkForSnail(father) {
    const child = father.childNodes[0];
    let existingSnail = child ?? false;

    if (existingSnail) {
        if (existingSnail.classList[0] === 'loadingSnail') {
            return existingSnail;
        }
    }
    return false;
}

async function replaceTextLoop(possibleTexts, element) {
    while (true) {
        for (const text of possibleTexts) {
            await sleep(2000); // 1 sec = 1000 ms
            await replaceText(text, element);
        }
    }
}

async function replaceText(nText, element) {
    let cText = element.innerText;
    let cLenght = cText.length;

    while (cLenght > -1) {
        cText = cText.substring(0, cLenght );
        cLenght--;
        element.innerText = cText;

        await sleep(75);
    }

    const textArray = nText.split('')
    let currentText = '';

    for (const char of textArray) {
        currentText += char;
        element.innerText = currentText;

        await sleep(75);
    }
    return true;
}