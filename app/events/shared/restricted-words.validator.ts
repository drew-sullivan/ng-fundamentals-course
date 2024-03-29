import { FormControl } from '@angular/forms';

const RESTRICTED_WORDS = [
    'foo',
    'bar'
]

export function restrictedWords(words: string[] = RESTRICTED_WORDS) {
    return (control: FormControl): any => {
        if (!words) {
            return null;
        } 
        let invalidWords = words
            .map(w => control.value.includes(w) ? w : null)
            .filter(w => w != null);

        return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(', ')} : null;
    }
}