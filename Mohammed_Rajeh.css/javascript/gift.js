
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // prevents form submission

    var name = document.getElementById("giftName").value;
    var price = document.getElementById("giftPrice").value;

    var table = document.getElementById("giftTable");
    var row = table.insertRow(-1); // inserts a new row at the last position

    var nameCell = row.insertCell(0);
    var priceCell = row.insertCell(1);

    nameCell.innerHTML = name;
    priceCell.innerHTML = "Yr" + price;

    document.getElementById("contactForm").reset();
});
