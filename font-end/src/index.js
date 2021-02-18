import HomePage from "./pages/homePage.js";
import ProductPage from "./pages/productPage.js";
import ProductPageDetail from "./pages/productDetailPage.js";
import Admin from "./pages/admin.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Blog from "./pages/blog.js";
import { parseRequestUrl } from './intils.js';

// khoi taoj ddoois tuong
const homePage = new HomePage();
const productPage = new ProductPage();
const productDetailPage = new ProductPageDetail();
const admin = new Admin();
const about = new About();
const contact = new Contact();
const blog = new Blog();
const $ = (selector) => {
  let elements = document.querySelectorAll(selector);
  return elements.length == 1 ? elements[0] : [...elements];
};



const routes = {
  "/blog":blog,
  "/contact":contact,
  "/admin" : admin,
  "/about" : about,
  "/": homePage,
  "/products": productPage,
  "/products/:id": productDetailPage,
  // hết, admin thì đc
};


const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "");
 
  const page = routes[parseUrl] ? routes[parseUrl] : `<h1> Lỗi rồi hahaha</>`;

  const main = $(".main-content");
  main.innerHTML = await page.render();
};
window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);

