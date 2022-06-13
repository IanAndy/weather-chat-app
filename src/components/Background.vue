<template>
  <div class="h-full md:h-screen p-4 md:p-0 bg-black bg-no-repeat bg-cover bg-[url('./assets/Background.png')] flex flex-col justify-center items-center">
    <div class="w-[90%] sm:w-[70%] md:w-[600px] backdrop-blur-sm bg-white/20 py-4 px-5 rounded-[1.875rem] text-center">
      <Weather/>
      <WeatherStatus/>
    </div>
  </div>
</template>

<script>
import Weather from './Weather.vue'
import WeatherStatus from './WeatherStatus.vue'
export default {
  name: 'Background',
  components: {
    Weather,
    WeatherStatus
 }
}
</script>


