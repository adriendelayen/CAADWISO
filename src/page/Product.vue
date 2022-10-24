<template>
  <main>
    <div>
      <h1 class="titreProduit">Produit</h1>
      <div class="positionSwiper" >
        <swiper
          ref="mySwiper"
          @slideChange="onSlide"
          :navigation="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          class="mySwiper"
          :loop="true"
          :breakpoints="{
            '320': {
              slidesPerView: 1,
            },
            '570': {
              slidesPerView: 1,
            },
            '768': {
              slidesPerView: 1,
            },

            '992': {
              slidesPerView: 1,
            },
            '1024': {
              slidesPerView: 1,
            },
            '1200': {
              slidesPerView: 1,
            },
          }"
        >
          <swiper-slide  v-for="m in montres" :key="m.id">
            <Montre  class="swiper-slide" :montre="m" />
          </swiper-slide>

          <span class="imgCadran">
            <img src="/image/cadran.png" alt=""/>
          </span>
        </swiper>
      </div>

      <h2 class="choixBracelet">Choisissez la couleur de votre bracelet :</h2>

      <!--
      <div class="alignPastilleCouleur">
        <div class="pastillas" :class="{ selectedPastillas: p.id === selectedPastillas}"
          :style="p"
          v-for="p in pastille"
          :key="p.id"
          @click="selected(p.id)"
          ></div>
      </div>
      -->
    </div>
    <div>
      <swiper
        :spaceBetween="3"
        :slidesPerView="7"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="swiperPastille"
      >
        <swiper-slide
          class="alignPastilleCouleur"
          v-for="(element, position) in montres"
          @click="setThumbsSwiper(position)"
          :key="element.id"
        >
          <div
            class="pastillas"
            :style="{ backgroundColor: element.pasti }"
          ></div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="selectItem" v-if="this.selectedItem">
      <h2 >
        Caractèristique du votre montre:
        <span :style="{ color: this.selectedItem.pasti }">{{
          selectedItem.couleur
        }}</span>
        <p>Longeur du bracelet : {{ selectedItem.tailleBracelet }}</p>
        <p>Matière du bracelet : {{ selectedItem.matiere }}</p>
        <p>Taille du cadran du bracelet : {{ selectedItem.tailleCadran }}</p>
        <p>Prix de votre montre : {{ selectedItem.prix }}</p>
      </h2>
    </div>
      <button class="addMontre" @AddMOntre="AddMOntre">Passer commande</button>
  </main>
</template>

<script>
import Montre from "@/components/Montre.vue";
import { Navigation, Pagination, Scrollbar, FreeMode, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import SwiperCore from "swiper/core";
SwiperCore.use([Navigation, Thumbs]);

export default {
  name: "ProductComponent",
  components: { Montre, Swiper, SwiperSlide },
  // mounted () {
  //   window.$s = this.$refs.mySwiper
  //   console.log ('on mounted > !' , this.$refs.mySwiper.swiper)
  // },
  data() {
    return {
      displayElement: true,
      selectedPastillas: undefined,
      selected: undefined,
      montres: require("../data/montreData.json"),
      selectedItem: undefined,

  }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change.........................................");
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, FreeMode, Thumbs],
    };
  },
  methods: {
    setThumbsSwiper(element) {
      console.log("jai lance la commande pour changer le slider", element);
      this.$refs.mySwiper.$el.swiper.slideToLoop(element, 2000);

      this.selectedItem = this.montres[element];
      //this.thumbsSwiper = swiper;
      //console.log(this.thumbsSwiper);
    },
    AddMOntre(montre) {
      this.montres.push(montre);
      console.log(montre, "addMontre.........")
    },
    onSlide(swiper){
      console.log(swiper.activeIndex ,"totooooooooooooooooooooo");
      //this.displayElement = swiper.activeIndex;
      this.selectedItem = this.montres[swiper.activeIndex-1];

    }
  },
  mounted (){
    this.selectedItem = this.montres[0];
    console.log(this.montres);
  }

};
</script>

<style scoped>

.grid {
  display: flex;
 width:100%;
 height:100%;
}

img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
  max-width: 95vw;
  width: 400px;
  height:auto;
  pointer-events: none;

}

.alignPastilleCouleur {
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0 30px 0;
}

ul {
  list-style: none;
  text-decoration: none;
}

.pastillas {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.75);
}

.positionSwiper {
  align-items: center;
}

.swiper-slide {
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
}

h1,
h2 {
  margin-left: 45px;

}

.selectItem {
  border: 0.2rem solid black;
  width:35%;
  box-sizing: border-box;
  display:flex;
  justify-content: center;
  margin:50px 0 45px 20px;
  border-radius: 15px;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.75);
  padding-top: 10px;
  margin-left: auto;
  margin-right: auto;

}

.addMontre {
  border-radius: 5px;
  border: none;
  background-color: var(--blue);
  height: 2.4em;
  padding: 0 15px;
  justify-content: center;
  box-shadow: var(--shadow);
  margin-bottom:20px;
  color:white;
  font-size: 11px;
  font-family: 'Bebas Neue', cursive;
  font-family: 'Oxygen', sans-serif;

}
</style>

