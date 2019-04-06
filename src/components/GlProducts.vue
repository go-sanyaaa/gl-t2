<template lang="pug">
    div.products
        div.products__item(
            v-for="product in products" 
            :class="product.id == popup ? 'products__item--active' : ''"
        )
            span.products__link(@click.stop="popup = product.id") Подробнее
            div.products__wrapper(@click.stop="popup = product.id")
                img.products__img(:src="product.img")
                transition(name="fade")
                    gl-products-popup(
                        v-show="product.id == popup" 
                        :key="`popup-${product.id}`"
                        @close="closePopup" 
                        :items="product.items"
                        :class="`popup--${product.position}`"
                    )

</template>

<script>
import GlProductsPopup from "../components/GlProductsPopup.vue"

export default {
    data(){
        return {
            popup: "",
            products: [
                {
                    id: "camera",
                    img: "./img/cam.png",
                    position: "left",
                    items:[
                        {icon:'wifi.svg',title: 'Работает по Wi-Fi или кабелю'},
                        {icon:'resolution.svg',title: 'Разрешение 1280х960 (HD)'},
                        {icon:'night.svg',title: 'Ночная съемка'},
                        {icon:'rec.svg',title: 'Запись звука и видео'},
                        {icon:'angle.svg',title: 'Угол обзора 100°'},
                        {icon:'cable.svg',title: 'Длина кабеля 1.5 метра'},
                    ]
                },
                {
                    id: "smart",
                    img: "./img/smart.png",
                    position: "right",
                    items:[
                        {icon:'run.svg',title: 'Уведомление на телефон о движении'},
                        {icon:'servers.svg',title: 'Хранение данных на защищенных серверах'},
                        {icon:'family.svg',title: 'Совместный доступ у членов семьи'},
                        {icon:'video.svg',title: 'Скачивание/ удаление архивных записей'},
                        {icon:'geo.svg',title: 'Доступ из любой точки мира'},
                        {icon:'notofications.svg',title: 'Уведомление о приходе «Домашних»'}
                    ]
                }
            ]
        }
    },
    methods:{
        closePopup(){
            this.popup = ""
        }
    },
    components: {
        GlProductsPopup
    }
}
</script>


<style lang="sass" scoped>
    .fade-enter-active, .fade-leave-active 
        transition: opacity .5s
    .fade-enter, .fade-leave-to
        opacity: 0
    .products
        margin: 100px auto 60px
        position: relative
        display: flex
        flex-direction: row
        &__item
            position: relative
            width: calc(100% / 2 - 90px)
            margin: 0 45px
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            &:before
                z-index: -1
                content: ''
                display: block
                width: calc(100% - 76px)
                height: 100%
                position: absolute
                box-shadow: 0 25px 100px #48AE4B
            &--active
                &:before
                    box-shadow: none
                & .products__wrapper 
                    background: #f4f4f4
                    border: 1px solid #e5e5e5
                & .products__img
                    opacity: 0.5
        &__link
            top: calc(100% + 15px)
            position: absolute
            cursor: pointer
            color: #747474
            font-size: 20px
            font-weight: bold
            letter-spacing: .05em
            text-transform: uppercase
        &__wrapper
            cursor: pointer
            width: 100%
            height: 100%
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            padding: 50px 90px
            border-radius: 18px
            box-sizing: border-box
            background: $primary-gradient
</style>

