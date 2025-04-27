<script setup></script>

<template>
  <div class="hero-container">
    <div class="grid"></div>
    <div class="grid-horizon"></div>
    <div class="scanlines"></div>
    <img
      class="hero-image"
      src="https://media.discordapp.net/attachments/1365755692321079316/1365922006054211645/vecteezy_abstract-element-neon-retro-style-80s-90s_34556611.png?ex=680f117f&is=680dbfff&hm=7b90e13a7bf6249f8b14735ee2ea7e5b503685ec7982b64df42fb624a347d518&=&format=webp&quality=lossless&width=819&height=819"
      alt=""
    />
    <div class="hero-content">
      <h1 class="hero-title">Bringing Tech Jobs Back to the 90s</h1>
      <div class="hero-description">
        No need to scour the web, search here to find reliable jobs from all over the internet!
      </div>
      <div class="search-bar-container">
        <div class="search-bar-input">
          <label for="location">Location</label>
          <input placeholder="Enter preferred location" type="text" name="location" />
        </div>
        <div class="search-bar-input">
          <label for="type">Type</label>
          <input placeholder="Enter kind of role you want" type="text" name="type" />
        </div>
        <button class="explore-now">Explore Now</button>
      </div>
      <div class="hero-extra">Popular Sarch: Software Developer, UX Designer, Marketer</div>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  height: 100vh;
}

.hero-image {
  width: 500px;
  position: absolute;
  right: 35%;
  top: 20%;
  transform: translate(50%, 0px);
}

.hero-content {
  max-width: 600px;
  position: relative;
  color: white;
  padding: 25vh 60px 15vh 60px;
}

.hero-title {
  line-height: 140%;
  color: #fc70fc;
  text-shadow: 0px 0px 35px #fc70fc;
}

.hero-description {
  margin-bottom: 20px;
}

.search-bar-container {
  background-color: rgba(43, 16, 85, 0.7);
  border-radius: 10px;
  border: 1px solid cyan;
  box-shadow: 0px 0px 15px cyan;
  color: white;
  display: flex;
  padding: 10px 15px;
  margin-bottom: 20px;
}

.search-bar-input {
  flex: 1;
}

.search-bar-input > label {
  font-weight: bold;
}

.search-bar-input > input {
  display: block;
  font-size: 16px;
  padding: 5px 0px;
  border: none;
  background-color: transparent;
  color: white;
}

.search-bar-input > input:focus {
  outline: none;
}

.explore-now {
  color: white;
  background-color: black;
  font-size: 12px;
  border: 1px solid #fc70fc;
  border-radius: 10px;
  padding: 5px 10px;
}

.explore-now:hover {
  box-shadow: 0px 0px 10px #fc70fc;
}
</style>
