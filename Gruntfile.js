module.exports = function (grunt) { // Обязательная функция-обертка
    // Конфигурация проекта
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //------------------------------------------------------------
        less: { // Task less
            options: {
                expand: true
            },
            dev: { // Target
                options: {
                    strictMath: true
                },
                files: {
                    'css/all.css': ['less/all.less']
                }
            },
            release: { // Target
                options: {
                    strictMath: true,
                    yuicompress: true
                },
                files: {
                    'css/all.css': ['less/all.less']
                }
            }
        },
        //------------------------------------------------------------
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
                dest: 'dist/built.js'
            }
        },
        //------------------------------------------------------------
        watch: {
            less: {
                files: 'less/**',
                tasks: ['less:dev'],
                options: {
                    interrupt: true
                }
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['css/**']
            }
        }
        //------------------------------------------------------------
    });
    // Инициализация плагинов, таски которых мы вызываем
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
};