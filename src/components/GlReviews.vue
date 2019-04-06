<template lang="pug">
    div.reviews
        div.reviews__elem.review-elem(
            v-for="(review) in reviews"
            :class="`review-elem--depth-${review.depth}`"
            :key="`review-${review.id}`"
        )
            div.review-elem__avatar
                img.review-elem__avatar-img(:src="review.img")
            div.review-elem__data
                span.review-elem__author {{review.author}}
                p.review-elem__text {{review.text}}
        button.reviews__cntrl(@click.prevent="nextReview")
            img.reviews__cntrl-icon(src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuMSAxMi45bDkuOSA5Ljg5OSA5LjktOS45IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+")

</template>

<script>
    export default {
        data(){
          return{
              reviews: [
                  {id:"1",depth:"0",img:"./img/icons/avatar.png", author: "Алексей Гано", text: "Отличное и удобное приложение. Классные возможности, отзывчивая поддержка."},
                  {id:"2",depth:"1",img:"./img/icons/avatar.png", author: "Алексей Гано", text: "Отличное и удобное приложение. Классные возможности, отзывчивая поддержка."},
                  {id:"3",depth:"2",img:"./img/icons/avatar.png", author: "Алексей Гано", text: "Отличное и удобное приложение. Классные возможности, отзывчивая поддержка."},
              ]
          }
        },
        name: "GlReviews",
        methods: {
            nextReview(){
                this.reviews.map((el,i,arr)=>{
                    el.depth = --el.depth < 0 ? 2 : el.depth
                })
            }
        }
    }
</script>

<style lang="sass" scoped>
    .reviews
        margin-top: 30px
        position: relative
        display: flex
        flex-direction: column
        align-items: center
        &__cntrl
            cursor: pointer
            border: none
            background: none
            position: absolute
            z-index: 100
            bottom: 18px
    .review-elem
        width: 560px
        display: flex
        flex-direction: row
        align-items: flex-start
        box-sizing: border-box
        border-radius: 18px
        padding: 20px
        background: $primary-gradient
        transition: all .29s ease-in-out
        &--depth-0
            z-index: 10
            transform: translateY(0) scale(1)
        &--depth-1
            position: absolute
            opacity: .5
            z-index: 5
            transform: translateY(-40px) scale(.85)
        &--depth-2
            position: absolute
            opacity: .2
            bottom: 20px
            z-index: 0
            transform: translateY(-60px) scale(.7)

        &__avatar
            padding: 12px
            background: url("./img/icons/circles.svg") no-repeat center center
            display: flex
            align-items: center
            justify-content: center
        &__data
            padding: 40px 0 20px 20px
        &__author
            color: #FFF
        &__text
            color: #FFF
            height: 90px
            font-size: 20px
            font-weight: bold
            margin-top: 20px
</style>