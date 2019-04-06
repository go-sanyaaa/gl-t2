<template lang="pug">
    div.feedback
        div.feedback__block(:class="isSending ? 'feedback__block--sending': 'gl-shadow'")
            div.feedback__wrapper
                div.feedback__data-wrapper
                    template(v-if="!isSending")
                        div.feedback__title
                            p.feedback__title-p.text--center.text--bold Оставьте заявку, и мы позвоним вам <br> в ближайшее время
                        form#feedback.feedback__form(method="POST" @submit.prevent="sendForm")
                            the-mask.input.feedback__phone(
                                v-model="phone" :mask="['+7 9## ### ####']"
                                :masked="true" placeholder="+7 9__ ___ ____"
                                name="phone-number" required
                            )
                    template(v-else)
                        div.feedback__message
                            p.feedback__message-p
                                | Спасибо, что оставили заявку. <br>
                                | Мы скоро вам перезвоним.
                div.feedback__actions
                    button.button.feedback__send-button(form="feedback" :disabled="isSending" :class="{'button--disabled':isSending}") отправить заявку
                        img.feedback__button-icon(src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSIzMCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNDIuNiAxNmExIDEgMCAwIDAgMC0xLjhMMTQgLjlhMSAxIDAgMCAwLTEuNC45VjE0SDRhMSAxIDAgMCAwLS43IDEuOGw5LjQgOHY0LjVhMSAxIDAgMCAwIDEuNCAxTDQyLjYgMTZ6bS0yOCA4YTEgMSAwIDAgMCAwLTFWMTZoMTYuNWExIDEgMCAxIDAgMC0ySDE0LjZWMy40TDM5LjggMTUgMTQuNiAyNi44VjI0em0tMi03Ljl2NS4xbC02LTVoNnptLTExLTdhMSAxIDAgMCAwIDAgMmg4YTEgMSAwIDAgMCAwLTJoLTh6bTAgMTEuM2ExIDEgMCAxIDAgMCAyaDIuM2ExIDEgMCAxIDAgMC0ySDEuNnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==")
</template>

<script>
    import axios from "axios"

    export default {
        name: "GlFeedback",
        data(){
            return {
                phone: "",
                isSending: false
            }
        },
        methods:{
            sendForm(){
                const {phone} = this
                axios.post("https://api.myjson.com/bins",{
                    phone
                }).then(resp => {
                    this.isSending = true
                })
            }
        }
    }
</script>

<style lang="sass">
    .feedback
        margin-top: 100px
        width: 100%
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        &__block
            box-sizing: border-box
            background: #FFF
            border-radius: 18px
            &--sending
                border: 1px solid $light-grey-color
        &__wrapper
            width: 470px
            height: 100%
            display: flex
            flex-direction: column
            align-items: center
            padding: 40px 160px
        &__data-wrapper
            height: 148px
        &__form
            max-width: 360px
            box-sizing: border-box
            margin-top: 33px
        &__phone
            text-align: center
            width: 100%
        &__actions
            margin-top: 42px
        &__send-button
            display: flex
            flex-direction: row
            align-items: center
        &__button-icon
            margin-left: 8px
        &__message
            height: 100%
            display: flex
            flex-direction: column
            justify-content: center
        &__message-p
            font-family: "Roboto Condensed"
            text-align: center
            color: $dark-color
            font-size: 36px
            font-weight: bold
</style>
