const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true
})

sr.reveal(`.home_data`)
sr.reveal(`.image_data`, {delay:500, scale:0.5})