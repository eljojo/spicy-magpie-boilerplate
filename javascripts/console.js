/**
 * Spicy Magpie's Boilerplate
 */

(function () {
    'use strict';
    var methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeStamp', 'trace', 'warn'
        ],
        noop = function () {},
        length = methods.length,
        console = (window.console = window.console || {}),
        method;

    while (length > 0) {
        method = methods[length];
        if (!console[method]) {
            console[method] = noop;
        }
        length = length - 1;
    }
}());
