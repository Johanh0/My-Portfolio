import gsap from '../../node_modules/gsap/all.js';

export function gsapAnimations() {
    const tl = gsap.timeline({defaults:{duration: .5}});

    tl.from(`.hero-animation`, {
        y: 50,
        opacity: 0,
        stagger: .6
    })

    tl.from(`.hero-animation_leftSlide`, {
        x: 50,
        opacity: 0
    })

    // tl.from(`.hero-animation_greeting`, {
    //     x: 100,
    //     opacity: 1
    // })

}