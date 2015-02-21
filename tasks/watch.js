module.exports = function () {
    'use strict';
    return {
        "less": {
            "files": "<%= data.less %>",
            "tasks": "less"
        },
        "css": {
            "files": "<%= data.css_dev %>",
            "tasks": [
                "clean:css",
                "csslint:css",
                "concat:css"
            ]
        },
        "js": {
            "files": "<%= data.js_dev %>",
            "tasks": [
                "clean:js",
                "jshint:js",
                "concat:js"
            ]
        }
    };
};
