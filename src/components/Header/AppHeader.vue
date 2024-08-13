<script>

export default {
    name: "AppHeader",
    data(){
        return{
            isActive: false
        };
    },
    methods: {
        menuAction(){
            this.isActive = !this.isActive
        }
    }
};


</script>

<template>
    <header>
        <nav class="flex items-center justify-between">
            <div class="flex items-center gap-3">
                <img class="propic" height="80px" width="80px" src="../../img/propic.png" alt="">
                <div>
                    <h4>Giacomo Figus</h4>
                    <h5>Junior Web Developer</h5>
                </div>
            </div>

            <ul class="menu flex">
                <li>Progetti</li>
                <li>Chi sono</li>
                <li>Contattami</li>
            </ul>

            <div class="hamb" @click="menuAction">
                <div class="line"></div>
                <div class="line line-2"></div>
                <div class="line"></div>
            </div>

            <div class="sidebar" :class="{ 'active': isActive }">
                <!-- <img class="bg" src="../../img/bg.png" alt=""> -->
                <ul>
                    <li>Progetti</li>
                    <li>Chi sono</li>
                    <li>Contattami</li>
                </ul>

            </div>
        </nav>
    </header>
</template>


<style lang="scss" scoped>
    header{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }

    nav{
        margin-inline: 100px;
        height: 150px;

        h4{
            color: #CDCDCD;
            font-size: 25px;
            font-weight: 300;
            letter-spacing: 2px;
        }
        h5{
            color: #5B5B5B;
            font-size: 20px;
            letter-spacing: 2px;
        }
        ul{
            gap: 50px;
            li{
                color: #5B5B5B;
                font-size: 22px;
                font-weight: 700;
                z-index: 100;
            }
            li:hover{
                color: #CDCDCD;
                cursor: pointer;
                transition: 0.2s;
            }
        }
    }
    
    .propic{
        z-index: 100;
        
    }

    .hamb{
        display: none;
        z-index: 100;
    }

    .sidebar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 100%;
        background: linear-gradient(to bottom, #1A1A1A, #000000);
        z-index: 10;
        transition: bottom 0.3s ease-in-out;

        ul{
            opacity: 0; 
            transition: opacity 0.3s ease-in-out;
        }

    }

    .active{
        bottom: 0;
        display: none;

        ul{
            opacity: 1;
        }
    }




 
    @media screen and (max-width: 1024px) {
        nav{
            margin-inline: 50px;
            
        }
    }

    @media screen and (max-width: 768px) {
        nav{
            margin-inline: 30px;
            
            align-items: center;
            justify-content: space-between;

            h4, h5{
                display: none;
            }

            .hamb{
                display: flex;
                flex-direction: column;
                gap: 12px;

                .line{
                    background-color: #5B5B5B;
                    width: 40px;
                    height: 3px;
                    border-radius: 10px;
                }


                .line-2{
                    width: 30px;
                }
            }

            .menu{
                li{
                    display: none;
                }
            }

            .sidebar{
                

                ul{
                    margin-top: 200px;
                    display: flex;
                    flex-direction: column;
                    align-items: end;
                    margin-right: 30px;

                    li{
                        font-size: 26px;
                        font-weight: 400;
                    }
                }

                hr{
                    margin-inline: 30px;
                    margin-top: 50px;
                    border-color: #5B5B5B;
                }
            }

            

            ul{
                margin-left: 5px;
            }

        }

        
        .active{
            display: block;
            bottom: 0;
            
        }
    }

    @media screen and (max-width: 425px) {
        nav{
            margin-inline: 10px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            margin-inline: 30px;
        }
    }
</style>