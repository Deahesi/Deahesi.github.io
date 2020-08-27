let radiobutton1 = document.querySelector('#radio__nosetts');
let radiobutton2 = document.querySelector('#radio__with-setts');
let radio_length = document.getElementsByName('content-settings__radio-count');
let radio_case = document.getElementsByName('content-settings__radio-case');
let button = document.querySelector('.sumbit-gener');
let settings = document.querySelector('.settings');
let out = document.querySelector('.content__out');
var length = 0;
let interval = [];
let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


radiobutton1.addEventListener('change', toggleSetts);
radiobutton2.addEventListener('change', toggleSetts);

button.addEventListener('click', (e) => {
    if (radiobutton1.checked) {
        out.innerHTML = generationNoSetts();
    } else {
        out.innerHTML = generationWithSetts();
    }
})

function toggleSetts() {
    if (radiobutton1.checked) {
        settings.classList.replace('show', 'hide');
    } else {
        settings.classList.replace('hide', 'show');
    }
}

function generationWithSetts() {
    interval = [];
    let pass = '';

    for (let radio of radio_length) {
        if (radio.checked) {
            interval = radio.value.split('-');
            setLength(interval);
            break;
        }
    }

    for (let i = 0; i < length; i++) {
        let rand = Math.floor(0 + Math.random() * (1 + 1 - 0));
        let randChar = Math.floor(0 + Math.random() * (chars.length - 1 + 1 - 0));
        let randNum = Math.floor(0 + Math.random() * (9 + 1 - 0));
        let randCase = Math.floor(0 + Math.random() * (1 + 1 - 0));
        if (rand == 0) {
            if (radio_case[0].checked && i < 1) {
                pass += chars[randChar].toUpperCase();
                continue;
            } else if (radio_case[1].checked && i < 1) {
                pass += chars[randChar].toLowerCase();
                continue;
            }
            if (randCase == 0) {
                pass += chars[randChar].toUpperCase();
            } else {
                pass += chars[randChar].toLowerCase();
            }

        } else {
            pass += randNum;
        }
    }
    return pass;
}

function setLength(interval) {
    length = Math.floor(parseInt(interval[0]) + Math.random() * (parseInt(interval[1]) + 1 - parseInt(interval[0])));
}

function generationNoSetts() {
    let pass = '';
    setLength([5, 26]);

    for (let i = 0; i < length; i++) {
        let rand = Math.floor(0 + Math.random() * (1 + 1 - 0));
        let randChar = Math.floor(0 + Math.random() * (chars.length - 1 + 1 - 0));
        let randNum = Math.floor(0 + Math.random() * (9 + 1 - 0));
        let randCase = Math.floor(0 + Math.random() * (1 + 1 - 0));
        if (rand == 0) {
            if (randCase == 0) {
                pass += chars[randChar].toUpperCase();
            } else {
                pass += chars[randChar].toLowerCase();
            }
        } else {
            pass += randNum;
        }
    }
    return pass;
}
