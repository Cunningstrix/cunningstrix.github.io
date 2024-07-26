var TANKS = [];

var PRESELECT = [
            "LECLERC", "VAB","VBCI","VBL","AMX10","JAGUAR","GRIFFON", //FR
            "BRDM2", "BRM1", "BRM3","SCIMITAR","WIESEL","FENNEK","JACKAL", //RECO 1
            "HUMMER", "COBRA", "EAGLEIV","VEC", "CENTORO","CENTOROII","PTL-02","IVECO", "VAMTAC", //RECO 2
            "BTR60","BTR70","BTR80","BTR80A","FUCHS","BMR600","STRYKER","M113","MTLB", //VBTT1
            "XA 180","XA 360","PIRANHA","BOXER","WZ551","TYPE85","AAV7","VIKING", //VBTT2
            "T55", "T62", "T64 BULAT", "T72", "T80","T90","BMPT", "BMPT2", //MBT1
            "M1ABRAMS", "LEOPARD", "CHALLENGER2","ARIETE", "MAGACH", "SABRA", //MBT2
        ];

function startGameIdentif() {
    var tankslist = document.getElementById('tankslist');

    axios.get(`https://identifgamebackend.onrender.com/api/subdirectories`)
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
        axios.get(`https://identifgamebackend.onrender.com/api/random-image/${tank}`, { responseType: 'arraybuffer' })
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

            })
            .catch(error => {
                console.error('Error fetching image:', error);
            });

    }, 300);

}

function loadQuestion(type =''){
    if(type === 'mmp'){
        console.log('toto')
        setTimeout(() => {
            const imageTag = document.getElementById('test');
    
            // Axios GET request to fetch the image
            axios.get(`https://identifgamebackend.onrender.com/api/mmp`)
                .then(response => {
    
                    document.getElementById('question').name = response.data.question;
                    document.getElementById('question').innerHTML = response.data.question;
                    if(response.data.answer.includes("base64")){
                        const img = document.createElement('img');
                        img.src = response.data.answer;
                        document.getElementById('answer').appendChild(img);
                    }
                    else{
                        document.getElementById('answer').innerHTML = response.data.answer;
                    }
    
                })
                .catch(error => {
                    console.error('Error fetching image:', error);
                });
    
        }, 300);
    }

}

function check_all() {
    document.querySelectorAll('input[type=checkbox]').forEach(q => q.checked = true);
}

function uncheck_all() {
    document.querySelectorAll('input[type=checkbox]').forEach(q => q.checked = false);
}
function startPRESELECT(){
    document.querySelectorAll('input[type=checkbox]').forEach(q => {
        // Check if the input element's name matches any element in the array
        if (PRESELECT.includes(q.name)) {
            // If it matches, set the checked property to true
            q.checked = true;
        }
    });}