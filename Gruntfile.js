module.exports = function(grunt) {
    
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/main.css": "less/main.less"
                }
            },
            files: {
                "css/main.css": "less/main.less"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    
};