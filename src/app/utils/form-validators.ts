import { FormControl, ValidationErrors } from '@angular/forms';

export function noEmojisValidator(
  control: FormControl
): ValidationErrors | null {
  const withEmojis = /\p{Emoji}/u;
  const hasEmojis = withEmojis.test(control.value);
  return hasEmojis ? { noEmojis: true } : null;
}
