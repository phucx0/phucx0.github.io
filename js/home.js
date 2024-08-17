document.getElementById('tiktok').addEventListener('click',()=>{
    window.location.href ="https://www.tiktok.com/@check.coin"
})
document.getElementById('youtube').addEventListener('click',()=>{
    window.location.href ="https://www.youtube.com/@checkcoinsoftware"
})
document.getElementById('telegram').addEventListener('click',()=>{
    window.location.href ="https://t.me/checkcoin"
})
document.getElementById('support').addEventListener('click',()=>{
    window.location.href ="https://t.me/kevin2qq"
})
document.getElementById('buy-now').addEventListener('click',()=>{
    window.location.href ="https://t.me/kevin2qq"
})

document.getElementById('buy-1').addEventListener('click',()=>{
    window.location.href ="https://t.me/kevin2qq"
})
document.getElementById('buy-2').addEventListener('click',()=>{
    window.location.href ="https://t.me/kevin2qq"
})


document.getElementById('lean-more-pc').addEventListener('click',()=>{
    document.querySelector('.body').style.opacity = "0.1";
    document.getElementById('pc').style.display = "flex";
})

document.getElementById('back-1').addEventListener('click',()=>{
    document.getElementById('pc').style.display = "none";
    document.querySelector('.body').style.opacity = "1";
})

document.getElementById('lean-more-phone').addEventListener('click',()=>{
    document.querySelector('.body').style.opacity = "0.1";
    document.getElementById('phone').style.display = "flex";
})

document.getElementById('back-2').addEventListener('click',()=>{
    document.getElementById('phone').style.display = "none";
    document.querySelector('.body').style.opacity = "1";
})
