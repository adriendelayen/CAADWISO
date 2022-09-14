<template>

    <main>
        <div>
            <h1>La perfection en main.</h1>
            <p>Passionné de sensations fortes ? La CAADWISO est faite pour vous, 48 heures d'autonomie et résistante aux chocs, elle vous accompagnera dans toutes vos aventures, alors ne perdez pas une minute :
            </p>
            <button><router-link :to="{name:'product'}">En savoir plus</router-link></button>
        </div>
        <img class="mobi" src="../assets/image/imghomepagesmart.png" alt="montre Accueil">
        <img class="pc" src="../assets/image/imghomepage.png" alt="montre Accueil">
        
    </main>
    </template>
        
        <script>
            export default {
                name: 'HomeComponent'
            }
        
        </script>
        
        <style scoped>
            div{
                margin-left: 20px;
                padding-right: 50px;
            }
            h1{
                text-align: left;
                padding: 5px;
                margin-left: 5px;
                margin-right: 15px;
            }
            p{
                text-align: left;
                padding: 5px;
                margin-left: 5px;
            }
            main {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .mobi {
                padding-top: 5px;
                width: 50%;
                position: absolute;
                bottom: 220px; 
            }
            .pc {
                width: 50%;
            }
            button {
                border-radius: 10px;
                border: none;
                background-color: var(--blue);
                height: 30px;
                width: 160px;
                justify-content: center;
                box-shadow: var(--shadow);
            }
            a:link, a:visited{
                color: var(--white);
                font-size: 1.1rem;
                text-decoration: none;
                font-family: 'Bebas Neue', cursive;
                font-family: 'Oxygen', sans-serif;
            }
            @media(max-width: 769px){
                .pc {
                    display: none;
                }
            }
            @media(min-width: 769px){
                .mobi {
                    display: none;
                }
                main{
                    flex-direction: row;
                }
                
            }
    
        </style>