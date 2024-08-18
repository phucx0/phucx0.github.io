document.getElementById('tiktok').addEventListener('click',()=>{
    window.open('https://www.tiktok.com/@check.coin', '_blank');
})
document.getElementById('youtube').addEventListener('click',()=>{
    window.open('https://www.youtube.com/@checkcoinsoftware', '_blank');
})
document.getElementById('telegram').addEventListener('click',()=>{
    window.open('https://t.me/checkcoin', '_blank');
})
document.getElementById('support').addEventListener('click',()=>{
    window.open('https://t.me/checkcoin', '_blank');
})
document.getElementById('community').addEventListener('click',()=>{
    window.open('https://t.me/checkcoin', '_blank');
})
document.getElementById('contract-us').addEventListener('click',()=>{
    window.open('https://t.me/checkcoin', '_blank');
})
document.getElementById('buy-now').addEventListener('click',()=>{
    document.getElementById('all-card').scrollIntoView({
        behavior: 'smooth'
    });
})

document.getElementById('how-it-works').addEventListener('click',()=>{
    document.getElementById('video').scrollIntoView({
        behavior: 'smooth'
    });
})

document.addEventListener('DOMContentLoaded', () => {
    const names = [
        'Kevin', 'John', 'Alex', 'Lisa', 'Sara',
        '王伟', '李华', '진호', '민준', 'ユキ',
        'ハルト', 'Maria', 'José', 'Omar', 'Fatima',
        'Olga', 'Vladimir', 'アイシャ', 'アミール', 'Raj', 'Sunil'
    ];
    const messages = [
        'purchased 2 minutes ago', 'purchased 5 hours ago',
        'purchased 10 minutes ago', 'purchased 20 minutes ago',
        'purchased 30 minutes ago', 'purchased 15 minutes ago',
        'purchased 25 minutes ago', 'purchased 8 hours ago',
        'purchased 18 minutes ago', 'purchased 12 minutes ago',
        'purchased 22 minutes ago', 'purchased 3 hours ago',
        'purchased 7 hours ago', 'purchased 14 minutes ago',
        'purchased 19 minutes ago', 'purchased 9 minutes ago',
        'purchased 17 minutes ago', 'purchased 11 hours ago',
        'purchased 13 hours ago', 'purchased 21 minutes ago',
        'purchased 26 minutes ago'
    ];
    const scriptLine = document.getElementById('script-line');
    scriptLine.innerHTML = ''; // Xóa nội dung hiện tại

    for (let i = 0; i < 20; i++) {
        const name = names[Math.floor(Math.random() * names.length)];
        const message = messages[Math.floor(Math.random() * messages.length)];
        const span = document.createElement('span');
        span.textContent = `${name} ${message}`;
        scriptLine.appendChild(span);
    }
});



const ids = ['buy-btc', 'buy-eth','buy-bnb', 'buy-multichain', 'buy-super-multichain'];
ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', () => {
            window.open('https://t.me/kevin2qq', '_blank');
        });
    }
});

// Bitcoin chain
document.getElementById('more-btc').addEventListener('click', () => {
    document.querySelector('.body').style.opacity = "0.1";
    const popUp = document.createElement('div');
    popUp.className = 'notification-pop-up';
    popUp.id = 'pc';
    popUp.innerHTML = `
        <div class="container">
            <div class="line">
                    <button id="back">
                        Back
                    </button>
            </div>
            <div class="name-info">
                CheckCoin Software on PC
            </div>
            <div class="main-info-pop-up">
                <span>&#10687; Support for use on Windows.</span>
                <span>&#10687; Token : BTC</span>
                <span>&#10687; Use 24/7, always updated to the latest version.</span>
            </div>
        </div>
    `;
    // Append the pop-up to the body
    document.body.appendChild(popUp);
    // Optional: Add an event listener to close the pop-up when clicking the 'Back' button
    document.getElementById('back').addEventListener('click', () => {
        document.body.removeChild(popUp);
        document.querySelector('.body').style.opacity = "1";
    });
});

