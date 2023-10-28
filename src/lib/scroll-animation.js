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
        y: 150,
        scrollTrigger: {
            trigger: '.zero',
            start: "top top",
            end: "bottom top",
            scrub: 3,

        }
    })
    tl.to('.right-article', {
        y: -700,
        scrollTrigger: {
            trigger: '.right-article',
            start: "top bottom",
            end: "bottom top",
            scrub: 2,

        }
    })
    tl.to('.banner', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.banner',
            start: "top 80%",
            end: "top center",
            scrub: 2,

        }
    })
}