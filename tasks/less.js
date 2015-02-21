module.exports = function () {
    'use strict';
    return {
        "compile": {
            "files": "<%= data.less_object %>",
            "options": {
                "syncImport": true
            }
        }
    };
};
