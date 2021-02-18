import ProductApi from "../api/ProductApi.js";
import Header from '../components/header.js';
import footer from '../components/footer.js';
import { parseRequestUrl } from "../intils";
class ProductsPage {
  async render() {
        const {id} = parseRequestUrl();
        const {data:products} = await ProductApi.get(id);


        return `

        ${Header.render()}
        <div class="grid grid-cols-2">
            <div class="col-xl-6 ">
                <img class="mx-14 my-16 transition delay-750 duration-700 ease-in-out transform hover:scale-110" src="${products.image}" />
            </div>
            <div class="col-xl-6">
                <h2 class="name-products-detail text-5xl text-gray-700 mt-16 ml-14"> ${products.name}</h2>
                <h2 class="price text-xl mt-12 text-3xl ml-14"> $${products.price}</h2>
                <span class="description w-9/12 pl-14 pt-4"> ${products.description}</span>
            
              <form class = "flex h-8 mt-8" action="">
                <strong class="pl-14 leading-8">Quantity: </strong>
                    <input class="border border-gray-500 border-opacity-50 focus:ring-1 h-8 mx-4 outline-none px-2 rounded transition w-1/12"  type="number" min="1"  value="1" />
                    <button type="submit" class="bg-black bg-opacity-75 border h-8 px-3 rounded text-sm text-white">
                    Add to cart
                    </button>
          </form>
          <strong class="pl-14 leading-8 block mt-7">Categories: </strong> 
          <img class="ml-4 mt-5" src="../../image/sosio.png" />
            </div>
            
        </div>
        ${footer.render()}
            
        `
  }
};
export default ProductsPage;
