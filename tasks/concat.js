module.exports = function () {
    'use strict';
    return {
        "css": {
            "src": "<%= data.css %>",
            "dest": "<%= data.pkg.assets_dir %>/app.css"
        },
        "js": {
            "src": "<%= data.js %>",
            "dest": "<%= data.pkg.assets_dir %>/app.js"
        }
    };
};
