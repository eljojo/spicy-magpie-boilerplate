module.exports = function () {
    'use strict';
    return {
        "js": {
            "src": "<%= data.js %>",
            "dest": "dist/<%= data.pkg.version %>/<%= data.pkg.assets_dir %>/app.js",
            "options": {
                "compress": true
            }
        }
    };
};
