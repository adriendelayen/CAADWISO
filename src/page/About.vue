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



/* Cards */

@media(min-width: 769px) {
    .container {
    display: flex;
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
}
</style>