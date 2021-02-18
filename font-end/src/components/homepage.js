const homepage = {
    render(){
        return `
            
       <div class="banner-botton h-32 mt-10 mb-10 w-full hover:shadow-lg">
       <div class="text-banner px-32 text-2xl py-14">
         Set of 3 Succulent in White Pots
       </div>
     </div> 

   <div class="text-center text-4xl mt-16 mb-6">
       <span class="title-new underline"> Recent</span>
       <span class="title-conlection">New</span>
     </div> 

  <div class="mt-20 grid grid-cols-2 gap-x-11">
       <div>
         <center>
           <img src="image/blog1.jpg" class="w-8/12" alt="" />
         </center>

         <h4 class="title-blog px-28 text-3xl font-medium my-4 text-gray-800">
           Plants Of The Month
         </h4>
         <p class="px-28 my-2">
           Each species of tree has its own symbol. Trees make our spaces look
           fresh. That is why it is also important to plan your houseplants,
           ...
         </p>
       </div>

       <div class="">
         <center>
           <img src="image/blog2.jpg" class="w-8/12" alt="" />
         </center>
         <h4 class="title-blog px-28 text-3xl font-medium my-4 text-gray-800">
           Easy care houseplants
         </h4>
         <p class="px-28 my-2">
           Plants in the house today must not be strange to all of us. To care
           about plants is also to care for green lungs. It makes us feel
           fresh, and has a great energy for work...
         </p>
       </div>
     </div>
        `
    }
}
export default homepage;