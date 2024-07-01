// Lista de produtos disponíveis
const products = [
    { id: 1, name: 'Vestido Vermelho Palmeira | Lança Caju', price: 270, image: '/src/imagens/roupas/vestido-vermelho.png',},
    { id: 2, name: 'Pantalona + Cropped Morcego | Lança Caju', price: 350, image: '/src/imagens/roupas/pantalona+cropped.png'},
    { id: 3, name: 'Macacão Azul Abacaxi | Lança Caju', price: 330, image: '/src/imagens/roupas/macacao-azul.png'},
    { id: 4, name: 'Macacão Flor de Caju', price: 230, image: '/src/imagens/roupas/macacao-flor-de-caju.png'},
    { id: 5, name: 'Macacão Curto Tropical Preto | Lança Caju', price: 249, image: '/src/imagens/roupas/macacao-tropical.png'},
    { id: 6, name: 'Macacão Curto Tropical Vermelho', price: 249, image: '/src/imagens/roupas/macacao-vermelho.png',},
    { id: 7, name: 'Pantalona + Blusa Palmeira | Lança Caju', price: 310, image: '/src/imagens/roupas/pantalona+blusa.png'},
    { id: 8, name: 'Saia com Fenda Memórias | Lança Caju', price: 179, image: '/src/imagens/roupas/saia-fenda.png'}
];

function addProductById(productId) {
    // Recuperar produto selecionado
    const selectedProduct = products.find(product => product.id === productId);

    // Recuperar produtos armazenados no localStorage
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Adicionar produto selecionado
    if (selectedProduct) {
        selectedProduct.price = parseFloat(selectedProduct.price);
        storedProducts.push(selectedProduct);
    }

    // Atualizar localStorage
    localStorage.setItem('products', JSON.stringify(storedProducts));
}

function removeProduct(index) {
    // Recuperar produtos armazenados no localStorage
    let products = JSON.parse(localStorage.getItem('products')) || [];

    // Remover produto do array
    products.splice(index, 1);

    // Atualizar localStorage
    localStorage.setItem('products', JSON.stringify(products));

    // Atualizar a página
    location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
    // Verificar se estamos na página de destino
    if (document.getElementById('comProduto')) {
        // Recuperar produtos armazenados no localStorage
        const products = JSON.parse(localStorage.getItem('products')) || [];

        // Selecionar o container onde as divs serão adicionadas
        const container = document.getElementById('comProduto');
        const emptyBagMessage = document.getElementById('semProduto');
        const productCount = document.getElementById('contProduto');
        const prodf = document.getElementById('prodf');
        const elementoTotal = document.getElementById('total')

        // Verificar se a sacola está vazia
        if (products.length === 0) {
            emptyBagMessage.style.display = 'block';
            container.style.display = 'none'
            productCount.style.display = 'none';
        } else {
            emptyBagMessage.style.display = 'none';
            container.style.display = 'block'
            productCount.style.display = 'block';
            productCount.textContent = `Quantidade de produtos: ${products.length}`;

            let soma = 0;

            // Adicionar cada produto ao container
            products.forEach((product, index) => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.dataset.index = index;

                productDiv.innerHTML = `
                <div class="cartao-sacola">
                    <div class="separar" >
                        <div>
                            <img src="${product.image.replace(/\\/g, '/')}" class="img">
                        </div>
                        <div>
                            <p class="infoprod">${product.name}</p>
                        </div>
                        <div class="quantidaD">
                            <select name="quant" id="quantidade" class="quant">
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div class="preco">
                            <p><strong>${Number(product.price).toFixed(2)}</strong></p>
                        </div>
                    </div>
                    <button class="remove-button" onclick="removeProduct(${index})">Remover</button>
                </div>
                `;

                prodf.appendChild(productDiv);

                console.log(`Produto: ${product.name}, Preço: ${product.price}`);

                const price = parseFloat(product.price);
                if (!isNaN(price)) {
                    soma += price
                } else {
                    console.error(`Preço inválido para o produto: ${product.name}`);
                }
            });

            elementoTotal.innerHTML = `Total: R$${soma.toFixed(2)}</span>`;
        }
    }
});