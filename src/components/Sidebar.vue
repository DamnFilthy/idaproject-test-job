<template>
 <form class="sidebar" action="">
    
    
    <label class="important" for="product">Наименование товара</label>
    <input :class="this.$store.state.errors.title ? 'input-error' : ' '" v-model="this.$store.state.title" required type="text" id="product" placeholder="Введите наименование товара">
    <div class="error">{{this.$store.state.errors.title}}</div>
    
    <label for="descr">Описание товара</label>
    <input v-model="this.$store.state.descr" type="text" id="descr" class="product" placeholder="Введите описание товара">
    
    
    <label class="important" for="link">Ссылка на изображение товара</label>
    <input :class="this.$store.state.errors.link ? 'input-error' : ' '" v-model="this.$store.state.link" required type="text" id="link" placeholder="Введите ссылку">
    <div class="error">{{this.$store.state.errors.link}}</div>
    
    <label class="important" for="price">Цена товара</label>
    <input :class="this.$store.state.errors.price ? 'input-error' : ' ' " v-model="this.$store.state.price"  v-mask=" '## ###' "  required type="text" id="price" placeholder="Введите цену">
    <div class="error">{{this.$store.state.errors.price}}</div>
    
    <button :class="BindOrderStatus(this.$store.state)" @click.prevent="onSubmit(), onAdd()" class="add-product">Добавить товар</button>
    
</form>
</template>

<script>
export default {
  name: 'SideBar',
  data(){
      return{
          active: false
      }
  },
  mounted() {
    if (localStorage.products) {
    let products = JSON.parse (localStorage.getItem ("products"));
      this.$store.state.products = products;
    }
  },
  methods:{
      onSubmit(){
          this.$store.commit('submit')
      },
      onAdd(){
          this.$store.commit('addProduct')
      },
      BindOrderStatus(state){
          if(state.title && state.link && state.price !== ''){
              return 'active'
          }
      }
  },

}
</script>

<style scoped lang="scss">
.sidebar {
    transition: 1s all;
    padding: 24px;
    min-width: 332px;
    height: 475px;
    display: flex;
    flex-direction: column;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
}

label {
    padding-bottom: 5px;
    font-size: 14px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;
}

.product {
    height: 125px;
}

input {
    border: none;
    outline: none;
    padding: 10px 0px 11px 16px;
    margin-bottom: 16px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
}

input::placeholder {
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;
}
.input-error{
    border: 1px solid #FF8484;
}
.add-product {
    transition: .5s;
    cursor: pointer;
    padding: 11px 0px;
    border: none;
    outline: none;
    background: #EEEEEE;
    border-radius: 10px;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #B4B4B4;
}

.important {
    position: relative;
}

.important::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: #FF8484;
    border-radius: 4px;
    transform: translate(2px, -1px);
}

.error{
    font-size: 12px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #FF8484;
    padding-bottom: 10px;
}

.active{
    background-color: #86ff8696;
    color: #4e0707;
}

@media(max-width: 710px) {
    .sidebar {
        width: 337px;
        margin: 0 auto;
        margin-bottom: 30px;
    }
}
    
</style>
