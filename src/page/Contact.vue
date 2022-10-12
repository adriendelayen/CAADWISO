<template>
  <!-- Enlever le "text-align: center" dans App.vue -->
  <div class="container">
  
      <header>
      <h1>Nous contacter</h1>
      <p>Vous avez une question, une demande particulière ? <br />
      Contactez-nous dès maintenant. Nous ferons notre possible pour vous répondre dans les plus brefs délais.</p>
      </header>
  
  <main>
  <div class="myBlocks">
  
    <form ref="myForm" @submit.prevent="handleSubmit()">
      <h2>Mail</h2>
      <div>
        <label for="lastname"><small id="red">* </small>Nom</label>
        <input class="field" id="lastname" pattern="[a-z]{1-20}" v-model.trim="forml.lastname" @input="lastname_dirty = true"/>
        <small class="error" v-show="lastnameError">{{error}}</small>
      </div>
      <div>
        <label for="firstname"><small id="red">* </small>Prénom</label>
        <input class="field" id="firstname" pattern="[a-z]{1-20}" v-model.trim="forml.firstname" @input="firstname_dirty = true"/>
        <small class="error" v-show="firstnameError">{{error}}</small>
      </div>
      <div>
        <label for="phone">Téléphone</label>
        <input class="field" id="phone" type="tel" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" v-model.trim="phone"/>
      </div>
      <div>
        <label for="mail"><small id="red">* </small>Email</label>
        <input class="field" id="mail" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" v-model.trim="forml.mail" @input="mail_dirty = true"/>
        <small class="error" v-show="mailError">{{error}}</small>
      </div>
      <div>
        <label for="subject"><small id="red">* </small>Sujet</label>
        <select class="field" v-model="selected" :required="!selected">
          <option v-for="s of subjects" :key="s.id">{{s}}</option>
        </select>
      </div>
      <div>
        <label for="question"><small id="red">* </small>Question</label>
        <textarea rows="2" cols="50" id="question" v-model.trim="forml.question" @input="question_dirty = true"></textarea>
        <small class="error errorBot" v-show="questionError">{{error}}</small>
      </div>
      <div>
        <input type="file" ref="file" @change="handleChange" @click="$refs.file.click()"/>
      </div>
      <p>
        <small><span style="color: red">* </span>Champs obligatoires</small>
      </p>
      <p>
        <button id="submit" :disabled="formError">Envoyer</button>
      </p>
    </form>
    <div class="image">
      <img src="../assets/image/flex-office.png" alt="service-client">
    </div>
    </div>
  
      <div class="contact call">
          <h2>Téléphone</h2>
          <p>01 02 03 04 05 (Prix d'un appel local)</p>
          <p>Lundi-Vendredi : 8 H 30 - 19 H 30<br />
          Samedi : 10 H - 16 H</p>
      </div>
  
    <div class= "ChatBox">
      <ChatBoxComponent/>
    </div>
  
  </main>
  </div>
  
  </template>
  
  
  <script>
    import ChatBoxComponent from '@/components/ChatBox';
      export default {
        name: "ContactComponent",
        components: {ChatBoxComponent},
          data: function () {
      return {
        forml: {lastname: '', firstname: '', phone: '', mail: '', subject:'', question:''},
        lastname_dirty: false,
        firstname_dirty: false,
        phone: '',
        subjects: ['PRODUIT', 'SUIVI DE LA COMMANDE', 'INCIDENT AVEC LA COMMANDE', 'ECHANGES ET RETOURS', 'QUESTIONS GENERALES'],
        mail_dirty: false,
        question_dirty: false,
        file: '',
        error: 'Ce champ est obligatoire.',
      }
    },
  
    watch: {
  
        phone() {
            let realNumber = this.phone.replace(/-/gi, '');
            let dashedNumber = realNumber.match(/.{1,2}/g);
            this.phone = dashedNumber.join('-');
        }
    },
  
    methods: {
  
      handleSubmit() {
        alert('Nous avons bien reçu votre demande, un conseiller vous répondra dès que possible. Merci !');
        this.$refs.myForm.reset();
        console.log(`
        lastname : "${this.forml.lastname}", 
        firstname : "${this.forml.firstname}"
        phone : "${this.phone}"
        mail : "${this.forml.mail}"
        subject : "${this.selected}"
        question : "${this.forml.question}",
        file: "${this.file?.name}"
        `);
      },
  
      handleChange(e) {
        console.log(e.target.files[0]);
        this.file= e.target.files[0]
      }
    },
  
    computed: {
  
      lastnameError: function () {
        return !this.forml.lastname && this.lastname_dirty;
      },
  
      firstnameError: function () {
        return !this.forml.firstname && this.firstname_dirty;
      },
  
      mailError: function () {
        return !this.forml.mail && this.mail_dirty;
      },
  
      questionError: function () {
        return !this.forml.question && this.question_dirty;
      },
  
      formError: function () {
        return !this.lastname_dirty || !this.firstname_dirty || !this.mail_dirty || !this.question_dirty ||
        this.lastnameError || this.firstnameError || this.mailError || this.questionError ;
      }
    }
  }
  
  </script>
  
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oxygen:wght@300&display=swap");
  
  .myBlocks {
    display: block;
  }
  
  header {
    text-align: center;
    font-size: 20px;
  }
  
  form {
    padding: 20px;
    margin-top: 30px;
    border-top: 1px dashed;
  }
  
  .call {
    padding: 20px;
    margin-top: 20px;
  }
  
  .error {
    margin-left: 10px;
    color: red;
  }
  
  input {
    border-radius: 5px;
  }
  
  .field {
    margin-bottom: 10px;
  }
  
  textarea {
    border-radius: 5px;
  }
  
  label {
    display: block;
    width: 100px;
  
  }
  
  #submit {
    padding: 5px;
    width: 75px;
    font-size: 15px;
  }
  
  #red {
    color: red;
  }
  
  .errorBot {
    display: block;
    padding: 1px 0 15px 0;
  }
  
  img {
    width: 100%;
    height: auto;
    border: solid grey 1px;
  }
  
  
  @media(min-width: 769px) {
  
    .myBlocks {
      display: flex;
    }
  
    form {
      width: 40em;
      border-top: 5px solid;
      border-image: linear-gradient(155deg, #309bff, #f5f5f7, #f5f5f7, #f5f5f7) 1;
    }
  
    .call {
      width: 40em;
      border-top: 5px solid;
      border-image: linear-gradient(171deg, #309bff, #f5f5f7, #f5f5f7, #f5f5f7) 1;
    }
  
    .errorBot {
      display: inline-block;
  }
  
    .image {
  
      margin: 100px auto 0 auto;
    }
  
    img {
    filter: drop-shadow(5px 5px 5px #222);
    }
  
  }
  
  </style>