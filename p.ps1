browserify ./tmp/src/index.js -o ./tmp/mobile.js
java -jar ./lib/compiler.jar --compilation_level WHITESPACE_ONLY --js ./tmp/mobile.js --js_output_file ./dist/mobile.js
