document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('#video');

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1,
    }

    function callback(entries, observer) {
        if(entries[0].isIntersecting) {
            if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1){
                video.play();
            } else {
                video.play();
                video.muted = false;
            }
        } else {
            video.pause();
        }
    }

    const observer = new IntersectionObserver(callback, options);
    observer.observe(video);
}, false);
