
var gulp          = require('gulp'),
    harmonize     = require('harmonize')(),
    handlebars    = require('handlebars'),
    data          = require('gulp-data'),
    hb           = require('gulp-hb'),
    rename       = require('gulp-rename');


gulp.task('default', function () {
  gulp.src('./source/templates/readme.hbs')
    .pipe(hb({
      bustCache: true,
      data: './podcasts.json',
      helpers: './source/helpers/**/*.js'
    }))
    .pipe(rename("README.md"))
    .pipe(gulp.dest('./'))
});
