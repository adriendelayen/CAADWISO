<template>
    <main>
      <div>
        <h1>Produit</h1>
        <div class="positionSwiper">
          <swiper :slides-per-view="1" centeredSlides:true :spaceBetween="10" :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }" :loop="true" :breakpoints="{
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
                spaceBetween: 5,
              },
              '1024': {
                slidesPerView: 1,
              },
              '1200': {
                slidesPerView: 1,
              },
            }" :modules="modules" class="mySwiper">
            <swiper-slide v-for="m in montres" :key="m.id">
              <Montre class="swiper-slide" :montre="m" @AddMOntre="AddMOntre" />
            </swiper-slide>
  
            <span class="imgCadran">
              <h3>cadran</h3>
              <img src="../assets/image/cadran.png" />
            </span>
          </swiper>
        </div>
  
  
  
        <h2>Choisissez la couleur de votre bracelet :</h2>
  
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
  
     <div class="alignPastilleCouleur">
  
     </div>
      </div>
      <h2>Modèle du bracelet: Yellow Pastel</h2>
    </main>
  </template>
  
  <script>
  import Montre from "@/components/Montre.vue";
  import { Navigation, Pagination, Scrollbar } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  export default {
    name: "ProductComponent",
    components: { Montre, Swiper, SwiperSlide },
    data: function () {
      return {
        selectedPastillas: undefined,
        selected: undefined,
        pastille: [
          {
            id: 1,
            backgroundColor: "#334255"
          },
          {
            id: 2,
            backgroundColor: "#bbcab7"
          },
          {
            id: 3,
            backgroundColor: "#5d6d62"
          },
          {
            id: 4,
            backgroundColor: "#e8cac8"
          },
  
          {
            id: 5,
            backgroundColor: "#e35040"
          },
          {
            id: 6,
            backgroundColor: "#dddcda"
          },
          {
            id: 7,
            backgroundColor: "#e7cd5f"
          }
        ],
        montres: [
          {
            id: 0,
            couleur: "bleu",
            tailleBracelet: "20cm",
            tailleCadran: "36mm",
            matiere: "silicone",
            image: require("../assets/image/Bra1.png"),
            prix: "49€",
          },
          {
            id: 1,
            couleur: "Cien",
            tailleBracelet: "20cm",
            tailleCadran: "36mm",
            matiere: "silicone",
            image: require("../assets/image/Bra9.png"),
            prix: "49€",
          },
          {
            id: 2,
            couleur: "Gris",
            tailleBracelet: "20cm",
            tailleCadran: "36mm",
            matiere: "silicone",
            image: require("../assets/image/Bra4.png"),
            prix: "49€",
          },
          {
            id: 3,
            couleur: "Rose",
            tailleBracelet: "20cm",
            tailleCadran: "36mm",
            matiere: "silicone",
            image: require("../assets/image/Bra6.png"),
            prix: "49€",
          },
          {
            id: 4,
            couleur: "Rouge",
            tailleBracelet: "20cm",
            tailleCadran: "36mm",
            matiere: "silicone",
            image: require("../assets/image/Bra7.png"),
            prix: "49€",
          },
          {
            id: 5,
            couleur: "blanc",
            tailleBracelet: "20cm",
            tailleCadran: "36mm",
            matiere: "silicone",
            image: require("../assets/image/Bra9.png"),
            prix: "49€",
          },
          {
            id: 6,
            couleur: "jaune",
            tailleBracelet: "20cm",
            tailleCadran: "36mm",
            matiere: "silicone",
            image: require("/src/assets/image/Bra5.png"),
            prix: "49€",
          },
        ],
        setup() {
          const onSwiper = (swiper) => {
            console.log(swiper);
          };
          const onSlideChange = () => {
            console.log("slide change");
          };
          return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar],
          };
        },
      };
    },
  
    methods: {
  
      AddMOntre(montre) {
        this.montres.push(montre);
      },
      computed:{
        sameId(){}
      }
    },
  };
  </script>
  
  <style scoped>
  /*
  .grid {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: 50px auto;
  
  }
  */
  .imgCadran img {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 2;
    top: 0%
  }
  
  .alignPastilleCouleur {
    display: flex;
    justify-content: space-evenly;
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
    box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.75)
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
  </style>