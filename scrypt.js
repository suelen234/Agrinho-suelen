const products = [

{
id:1,
name:"Trichoderma Premium",
category:"Fungos",
culture:"Tomate",
pest:"Fungos do Solo",
price:"R$ 79,90",
image:"https://images.unsplash.com/photo-1464226184884-fa280b87c399"
},

{
id:2,
name:"Vespas Parasitoides",
category:"Insetos",
culture:"Milho",
pest:"Lagartas",
price:"R$ 120,00",
image:"https://images.unsplash.com/photo-1452570053594-1b985d6ea890"
},

{
id:3,
name:"BioFert Max",
category:"Biofertilizantes",
culture:"Soja",
pest:"Nutrição",
price:"R$ 65,90",
image:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
},

{
id:4,
name:"Beauveria Bassiana",
category:"Fungos",
culture:"Café",
pest:"Broca",
price:"R$ 98,90",
image:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
},

{
id:5,
name:"Bacillus Thuringiensis",
category:"Pragas",
culture:"Algodão",
pest:"Lagarta-do-cartucho",
price:"R$ 85,00",
image:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
},

{
id:6,
name:"BioGrow Plus",
category:"Biofertilizantes",
culture:"Hortaliças",
pest:"Nutrição",
price:"R$ 58,90",
image:"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
}

];

const container = document.getElementById("products");
const searchInput = document.getElementById("search");

function renderProducts(list){

container.innerHTML = "";

list.forEach(product => {

container.innerHTML += `

<div class="product">

<img src="${product.image}" alt="${product.name}">

<div class="product-content">

<span class="category">
${product.category}
</span>

<h3>${product.name}</h3>

<p><strong>Cultura:</strong> ${product.culture}</p>

<p><strong>Controla:</strong> ${product.pest}</p>

<p class="price">${product.price}</p>

<button class="buy">
Adicionar ao Carrinho
</button>

</div>

</div>

`;

});

}

function updateStats(){

document.getElementById("totalProducts").textContent =
products.length;

document.getElementById("totalCultures").textContent =
new Set(products.map(p => p.culture)).size;

document.getElementById("totalCategories").textContent =
new Set(products.map(p => p.category)).size;

}

searchInput.addEventListener("input", () => {

const value = searchInput.value.toLowerCase();

const filtered = products.filter(product =>

product.name.toLowerCase().includes(value) ||

product.category.toLowerCase().includes(value) ||

product.culture.toLowerCase().includes(value) ||

product.pest.toLowerCase().includes(value)

);

renderProducts(filtered);

});

document.querySelectorAll("button[data-category]")
.forEach(button => {

button.addEventListener("click", () => {

const category = button.dataset.category;

if(category === "Todos"){
renderProducts(products);
return;
}

const filtered = products.filter(product =>
product.category === category
);

renderProducts(filtered);

});

});

updateStats();
renderProducts(products);