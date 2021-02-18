const Header = {
    render(){
        return `<!-- start header -->
      <header>
        <div class="header-top grid grid-cols-2 bg-gray-800 h-11 leading-10">
          <span class="text-white mx-5"> Welcome to BeGreen </span>
          <span class="text-white">
            69 North Cleveland, Memphis &emsp;&emsp; + 46 234-623-213
            &emsp;&emsp; Mon - Fri: 9.00am - 8.00pm
          </span>
        </div>

        <div class="header-main grid grid-cols-2 my-3 ">
          <img src="image/logo.png" alt="" class="mx-11" />
          <div class="mx-26 my-3 flex justify-center">
            <form class = "flex h-8" action="">
              <input class="border border-gray-500 border-opacity-50 focus:ring-1 h-8 mx-4 outline-none px-2 rounded transition w-64"  type="text" placeholder="Search...." />
              <button type="submit" class="bg-black bg-opacity-75 border h-8 px-3 rounded text-sm text-white">
                Tìm Kiếm
              </button> <span class="text-2xl text-black pl-5" >  <i class="fas fa-cart-arrow-down"></i> </span>
            </form>
          
          </div>
        </div>

        <div class="header-button h-16 bg-gray-800">
          <ul class="flex justify-center">
            <li class="pr-14 text-white leading-10 py-2 font-bold">
              <a href="/">HOME</a>
            </li>
            <li class="pr-14 text-white leading-10 py-2 font-bold">
              <a href="/#/Products">PRODUCTS</a>
            </li>
            <li class="pr-14 text-white leading-10 py-2 font-bold">
              <a href="/#/about">ABOUTS</a>
            </li>
            <li class="pr-14 text-white leading-10 py-2 font-bold">
              <a href="/#/contact">CONTACT</a>
            </li>
            <li class="pr-14 text-white leading-10 py-2 font-bold">
            <a href="/#/blog">BLOG</a>
            </li>
          </ul>
        </div>

        <div class="banner mb-10 w-full mt-10 h-96 bg-cover">
         
        </div>
        
      </header>
      <!-- end header -->`
    }
}

export default Header;