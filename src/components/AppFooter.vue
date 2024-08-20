<script>
    export default{
        name: "AppFooter"
    }
</script>

<template>
    <div class="footer">
        <ul>
            <li>
                <a href="#progetti">Progetti</a>
            </li>
            <li>
                <a href="#chi-sono">Chi sono</a>
            </li>
            <li>
                <a href="#contattami">Contattami</a>    
            </li>
            <li>Home</li>
        </ul>
        
        <div>
            <a href="https://github.com/giacomofigus">  
                <fa class="icon" :icon="['fab', 'github']" />
            </a>
            <a href="https://github.com/giacomofigus">  
                <fa class="icon" :icon="['fab', 'linkedin']" />
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .footer{
        background-color: #232323;
        color: #5B5B5B;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 600;
        padding-block: 50px;

        ul{
            display: flex;
            gap: 30px;
            margin-bottom: 30px;
        }

        div{
            display: flex;
            gap: 30px;
            
            .icon{
                font-size: 30px;
            }
        }
    }
</style>