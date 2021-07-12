
let valorX = 100
let valorMobileItem1 = " -12vw"
let mouseVar = true
let valorMobileItem4 = "7vw"

//redeclarar mobile
const mobile = window.matchMedia('(max-width: 540px)').matches
if (mobile) {
    valorX = 40
    valorMobileItem4 = "9vw"
    valorMobileItem1 = " -20vw"
    mouseVar = false
}

//imagnes
const swiperImagens = new Swiper(".swiper-intro", {
    effect: "fade",
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: false,
    preloadImages: true,
    speed: 1000,
})

const tlLetra = gsap.timeline({
    paused: true,
})
tlLetra
const pagination = document.querySelector("#pag")
/* texto */
const swiperTexto = new Swiper(".titulo__container", {

    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    direction: "vertical",
    // speed: 1200,
    initialSlide: 2,
    preloadImages: true,
    mousewheel: {
        eventsTarget: ".carousel",
        // releaseOnEdges: true,
        // thresholdDelta: 10,
        // sensitivity: -10,
        // forceToAxis: true,
        // thresholdTime: 1000
    },
    mousewheel: mouseVar,

    // grabCursor: true,
    pagination: {
        el: pagination,
        clickable: true,
    },
    // onAny(eventName, ...args) {
    //     console.log('Event: ', eventName);
    //     // console.log('Event data: ', args);

    // },
    //eventos
    on: {
        setTransition: function () {
            /*     gsap.to(".titulo__container", {
                  scale:2,
                }) */
            let imagemAtual = swiperImagens.slides[swiperImagens.realIndex]

            let tlImagem = gsap.timeline({

            })

            tlImagem
                .to(imagemAtual, {
                    scale: 1.1,
                    duration: 2,
                    overwrite: true,
                    immediateRender: true,
                    // repeatRefresh: true,
                    // onComplete: () => {
                    //     tlImagem.clear()
                    // }
                })

            // tlImagem.play()


        },

        slideClange: function () {
            // 
        },

         transitionEnd: function () {
             if (this.realIndex === 4) {
                 console.log("oi");
                 this.mousewheel.disable()
             }


         },


        snapIndexChange: function () {
            let ativo = document.querySelector(".ativo .text")
            let desativado = document.querySelectorAll(".titulo__item .text")
            let tlLetra = gsap.timeline()

            desativado.forEach((i) => {
                gsap.to(i, {
                    opacity: 0,
                    visibility: "hidden",
                    webkitClipPath: "polygon(0% 100%, 0% 100%, 100% 100%, 0% 100%)"

                })
            })

            gsap.to(ativo, {
                opacity: 1,
                visibility: "visible",
                webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",


            })
            /*  gsap.to(".titulo__trailer", {
                 y: -20,
                 duration:.5
             }) */
            /*  gsap.to(".swiper-intro .swiper-slide-active img",{
                 scale:1.5,
                 duration:40,
             }) */



        },

        // scroll: function (el, evt) {
        //     if (!this.mousewheel.enabled) {
        //         setTimeout(() => {
        //             this.mousewheel.enable()

        //         }, 300);
        //     }

        // },
    },



    thumbs: {
        swiper: swiperImagens,
    },

})

function mudancaTexto() {
    swiperTexto.slides.forEach(i => i.classList.remove("ativo"))
    swiperTexto.slides[swiperTexto.realIndex].classList.add("ativo");

    let array = swiperTexto.slides
    let Antes = array.slice('0', swiperTexto.realIndex + 1).reverse();
    let depois = array.slice(swiperTexto.realIndex);

    let indexAtual = swiperTexto.realIndex


    let transicaoValue = .5

    Antes.forEach((i, index) => {
        gsap.to(i, {
            x: valorX * index,
            ease: "linear",
            duration: transicaoValue

        })
    })

    depois.forEach((i, index) => {

        gsap.to(i, {
            x: valorX * index,
            ease: "linear",
            duration: transicaoValue

        })

    })
    gsap.to(swiperTexto.slides[swiperTexto.realIndex], {
        x: 0,
        duration: transicaoValue,

    })


    //
    const trailerTitulo = ".titulo__trailer"
    if (indexAtual === 0) {
        gsap.to(trailerTitulo, {
            x: valorMobileItem1,
        })


    } else if (indexAtual === 1) {
        gsap.to(trailerTitulo, {
            x: " -3vw",
        })


    } else if (indexAtual === 4) {
        gsap.to(trailerTitulo, {
            x: valorMobileItem4,
        })

    } else {
        gsap.to(trailerTitulo, {
            x: 0,
        })

    }
}
mudancaTexto()


setTimeout(() => {
    swiperTexto.update()
}, 300);


swiperTexto.on("activeIndexChange", () => {
    mudancaTexto()
})

function inicio() {
    let ativo = document.querySelector(".ativo .text")

    gsap.to(ativo, {
        opacity: 1,
        visibility: "visible",
        webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    })

}
inicio()

