import Swiper from "./node_modules/swiper/swiper.min.mjs";
import 'swiper/css'


const swiper = new Swiper({

    direction: 'horizontal',
    loop:true,

    pagination:{
        el: '.swiper-pagination'
    },

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})


