module.exports = function () {
    'use strict';
    return {
        "html": {
            "src": "*.html",
            "dest": "dist/<%= data.pkg.version %>/",
            "options": {
                "process": function (content, srcpath) {
                    var fs = require("fs"),
                        data = JSON.parse(fs.readFileSync("package.json", "utf8"));
                    return content
                        .replace(/\%\[CHANGE TITLE\]/g, data.title)
                        .replace(/\%\[CHANGE AUTHOR\]/g, data.author)
                        .replace(/\%\[CHANGE TWITTER FOR AUTHOR\]/g, data.twitter)
                        .replace(/\%\[CHANGE DESCRIPTION\]/g, data.description)
                        .replace(/\%\[CHANGE KEYWORDS\]/g, data.keywords)
                        .replace(/\%\[CHANGE TWITTER FOR SITE\]/g, data.site_twitter)
                        .replace(/http\:\/\/www\.example\.org\//g, data.site_url)
                        .replace(/\%\[CHANGE VERSION\]/g, data.version)
                        .replace(/<html([\s\S]*?)>/, '<html lang="%[CHANGE LOCALE]" manifest="manifest.appcache">')
                        .replace(/\%\[CHANGE LOCALE\]/g, data.locale)
                        .replace(/<\!\-\-\%\[DEVELOPMENT\]\-\-\>([\s\S]*?)<\!\-\-\%\[\/DEVELOPMENT\]\-\-\>/gm, "");
                }
            }
        },
        "fonts": {
            "src": "fonts/**/*.*",
            "dest": "dist/<%= data.pkg.version %>/"
        },
        "images": {
            "src": "images/**/*.*",
            "dest": "dist/<%= data.pkg.version %>/"
        },
        "media": {
            "src": "media/**/*.*",
            "dest": "dist/<%= data.pkg.version %>/"
        },
        "other": {
            "src": [
                ".htaccess",
                "apple-touch-icon*.png",
                "crossdomain.xml",
                "favicon.ico",
                "humans.txt",
                "robots.txt"
            ],
            "dest": "dist/<%= data.pkg.version %>/"
        }
    };
};
