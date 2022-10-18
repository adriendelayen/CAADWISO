<template>

    <main>
        <div >
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
                name: 'HomeComponent'
            }
        
        </script>
        
        <style scoped>



            .typer{
                border-right: 2px solid var(--blue);
                animation: typer-animation 2s steps(22),blink-animation .5s step-end infinite alternate;
                width: 90%;
                white-space: nowrap;
                overflow: hidden;
            }
            @keyframes typer-animation{
                from{
                    width:0;
                }
            }
            @keyframes blink-animation{
                50%{
                    border-color: transparent
                }}


            main{
                min-height: fit-content;
            }
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
                width: 70%;
              
            }
            .pc {
                align-self:flex-end;
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
                    min-height: 73vh;
                    flex-direction: row;
                }
                .typer{
                    width: 65%;
                }
                
            }
    
        </style>