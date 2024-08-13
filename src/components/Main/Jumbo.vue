<script>
  export default {
    name: "Jumbo",
    data(){
      return{
        email: "figusgiacomo04@gmail.com",
        isCopied: false,
        text: "Clicca per copiare"
      }
    },
    methods:{
      copyMail(){
        this.isCopied = true;
        this.text = "Copiato"
        window.navigator.clipboard.writeText(this.email);
        if(this.isCopied === true){
          setTimeout(() => {
            this.isCopied = false;
          }, 1500);
        }
      }
    }
  }
</script>

<template>
  <div class="main">
    <div class="container-1">
      <!-- Background -->
      <div class="bg-squares absolute">
        <div class="square" v-for="(square, index) in 24 * 12"></div>
        
        <!-- Jumbo -->
        <div class="jumbo">
          <h1>
            <span class="gradient-text">Ciao! Sono </span> 
            <span class="purple">Giacomo Figus</span>
            <span class="gradient-text"> e sono un Full Stack Web Developer</span>
          </h1>

          <a href="#" class="projects-button pulse">
            I miei progetti
            <fa class="arrow fa" icon="arrow-right" />
          </a>

          <div class="contactme">
            <div>
              Contattami:
            </div>
            <div class="mail relative">
              <button @click="copyMail()">
                Copia Mail
              </button>

              <div class="copied" v-if="isCopied">
                <fa class="icon check" :icon="['fas', 'clipboard-check']" />
                <span class="ms-3">{{ this.text }}</span>
              </div>
            </div>


          </div>
        </div>



        
      </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
  .main {
    position: relative;

    .bg-squares {
      position: relative;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); 
      grid-auto-rows: 80px; 
      overflow: hidden;
      z-index: 1;
      height: 100dvh;
      transform: rotate(180deg);


      .square {
        border: 1px solid rgba(91, 91, 91, 0.2);
        box-sizing: border-box;
      }

      .jumbo {
        position: relative;

        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center; 
        flex-direction: column-reverse;
        z-index: 2; 

        
        .contactme{
          position: absolute;
          top: 60px;
          padding: 10px;
          right: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(180deg);
          background-color: #6D60BE;
          color: white;
          width: 30%;
          border-radius: 50px;
          display: flex;

          div{
            width: 50%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
          }

          .mail{
            background-color: #1F1F1F;
            border-radius: 50px;
            height: 50px;
            border: 2px solid white;
          }

          .copied{
            position: absolute;
            left: 50%;
            right: 50%;
            transform: translate(-50%);
            background-color: #555454;
            top: -50px;
            width: 120px;
            border-radius: 5px;
            padding: 5px;   

            span,
            .icon{
              font-size: 16px;
              font-weight: 300;
              color: #D9D9D9;
            }
          }
        }
        

        h1 {
          font-size: 3.4375rem;
          text-align: center;
          width: 60%;
          filter: drop-shadow(10px 10px 200px #ffffff);
          transform: rotate(180deg);

          .gradient-text {
            background: linear-gradient(#FFFFFF, #555454); 
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }

          .purple {
            color: #6D60BE; 
          }
        }

        .projects-button {
          margin-bottom: 30px;
          border: 2px solid #6D60BE;
          color: #D9D9D9;
          padding: 10px 20px;
          font-size: 18px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          background-color: transparent;
          transition: color 0.3s ease;
          position: relative;
          overflow: hidden;
          transform: rotate(180deg);

          .arrow {
            font-size: 16px;
            color: #6D60BE;
            transition: transform 0.3s ease;
          }

          &:hover,
          &:focus {
            color: #FFFFFF;
            animation: pulse 1s;
            box-shadow: 0 0 0 2em transparent;
          }

          &:hover .arrow {
            transform: translateX(5px);
          }
        }

        .projects-button:hover,
        .projects-button:focus {
          animation: pulse 1s;
          box-shadow: 0 0 0 2em transparent;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 var(--hover); }
        } 

      
      }
    }
  }
  
  @media screen and (max-width: 1024px) {
    .main {
      .bg-squares{
        .jumbo {
          h1 {
            width: 90%;
            font-size: 2.8125rem;
          }

          .contactme{
            width: 50%;
            padding: 5px;

            .mail{
              background-color: #1F1F1F;
              border-radius: 50px;
              height: 50px;
              border: 2px solid white;
            }
          }
        }

      }
    }
  }

  @media screen and (max-width: 425px) {
    .main {
      .bg-squares{
        .jumbo {
          h1 {
            width: 90%;
            font-size: 2.5rem;
          }

          .contactme{
            width: 80%;
          }
        }

      }
    }
  }
</style>
