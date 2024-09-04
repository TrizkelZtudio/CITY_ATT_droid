
const logoAnimation = anime.timeline({
    autoplay: true,
    delay: 400
});

logoAnimation
    .add({
        targets: "#logo",
        translateY: [-100, 0],
        opacity: [0, 1],
        elasticity: 5000,
        duration: 1000,
        offset: 0
    })
    .add({
        targets: "#logo",
        translateX: [0, -100],
        duration: 700,
        easing: "easeOutExpo",

    })
    .add({
        targets: "#logo-hexagon",
        duration: 0,
        elasticity: 00,
    })
    .add({
        targets: "#logo-text",
        translateX: ["-100%", 0],
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutExpo",
    })
    .add({
        targets: "#ft-animate",
        opacity: [0, 1],
        duration: 700,
        easing: "easeOutExpo",
    });