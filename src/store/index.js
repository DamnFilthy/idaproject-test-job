import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
        { id: 1, link: require('@/assets/images/1.png'), title: 'Камера', descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '10 000' },
        { id: 2, link: require('@/assets/images/1.png'), title: 'Наименование товара', descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '13 000' },
        { id: 3, link: require('@/assets/images/1.png'), title: 'Фото-камера', descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '12 000' },
        { id: 4, link: require('@/assets/images/1.png'), title: 'Видео-камера', descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '17 000' },
        { id: 5, link: require('@/assets/images/1.png'), title: 'Б/У-камера', descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', price: '22 000' },
    ],
    errors: {
        title: '',
        link: '',
        price: '',
    },
    link: '',
    title: '',
    descr: '',
    price: '',
    active: false,
    selected: 'По умолчанию',
  },
  mutations: {
    addProduct(state) {
        let newProduct = { id: 1, link: state.link, title: state.title, descr: state.descr, price: state.price }
        if (state.link && state.title && state.price != '') {
            state.products.push(newProduct)
            state.link = ''
            state.title = ''
            state.descr = ''
            state.price = ''
        }
        localStorage.setItem ("products", JSON.stringify(state.products)); 
    },
    deleteProduct(state, index) {
        state.products.splice(index, 1);
        localStorage.setItem ("products", JSON.stringify(state.products)); 
    },
    submit(state) {
        state.errors = {
            title: '',
            link: '',
            price: '',
        }
        if (!state.title){
            state.errors.title = 'Укажите наименование товара'
        }
        if (!state.link){
            state.errors.link =' Укажите ссылку на изображение товара'
        }
        if (!state.price){
            state.errors.price = 'Укажите стоимость товара'
        }
    },
    changeFilter(state){
        if (state.selected === 'По алфавиту'){
            state.products.sort((a, b) => a.title > b.title ? 1 : -1)
        } 
        if (state.selected === 'По убыванию цены'){
            state.products.sort((a, b) => parseInt(String(a.price).replace(/ /g, '')) > parseInt(String(b.price).replace(/ /g, '')) ? 1 : -1).reverse()
        } 
        if (state.selected === 'По возрастанию цены'){
            state.products.sort((a, b) => parseInt(String(a.price).replace(/ /g, '')) > parseInt(String(b.price).replace(/ /g, '')) ? 1 : -1)
        }
        if (state.selected === 'По умолчанию'){
            state.products.sort((a, b) => a.id > b.id ? 1 : -1)
        }  
    },
  },
  actions: {
  },
  modules: {
  }
})
