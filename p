browserify ./tmp/src/index.js -o ./tmp/desktop.js
java -jar ../lib/closure/compiler.jar --compilation_level WHITESPACE_ONLY --js ./tmp/desktop.js --js_output_file ./dist/desktop.js
