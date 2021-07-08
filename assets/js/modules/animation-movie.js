// gsap.set([resumoBannerHome, botoesHome], {
//     autoAlpha: 0,
//     y: '150%'
// })
// gsap.set(bannerHomeH1, {
//     y: '150%',
//     skewY: 5,
//     autoAlpha: 0
// })

// const tl = gsap.timeline()

// // const tlMenu = gsap.timeline()


// //animação da intro quando imagem carrega

export

function animationSobre() {
    const imgIntro = document.querySelector(".img__intro")
    const h1Intro = document.querySelector(".intro__text h1")
    const spanIntro = document.querySelector(".intro__text span")

    const tl = gsap.timeline({
        paused: true,
    })

    gsap.set([h1Intro, spanIntro], {
        y: '190%',
        skewY: -3,
        skewX: -1,
        autoAlpha: 0,
        rotateX: -20,
        transformOrigin: "center center"
    })

    tl
        .to([h1Intro, spanIntro], 2, {
            y: '0%',
            skewY: 0,
            skewX: 0,
            autoAlpha: 1,
            rotateX: 0,

            ease: Circ.easeOut,
            staagger: 1,
            rotateX: 0,

        })


    window.addEventListener("load", event => {
        let isLoaded = imgIntro.complete && imgIntro.naturalHeight !== 0;
        if (isLoaded)
            tl.play()

    });

    //scroll
    const tl2 = gsap.timeline({
        paused: true,
        smoothChildTiming: true,
    })

    // tl2

    ScrollTrigger.create({
        trigger: imgIntro,
        once: false,
        start: "100px center", // [trigger] [scroller] positions
        end: "20px 80%",
        scrub: 1,
        snap: 1 / 100,
        markers: true,
        once: false,
        // markers: true,
        toggleActions: "play pause resume reset",
        onEnter: function () {
            gsap.to(imgIntro, {
                scale: 2,
                y: -100,
                duration: 20,
            })
        },
        /*   onScrubComplete: function(){
              console.log("terminou");
          },
          onLeave: function(){
              console.log("saiu");
          },
          toggleClass: "TESTE", */
        // onEnterBack: function () {
        //     animateFrom(elem, -1)
        // },
        // onLeave: function () {
        //     hide(elem)
        // } // assure that the element is hidden when scrolled into view
    });

}