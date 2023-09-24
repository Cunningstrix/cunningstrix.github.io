var TANKS = ['T55', 'T62', 'T64', 'T72', 'T80', 'T90', 'BMPT', 'BMPT2', 'BMPT72', 'M1ABRAMS', 'LEOPARD', 'CHALLENGER2', 'ARIETE', 'MAGACH', 'SABRA', 'BMP1', 'BMP2', 'BMP3', 'BMD1', 'BMD2', 'BMD3', 'BMD4', 'DRAGON', 'BRDM2', 'BRDM2RKH', 'BRM1', 'BRM3', 'SCIMITAR', 'WIESEL', 'FENNEK', 'JACKAL', 'BTR60', 'BTR70', 'BTR80', 'BTR80A', 'FUCHS', 'BMR600', 'STRYKER', 'M113', 'MTLB', 'HUMMER', 'COBRA', 'EAGLEIV', 'VEC', 'CENTORO', 'CENTOROII', 'PTL-02', 'IVECO', 'VAMTAC', "MARDER", "PUMA", "BRADLEY", "WARRIOR", "PIZARRO", "ULAN", "CV90", "AH1-COBRA", "APACHE", "MANGUSTA", "MI24", "MI28", "HOKUM", "XA 360", "XA 180", "PIRANHA", "BOXER", "WZ551", "TYPE85", "AAV7", "VIKING", "LIGHTGUN", "122D30", "130M46", "2A65", "FH70", "M777", "2S1", "2S3", "2S5", "2S7", "AS90", "PZH2000", "M109", "2S19", "2S35", "MDK2", "PZM", "BAT2", "M9ACE", "DACHS", "GMZ", "IMR2", "MTU72", "WOLWERINE", "PTS2", "PMM2", "TMM3", "TMM6", "AMPHIBOUS RIG", "RIBBON BRIDGE", "T64 BULAT", "T72 B3", "T80 BVM", "ROSOMAK", "FRECCIA", "DARDO", "ZBD05", "LAV25", "NAMER", "ZBD04", "T90MS", "ZTD05", "ARJUN", "ZU23.2", "GECKO", "ZSU23.4", "GADFLY", "GAINFULL", "GROUSE", "ZTZ96", "ZTZ99", "TYPE10", "K1", "BLACKPANTHER", "MERKAVAIII", "MERKAVAIII BAZ", "MERKAVAIV", "SPG9", "100T12", "M40A1", "M1134ATGM", "2A45", "BRDM2 AT5", "BMP3 KHRIZANTHEMA", "BMP3 KORNET", "SCHTURM", "BMO-T"]
var FSE = TANKS.slice(0,40);

function startGame() {
    var tankslist = document.getElementById('tankslist');
    // Populate Navbar.
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
}

function loadImage() {
    let checkedtanks = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(q => q.id);
    let tank = checkedtanks[Math.floor(Math.random() * checkedtanks.length)];
    (typeof tank === 'undefined') && alert("Pas de véhicule coché");

    if(document.getElementsByClassName('card__inner')[0].classList.contains('is-flipped')){
        document.querySelector(".card__inner").classList.toggle('is-flipped');
    }

    setTimeout(() => {
        document.getElementById('test').src = 'vehicles/' + tank + "/" + tank + "-" + Math.floor(Math.random() * 11) + ".jpg";
        document.getElementById('test').name = tank;
        document.getElementById('answer').innerHTML = tank;
    }, 300);

}

function check_ans() {
    if (document.getElementById("guess").value.toUpperCase() === document.getElementById('test').name) {
        alert("Bonne réponse");
        document.getElementById("guess").value = "";
        loadImage();
    }
    else {
        alert("Mauvaise réponse");
        document.getElementById("guess").value = "";
    }
}

function auto_check(){
    document.querySelectorAll('input[type=checkbox]').forEach(q => q.checked = true && FSE.includes(q.name));
    loadImage();
}

function check_all(){
    document.querySelectorAll('input[type=checkbox]').forEach(q => q.checked = true);
}

function uncheck_all(){
    document.querySelectorAll('input[type=checkbox]').forEach(q => q.checked = false);
}