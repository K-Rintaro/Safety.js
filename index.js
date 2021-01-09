let atags = document.getElementsByTagName("h1").length;
console.log(atags)

const lookup = require("./safe-browse-url-lookup")({ apiKey: "AIzaSyAN4VbvdB38exa6YUbko_wr67P0u6rZgSg"});

lookup.checkSingle('https://www.apple.com')
    .then(isMalicious => {
        console.log(isMalicious ? 'Hands off! This URL is evil!' : 'Everything\'s safe.');
    })
    .catch(err => {
        console.log('Something went wrong.');
        console.log(err);
    });