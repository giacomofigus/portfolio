<script>
  export default {
    name: "Animation1",
  }
</script>

<template>
    <div class="container-animation">
        <section id="chi-sono" class="who flex flex-col justify-center">
            <h2 class="gradient-text">Chi sono</h2>

            <div class="grid-container">
                <div class="section pro-pic">
                    <img src="../../img/propic.png" alt="immagine di profilo" width="80">
                </div>
                <div class="section presentazione">
                    
                    <p><span class="block mb-3">Mi presento.</span>  Sono <span class="purple">Giacomo Figus</span>, un appassionato sviluppatore web con esperienza sin dai tempi della scuola superiore. Ho solidi fondamenti nel front-end e nel back-end della programmazione, arricchiti da corsi di formazione e progetti personali.</p>
                </div>
                <div class="section github">
                    <a href="https://github.com/giacomofigus
                    ">  <fa class="icon" :icon="['fab', 'github']" /></a>
                  
                </div>
                <div class="section linkedin">
                    <a href="https://www.linkedin.com/in/giacomo-figus-526471303/">
                        <fa class="icon" :icon="['fab', 'linkedin']" />
                    </a>

                </div>
                <div class="section cv">
                    <a href="../../../public/Giacomo_Figus_CV.pdf" download>                    
                        <fa class="icon" :icon="['fas', 'file-pdf']" />
                    </a>

                </div>
                <div class="section stack">
                    <div class="slider">
                        <div class="slide-track">
                            <span>Vue</span>
                            <span>Laravel</span>
                            <span>Php</span>
                            <span>Html</span>
                            <span>Css</span>
                            <span>Js</span>
                            <span>MySQL</span>

                            <span>Vue</span>
                            <span>Laravel</span>
                            <span>Php</span>
                            <span>Html</span>
                            <span>Css</span>
                            <span>Js</span>
                            <span>MySQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    .container-animation{
        height: 100dvh;
        padding-block: 10px;

        section{
            height: 100%;
            padding: 5px;

            .grid-container{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: auto auto auto;
                max-width: 1000px;
                gap: 2rem;
                margin: 0 auto;
                .section{
                    filter: drop-shadow(10px 10px 10px rgba(0,0,0, 0.25));
                    border-radius: 20px;
                    background-color: #232323;
                    padding: 50px;
                    color: #D9D9D9;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .icon{
                        font-size: 4.5rem;
                    }
                }

                .pro-pic{
                    grid-column: 1;
                    grid-row: 1;

                }

                .presentazione{
                    grid-column: 2 / span 2;
                    grid-row: 1;

                    p{
                        font-size: 1.1rem;
                        .purple{
                            color: #6D60BE;
                        }
                    }
                }

                .stack{
                    grid-column: 1 / span 3;
                    width: 100%;
                    overflow: hidden;
                    padding-block: 80px;
                    
                    .slider{
                        width: 80%;
                        position: relative;
                        
                        overflow: hidden;

                        .slide-track{
                            display: flex;
                            width: calc(14* 180px);
                            animation: scroll 20s linear infinite;

                            span{
                                display: inline-block;
                                width: 180px;
                                font-size: 20px; 
                                font-weight: 600; 
                            }

                            @keyframes scroll {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(calc(-180px * 7)); }
                            }
                        }
                    }

                    .slider::before,
                    .slider::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        width: 100px; /* Larghezza della sfumatura */
                        z-index: 2;
                    }

                    .slider::before {
                        left: 0;
                        background: linear-gradient(to right, rgba(35, 35, 35, 1), rgba(35, 35, 35, 0)); /* Sfumatura da sinistra */
                    }

                    .slider::after {
                        right: 0;
                        background: linear-gradient(to left, rgba(35, 35, 35, 1), rgba(35, 35, 35, 0)); /* Sfumatura da destra */
                    }
                }

            }

        }
    }

    @media screen and (max-width: 1024px) {
        .container-animation{
            section{ 
                .grid-container{
                    width: 90%;
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .container-animation{
            section{
                margin: 0 auto;
                width: 80%;

                h2 {
                    font-size: 2.8125rem;
                }
                .grid-container{
                    max-width: auto;
                    width: 100%;
                    .section{
                        padding: 30px;

                        
                        .icon{
                            font-size: 3rem;
                        }
                    }

                    .pro-pic{
                        grid-column: 1 / span 3;
                        grid-row: 1;
                    }

                    .presentazione{
                        grid-column: 1 / span 3;
                        grid-row: 2;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 425px) {
        .container-animation{
            height: auto;
            section{
                margin: 0 auto;
                width: 90%;

                h2 {
                    font-size: 2.8125rem;
                }
                .grid-container{
                    width: 100%;
                    .section{
                        .icon{
                            font-size: 1.5rem;
                        }
                    }

                    .stack{
                        .slider{
                            .slide-track{
                                span{
                                    font-size: 18px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>