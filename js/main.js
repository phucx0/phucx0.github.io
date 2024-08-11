const start = document.getElementById("start-btn")
const stop = document.getElementById("stop-btn")
const checked = document.getElementById("checked-count")

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


// const upgrade = document.getElementById("upgrade")
// upgrade.addEventListener('click',function(){
//     window.location.href = 'upgrade.html';
// })

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
    let count = 6;
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
        count += 6;
    },50)
};

function stopUpdating() {
    clearInterval(intervalId);
    const rows = document.querySelectorAll('.seedphrase-container div p');
        rows.forEach((p, rowIndex) => {
            p.textContent = ``;
        });
}

function getidUSER(){
    window.Telegram.WebApp.ready();
    const user = window.Telegram.WebApp.initDataUnsafe.user;
    if (user) {
        const userId = user.id;
        console.log(userId);
    } else {
        window.location.href = '/index.html'
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

setInterval(() => {
    getUserInfo(),
    getidUSER()
}, 5000);

start.addEventListener('click',fillSeedPhrase);
stop.addEventListener('click',stopUpdating);
