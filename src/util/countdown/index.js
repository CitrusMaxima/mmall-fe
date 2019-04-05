require('./jquery.countdown.js');

$(function () {
    var ts = (new Date()).getTime() + 10 * 24 * 60 * 60 * 1000;
    $('#countdown').countdown({
        timestamp: ts
    });
});
