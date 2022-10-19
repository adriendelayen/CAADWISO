<template>

    <main>
        <div class="header">
            <h1 class="typer">La perfection en main.</h1>
            <p>Passionné de sensations fortes ? La CAADWISO est faite pour vous, 48 heures d'autonomie et résistante aux chocs, elle vous accompagnera dans toutes vos aventures, alors ne perdez pas une minute :
            </p>
            <button><router-link :to="{name:'product'}">En savoir plus</router-link></button>
        </div>

        


        <img class="mobi" src="/image/imghomepagesmart.png" alt="montre Accueil">
        <img class="pc" src="/image/imghomepage.png" alt="montre Accueil">
        
    </main>
    </template>
        
        <script>
            export default {
                name: 'HomeComponent',

            }
        
        </script>

        
        <style scoped>



            .typer{
                font-family: monospace;
                border-right: 2px solid transparent;
                animation: typer-animation 3s steps(22),blink-animation .5s step-end 8 alternate;
                width: 22ch;
                white-space: nowrap;
                overflow: hidden;
                max-width: 100%;
                font-weight: 400;
                padding: 0;
                
                
                
                
            }
            @keyframes typer-animation{
                from{
                    
                    width:0;
                }
            }
            @keyframes blink-animation{
                50%{
                    border-color: var(--blue)
                }
            
            }


            .header{
                margin: 15px auto 45px ;
                width: 90%;

            }
            
            h1{
                text-align: left;
                padding: 5px;
                
            }
            p{
                text-align: left;
                padding: 5px;
                
            }
            main {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .mobi {
                padding-top: 5px;
                width: 70%;
              
            }
            .pc {
                align-self:flex-end;
                width: 50%;
            }
            button {
                border-radius: 5px;
                border: none;
                background-color: var(--blue);
                height: 2.4em;
                padding: 0 15px;
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
                    min-height: 73vh;
                    flex-direction: row;
                }
                .typer{
                    width: 65%;
                }
                
            }
    
        </style>