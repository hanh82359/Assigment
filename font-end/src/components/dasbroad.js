const dasbroad = {
   render(){
       return /*html*/`
       <div class="w-full mx-0 h-screen" >
            <div class="header-main h-full w-full grid grid-cols-12 justify-between inset-0 ">
                <div class="bg-gray-800 col-span-3 ">
                    <img
                        class="px-28 py-6 "
                        src="http://demo.yolotheme.com/begreen/wp-content/uploads/2016/07/logo1.png"
                        alt="logo"
                    />
                <div class="text-white uppercase font-bold border-b-2 border-fuchsia-600 pl-8 pt-4 leading-8" >
                <a href="">   Categories </a>
                   
                 </div>
             <div class="text-white uppercase font-bold border-b-2 border-fuchsia-600 pl-8 pt-4 leading-8">
                Products
            </div>
          
           <div
           class="text-white uppercase font-bold border-b-2 border-fuchsia-600 pl-8 pt-4 leading-8"
         >
           logout
         </div>
         <div
         class="text-white uppercase font-bold border-b-2 border-fuchsia-600 pl-8 pt-4 leading-8"
       >
         User
       </div>
         </div>
         <div class="col-span-9">
           <img class="h-screen object-cover"
             src="http://demo.yolotheme.com/begreen/wp-content/uploads/2016/08/slider-h12.jpg"
             alt="bannerx"
           />
         </div>
       </div>
     </div>
       `
   }
}
export default dasbroad;