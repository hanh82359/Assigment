const contact = {
    render(){
        return `
        <div class="contact  h-96 ">
        <div class="font-bold px-12 pt-40  pb-5 text-3xl text-white"> Contact Us</div> 
         <div class="text-white text-xl"><a class=" font-bold  pl-12 text-white text-xl text-banner" href="/"> Home </a> /Contact Us</div>
       </div>
   
       <div class="grid grid-cols-12 h-96">
         <div class="col-span-4">
           <h2 class="font-black m-6 text-3xl text-center text-gray-700 title-contact">Support</h2>
           <div class="grid grid-cols-2 mt-14">
             <div>
               <img class="rounded-full w-2/6 ml-16" src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/109545255_2364783380484200_1832055125375436512_n.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_ohc=MHD8Q8nuuHQAX87ERXR&_nc_ht=scontent.fhan2-6.fna&oh=93baf38069a02ed0d77af0a3d2b9f280&oe=6037F2E6" alt="people">
             </div>
             <div>
               <span class="block uppercase text-xl font-black leading-10">Hoàng Vân Anh</span>
               <span class="block  leading-8"> Support Manager</span>
               <span class="block  leading-8"> <i class="fab fa-skype text-blue-600 text-xl"></i>   Nobita</span>
             </div>
           </div>
         </div>
         <div class="col-span-4 ">
           <h2 class="font-black m-6 text-3xl text-center text-gray-700 title-contact ">Socials</h2>
       
           <ul class="grid grid-cols-4  text-center ml-20 mt-16">
             <li class="bg-black rounded-full w-1/4 text-white ">y</li>
             <li class="bg-black rounded-full w-1/4 text-white">f</li>
             <li class="bg-black rounded-full w-1/4 text-white">s</li>
             <li class="bg-black rounded-full w-1/4 text-white">i</li>
           </ul>
      
         </div>
         <div class="col-span-4">
           <div class="grid gird-rows-4">
             <div class="m-6">
               <h2 class="title-contact font-black text-3xl text-gray-700">Contact Infor</h2>
             </div>
             <div class="mx-6 my-4">
               <h2 class="font-bold mt-6">Address</h2>
               <div>69 North Cleveland Street, Memphis,USA.</div>
             </div>
             <div class="mx-6 my-4">
               <h2 class="font-bold">Call Us</h2>
               <div>0989443256</div>
             </div>
             <div class="mx-6 my-4">
               <h2 class="font-bold">Email Us</h2>
               <div>Anhhvph12352@gmail.com</div>
             </div>
           </div>
         </div>
       </div>
       <div>
         <div class="about text-center  font-black text-4xl">
           Get<span class="pl-4 about-color">In Touch</span> 
         </div> 
         <span class="text-center block px-16 mt-5 py-4">
           We source all indoor plants and planters from our trusted network of
           growers, artisans, designers, and manufacturers to meet the unique needs
           of your business. Schedule your complimentary on-site Plant Design
           Consultation by completing the form.
         </span>
       </div>
       <div class="py-8">
         <img src="image/banner-about.png"  alt="">
       </div>
   
      <footer class="bg-gray-700 flex justify-center">
        <div class="h-52 ">
         <img class="object-cover mt-5" src="http://demo.yolotheme.com/begreen/wp-content/uploads/2016/07/logo1.png" alt="">
         <div class="text-center text-white mt-5">
           Website &#169; Create 2020 Copyright
           </div>
       </div>
      
        
      </footer>
        `
    }
}
export default contact;