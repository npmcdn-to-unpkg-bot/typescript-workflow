var gulp = require('gulp');
var connect = require('gulp-connect');
var ts = require('gulp-typescript');
var tsConfig = require('./tsconfig.json');

var PATH = {
  APP: './app/',
  BUILD: './build/',
  SRC: {
    JS: 'js/**/*.ts',
    HTML: 'index.html'
  },
  DEST: {
    JS: 'js',
    HTML: ''
  }
};

gulp.task('app/js', function() {
  gulp.src(PATH.APP+PATH.SRC.JS)
      .pipe(ts(tsConfig))
      .pipe(gulp.dest(PATH.BUILD+PATH.DEST.JS));
});

gulp.task('app/html', function() {
  gulp.src(PATH.APP+PATH.SRC.HTML)
    .pipe(gulp.dest(PATH.BUILD+PATH.DEST.HTML));
});

gulp.task('build', ['app/js', 'app/html']);

// WATCH FILES FOR CHANGES
gulp.task('watch', function() {
  gulp.watch(PATH.APP+PATH.SRC.JS, ['app/js']);
  console.log('watching '+ PATH.APP+PATH.SRC.JS);
  gulp.watch(PATH.APP+PATH.SRC.HTML, ['app/html']);
  console.log('watching '+ PATH.APP+PATH.SRC.HTML);
});


// WEB SERVER
gulp.task('serve', function() {
  connect.server({
    root: [__dirname],
    port: 8000,
    livereload: false
  });
});


gulp.task('default', ['watch', 'serve', 'app/js', 'app/html']);
