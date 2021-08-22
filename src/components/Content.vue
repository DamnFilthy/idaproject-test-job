<template>
<div v-for="(product, index) in this.$store.state.products" class="product-card" :key="index">
    <div>
        <i @click="onDelete(index)" class="far fa-trash-alt product-trash"></i>
    <img v-bind:src="product.link" alt="">
    <div class="product-card-wrapper">
        <div class="product-title">
            {{product.title}}
        </div>
        <div class="product-descr">
            {{product.descr}}
        </div>
        <div class="product-price">
            {{product.price}} руб.
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Content',
  methods: {
      onDelete(index){
          this.$store.commit('deleteProduct', index)
      }
  }
}
</script>

<style scoped lang="scss">
.product-card {
    position: relative;
    margin-left: 16px;
    margin-bottom: 16px;
    width: 300px;
    height: 423px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
}

.product-trash {
    cursor: pointer;
    display: flex !important;
    position: absolute;
    align-items: center;
    justify-content: center;
    right: -6px;
    top: -6px;
    color: #fff;
    width: 32px;
    height: 32px;
    background: #FF8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    opacity: 0;
    transition: opacity .3s;
}

.product-card:hover .product-trash {
    opacity: 1;
    transition: opacity .3s;
}

.product-card img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 300px;
    height: 200px;
}

.product-card-wrapper {
    padding: 16px 16px 24px 16px;
}

.product-title {
    padding-bottom: 16px;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #3F3F3F;
}

.product-descr {
    padding-bottom: 32px;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #3F3F3F;
}

.product-price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #3F3F3F;
}

@media(max-width: 710px) {
    .product-card {
        margin: 0 auto;
        margin-bottom: 20px;
    }
}
</style>
