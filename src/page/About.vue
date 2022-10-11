<template>

    <main>
        <h2>La société CAADWISO</h2>
        <div class="container1">
            <div class="divp">
                <p>Le diamant de CAADWISO représente notre volonté à vous offrir la perfection dans un design pur et
                    élégant. L'esthétisme et la résistance de nos montres ont été étudié dans le détail pour vous faire
                    briller, un large choix de coloris s'offre à vous. En choisissant CAADWISO, vous choisissez la
                    qualité et l'originalité.</p>
            </div>
            <div class="divimg">
                <img id="officeimg" src="../assets/image/office.png" alt="image bureaux entreprise" />
            </div>
        </div>

        <h2>Nos collaborateurs</h2>

        <div class="container2">
            <div class="card" v-for="c in cards" :key="c.id" :cards="c">
                <div class="montre">
                    <img :src="c.img"/>
                </div>
                    <ul class="profile">
                        <li>Nom: {{c.nom}}</li>
                        <li>Prénom: {{c.prenom}}</li>
                        <li>Rôle: {{c.role}}</li>
                        <hr>
                        <button><a :href=c.url>me contacter</a></button>
                        <button><a :href=c.linkedin>mon linkedin</a></button>
                    </ul>
            </div>
        </div>


    </main>

</template>
    
<script>
export default {
    name: 'AboutComponent',

    data: function () {
    return {
        cards: [
            {   nom: "DELAYEN",
                prenom: "Adrien",
                role: "TBD",
                mail: "adrien.delayen.job@gmail.com",  
                linkedin: "https://www.linkedin.com/in/delayen",
                url:"mailto:adrien.delayen.job@gmail.com?subject=contact",   
                img: require ("../assets/image/bitmojiAdrien.png"
            )},
            { 
                nom: "SEBBAH",
                prenom: "Sofiane",
                role: "TBD",
                mail: "m.sofiane.sebbah@gmail.com",
                linkedin: "https://www.linkedin.com/in/sofiane-sebbah",
                url:"mailto:m.sofiane.sebbah@gmail.com?subject=contact",
                img: require ("../assets/image/bitmojiSoso.png")
            },
            { 
                nom: "QUASEVI", 
                prenom: "Willy", 
                role: "TBD", 
                mail: "willy.quasevi@gmail.com", 
                url:"mailto:willy.quasevi@gmail.com?subject=contact",
                linkedin: "https://www.linkedin.com/in/willy-quasevi", 
                img: require ("../assets/image/WillBitmojmontre.png")
            },
            { 
                nom: "DUPREZ", 
                prenom: "Camille", 
                role: "TBD", 
                mail: "duprez_camille@yahoo.com",
                url:"mailto:duprez_camille@gmail.com?subject=contact",
                linkedin: "https://www.linkedin.com/in/camille-duprez96", 
                img: require ("../assets/image/CamilleMontre.png")},
        ]
    };
},

}

</script>
    
<style scoped>

    main {
        margin: 5px 20px 2px 20px;
    }

    h2{
        color: var(--blue);
        font-weight: bold;
        font-size: 32px;
    }

/* Paragraphe + image des bureaux */

    .container1 {
        display: block;
        font-size: 10px;
    }

    .divp {
        width: auto;
        font-size: 20px;
    }

    
    img{
    width: 100%;}

    .divimg {
        width: auto;
    }

    #officeimg {
        width: 100%;
    }



/* Cards - smartphone view*/
.container2 {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
}

.card {
    overflow: hidden;
    align-items: center;
    display: grid;
    grid-template-columns: 30% 70%;
}


.montre {
    overflow: hidden;
    position: relative;
    z-index: 2;
    background: rgb(227,238,238);
    background: linear-gradient(90deg, #F5F5F7 0%, #F5F5F7 50%, transparent 50%, transparent 100%);
    
}

.profile {
    box-sizing: border-box;
    height: fit-content;
    list-style: none;
    padding: none;
    border: solid 1px black;
    border-radius: 8px;
    text-align: left;
    padding: 10px 10px 10px 20%;
    margin-left: -20%;
    transform: translateX(-150%);
    transition: .2s ease-in-out ;
    background: white;
}

button{
    margin-right: 15px;
}

.card:hover .profile {
    transform: translateX(0);
}


/* Cards - laptop view*/

@media(min-width: 769px) {

    .container1{
        display: flex;
    }

    .divp {
        display: flex;
        width: 50%;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
    }

    .divimg {
        width: 50%;
    }

    #officeimg {
        width: 100%;
    }

    .container2 {
        grid-template-columns: repeat(2, 1fr);
    }

    button a {
        text-decoration: none;
        color: white;
        font-size: 16px;
        font-family: 'Bebas Neue', cursive;
        font-family: 'Oxygen', sans-serif;
    }

    button{
    margin-right: 10px;
    border-radius: 10px;
    border: none;
    background-color: var(--blue);
    height: 40px;
    width: 130px;
    justify-content: center;
    box-shadow: var(--shadow);
    }

    button:hover{
    margin-right: 10px;
    border-radius: 10px;
    border: none;
    background-color: var(--blue);
    height: 40px;
    width: 130px;
    justify-content: center;
    box-shadow: var(--shadow);
    }
    
} 

</style>