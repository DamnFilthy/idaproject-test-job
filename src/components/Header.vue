<template>
    <header>
        <div class="title">Добавление товара</div>
        <div class="filters">
            <select class="form-control" v-model="this.$store.state.selected" @change="onChange">
                <option selected class="option">По умолчанию</option>
                <option class="option">По алфавиту</option>
                <option class="option">По убыванию цены</option>
                <option class="option">По возрастанию цены</option>
            </select>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  methods:{
      onChange(){
          this.$store.commit('changeFilter')
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 16px;
}
.title {
	font-weight: 600;
	font-size: 28px;
	line-height: 35px;
	color: #3F3F3F;
}
select {
	padding: 10px 27.49px 11px 16px;
	font-size: 12px;
	line-height: 15px;
	color: #B4B4B4;
	outline: none;
	height: 36px;
	background: #FFFEFB;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	border: 1px solid #B4B4B4;
	border-radius: 4px;
}
option {
	font-weight: normal;
	font-size: 12px;
	line-height: 15px;
	color: #B4B4B4;
}
.option {
	font-weight: normal;
	font-size: 12px;
	line-height: 15px;
	color: #B4B4B4;
}

@media(max-width: 610px) {
    header {
       flex-direction: column;
    }
}
</style>
