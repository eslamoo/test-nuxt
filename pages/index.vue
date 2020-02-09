<template>
  <div class="container">
    <GptAd
      id="9254301"
      :size="[300, 250]"
      :size-mapping="[
        [
          [1024, 768],
          [970, 250]
        ],
        [
          [980, 690],
          [728, 90]
        ],
        [
          [640, 480],
          [120, 60]
        ],
        [
          [0, 0],
          [88, 31]
        ]
      ]"
      ad-unit="V2_Masrawy_Desktop/Masrawy_Desktop_Homepage/Masrawy_Desktop_Homepage_SC1"
    />

    <div v-if="$isAMP">
      <p>AMP</p>
    </div>
    <div v-else>
      <p>non-AMP</p>
    </div>
  </div>
</template>

<script>
export default {
  amp: 'hybrid',
  ampLayout: 'default.amp'
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
