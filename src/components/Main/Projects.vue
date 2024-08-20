<script>

  export default {
    name: "Projects",
    components: {
    },
  }
</script>

<template>
    <section class="projects">
        <h2 class="gradient-text">I miei progetti</h2>
        <!-- CONTENITORE CARTA -->
        <div class="projects-container">
            <!-- CARTE -->
            <div class="project">
                <!-- PARTE SUPERIORE -->
                <div class="top-card">
                    <fa class="circle red" :icon="['fas', 'circle']" />
                    <fa class="circle yellow" :icon="['fas', 'circle']" />
                    <fa class="circle green" :icon="['fas', 'circle']" />
                </div>

                <!-- PARTE CENTRALE -->
                <div class="mid-card">
                    <img src="../../img/Sopres.png" alt="" srcset="">
                </div>

                <!-- PARTE INFERIORE -->
                <div class="bottom-card">
                    <h4>Sopres S.r.l.</h4>
                    <h5>Design & Development</h5>
                </div>
            </div>

            <div class="project">
                <!-- PARTE SUPERIORE -->
                <div class="top-card">
                    <fa class="circle red" :icon="['fas', 'circle']" />
                    <fa class="circle yellow" :icon="['fas', 'circle']" />
                    <fa class="circle green" :icon="['fas', 'circle']" />
                </div>

                <!-- PARTE CENTRALE -->
                <div class="mid-card">
                    <img src="../../img/Portfolio.png" alt="" srcset="">
                </div>

                <!-- PARTE INFERIORE -->
                <div class="bottom-card">
                    <h4>Portfolio</h4>
                    <h5>Design & Development</h5>
                </div>
            </div>

            <div class="project">
                <!-- PARTE SUPERIORE -->
                <div class="top-card">
                    <fa class="circle red" :icon="['fas', 'circle']" />
                    <fa class="circle yellow" :icon="['fas', 'circle']" />
                    <fa class="circle green" :icon="['fas', 'circle']" />
                </div>

                <!-- PARTE CENTRALE -->
                <div class="mid-card">
                    <img src="../../img/Scarxlus.png" alt="" srcset="">
                </div>

                <!-- PARTE INFERIORE -->
                <div class="bottom-card">
                    <h4>Scarxlus</h4>
                    <h5>Design</h5>
                </div>
            </div>

            <div class="project">
                <!-- PARTE SUPERIORE -->
                <div class="top-card">
                    <fa class="circle red" :icon="['fas', 'circle']" />
                    <fa class="circle yellow" :icon="['fas', 'circle']" />
                    <fa class="circle green" :icon="['fas', 'circle']" />
                </div>

                <!-- PARTE CENTRALE -->
                <div class="mid-card">
                    <img src="../../img/Filerror.png" alt="" srcset="">
                </div>

                <!-- PARTE INFERIORE -->
                <div class="bottom-card">
                    <h4>Costruendo...</h4>
                    <h5>-</h5>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
    .projects{
        height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;        
        // CONTENITORE CARTA
        .projects-container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            max-width: 1000px;
            margin: 0 auto;

            // CARTA
            .project{
                background-color: #232323;
                border: 1px solid rgba(85, 84, 84, 53%);
                border-radius: 10px;
                position: relative;

                // PARTE SUPERIORE CARTA
                .top-card{
                    // border: 1px solid red;
                    margin-block: 5px;
                    margin-left: 8px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    .circle{
                        font-size: 9px;
                    }
                    .red{
                        color: #FE5F58;
                    }
                    .yellow{
                        color: #FDBB30;
                    }
                    .green{
                        color: #23CA3B;
                    }
                }

                // PARTE CENTRALE CARTA
                .mid-card{
                   img{
                        width: 100%
                   } 
                }

                // PARTE INFERIORE CARTA
                .bottom-card{
                    padding-left: 8px;
                    padding-block: 8px;
                    background-color: #1E1E1E;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                    h4{
                        color: #838181;
                        font-weight: 600;
                        font-size: 18px;
                    }
                    h5{
                        color: #D9D9D9;
                        font-size: 14px;
                        font-weight: 300;
                    }
                }
            }
        }
    }



    
    @media screen and (max-width: 1024px) {
        .projects{
            .projects-container{
                width: 90%;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .projects{
            padding-block: 50px;
            height: auto;
            .projects-container{
                max-width: auto;
                width: 70%;
                grid-template-columns: 1fr;

                .project{
                }
            }
        }
    }

    @media screen and (max-width: 425px) {
        .projects{
            padding-block: 50px;
            height: auto;
            .projects-container{
                max-width: auto;
                width: 90%;
                grid-template-columns: 1fr;

                .project{
                }
            }
        }
    }
</style>
