window.addEventListener('DOMContentLoaded', function() {
    var marquee = document.getElementById('myMarquee');
    var container = document.getElementById('marqueeContainer');
    var containerWidth = container.offsetWidth;

    // Calculate the duration for the marquee to reach the center
    var duration = (marquee.scrollWidth - containerWidth) / marquee.scrollAmount;

    // Set a timeout to stop the marquee when it reaches the center
    setTimeout(function() {
        marquee.stop();
    }, duration);
});