// Ethereum token
document.getElementById('more-eth').addEventListener('click', () => {
    document.querySelector('.body').style.opacity = "0.1";
    const popUp = document.createElement('div');
    popUp.className = 'notification-pop-up';
    popUp.id = 'pc';
    popUp.innerHTML = `
        <div class="container">
            <div class="line">
                    <button id="back">
                        Back
                    </button>
            </div>
            <div class="name-info">
                CheckCoin Software on PC
            </div>
            <div class="main-info-pop-up">
                <span>&#10687; Support for use on Windows.</span>
                <span>&#10687; Token : ETH</span>
                <span>&#10687; Use 24/7, always updated to the latest version.</span>
            </div>
        </div>
    `;
    // Append the pop-up to the body
    document.body.appendChild(popUp);
    // Optional: Add an event listener to close the pop-up when clicking the 'Back' button
    document.getElementById('back').addEventListener('click', () => {
        document.body.removeChild(popUp);
        document.querySelector('.body').style.opacity = "1";
    });
});
//BNB token
document.getElementById('more-bnb').addEventListener('click', () => {
    document.querySelector('.body').style.opacity = "0.1";
    const popUp = document.createElement('div');
    popUp.className = 'notification-pop-up';
    popUp.id = 'pc';
    popUp.innerHTML = `
        <div class="container">
            <div class="line">
                    <button id="back">
                        Back
                    </button>
            </div>
            <div class="name-info">
                CheckCoin Software on PC
            </div>
            <div class="main-info-pop-up">
                <span>&#10687; Support for use on Windows.</span>
                <span>&#10687; Token : BNB</span>
                <span>&#10687; Use 24/7, always updated to the latest version.</span>
            </div>
        </div>
    `;
    // Append the pop-up to the body
    document.body.appendChild(popUp);
    // Optional: Add an event listener to close the pop-up when clicking the 'Back' button
    document.getElementById('back').addEventListener('click', () => {
        document.body.removeChild(popUp);
        document.querySelector('.body').style.opacity = "1";
    });
});
//multichain
document.getElementById('more-multichain').addEventListener('click', () => {
    document.querySelector('.body').style.opacity = "0.1";
    const popUp = document.createElement('div');
    popUp.className = 'notification-pop-up';
    popUp.id = 'pc';
    popUp.innerHTML = `
        <div class="container">
            <div class="line">
                    <button id="back">
                        Back
                    </button>
            </div>
            <div class="name-info">
                CheckCoin Software on PC
            </div>
            <div class="main-info-pop-up">
                <span>&#10687; Support for use on Windows.</span>
                <span>&#10687; Token : BTC, ETH, BNB</span>
                <span>&#10687; Use 24/7, always updated to the latest version.</span>
            </div>
        </div>
    `;
    // Append the pop-up to the body
    document.body.appendChild(popUp);
    // Optional: Add an event listener to close the pop-up when clicking the 'Back' button
    document.getElementById('back').addEventListener('click', () => {
        document.body.removeChild(popUp);
        document.querySelector('.body').style.opacity = "1";
    });
});
//super-multichain
document.getElementById('more-super-multichain').addEventListener('click', () => {
    document.querySelector('.body').style.opacity = "0.1";
    const popUp = document.createElement('div');
    popUp.className = 'notification-pop-up';
    popUp.id = 'pc';
    popUp.innerHTML = `
        <div class="container">
            <div class="line">
                    <button id="back">
                        Back
                    </button>
            </div>
            <div class="name-info">
                CheckCoin Software on PC
            </div>
            <div class="main-info-pop-up">
                <span>&#10687; Support for use on Windows.</span>
                <span>&#10687; Token : BTC, ETH, BNB, TRX, ARB, LTC, SOL, USDT</span>
                <span>&#10687; Use 24/7, always updated to the latest version.</span>
            </div>
        </div>
    `;
    // Append the pop-up to the body
    document.body.appendChild(popUp);
    // Optional: Add an event listener to close the pop-up when clicking the 'Back' button
    document.getElementById('back').addEventListener('click', () => {
        document.body.removeChild(popUp);
        document.querySelector('.body').style.opacity = "1";
    });
});

document.getElementById('lean-more-phone').addEventListener('click',()=>{
    document.querySelector('.body').style.opacity = "0.1";
    document.getElementById('phone').style.display = "flex";
})

document.getElementById('back-2').addEventListener('click',()=>{
    document.getElementById('phone').style.display = "none";
    document.querySelector('.body').style.opacity = "1";
})
