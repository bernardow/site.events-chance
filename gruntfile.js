module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    './dev/styles/main.css': './src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    './dist/styles/main.min.css': './src/styles/main.less'
                }
            }
        },
        replace: {
            dev: {    
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: '../styles/main.css'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flattern: true,
                        src: ['./src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: '/dist/styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_JS',
                            replacement: '/dist/src/scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flattern: true,
                        src: ['./src/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        uglify: {
            target: {
                files: {
                    './dist/src/scripts/main.min.js' : './src/scripts/main.js'
                }
            }
        },
        watch: {
            less: {
                files: ['./src/styles/main.less'],
                tasks: ['less:development', 'replace:dev']
            },
            html: {
                files: ['./src/index.html'],
                tasks: ['replace:dev']
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'replace:dist', 'uglify']);
}