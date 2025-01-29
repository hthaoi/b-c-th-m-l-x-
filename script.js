// Hàm bốc thăm
function drawPrize() {
    const name = document.getElementById("name").value;
    
    if (name === "") {
        alert("Vui lòng nhập tên của bạn!");
        return;
    }

    // Tạo số ngẫu nhiên từ 25 đến 55
    const prize = Math.floor(Math.random() * (55 - 25 + 1)) + 25;

    // Hiển thị kết quả
    document.getElementById("result").innerHTML = `${name} đã bốc thăm và nhận được: <strong>${prize} đồng</strong>`;
}
