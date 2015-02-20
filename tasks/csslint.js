module.exports = function () {
    'use strict';
    return {
        "css": {
            "src": "<%= data.css_dev %>",
            "options": {
                "adjoining-classes": false,
                "box-sizing": false,
                "font-faces": false
            }
        }
    };
};
