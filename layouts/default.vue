<template>
  <div>
    <nav-bar />
    <Nuxt
      class="prose lg:max-w-2xl mx-auto px-7 sm:max-w-lg md:max-w-lg font-body text-base text-justify"
    />
    <footer-bar />
  </div>
</template>

<style>
.prose h1 {
  margin-top: 1em;

  padding-top: 0.5em;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
}
.prose h3 {
  margin-top: 1em;
  font-size: 18px;

  text-align: center;
}
.prose h2 {
  margin-top: 1em;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
}
.prose a {
  color: #2f41b7;
  text-decoration: none;
  font-weight: 600;
}
.prose span {
  color: #2f41b7;
  font-weight: 700;
}
</style>
