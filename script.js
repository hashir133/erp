/* =========================
   DEMO LOGIN DETAILS
   ========================= */

const DEMO_USERNAME = "SU92-BSAIM-F24-016";
const DEMO_PASSWORD = "12345678";


/* =========================
   ELEMENTS
   ========================= */

const form = document.getElementById("loginForm");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const loginScreen = document.querySelector(".login-screen");
const dashboard = document.getElementById("dashboard");
const dashboardImage = document.getElementById("dashboardImage");

const error = document.getElementById("error");

const PHOTO_STORAGE_KEY = "campus-dashboard-photo";

const resetPassword =
    document.getElementById("resetPassword");


/* Use the photo selected in the separate admin panel. */

const savedPhoto = localStorage.getItem(PHOTO_STORAGE_KEY);

if (savedPhoto && dashboardImage) {
    dashboardImage.src = savedPhoto;
}


/* =========================
   LOGIN
   ========================= */

form.addEventListener("submit", function (event) {

    /*
       This is a local demo.

       No username or password is
       sent to any server.
    */
    event.preventDefault();


    const username =
        usernameInput.value.trim();

    const password =
        passwordInput.value;


    /* Clear previous error */

    error.textContent = "";


    /* Check credentials */

    if (
        username === DEMO_USERNAME &&
        password === DEMO_PASSWORD
    ) {

        /* Hide login */

        loginScreen.classList.add("hidden");


        /* Show dashboard */

        dashboard.classList.remove("hidden");


        /* Go to top */

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });

        return;
    }


    /* Wrong credentials */

    error.textContent =
        "Incorrect login details.";
});


/* =========================
   RESET PASSWORD
   ========================= */

resetPassword.addEventListener(
    "click",
    function () {

        alert(
            "Password reset is not connected in this local demo."
        );
    }
);