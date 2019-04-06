import Vue from "vue"
import VueTheMask from 'vue-the-mask'
import GlProducts from "@/components/GlProducts.vue"
import GlFeedback from "@/components/GlFeedback.vue"
import GlReviews from "@/components/GlReviews.vue"

Vue.use(VueTheMask)

var vm = new Vue({
    el: "#app",
    data: {
        title: "Hello"
    },
    components:{
        GlProducts,
        GlFeedback,
        GlReviews
    }
})