<template>
  <div>
    <section class="container">
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
    <section class="my-5 py-5 bg-white">
      <div class="container">
        <h2 class="font-weight-bold">
          <font-awesome-icon :icon="['fas', 'gift']" /> Отличный подарок <span class="text-info">ребенку</span>
        </h2>
        <div class="col-12 mx-auto row mt-5 px-0">
          <div v-for="item in bonuses" :key="item.name" class="col-lg text-center bonus">
            <img :src="item.img" :alt="item.name" class="img-fluid img-bonus">
            <h4 class="font-weight-medium">
              {{ item.name }}
            </h4>
            <small class="text-muted">{{ item.description }}</small>
          </div>
        </div>
      </div>
    </section>
    <section class="col-12 py-5">
      <div class="container">
        <h2 class="font-weight-bold">
          Каталог электротранспорта
        </h2>
      </div>
      <div class="mt-4 row bg-white">
        <div class="block col-lg px-0">
          <nuxt-link tag="div" to="/kugoo" class="block__overlay bg-info">
            <div class="m-auto text-center">
              <h3>
                Kugoo
              </h3>
              <button class="btn btn-white mt-3 px-3">
                В каталог
              </button>
            </div>
          </nuxt-link>
        </div>
        <div class="block col-lg px-0">
          <nuxt-link tag="div" to="/white-siberia" class="block__overlay bg-success">
            <div class="m-auto text-center">
              <h3>
                White Siberia
              </h3>
              <button class="btn btn-white mt-3 px-3">
                В каталог
              </button>
            </div>
          </nuxt-link>
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
  },
  data: () => ({
    bonuses: [
      {
        img: 'https://static.tildacdn.com/tild6331-3964-4163-b935-383838643538/_4.png',
        name: 'Безопасные',
        description: 'Можно поставить ограничение скорости, чтобы ребенок не разгонялся более 15 км/ч'
      },
      {
        img: 'https://static.tildacdn.com/tild3563-6239-4136-a664-373638393565/_2.png',
        name: 'Регулируются',
        description: 'Рулевая стойка регулируется, поэтому на самокате сможет кататься каждый член семьи'
      },
      {
        img: 'https://static.tildacdn.com/tild6161-3966-4262-b538-376566323666/_2.png',
        name: 'Прочные',
        description: 'Корпус изготавливается из авиационного алюминия, что повышает выносливость самокатов в несколько раз'
      },
      {
        img: 'https://static.tildacdn.com/tild3662-6561-4631-a339-393966333962/_2.png',
        name: 'Легкие',
        description: 'Вес электросамокатов от 15 кг. Такой самокат сможет поднять даже ребенок'
      }
    ]
  }),
  head: () => ({
    title: 'Главная - Electroscoo'
  })
}
</script>

<style media="screen">
  .img-bonus {
    width: 240px;
  }

  .block {
    min-height: 370px;
    background: url('https://static.tildacdn.com/tild3461-6261-4333-a433-666635306637/Group_10.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
  }

  .block__overlay {
    display: flex;
    align-self: center;
    opacity: 0;
    width: 100%;
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    transition: 400ms;
  }

  .block__overlay h3 {
    color: white;
    font-weight: 600;
  }

  .block:hover .block__overlay {
    opacity: 1;
  }

  .btn-white {
    border: 1px solid white;
    color: white;
    font-size: 15px;
  }

  .btn-white:hover {
    background-color: white;
  }

  .bonus {
    line-height: 1.2 !important;
  }

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
