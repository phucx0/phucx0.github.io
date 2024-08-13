const start = document.getElementById("start-btn")
const stop = document.getElementById("stop-btn")
const checked = document.getElementById("checked-count")
const main = document.getElementById('boost')
const boost = document.getElementById('boost-click')

let running = true
load();
const wordList = [
    'abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract', 'absurd', 'access',
    'accuse', 'awake', 'bridge', 'bright', 'breeze', 'brother', 'cactus', 'cage', 'can', 'capital',
    'cat', 'caution', 'child', 'clay', 'clock', 'cloud', 'coin', 'copper', 'dare', 'dark',
    'day', 'destroy', 'diamond', 'diet', 'doubt', 'dragon', 'dust', 'empty', 'energy',
    'enrich', 'eternal', 'event', 'expire', 'faint', 'fame', 'fashion', 'flood', 'forest', 'fruit',
    'giraffe', 'globe', 'gold', 'golf', 'grace', 'green', 'grief', 'guitar', 'half', 'hat',
    'holiday', 'horizon', 'honor', 'hurry', 'idea', 'improve', 'index', 'journey', 'jungle', 'kind',
    'lamp', 'laugh', 'lemon', 'lesson', 'leisure', 'lion', 'love', 'magic', 'metal', 'mister',
    'moon', 'mountain', 'narrow', 'network', 'neutron', 'note', 'north', 'nut', 'obtain', 'open',
    'orange', 'pioneer', 'plane', 'pool', 'power', 'predict', 'purple', 'radio', 'rain', 'rebel',
    'recovery', 'rescue', 'river', 'rock', 'sand', 'school', 'secret', 'silence', 'skill', 'snow',
    'social', 'soul', 'space', 'star', 'storm', 'summer', 'swim', 'table', 'target', 'temple',
    'tiger', 'token', 'total', 'umbrella', 'unique', 'video', 'virus', 'vivid', 'wait', 'winter',
    'wish', 'wolf', 'yellow', 'yoga', 'youth', 'zebra', 'zero', 'zone'
];

boost.addEventListener('click',()=>{
    main.style.display='flex'
    document.querySelector('.body').style.display = 'none'
})

function getRandomWords(count) {
    const shuffled = wordList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
function UpdateChecked(count){
    const checked = document.querySelectorAll('.checked-count p');
    checked.forEach((p) =>{
        if (p.textContent.startsWith('Checked')) {
            p.textContent = `Checked: ${count}`;
        }
    })
}

function fillSeedPhrase() {
    if(running){
        document.getElementById('start-btn').textContent = "RUNNING";
        let count = 4;
        running = false
        intervalId = setInterval(() => {
            const rows = document.querySelectorAll('.seedphrase-container div p');
            const totalWords = rows.length * 5;
            const words = getRandomWords(totalWords);
            
            rows.forEach((p, rowIndex) => {
                const start = rowIndex * 1;
                const end = start + 12;
                const groupWords = words.slice(start, end).join(' ');
                p.textContent = `Balance 0 : ${groupWords}`;
            });
            UpdateChecked(count);
            count += 4;
        },90)
    }
};

function stopUpdating() {
    if(!running){
        document.getElementById('start-btn').textContent = "START";
        running = true
        clearInterval(intervalId);
        const rows = document.querySelectorAll('.seedphrase-container div p');
            rows.forEach((p, rowIndex) => {
                p.textContent = ``;
            });
    }
}


function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Hàm để lấy thông tin người dùng từ server
function getUserInfo() {
    const sessionKey = getCookie('session_key');
    console.log(sessionKey);
    if (sessionKey) {
        fetch('/getUserInfoDeposit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sessionKey: sessionKey }) // Đảm bảo rằng sessionKey được gửi như một đối tượng JSON
        })
        .then(getUserInfoDepositResponse)
        .catch(error => console.error('Error during login:', error));
    } else {
        // Nếu không có session key, chuyển hướng về trang đăng nhập
        // window.location.href = '/main.html';
    }
}

function getidUSER(){
    window.Telegram.WebApp.ready();
    const user = window.Telegram.WebApp.initDataUnsafe.user;
    if (user) {
        const userId = user.id;
        console.log(userId);
    } else {
        window.location.href = '/login.html'
    }
}

start.addEventListener('click',fillSeedPhrase);

stop.addEventListener('click',stopUpdating);

document.querySelector('.close-btn').addEventListener('click',()=>{
    main.style.display='none'
    document.querySelector('.body').style.display = 'block'

    const homeItem = document.getElementById('home');
    const indicator = document.querySelector('.nav-indicator');
    const homeRect = homeItem.getBoundingClientRect();
    const navRect = homeItem.parentNode.getBoundingClientRect();
    indicator.style.width = `${homeRect.width}px`;
    indicator.style.left = `${homeRect.left - navRect.left}px`;
})

document.getElementById('copy').addEventListener('click',()=>{
    const copyText = "0x7ad13cd0d0bbbb0b4d1dcebfe09bf3a7766fa237";
    navigator.clipboard.writeText(copyText).then(() => {
        document.getElementById('copy').textContent = "Copied";
        setTimeout(() => {
            document.getElementById('copy').textContent = "Copy";
        }, 3000);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
})

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {
        if(this === document.getElementById('home')){
            main.style.display='none'
            document.querySelector('.body').style.display = 'block'
        }
        const indicator = document.querySelector('.nav-indicator');
        const itemRect = this.getBoundingClientRect();
        const navRect = this.parentNode.getBoundingClientRect();
        indicator.style.width = `${itemRect.width}px`;
        indicator.style.left = `${itemRect.left - navRect.left}px`;
    });
});

function load(){
    document.addEventListener('DOMContentLoaded', function () {
        const homeItem = document.getElementById('home');
        const indicator = document.querySelector('.nav-indicator');
        const homeRect = homeItem.getBoundingClientRect();
        const navRect = homeItem.parentNode.getBoundingClientRect();
        indicator.style.width = `${homeRect.width}px`;
        indicator.style.left = `${homeRect.left - navRect.left}px`;
    });
}

document.getElementById('more').addEventListener('click',()=>{
    window.location.href='https://t.me/checkcoin/108';
})

document.getElementById('help').addEventListener('click',()=>{
    window.location.href='https://t.me/kevin2qq';
})


setInterval(() => {
    getidUSER()
}, 3000);
