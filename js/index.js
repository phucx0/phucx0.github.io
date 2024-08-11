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
    else if(password === 'checkcointrial'){
        showLoader();
        setTimeout(() => {
            hideLoader();
            window.location.href = 'trial.html';
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


let attempts = 0;
const maxAttempts = 5;

function getidUSER(){
    window.Telegram.WebApp.ready();

    // Lấy thông tin người dùng
    const user = window.Telegram.WebApp.initDataUnsafe.user;

    if (user) {
        const userId = user.id;
        console.log(userId);
    } else {
        console.log("null");
    }
}

setInterval(() => {
    getidUSER()
}, 5000);
