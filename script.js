document.addEventListener("DOMContentLoaded", function () {
    // LocalStorage'dan saqlangan ma'lumotlarni yuklash
    let savedName = localStorage.getItem("fullName");
    let savedPhone = localStorage.getItem("phoneNumber");

    if (savedName) {
        document.getElementById("name-display").innerText = savedName;
    }
    if (savedPhone) {
        document.getElementById("phone-display").innerText = savedPhone;
    }
});

function openModal() {
    document.getElementById("modal").style.display = "block";

    // Modal ichiga oldingi qiymatlarni qo‘yish
    document.getElementById("first-name").value = localStorage.getItem("firstName") || "";
    document.getElementById("last-name").value = localStorage.getItem("lastName") || "";
    document.getElementById("phone-number").value = localStorage.getItem("phoneNumber") || "";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function saveChanges() {
    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    let phone = document.getElementById("phone-number").value.trim();

    if (firstName && lastName && phone) {
        let fullName = firstName + " " + lastName;

        // Ma’lumotlarni saqlash
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("fullName", fullName);
        localStorage.setItem("phoneNumber", phone);

        // Ekrandagi matnlarni yangilash
        document.getElementById("name-display").innerText = fullName;
        document.getElementById("phone-display").innerText = phone;

        closeModal();
    } else {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
    }
}
