<template>
    <footer>
    <div class="container">
      <div class="columns">
        <div class="column 1">
          <p>Mentions Légales</p>
          <ul>
            <li>
              <router-link :to="{ name: 'cgu' }">CGU</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'cgv' }">CGV</router-link>
            </li>
          </ul>
        </div>

        <div class="column 2">
          <p>Réseaux Sociaux</p>
          <ul>
            <li>
              <a
                href="https://fr-fr.facebook.com/"
                onclick="window.open(this.href, '_blank'); return false;"
                >Facebook</a
              >
            </li>
            <li>
              <a
                href="https://www.instagram.com/?hl=fr"
                onclick="window.open(this.href, '_blank'); return false;"
                >Instagram</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p id="copyright">CAADWISO © 2022</p>
  </footer>
</template>

<script>
export default {
  name: "FooterPCComponent",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oxygen:wght@300&display=swap");

footer {
 
    background-color: var(--grey);
    color: var(--white);
    margin: 0;
    font-family: 'Bebas Neue', cursive;
    font-family: 'Oxygen', sans-serif;
    text-align: center;
    width: 100%;
    height: fit-content;
}

.container {
    display: flex;
    justify-content: center;
}

.columns {
    display: block;
    text-align: center;
    padding: 10px;
}
a {
    text-decoration: none;
    color: white;
}

a:hover{
    text-decoration: underline;
}

ul {
    padding: 0;
}

li {
    list-style-type: none;
}

p {
    margin: 0;
}

@media(min-width: 769px){
  
   
  
  footer {
    
    background-color: var(--grey);
    color: var(--white);
    margin: 0;
    font-family: 'Bebas Neue', cursive;
    font-family: 'Oxygen', sans-serif;
    text-align: center;
    width: 100%;
}


.columns {
    display: flex;
    justify-content: space-between;
    text-align: left;
    width: 50%;
    margin: 0;
}

#copyright {
    width: 100%;
    text-align: end;
    margin: auto;
}


a {
    text-decoration: none;
    color: white;
}

a:hover{
    text-decoration: underline;
}

ul {
    padding: 0;
}

li {
    list-style-type: none;
}

p {
    margin: 0;
}
}
</style>
