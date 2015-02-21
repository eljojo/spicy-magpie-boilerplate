module.exports = function () {
    'use strict';
    return {
        "dev": {
            "bsFiles": {
                "src": [
                    "*.html",
                    "<%= data.pkg.assets_dir %>/*.css",
                    "stylesheets/*.css",
                    "stylesheets/*.less",
                    "<%= data.pkg.assets_dir %>/*.js",
                    "javascripts/*.js",
                    "fonts/**/*.*",
                    "images/**/*.*",
                    "media/**/*.*"
                ]
            },
            "options": {
                "watchTask": true,
                "port": "<%= data.pkg.server_port %>",
                "notify": false,
                "tunnel": true,
                "server": {
                    "baseDir": "./",
                    "directory": false
                }
            }
        }
    };
};
