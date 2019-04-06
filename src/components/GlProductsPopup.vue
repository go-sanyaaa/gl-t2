<template lang="pug">
    div.product__popup.popup
        button.popup__close(@click.stop="$emit('close')")
            i.popup__close-icon
        div.popup__wrapper
            div.popup__items-list
                div.popup__item(v-for="item in items")
                    div.popup__item-icon-wrapper
                        img.popup__item-icon(:src="`./img/icons/${item.icon}`")
                    p.popup__item-desc.text--bold {{item.title}}
</template>

<script>
export default {
    props: ["items","position"]
}
</script>

<style lang="sass" scoped>

.popup
    position: absolute
    top: -30px
    width: 720px
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    z-index: 200
    &--left
        left: 50%
        .popup__close
            right: calc(100% + 33px)
    &--right
        right: 50%
        .popup__close
            left: calc(100% + 33px)
    &:before
        z-index: 10
        content: ''
        display: block
        width: calc(100% - 76px)
        height: 100%
        position: absolute
        box-shadow: 0px 25px 100px #48AE4B
    &__wrapper
        min-width: 100%
        padding: 31px
        border-radius: 18px
        box-sizing: border-box
        background: $primary-gradient
        z-index: 100
        cursor: default
    &__items-list
        width: 100%
        display: flex
        flex-direction: row
        flex-wrap: wrap
    &__item
        width: calc(50% - 18px)
        background: #ffffff
        box-sizing: border-box
        padding: 35px 18px
        border-radius: 18px
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between
        margin: 9px
        &-desc
            width: 130px
            margin-left: 19px
        &-icon-wrapper
            display: flex
            flex-direction: row
            justify-content: center
            align-items: center
            height: 126px
            width: 126px
            border-radius: 50%
            background: $primary-gradient
            box-shadow: 0px 10px 40px #45AE4D
    &__close
        position: absolute
        width: 52px
        height: 52px
        background: $primary-gradient
        z-index: 101
        border-radius: 50%
        &:hover
            cursor: pointer
        &-icon
            display: flex
            width: 100%
            height: 100%
            background: url('./img/icons/close.svg') no-repeat center center
</style>


