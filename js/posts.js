const getURL = 'https://25.javascript.pages.academy/keksobooking/data';


fetch(getURL).then(response => response.json()).then(response => console.log(response))
