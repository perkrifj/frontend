const CLASS_DART_SINGLE = 'dart-score-single';
const CLASS_DART_DOUBLE = 'dart-score-double';
const CLASS_DART_TRIPLE = 'dart-score-triple';

module.exports = {
    onCreate(input) {
        var dart = input.dart;
        if (dart.value !== null) {
            dart.text = dart.value;
            dart.value = dart.value;
            dart.multiplier = dart.multiplier;

            if (dart.value == 0) {
                dart.text = 'Miss';
                dart.class = CLASS_DART_SINGLE;
            } else if (dart.multiplier == 3) {
                dart.class = CLASS_DART_TRIPLE;
                dart.text = 'T-' + dart.value;
            } else if (dart.multiplier == 2) {
                dart.class = CLASS_DART_DOUBLE;
                dart.text = 'D-' + dart.value;
            } else {
                dart.class = CLASS_DART_SINGLE;
                dart.text = dart.value;
            }
        }
        this.state = dart;
    }
}