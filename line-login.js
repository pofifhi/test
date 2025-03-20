document.getElementById('loginLine').addEventListener('click', function() {
    liff.init({ liffId: "2007079496-rpM1kmgx" }) 
        .then(() => {
            if (!liff.isLoggedIn()) {
                liff.login();
            } else {
                getUserProfile();
            }
        })
        .catch(err => console.error("LIFF Init Error: ", err));
});

function getUserProfile() {
    liff.getProfile()
        .then(profile => {
            alert("Xin chào, " + profile.displayName);
        })
        .catch(err => console.error("Lỗi lấy thông tin user: ", err));
}
