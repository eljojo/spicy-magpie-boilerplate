module.exports = function () {
    'use strict';
    return {
        "less": {
            "files": "<%= data.less %>",
            "tasks": "less"
        },
        "sass": {
            "files": "<%= data.sass %>",
            "tasks": "sass"
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
