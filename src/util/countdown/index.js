require('./jquery.countdown.js');
var _countdown = {
    countDown: function (ms) {
        var ts = (new Date()).getTime() + ms;
        $('#countdown').countdown({
            timestamp: ts
        });
    }
};
module.exports = _countdown;
/*$(function () {
    var ts = (new Date()).getTime() + 10 * 24 * 60 * 60 * 1000;
    $('#countdown').countdown({
        timestamp: ts
    });
});*/
