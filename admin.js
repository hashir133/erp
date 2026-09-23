const PHOTO_STORAGE_KEY = "campus-dashboard-photo";
const DEFAULT_DASHBOARD_IMAGE = "images/dashboard.png";
const MAX_PHOTO_SIZE = 8 * 1024 * 1024;

const dashboardPhotoInput = document.getElementById("dashboardPhotoInput");
const deletePhotoButton = document.getElementById("deletePhotoButton");
const adminPhotoPreview = document.getElementById("adminPhotoPreview");
const adminPhotoStatus = document.getElementById("adminPhotoStatus");
const adminMessage = document.getElementById("adminMessage");

function showAdminMessage(message, isError = false) {
    adminMessage.textContent = message;
    adminMessage.classList.toggle("is-error", isError);
}

const savedPhoto = localStorage.getItem(PHOTO_STORAGE_KEY);

if (savedPhoto) {
    adminPhotoPreview.src = savedPhoto;
    adminPhotoStatus.textContent = "Uploaded dashboard photo is active.";
}

dashboardPhotoInput.addEventListener("change", function () {
    const selectedPhoto = dashboardPhotoInput.files[0];

    if (!selectedPhoto) {
        return;
    }

    if (!selectedPhoto.type.startsWith("image/")) {
        showAdminMessage("Please choose an image file.", true);
        dashboardPhotoInput.value = "";
        return;
    }

    if (selectedPhoto.size > MAX_PHOTO_SIZE) {
        showAdminMessage("Photo must be smaller than 8 MB.", true);
        dashboardPhotoInput.value = "";
        return;
    }

    const reader = new FileReader();

    reader.addEventListener("load", function () {
        localStorage.setItem(PHOTO_STORAGE_KEY, reader.result);
        adminPhotoPreview.src = reader.result;
        adminPhotoStatus.textContent = "Uploaded dashboard photo is active.";
        showAdminMessage("Photo uploaded successfully.");
        dashboardPhotoInput.value = "";
    });

    reader.readAsDataURL(selectedPhoto);
});

deletePhotoButton.addEventListener("click", function () {
    localStorage.removeItem(PHOTO_STORAGE_KEY);
    adminPhotoPreview.src = DEFAULT_DASHBOARD_IMAGE;
    adminPhotoStatus.textContent = "Default dashboard photo is active.";
    showAdminMessage("Uploaded photo deleted.");
});