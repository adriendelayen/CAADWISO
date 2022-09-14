<template>

    <main>
        <div class="container">
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



        <div class="container">
            <div class="card">
                <div class="montre">
                    <img id="montre" src="../assets/image/montre.png"/>
                </div>
                <div class="profile">
                    <ul>
                        <li>Nom: DELAYEN</li>
                        <li>Prénom: Adrien</li>
                        <li>Rôle: Testeur</li>
                        <li>Mail: adrien.delayen.job@gmail.com</li>
                        <li><img id="linkedin" src="../assets/image/braBlue.png"/>www.linkedin.com/in/delayen/</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="card">
                <div class="montre">
                    <img id="montre" src="../assets/image/montre.png"/>
                </div>
                <div class="profile">
                    <ul>
                        <li>Nom: SEBBAH</li>
                        <li>Prénom: Sofiane</li>
                        <li>Rôle: Testeur</li>
                        <li>Mail: m.sofiane.sebbah@gmail.com</li>
                        <li><img id="linkedin" src="../assets/image/braBlue.png"/>www.linkedin.com/in/sofiane-sebbah</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="card">
                <div class="montre">
                    <img id="montre" src="../assets/image/montre.png"/>
                </div>
                <div class="profile">
                    <ul>
                        <li>Nom: DELAYEN</li>
                        <li>Prénom: Adrien</li>
                        <li>Rôle: Testeur</li>
                        <li>Mail: adrien.delayen.job@gmail.com</li>
                        <li><img id="linkedin" src="../assets/image/braBlue.png"/>http:www.linkedin.com</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="card">
                <div class="montre">
                    <img id="montre" src="../assets/image/montre.png"/>
                </div>
                <div class="profile">
                    <ul>
                        <li>Nom: DELAYEN</li>
                        <li>Prénom: Adrien</li>
                        <li>Rôle: Testeur</li>
                        <li>Mail: adrien.delayen.job@gmail.com</li>
                        <li><img id="linkedin" src="../assets/image/braBlue.png"/>http:www.linkedin.com</li>
                    </ul>
                </div>
            </div>
        </div>


    </main>

</template>
    
<script>
export default {
    name: 'AboutComponent'
}

</script>
    
<style scoped>

/* Paragraphe + image des bureaux */

    .container {
        display: block;
        font-size: 10px;
    }

    div {
        margin: 5px 20px 2px 20px;
        justify-content: center;
        align-items: center;
    }

    .divp {
        width: auto;
    }

    .divimg {
        width: auto;
    }

    #officeimg {
        width: 100%;
    }



/* Cards - smartphone view*/

    .card{
        display: flex;
    }

    .montre{
        width: 20%;
    }

    #montre{
        width: 100px;
    }

    .profile{
        width: 80%;
        border: solid 1px black;
        border-radius: 10px;
    }

    li{
        list-style-type: none;
        text-align: left;
    }

    #linkedin{
        width: 20px;
        height: 20px;
    }


@media(min-width: 769px) {
    .container {
    display: flex;
    font-size: 16px;
    }

    div {
        margin: 5px 20px 2px 20px;
        justify-content: center;
        align-items: center;
    }

    .divp {
        width: 50%;
    }

    .divimg {
        width: 50%;
    }

    #officeimg {
        width: 100%;
    }


    /* Cards - laptop view */
    .card{
        display: flex;
        border: solid 1px black;
        border-radius: 10px;
    }

    .montre{
        width: 20%;
        border: solid 1px black;
        border-radius: 10px;
    }

    .profile{
        width: 80%;
        border: solid 1px black;
        border-radius: 10px;
    }

    li{
        list-style-type: none;
        text-align: left;
    }

    #linkedin{
        width: 20px;
        height: 20px;
    }

}
</style>