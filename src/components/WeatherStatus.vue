<template>
     <!-- degrees section -->
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-4 md:gap-y-0 border-b border-[#7A7878] pb-3" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="600">

       <div class="text-lg font-medium text-center">
           <p>20:00</p>
           <img src="../assets/emojione_crescent-moon.png" class="w-7 mx-auto" alt="">
           <p>18 <span>&#176;</span> C </p>
       </div>

       <div class="text-lg font-medium text-center">
           <p>21:00</p>
           <img src="../assets/emojione_crescent-moon.png" class="w-7 mx-auto" alt="">
           <p>17 <span>&#176;</span> C </p>
       </div>

       <div class="text-lg font-medium text-center">
           <p>22:00</p>
           <img src="../assets/emojione_crescent-moon.png" class="w-7 mx-auto" alt="">
           <p>16 <span>&#176;</span> C </p>
       </div>

       <div class="text-lg font-medium text-center">
           <p>23:00</p>
           <img src="../assets/emojione_crescent-moon.png" class="w-7 mx-auto" alt="">
           <p>15 <span>&#176;</span> C </p>
       </div>

       <div class="text-lg font-medium text-center">
           <p>00:00</p>
           <img src="../assets/emojione_crescent-moon.png" class="w-7 mx-auto" alt="">
           <p>14 <span>&#176;</span> C </p>
       </div>
    
    </div>
     <!-- degrees section -->

    <!-- details section -->
    <div class="text-left pb-5" data-aos="fade-right" data-aos-easing="ease" data-aos-delay="900">
       <h3 class="font-medium text-2xl">Details</h3>
       <div class="flex flex-row justify-between items-baseline px-4 gap-x-3">
          <div>
               <img src="../assets/bi_sunrise.png" class="w-7 mx-auto" alt="">
               <p>06:44</p>
          </div>
          <div class="relative">
              <div class="after:content-[''] after:absolute after:left-[0.8%] after:bg-[#6A6464] after:w-[98.1%] after:h-[1.5px] after:bottom-[1px]">
                  <img src="../assets/arc.png" class="" alt="">
              </div>
          </div>
          <div>
               <img src="../assets/bi_sunrise.png" class="w-7 mx-auto" alt="">
                <p>17:58</p>
          </div>
       </div>
    </div>
    <!-- details section -->

    <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 md:gap-y-0  px-8" data-aos="fade-left" data-aos-easing="ease" data-aos-delay="1100">

        <div class="font-medium text-center">
            <p class="text-2xl">18 <span>&#176;</span> C </p>
            <p class="text-base text-[#B7B7B7]">RealFeel</p>
        </div>

        <div class="font-medium text-center">
            <p class="text-xl">63%</p>
            <p class="text-base text-[#B7B7B7]">Humidity</p>
        </div>

        <div class="font-medium text-center">
            <p class="text-xl">3</p>
            <p class="text-base text-[#B7B7B7]">W, force</p>
        </div>

        <div class="font-medium text-center">
            <p class="text-xl">1012hPa</p>
            <p class="text-base text-[#B7B7B7]">Pressure</p>
        </div>
    
    </div>

</template>

<script>
export default {
  name: 'WeatherStatus',
}
</script>