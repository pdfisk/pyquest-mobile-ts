browserify ./tmp/index.js -o ./tmp/mobile.js
java -jar ../../../work/tools/closure.jar --compilation_level WHITESPACE_ONLY --js ./tmp/mobile.js --js_output_file ./dist/mobile.js
