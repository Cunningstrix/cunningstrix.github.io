var TANKS = [];
var BASEURL = "http://localhost:3000";

function startGame() {
    var tankslist = document.getElementById('tankslist');

    axios.get(`${BASEURL}/api/subdirectories`)
        .then(response => {
            TANKS = response.data.subdirectories;

            for (tank of TANKS) {
                let li = document.createElement('li');
                let input = document.createElement('input');
                input.name = tank;
                input.type = "checkbox";
                input.id = tank;

                let label = document.createElement('label');
                label.setAttribute('for', tank);
                label.innerHTML = '&nbsp;' + tank;
                input.id = tank;

                li.appendChild(input);
                li.appendChild(label);

                tankslist.appendChild(li);
            }
        })
        .catch(error => {
            console.error('Error making API request:', error);
        });

}

function loadImage() {
    let checkedtanks = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(q => q.id);
    let tank = checkedtanks[Math.floor(Math.random() * checkedtanks.length)];
    (typeof tank === 'undefined') && alert("Pas de véhicule coché");

    if (document.getElementsByClassName('card__inner')[0].classList.contains('is-flipped')) {
        document.querySelector(".card__inner").classList.toggle('is-flipped');
    }
    //shitty way to handle card reversing.
    setTimeout(() => {
        const imageTag = document.getElementById('test');

        // Axios GET request to fetch the image
        axios.get(`${BASEURL}/api/random-image/${tank}`, { responseType: 'arraybuffer' })
            .then(response => {
                // Convert the response data to a base64 string
                const base64Image = btoa(
                    new Uint8Array(response.data)
                        .reduce((data, byte) => data + String.fromCharCode(byte), '')
                );

                // Set the source of the image tag
                imageTag.src = `data:${response.headers['content-type']};base64,${base64Image}`;
                document.getElementById('answer').name = tank;
                document.getElementById('answer').innerHTML = tank;
                //document.getElementById('test').src = `http://localhost:3000/api/random-image/`+tank;

            })
            .catch(error => {
                console.error('Error fetching image:', error);
            });

    }, 300);

}

function check_all() {
    document.querySelectorAll('input[type=checkbox]').forEach(q => q.checked = true);
}

function uncheck_all() {
    document.querySelectorAll('input[type=checkbox]').forEach(q => q.checked = false);
}