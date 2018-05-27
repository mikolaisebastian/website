const gulp = require('gulp')
const plumber = require('gulp-plumber')
const browserSync = require('browser-sync').create()
const clean = require('gulp-clean')

const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')

const pug = require('gulp-pug')

const vendor = [
    'slick-carousel/slick/'
]

function reload(done) {
    browserSync.reload();
    done();
}

gulp.task('clean', () => {
    return gulp.src('./build/*')
        .pipe( clean() )
})

gulp.task('html', () => {
    return gulp.src('./src/**/*.pug')
        .pipe( plumber() )
        .pipe( pug() )
        .pipe( gulp.dest('./build/') )
})

gulp.task('css', () => {
    return gulp.src('./src/assets/css/main.css')
        .pipe( plumber() )
        .pipe( sourcemaps.init() )
        .pipe( postcss([
            require('postcss-import'),
            require('tailwindcss')('./tailwind.js'),
            require('precss'),
            require('autoprefixer')
        ]) )
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest('./build/assets/css/') )
        .pipe( browserSync.stream() )
})

gulp.task('copy', () => {
    return gulp.src(['./src/assets/**/*.+(png|json|svg)', './src/assets/+(fonts|js)/**', './src/favicon.ico'], { relative: true, base: './src/' })
        .pipe( plumber() )
        .pipe( gulp.dest('./build/'))
})

gulp.task('build', gulp.series('clean', gulp.parallel('copy', 'html', 'css')))

gulp.task('serve', gulp.series(gulp.parallel('copy', 'html', 'css'), () => {
    browserSync.init({
        server: "./build"
    })

    gulp.watch('./src/assets/**/*.png', gulp.parallel('copy'))
    gulp.watch('./src/assets/css/**/*.css', gulp.parallel('css'))
    gulp.watch('./src/**/*.pug', gulp.series('html', reload))
}))
