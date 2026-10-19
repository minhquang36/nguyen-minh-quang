
const products = [
    {
        name: "Nước ép cam",
        price: 25000,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500"
    },
    {
        name: "Nước ép dưa hấu",
        price: 30000,
        image: "https://win-rd.com/wp-content/uploads/2021/06/watermelon-juice-recipe-1200x676-1.jpg"
    },
    {
        name: "Nước ép dứa",
        price: 28000,
        image: "https://tse2.mm.bing.net/th/id/OIP.rQ4aYIwd-jGofiu7vKJr6gHaFO?r=0&pid=Api&h=220&P=0"
    },
    
    {
        name: "Nước rau má",
        price: 36000,
        image: "https://truejuice.vn/articles/wp-content/uploads/2021/04/nuoc-ep-rau-ma-tot-cho-tim-mach-1024x683.jpg"
    },
    {
        name: "Nước rau má mix sữa",
        price: 40000,
        image: "https://herbario.vn/data/upload_file/Image/nhan-thang4/rau-ma-sua-dua.jpg"
    },
    {
        name: "Nước rau má mix cà rốt",
        price: 39000,
        image: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/174417/Originals/rau-ma-mix-voi-gi-tot-hinh-6.jpg"
    }

];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
    document.getElementById("product-list").innerHTML =
        products.map((p, i) => `
            <div class="product">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="price">${p.price.toLocaleString("vi-VN")}đ</p>
                <button onclick="addToCart(${i})">
                    Thêm vào giỏ
                </button>
            </div>
        `).join("");
}

function addToCart(index) {
    const item = cart.find(p => p.name === products[index].name);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ ...products[index], quantity: 1 });
    }

    saveCart();
    alert("Đã thêm sản phẩm vào giỏ hàng!");
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("count").textContent =
        cart.reduce((sum, p) => sum + p.quantity, 0);
}

function showCart() {
    if (cart.length === 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }

    const details = cart.map(p =>
        `${p.name} x ${p.quantity}: ${(p.price * p.quantity).toLocaleString("vi-VN")}đ`
    ).join("\n");

    const total = cart.reduce(
        (sum, p) => sum + p.price * p.quantity, 0
    );

    alert(details + "\n\nTổng tiền: " + total.toLocaleString("vi-VN") + "đ");
}

renderProducts();
saveCart();
