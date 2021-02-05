fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        const content = document.getElementById('country-list');
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const flag = document.createElement('img');
            const name = document.createElement('h1');
            const div = document.createElement('div');
            div.className = 'country';
            div.id = 'country-name';
            flag.src = element.flag;
            name.innerHTML = element.name;
            div.appendChild(flag);
            div.appendChild(name);
            content.appendChild(div);
        }
    })
let countryName = document.getElementById('country-list');
countryName.addEventListener('click', function (event) {
    const name = event.target.innerText;
    fetch("https://restcountries.eu/rest/v2/name/" + name + "?fullText=true")
        .then(res => res.json())
        .then(data => {
            document.getElementById('name').innerHTML = "Country Name: " + data[0].name;
            document.getElementById('flag').src = data[0].flag;
            document.getElementById('capital').innerHTML = "Capital: " + data[0].capital;
            document.getElementById('region').innerHTML = "Region: " + data[0].region;
        })
})