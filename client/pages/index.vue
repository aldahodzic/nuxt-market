<template>
  <div class="">
    <section>
      <h1 class="title text-info font-weight-bold">
        Electroscoo
      </h1>
      <div class="min-vh-50">
        <client-only>
          <agile :autoplay="true" :autoplay-speed="5000" class="mt-4">
            <div v-for="n in 6" :key="n" :class="`slide--${n}`" class="slide min-vh-50">
              <h3>{{ n }}</h3>
            </div>
          </agile>
        </client-only>
      </div>
    </section>
    <section class="mt-5">
      <h2 class="font-weight-bold">
        Отличный подарок <span class="text-info">ребенку</span>
      </h2>
      <div class="col-12 mx-auto row mt-4">
        <div class="col">
          123
        </div>
        <div class="col">
          123
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  components: {
    agile: VueAgile
  }
}
</script>

<style media="screen">
  .agile__actions {
    margin-top: 20px;
  }

  .agile__nav-button {
    background: transparent;
    border: none;
    color: #ccc;
    cursor: pointer;
    font-size: 24px;
    transition: 0.3s;
  }

  .agile__nav-button:hover {
    color: #888;
  }

  .agile__dots {
    margin: 0;
  }

  .agile__dot {
    margin: 0 10px;
  }

  .agile__dot button {
    background-color: #eee;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: block;
    height: 10px;
    font-size: 0;
    line-height: 0;
    margin: 0;
    padding: 0;
    -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
    width: 10px;
  }

  .agile__dot--current button, .agile__dot:hover button {
    background-color: #888;
  }

  .slide {
    -webkit-box-align: center;
            align-items: center;
    color: #fff;
    display: -webkit-box;
    display: flex;
    height: 300px;
    -webkit-box-pack: center;
            justify-content: center;
  }

  .slide--1 {
    background-color: #f1c40f;
  }

  .slide--2 {
    background-color: #e67e22;
  }

  .slide--3 {
    background-color: #e74c3c;
  }

  .slide--4 {
    background-color: #9b59b6;
  }

  .slide--5 {
    background-color: #3498db;
  }

  .slide--6 {
    background-color: #2ecc71;
  }
</style>
