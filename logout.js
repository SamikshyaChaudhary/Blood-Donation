
// ===========================
// Logout Modal
// ===========================

document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.getElementById("logoutBtn");
    const logoutModal = document.getElementById("logoutModal");
    const cancelLogout = document.getElementById("cancelLogout");
    const confirmLogout = document.getElementById("confirmLogout");

    function clearSessionAndRedirect() {
        localStorage.removeItem("loggedInUser");
        sessionStorage.clear();
        window.location.href = "login.html";
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault();

            if (logoutModal) {
                logoutModal.classList.add("show");
            } else {
                clearSessionAndRedirect();
            }
        });
    }

    if (cancelLogout && logoutModal) {
        cancelLogout.addEventListener("click", function () {
            logoutModal.classList.remove("show");
        });
    }

    if (logoutModal) {
        window.addEventListener("click", function (e) {
            if (e.target === logoutModal) {
                logoutModal.classList.remove("show");
            }
        });
    }

    if (confirmLogout) {
        confirmLogout.addEventListener("click", function () {
            clearSessionAndRedirect();
        });
    }
});
