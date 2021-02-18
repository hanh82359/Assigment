import ProductAPI from './../api/ProductApi.js'
import Header from '../components/header.js';
import footer from '../components/footer.js';
export default  class productPage {
    async render() {
       const {data :products} = await ProductAPI.getAll();
     
       const result =  products.map(e=>{
         return `
         <a href="#/products/${e.id}">
          <div class="mb-5 hover:shadow-lg" >
            <img src="${e.image}" alt="${e.name}" >
            <h2 class="name-products text-xl text-center mt-5">${e.name}</h2>
            <div class="price-products text-center mt-4 text-lg">$${e.price}</div> 
            
          </div>
        </a>
         `
       }).join("");

        return `
        ${Header.render()}
        <div class="text-center text-4xl mt-16 mb-16">
          <span class="title-new underline"> New</span>
          <span class="title-conlection">Collections</span>
       </div>

        <div class="grid grid-cols-4 gap-x-7">
        ${result}
        </div>

      <div class="text-center text-4xl mt-16 mb-16">
        <span class="title-new underline"> Product</span>
        <span class="title-conlection">Sale</span>
       </div>

       <div class="grid grid-cols-4 gap-x-7">
       ${result}
       </div>
        ${footer.render()}

        `
    }
};
