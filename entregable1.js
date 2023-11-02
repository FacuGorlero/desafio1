class  ProductManager{
    constructor(){
        this.products = [];
        this.nextProductId = 1;
    }

getProducts(){
    return this.products;
}

addProduct(product) {
       
        if (this.products.some((p) => p.code === product.code)) {
            throw new Error("El código de producto ya está en uso.");
          }
      
          product.id = this.nextProductId;
    this.nextProductId++;
      
          this.products.push(product);
        }
        
          getProductById(id) {
            const product = this.products.find((p) => p.id === id);
            if (!product) {
              throw new Error("Producto no encontrado.");
            }
            return product;
          }
}


const productManager = new ProductManager();

try {
  productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  });

  
  const products = productManager.getProducts();
  console.log("Lista de productos:", products);

  productManager.addProduct({
    title: "producto repetido",
    description: "Este es un producto repetido",
    price: 300,
    thumbnail: "Otra imagen",
    code: "abc123",
    stock: 10,
  });

  
  const productById = productManager.getProductById(999);
  console.log("Producto con ID 999:", productById);
} catch (error) {
  console.error(error.message);
}
