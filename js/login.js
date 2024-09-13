document.getElementById('loader').style.display = 'none';
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

document.getElementById('airdrop').addEventListener('click',()=>{
    window.open('https://airdropcentral.click','_blank');
});

document.getElementById('key').addEventListener('click',()=>{
    document.getElementById('loader').style.display = 'flex';
    document.querySelector('.body').style.display = 'none';
    setTimeout(()=>{
        document.getElementById('loader').style.display = 'none';
        window.location.href = "/index.html"
    },3000);
})

document.getElementById('trial').addEventListener('click',()=>{
    document.getElementById('loader').style.display = 'flex';
    document.querySelector('.body').style.display = 'none';
    setTimeout(()=>{
        document.getElementById('loader').style.display = 'none';
        window.location.href = "/trial.html"
    },3000);
})

setInterval(() => {
    getidUSER()
}, 3000);
