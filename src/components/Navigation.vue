<template>
    <nav >
        <div class="container">
            <div class="containerLogo">
				<router-link :to="{name:'home'}"><img src="../assets/image/logo.png" alt="logo WebAgency" class="logo"></router-link>
            </div>
            <ul>
                <li><router-link :to="{name:'home'}">Accueil</router-link></li>
                <li><router-link :to="{name:'product'}">Produit</router-link></li>
                <li><router-link :to="{name:'about'}">A propos</router-link></li>
                <li><router-link :to="{name:'contact'}">Contact</router-link></li>
            </ul>
        </div>
        <div class="containerPanier">
			<router-link :to="{name:'basket'}"><font-awesome-icon icon="fa-solid fa-cart-shopping" />;;;;;</router-link>
            
        </div>
    </nav>
</template>
<script>
export default {
    name:'NavigationComponent'
}
</script>

<style scoped>

@media(min-width: 769px) and (max-width: 1800px){
    nav{
        background-color: var(--grey);
        height: 70px;
        display: flex;
        justify-content: space-between;
        

    }
    .container{
    display: flex;

}

ul{
    list-style-type: none;
    display: flex;
    margin: 0;
    padding:0;
    height: 100%;
    justify-content: center;
    gap:50px;
}

li{
    color: var(--white);
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.containerPanier{
	width:80px;
    background-color: var(--blue);
    display:flex;
    justify-content: center;
    align-items: center;
    
}

.logo{   
    margin: 10px 50px 10px 20px;
}

.panier{
    font-variation-settings:
  'FILL' 0,
  'wght' 300,
  'GRAD' 0,
  'opsz' 500;
   color:var(--white);
   font-size: 40px;
}

a:link,a:visited, li{
    color:var(--white);
    font-size:1.1rem;
    text-decoration:none;
    
}
}
    

</style>