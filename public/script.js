function setSiteCookie() {
    let path = window.location.pathname;
    let domain = window.location.hostname;

    const d = new Date();
    let time = d.getTime() / 1000;
    d.setTime(d.getTime() + 30 * 86400000);
    let expires = "expires="+ d.toUTCString();

    document.cookie = `lastSeen=${time}; expires=''; path=/; domain=${domain}; secure=true;`; // probably check if the site is the same and only if not refresh the timer 
    document.cookie = `lastSite=${path}; expires=${expires}; path=/; domain=${domain}; secure=true;`;
}

setSiteCookie();


function getCookieValue(name) {
     const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
     if (match) return match[2];
     return null;
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

function destroySnail(snail) {
    try {
        snail.remove();
    } catch(e) {
        return e;
    }
    return 'success';
}