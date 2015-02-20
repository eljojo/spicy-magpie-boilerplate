module.exports = function () {
    'use strict';
    return {
        "css": "<%= data.pkg.assets_dir %>/*.css",
        "js": "<%= data.pkg.assets_dir %>/*.js",
        "build": "<%= data.pkg.assets_dir %>/",
        "dist": "dist/",
        "tmp": "tmp/"
    };
};
