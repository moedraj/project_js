function showForm() {
    const form = document.getElementById("contactForm");
    form.style.display = "block";
}


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    console.name = document.getElementById("name").value;
    console.email = document.getElementById("email").value;
    console.phone = document.getElementById("phone").value;
    console.atsape_num = document.getElementById("subject").value;
    console.message = document.getElementById("message").value;
    console.message = document.getElementById("address").value;


    // Validate inputs here if needed

    document.getElementById("contactForm").style.display = "none";
    document.getElementById("thankYouMsg").style.display = "block";
    document.getElementById("contactForm").reset();
});