

module.exports = {
    getSuggestion(score) {
        switch (score) {
            case 2: return [{modifier:'double',value:'1'}];
            case 3: return [{modifier:'single',value:'1'},{modifier:'double',value:'1'}];
            case 4: return [{modifier:'double',value:'2'}];
            case 5: return [{modifier:'single',value:'1'},{modifier:'double',value:'2'}];
            case 6: return [{modifier:'double',value:'3'}];
            case 7: return [{modifier:'single',value:'3'},{modifier:'double',value:'2'}];
            case 8: return [{modifier:'double',value:'4'}];
            case 9: return [{modifier:'single',value:'1'},{modifier:'double',value:'4'}];
            case 10: return [{modifier:'double',value:'5'}];
            case 11: return [{modifier:'single',value:'3'},{modifier:'double',value:'4'}];
            case 12: return [{modifier:'double',value:'6'}];
            case 13: return [{modifier:'single',value:'5'},{modifier:'double',value:'4'}];
            case 14: return [{modifier:'double',value:'7'}];
            case 15: return [{modifier:'single',value:'7'},{modifier:'double',value:'4'}];
            case 16: return [{modifier:'double',value:'8'}];
            case 17: return [{modifier:'single',value:'1'},{modifier:'double',value:'8'}];
            case 18: return [{modifier:'double',value:'9'}];
            case 19: return [{modifier:'single',value:'3'},{modifier:'double',value:'8'}];
            case 20: return [{modifier:'double',value:'10'}];
            case 21: return [{modifier:'single',value:'5'},{modifier:'double',value:'8'}];
            case 22: return [{modifier:'double',value:'11'}];
            case 23: return [{modifier:'single',value:'7'},{modifier:'double',value:'8'}];
            case 24: return [{modifier:'double',value:'12'}];
            case 25: return [{modifier:'single',value:'9'},{modifier:'double',value:'8'}];
            case 26: return [{modifier:'double',value:'13'}];
            case 27: return [{modifier:'single',value:'11'},{modifier:'double',value:'8'}];
            case 28: return [{modifier:'double',value:'14'}];
            case 29: return [{modifier:'single',value:'13'},{modifier:'double',value:'8'}];
            case 30: return [{modifier:'double',value:'15'}];
            case 31: return [{modifier:'single',value:'15'},{modifier:'double',value:'8'}];
            case 32: return [{modifier:'double',value:'16'}];
            case 33: return [{modifier:'single',value:'1'},{modifier:'double',value:'16'}];
            case 34: return [{modifier:'double',value:'17'}];
            case 35: return [{modifier:'single',value:'3'},{modifier:'double',value:'16'}];
            case 36: return [{modifier:'double',value:'18'}];
            case 37: return [{modifier:'single',value:'5'},{modifier:'double',value:'16'}];
            case 38: return [{modifier:'double',value:'19'}];
            case 39: return [{modifier:'single',value:'7'},{modifier:'double',value:'16'}];
            case 40: return [{modifier:'double',value:'20'}];
            case 41: return [{modifier:'single',value:'9'},{modifier:'double',value:'16'}];
            case 42: return [{modifier:'single',value:'10'},{modifier:'double',value:'16'}];
            case 43: return [{modifier:'single',value:'11'},{modifier:'double',value:'16'}];
            case 44: return [{modifier:'single',value:'12'},{modifier:'double',value:'16'}];
            case 45: return [{modifier:'single',value:'13'},{modifier:'double',value:'16'}];
            case 46: return [{modifier:'single',value:'14'},{modifier:'double',value:'16'}];
            case 47: return [{modifier:'single',value:'15'},{modifier:'double',value:'16'}];
            case 48: return [{modifier:'single',value:'16'},{modifier:'double',value:'16'}];
            case 49: return [{modifier:'single',value:'17'},{modifier:'double',value:'16'}];
            case 50: return [{modifier:'single',value:'18'},{modifier:'double',value:'16'}];
            case 51: return [{modifier:'single',value:'19'},{modifier:'double',value:'16'}];
            case 52: return [{modifier:'single',value:'20'},{modifier:'double',value:'16'}];
            case 53: return [{modifier:'single',value:'13'},{modifier:'double',value:'20'}];
            case 54: return [{modifier:'single',value:'14'},{modifier:'double',value:'20'}];
            case 55: return [{modifier:'single',value:'15'},{modifier:'double',value:'20'}];
            case 56: return [{modifier:'single',value:'16'},{modifier:'double',value:'20'}];
            case 57: return [{modifier:'single',value:'17'},{modifier:'double',value:'20'}];
            case 58: return [{modifier:'single',value:'18'},{modifier:'double',value:'20'}];
            case 59: return [{modifier:'single',value:'19'},{modifier:'double',value:'20'}];
            case 60: return [{modifier:'single',value:'20'},{modifier:'double',value:'20'}];
            case 61: return [{modifier:'triple',value:'15'},{modifier:'double',value:'8'}];
            case 62: return [{modifier:'triple',value:'10'},{modifier:'double',value:'16'}];
            case 63: return [{modifier:'triple',value:'13'},{modifier:'double',value:'12'}];
            case 64: return [{modifier:'triple',value:'16'},{modifier:'double',value:'8'}];
            case 65: return [{modifier:'triple',value:'19'},{modifier:'double',value:'4'}];
            case 66: return [{modifier:'triple',value:'10'},{modifier:'double',value:'18'}];
            case 67: return [{modifier:'triple',value:'17'},{modifier:'double',value:'8'}];
            case 68: return [{modifier:'triple',value:'20'},{modifier:'double',value:'4'}];
            case 69: return [{modifier:'single',value:'19'},{modifier:'double',value:'25'}];
            case 70: return [{modifier:'triple',value:'18'},{modifier:'double',value:'8'}];
            case 71: return [{modifier:'triple',value:'13'},{modifier:'double',value:'16'}];
            case 72: return [{modifier:'triple',value:'16'},{modifier:'double',value:'12'}];
            case 73: return [{modifier:'triple',value:'19'},{modifier:'double',value:'8'}];
            case 74: return [{modifier:'triple',value:'14'},{modifier:'double',value:'16'}];
            case 75: return [{modifier:'triple',value:'13'},{modifier:'double',value:'18'}];
            case 76: return [{modifier:'triple',value:'20'},{modifier:'double',value:'8'}];
            case 77: return [{modifier:'triple',value:'15'},{modifier:'double',value:'16'}];
            case 78: return [{modifier:'triple',value:'18'},{modifier:'double',value:'12'}];
            case 79: return [{modifier:'triple',value:'13'},{modifier:'double',value:'20'}];
            case 80: return [{modifier:'triple',value:'16'},{modifier:'double',value:'16'}];
            case 81: return [{modifier:'triple',value:'15'},{modifier:'double',value:'18'}];
            case 82: return [{modifier:'triple',value:'14'},{modifier:'double',value:'20'}];
            case 83: return [{modifier:'triple',value:'17'},{modifier:'double',value:'16'}];
            case 84: return [{modifier:'triple',value:'16'},{modifier:'double',value:'18'}];
            case 85: return [{modifier:'triple',value:'15'},{modifier:'double',value:'20'}];
            case 86: return [{modifier:'triple',value:'18'},{modifier:'double',value:'16'}];
            case 87: return [{modifier:'triple',value:'17'},{modifier:'double',value:'18'}];
            case 88: return [{modifier:'triple',value:'16'},{modifier:'double',value:'20'}];
            case 89: return [{modifier:'triple',value:'19'},{modifier:'double',value:'16'}];
            case 90: return [{modifier:'triple',value:'18'},{modifier:'double',value:'18'}];
            case 91: return [{modifier:'triple',value:'17'},{modifier:'double',value:'20'}];
            case 92: return [{modifier:'triple',value:'20'},{modifier:'double',value:'16'}];
            case 93: return [{modifier:'triple',value:'19'},{modifier:'double',value:'18'}];
            case 94: return [{modifier:'triple',value:'18'},{modifier:'double',value:'20'}];
            case 95: return [{modifier:'triple',value:'19'},{modifier:'double',value:'19'}];
            case 96: return [{modifier:'triple',value:'20'},{modifier:'double',value:'18'}];
            case 97: return [{modifier:'triple',value:'19'},{modifier:'double',value:'20'}];
            case 98: return [{modifier:'triple',value:'20'},{modifier:'double',value:'19'}];
            case 99: return [{modifier:'triple',value:'19'},{modifier:'single',value:'10'},{modifier:'double',value:'16'}];
            case 100: return [{modifier:'triple',value:'20'},{modifier:'double',value:'20'}];
            case 101: return [{modifier:'triple',value:'19'},{modifier:'single',value:'12'},{modifier:'double',value:'16'}];
            case 102: return [{modifier:'triple',value:'20'},{modifier:'single',value:'10'},{modifier:'double',value:'16'}];
            case 103: return [{modifier:'triple',value:'19'},{modifier:'single',value:'14'},{modifier:'double',value:'16'}];
            case 104: return [{modifier:'triple',value:'20'},{modifier:'single',value:'12'},{modifier:'double',value:'16'}];
            case 105: return [{modifier:'triple',value:'20'},{modifier:'single',value:'13'},{modifier:'double',value:'16'}];
            case 106: return [{modifier:'triple',value:'20'},{modifier:'single',value:'14'},{modifier:'double',value:'16'}];
            case 107: return [{modifier:'triple',value:'20'},{modifier:'single',value:'15'},{modifier:'double',value:'16'}];
            case 108: return [{modifier:'triple',value:'20'},{modifier:'single',value:'16'},{modifier:'double',value:'16'}];
            case 109: return [{modifier:'triple',value:'20'},{modifier:'single',value:'17'},{modifier:'double',value:'16'}];
            case 110: return [{modifier:'triple',value:'20'},{modifier:'single',value:'18'},{modifier:'double',value:'16'}];
            case 111: return [{modifier:'triple',value:'20'},{modifier:'single',value:'19'},{modifier:'double',value:'16'}];
            case 112: return [{modifier:'triple',value:'20'},{modifier:'single',value:'20'},{modifier:'double',value:'16'}];
            case 113: return [{modifier:'triple',value:'20'},{modifier:'single',value:'13'},{modifier:'double',value:'20'}];
            case 114: return [{modifier:'triple',value:'20'},{modifier:'single',value:'14'},{modifier:'double',value:'20'}];
            case 115: return [{modifier:'triple',value:'20'},{modifier:'single',value:'15'},{modifier:'double',value:'20'}];
            case 116: return [{modifier:'triple',value:'20'},{modifier:'single',value:'16'},{modifier:'double',value:'20'}];
            case 117: return [{modifier:'triple',value:'20'},{modifier:'single',value:'17'},{modifier:'double',value:'20'}];
            case 118: return [{modifier:'triple',value:'20'},{modifier:'single',value:'18'},{modifier:'double',value:'20'}];
            case 119: return [{modifier:'triple',value:'20'},{modifier:'single',value:'19'},{modifier:'double',value:'20'}];
            case 120: return [{modifier:'triple',value:'20'},{modifier:'single',value:'20'},{modifier:'double',value:'20'}];
            case 121: return [{modifier:'triple',value:'19'},{modifier:'triple',value:'16'},{modifier:'double',value:'8'}];
            case 122: return [{modifier:'triple',value:'18'},{modifier:'single',value:'18'},{modifier:'double',value:'25'}];
            case 123: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'13'},{modifier:'double',value:'12'}];
            case 124: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'16'},{modifier:'double',value:'8'}];
            case 125: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'19'},{modifier:'double',value:'4'}];
            case 126: return [{modifier:'triple',value:'19'},{modifier:'single',value:'19'},{modifier:'double',value:'25'}];
            case 127: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'17'},{modifier:'double',value:'8'}];
            case 128: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'20'},{modifier:'double',value:'4'}];
            case 129: return [{modifier:'triple',value:'19'},{modifier:'triple',value:'16'},{modifier:'double',value:'12'}];
            case 130: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'18'},{modifier:'double',value:'8'}];
            case 131: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'13'},{modifier:'double',value:'16'}];
            case 132: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'16'},{modifier:'double',value:'12'}];
            case 133: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'19'},{modifier:'double',value:'8'}];
            case 134: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'14'},{modifier:'double',value:'16'}];
            case 135: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'13'},{modifier:'double',value:'18'}];
            case 136: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'20'},{modifier:'double',value:'8'}];
            case 137: return [{modifier:'triple',value:'18'},{modifier:'triple',value:'17'},{modifier:'double',value:'16'}];
            case 138: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'16'},{modifier:'double',value:'15'}];
            case 139: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'13'},{modifier:'double',value:'20'}];
            case 140: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'16'},{modifier:'double',value:'16'}];
            case 141: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'15'},{modifier:'double',value:'18'}];
            case 142: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'14'},{modifier:'double',value:'20'}];
            case 143: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'17'},{modifier:'double',value:'16'}];
            case 144: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'20'},{modifier:'double',value:'12'}];
            case 145: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'15'},{modifier:'double',value:'20'}];
            case 146: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'18'},{modifier:'double',value:'16'}];
            case 147: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'17'},{modifier:'double',value:'18'}];
            case 148: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'20'},{modifier:'double',value:'14'}];
            case 149: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'19'},{modifier:'double',value:'16'}];
            case 150: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'18'},{modifier:'double',value:'18'}];
            case 151: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'17'},{modifier:'double',value:'20'}];
            case 152: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'20'},{modifier:'double',value:'16'}];
            case 153: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'19'},{modifier:'double',value:'18'}];
            case 154: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'18'},{modifier:'double',value:'20'}];
            case 155: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'19'},{modifier:'double',value:'19'}];
            case 156: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'20'},{modifier:'double',value:'18'}];
            case 157: return [{modifier:'triple',value:'19'},{modifier:'triple',value:'20'},{modifier:'double',value:'20'}];
            case 158: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'20'},{modifier:'double',value:'19'}];
            case 160: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'20'},{modifier:'double',value:'20'}];
            case 161: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'17'},{modifier:'double',value:'25'}];
            case 164: return [{modifier:'triple',value:'19'},{modifier:'triple',value:'19'},{modifier:'double',value:'25'}];
            case 167: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'19'},{modifier:'double',value:'25'}];
            case 170: return [{modifier:'triple',value:'20'},{modifier:'triple',value:'20'},{modifier:'double',value:'25'}];
            default: return [];
        }
    },
    twoDartSuggestion(score) {
        switch (score) {
            case 101: return [{modifier:'triple',value:'17'},{modifier:'double',value:'25'}];
            case 104: return [{modifier:'triple',value:'18'},{modifier:'double',value:'25'}];
            case 107: return [{modifier:'triple',value:'19'},{modifier:'double',value:'25'}];
            case 110: return [{modifier:'triple',value:'20'},{modifier:'double',value:'25'}];
            default: return this.getSuggestion(score);
        }
    },
    oneDartSuggestion(score) {
        return score === 50 ? [{modifier:'double',value:'25'}] : this.getSuggestion(score);
    },
    onInput(input) {
        switch (input.currentDart) {
            case 2:
                this.state = {suggestion: this.twoDartSuggestion(input.score)};
                break;
            case 3:
                this.state = {suggestion: this.oneDartSuggestion(input.score)};
                break;
          default:
                this.state = {suggestion: this.getSuggestion(input.score)};
                break;
        }
    },
};
