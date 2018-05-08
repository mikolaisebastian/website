# pterodactyl.io

This is the Pterodactyl project website.

## Compilation

We are using [PostCSS](http://postcss.org/) and [Pug](https://pugjs.org/api/getting-started.html) to make creating the website easier. Therefore the website needs to be built before it can be viewed in a browser. To automate that we are using [gulp](https://gulpjs.com/).

You'll need to install the dependencies and `gulp-cli` first.
```sh
# install dependencies
npm i
# install gulp cli globally
npm i -g gulp-cli
```

For development serve the website locally using [Browsersync](https://browsersync.io/).
```
gulp serve
```

To just build the website run
```
gulp build
```

## Dependencies
This is everything we use on the website, apart from the gulp related tooling.

 * [tailwindcss](https://tailwindcss.com/docs/what-is-tailwind/) - the main css framework
 * [jQuery](https://jquery.com) - well, jQuey, also slick.js depends on it
 * [slick.js](https://kenwheeler.github.io/slick/) - the screenshot gallery
 * [particles.js](https://vincentgarreau.com/particles.js/) - the fancy particles in the header
 * [elegant themes line](https://www.elegantthemes.com/blog/resources/how-to-use-and-embed-an-icon-font-on-your-website) - the feature icons
 * [Poppins](https://fonts.google.com/specimen/Poppins) - the font