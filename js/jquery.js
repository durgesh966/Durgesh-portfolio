function animateProgressBar() {
    $('.progress-bar').each(function (index) {
        var progressBar = $(this);
        var progressWidth = progressBar.data('progress');
        var currentWidth = parseInt(progressBar.css('width'));
        setTimeout(function () {
            progressBar.animate({ width: progressWidth + '%' }, 5000);
            progressBar.children('span').text(progressWidth + '%'),5000;
        }, index * 500);
    });
}
$(document).ready(function () {
    animateProgressBar();
});