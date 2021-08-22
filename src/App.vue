<template>
  <section class="ida" id="ida">
        <div class="container">  
                <Header/>
            <div class="wrapper">
            <div class="mobile-sidebar" :class="this.mobileAdd ? 'show' : '' " >
               <Sidebar/>
            </div>
               <button class="mobile-add" @click="showProduct()">Показать</button>
                <div class="content">
                    <Content/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Content from '@/components/Content.vue'
export default {
    name: 'App',
    components: {
        Header,
        Sidebar,
        Content
    },
    data(){
        return{
            width: window.innerWidth,
            mobileAdd: false
        }
    },
    methods: {
        updateWidth() {
            this.width = window.innerWidth;
            if (this.width < 710){
                this.mobileAdd = true
            } else {
                this.mobileAdd = false
            }
        },
        showProduct(){
            this.mobileAdd = !this.mobileAdd
        },
    },
  created() {
        window.addEventListener('resize', this.updateWidth);
    },
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Source Sans Pro', sans-serif;
}

.container {
    max-width: 1296px;
    width: 100%;
    margin: 0 auto;
}

.wrapper {
    display: flex;
}

.content {
    display: flex;
    flex-wrap: wrap;
    padding-left: 16px;
}

.ida {
    padding: 32px;
    background-color: #f5f4f1;
    min-height: 100vh;
}

.mobile-add{
    width: 154px;
    margin: 0 auto;
    border: 1px solid #000;
    transition: .5s;
    cursor: pointer;
    padding: 11px 0px;
    outline: none;
    background: #EEEEEE;
    border-radius: 10px;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000;

    margin-bottom: 30px;
}
.hide{
        display: none;
    }
.show{
    display: block !important;
}
@media(min-width: 710px){
    .mobile-add{
        display: none;
    }
}
@media(max-width: 710px) {
    .wrapper {
        flex-direction: column;
    }
    .mobile-sidebar{
        display: none;
        }
}
</style>
