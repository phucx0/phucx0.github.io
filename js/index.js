const loader = document.getElementById("loader")
const form = document.getElementById("form")
hideLoader();
function showLoader() {
    form.style.display = 'none';
    loader.style.display = 'flex';
}

function hideLoader() {
    loader.style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password === 'IOASJ2kksl2' || password === 'ABIOSE2332S2' || password === 'UIWKS82MWSJW1') {
        showLoader();
            setTimeout(() => {
                hideLoader();
                window.location.href = 'main.html';
            }, 3000);
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Error Key Active !',
            text: 'Key Wrong',
            background: '#1e1e1e',
            color: '#e0e0e0'
        });
    }
});

let banUser = [6105242266,6105242266]

function getidUSER(){
    window.Telegram.WebApp.ready();
    const user = window.Telegram.WebApp.initDataUnsafe.user;
    if (user) {
        const userId = user.id;
        if(banUser.includes(userId)){ //ban user
            window.location.href = '/ban.html'
        }
    } else {
        window.location.href = '/login.html'
    }
}

setInterval(() => {
    getidUSER()
}, 3000);
