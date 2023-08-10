fetch('https://apim.rec.net/public/accounts/account/1', {
        method: 'GET',
        // Request headers
        headers: {
            'Cache-Control': 'no-cache',
            'Ocp-Apim-Subscription-Key': 'c12b4c0c99d8450082dab9380e0c7c16',}
    })
    .then(response => {
        console.log(response.status);
        console.log(response.text());
    })
    .catch(err => console.error(err));
