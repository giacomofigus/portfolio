<script>
  export default {
    name: "Contacts",
    data(){
      return{
        email: "figusgiacomo04@gmail.com",
        isCopied: false,
        text: "Clicca per copiare"
      }
    },
    methods: {
      getSquareClass(index) {
        // Numero di colonne nella griglia
        const columns = 24; // Adatta questo numero al tuo layout
        
        // Calcolo della riga corrente
        const row = Math.floor(index / columns);
        
        // Restituisce una classe diversa in base alla riga
        return `opacity-row-${row}`;
      },
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
    <div  class="container-contact">
        <div class="bg-squares absolute">
            <div 
            class="square"
            v-for="(square, index) in 24 * 12"
            :key="index"
            :class="getSquareClass(index)"></div>
            <div class="section">
                <div class="handshake">
                    <img src="../../img/Handshake.png" alt="">
                </div>
                <h2 class="gradient-text">
                    Mettiamoci in contatatto
                </h2>

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
</template>

<style lang="scss" scoped>
    .container-contact {
        height: 100dvh;
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
            transform: rotate(180deg);

            .square {
                border: 1px solid rgba(91, 91, 91, 0.2);
                box-sizing: border-box;
            }

            /*l'opacità per ogni riga */
            .opacity-row-11 { opacity: 0.1; }
            .opacity-row-10 { opacity: 0.2; }
            .opacity-row-9 { opacity: 0.2; }
            .opacity-row-8 { opacity: 0.3; }
            .opacity-row-7 { opacity: 0.5; }
            .opacity-row-6 { opacity: 0.8; }
            .opacity-row-5 { opacity: 0.9; }
            .opacity-row-4 { opacity: 1; }
        }

        .section{
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

            h2 {
                font-size: 3.4375rem;
                text-align: center;
                font-weight: 600;
                width: 60%;
                filter: drop-shadow(10px 10px 200px #ffffff);
                transform: rotate(180deg);
            }

            .handshake{
                transform: rotate(180deg);
            }

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
        }
    }   

    @media screen and (max-width: 1024px) {

        .container-contact{
            .section{
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

    @media screen and (max-width: 768px) {
        .container-contact{
            .section{

                h2{
                    width: 80%;
                }

                .contactme{
                    width: 70%;
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

    @media screen and (max-width: 425px) {
        .container-contact{
            .section{

                h2{
                    padding-inline: 4px;
                    width: 100%;
                }                

                .contactme{
                    width: 90%;
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


</style>

