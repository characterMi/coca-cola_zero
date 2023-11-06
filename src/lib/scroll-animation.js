import gsap from "gsap"

export const modelScrollAnimation = (model) => {
    const tl = gsap.timeline()
    tl.to(model.rotation, {
        x: 41,
        scrollTrigger: {
            trigger: '.app',
            start: "top top",
            end: "bottom top",
            scrub: true,
            ease: 'none'
        }
    })
    tl.to('.zero', {
        y: 100,
        scrollTrigger: {
            trigger: '.zero',
            start: "top top",
            end: "bottom top",
            scrub: 5,

        }
    })
    tl.to('.right-article', {
        y: -700,
        scrollTrigger: {
            trigger: '.right-article',
            start: "top bottom",
            end: "bottom top",
            scrub: 1,

        }
    })
    tl.to('.banner', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.banner',
            start: "top 60%",
            end: "top 30%",
            scrub: 1,

        }
    })
}