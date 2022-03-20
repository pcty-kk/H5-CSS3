window.onload = function() {
    let music = document.getElementById("music");
    let audio = document.getElementsByTagName("audio")[0];
    let page1 = document.getElementById("page1");
    let page2 = document.getElementById("page2");
    let page3 = document.getElementById("page3");

    audio.addEventListener("ended", function(event) {
        music.setAttribute("class", "");
    })

    // music.onclick = function() {
    //     if (audio.paused) {
    //         audio.play();
    //         this.style.webkitAnimationPlayState = "running";
    //     } else {
    //         audio.pause();
    //         this.style.webkitAnimationPlayState = "paused";
    //     }
    // }

    music.addEventListener("touchstart", function(event) {
        if (audio.paused) {
            audio.play();
            music.setAttribute("class", "play");
        } else {
            audio.pause();
            music.setAttribute("class", "");
        }
    }, false)

    page1.addEventListener("touchstart", function(event) {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top = "100%";

        setTimeout(function() {
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        }, 5500)
    }, false)
}