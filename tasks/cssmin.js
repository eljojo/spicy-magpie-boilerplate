module.exports = function () {
    'use strict';
    return {
        "css": {
            "files": {
                "dist/<%= data.pkg.version %>/<%= data.pkg.assets_dir %>/app.css": "<%= data.css %>"
            }
        },
        "options": {
            "shorthandCompacting": false
        }
    };
};
