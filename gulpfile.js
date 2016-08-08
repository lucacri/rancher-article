var gulp = require('gulp'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
	markdown = require('gulp-markdown'),
    wrapper = require('gulp-wrapper');
 


gulp.task('md', function () {
    gulp.src('./node_modules/github-markdown-css/github-markdown.css')
    .pipe(gulp.dest('dist'));

    gulp.src('./images/*')
    .pipe(gulp.dest('dist/images'));

    gulp.src('*.md')
        .pipe(markdown())
        .pipe(wrapper({
       header: '<html>\n<meta charset="utf-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n  <meta name="description" content="api doc">\n  <meta name="viewport" content="width=device-width">\n  <link href="/github-markdown.css" rel="stylesheet">\n<style>body{box-sizing:border-box;min-width:200px;max-width:980px;margin:0 auto;padding:45px;}</style>\n</head><body class="markdown-body">',
       footer: '</body></html>\n'
    }))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());


});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('*.md', ['md']);
});
