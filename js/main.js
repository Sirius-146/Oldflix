$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function watch(){
    window.open("https://www.youtube.com/watch?v=eyu3SoJ_DAct=4s");
}
function info(){
    window.open("https://www.themoviedb.org/tv/121-doctor-who");
}