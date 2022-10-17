<template>
    <nav>
        <div class="containerlogo">
            <div>
                <router-link :to="{name:'home'}"><img src="/image/logo.png" alt="logo WebAgency" class="logo">
                </router-link>
            </div>
        </div>
        <img @click="dropin()" src="/image/dropdownslim.png" alt="burger" class="burger">
        <ul v-show="dropper" class="dropdown" ref="navigation">
            <li class="dropitem">
                <router-link :to="{name:'home'}">Accueil</router-link>
            </li>
            <li class="dropitem">
                <router-link :to="{name:'product'}">Produit</router-link>
            </li>
            <li class="dropitem">
                <router-link :to="{name:'about'}">A propos</router-link>
            </li>
            <li class="dropitem">
                <router-link :to="{name:'contact'}">Contact</router-link>
            </li>
        </ul>
        <div class="containerPanier">
            <router-link :to="{name:'basket'}">
                <i class="fa-solid fa-cart-shopping"></i>
            </router-link>
            
        </div>
    </nav>
    <i class="fa-thin fa-pen"></i>
</template>
<script>
export default {
    name: 'NavigationComponent',
    data: function(){
        return {
        dropper: true,
      }
    },
   methods: {
     dropin() { 
        this.$refs.navigation.classList.toggle('show');
     }
   }
 
    
  }
 


</script>

<style scoped>
nav {
    background-color: var(--grey);
    height: 70px;
    display: flex;
    justify-content: space-between;


}

.logo {
    padding: 10px;
}

.containerPanier {
    width: 80px;
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
}

.panier {
    font-variation-settings:
        'FILL' 0,
        'wght' 300,
        'GRAD' 0,
        'opsz' 500;
    color: var(--white);
    font-size: 40px;
}



    .containerlogo {
        justify-self: center;
    }

    .burger {
        padding: 5px;
        order: -1;
    }

    .dropdown {
        position: absolute;
        top: 70px;
        height: 50px;
        display: none;
        z-index: 1000;
    }
    .show{
        display: initial;
    }

    .dropitem {
        
        background-color: var(--grey);
        min-width: 160px;
        box-shadow: var(--shadow);
        padding: 12px 16px;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li {
        color: var(--white);
        height: 100%;
    }

    a:link,
    a:visited,
    li {
        color: var(--white);
        font-size: 1.1rem;
        text-decoration: none;
    }


@media(min-width: 769px){
    .burger {
        display: none;
        order: 0;
    }
    ul {    
        gap: 0;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
    }
    .dropdown {
        position: static;
        top: 0;
        display: flex;
        flex-direction: row;
        height: auto;
    }

    .dropitem {
        padding: 0;
    }
}
</style>