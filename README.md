# Spicy Magpie's Boilerplate

## What is it?

It is a design boilerplate for new HTML projects. It provides a base
structure and a toolkit to help developing Web projects, playing nicely
with other frameworks and libraries.

## Why should I use it?

The boilerplate provides a complete environment for you, that automates
some tasks such as writing the sitemap and the cache manifest. It also
provides a default Bower installation, a set of default HTML pages, CSS
stylesheets for mobile design and much more.

## How to install it?

In simple steps:

  - Install [Node.js](http://www.nodejs.org/).
  - Install [Grunt](http://www.gruntjs.com/).
  - Install [Bower](http://bower.io).
  - Get your copy of the boilerplate and extract it.
  - Go to your newly created project directory with the terminal.
  - Run **npm install**.
  - Run **bower install**.

## How to use it?

  - Run **grunt** on your project directory.
  - Open your project directory with your IDE.
  - Edit the values for your project on the **package,json** file.
  - Modify files and watch the changes.
  - In the console, you will see the access URL's. You can watch the changes
  across multiple browsers and devices.

## How can I add my own assets?

If you want to add fonts, images, audio and video, you can use the directories
created for that purpose. Grunt will just copy those files when creating the
distribution.

CSS stylesheets can be added to the stylesheets/ directory but there is one
extra step: Grunt must know that there are new files containing code before
configuring the project. You must declare those files in the **filelist.json**
manifest. The declaration is simple:

    {
        "css": [
            {
                "name": "stylesheets/your/new/file.css",
                "type": "css",
                "group" "development"
            }
        ]
    }

LESS stylesheets can be added the same way to the CSS section, but since these
files are intended to generate CSS rather than being used as-is, these need to
be declared as follows:

    {
        "css": [
            {
                "source": "stylesheets/your/new/file.less",
                "name": "tmp/your/new/file.css",
                "type": "css",
                "group" "development"
            }
        ]
    }

Notice that the name of the object points to the **tmp/** directory, to avoid
polluting your environment with intermediate code and avoid clashes with CSS
stylesheets.

The same directives for LESS stylesheets are applied to SASS and SCSS styles,
but in those cases, the type is "sass". Also, you need Ruby and the **sass**
gem installed for SASS files to be compiled.

## I finished my project. What else should I do?

  - Run **grunt dist** on your project directory.
  - Publish the content on the __dist/__ directory.

## Suggestions?

Drop me a line at spicy.magpie@gmail.com

Your suggestions will be greatly appreciated!
