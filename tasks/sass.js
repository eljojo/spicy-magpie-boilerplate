module.exports = function () {
    'use strict';
    return {
        "compile": {
            "files": "<%= data.sass_object %>",
            "options": {
                "style": "expanded",
                "sourcemap": "none"
            }
        }
    };
};
