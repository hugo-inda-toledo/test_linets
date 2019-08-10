

let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let notify = require('gulp-notify');
let gls = require('gulp-live-server');

//Tarea para comprimir archivos css
gulp.task('comprimir-css', function() {
 return gulp.src('css/*.css') //Ruta de la carpeta css apuntando a los archivos `.css`
  .pipe(cleanCSS({compatibility: 'ie8'})) //Comprime los archivos `.css`
  .pipe(gulp.dest('dist')) //Carpeta donde se guardara el archivo `.css` comprimido
  .pipe(notify("Tarea comprimir-css terminada")); //Mensaje gracias al plugin `gulp-notify`
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('watch', function(){
 gulp.watch('./css/**/*', gulp.series('comprimir-css'));
});

gulp.task('serve',()=> {      
    var server = gls.static('.', 8942);  
	server.start();       
});

//Tarea por defecto
gulp.task('default',gulp.parallel('watch', 'comprimir-css', 'serve'));