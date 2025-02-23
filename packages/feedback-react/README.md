# [`@fremtind/jkl-feedback-react`](https://jokul.fremtind.no/komponenter/feedback)

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/feedback).

## Installasjon

**Tips:** [stilpakken](../feedback/) blir automatisk installert som en avhengighet.

1. `yarn add @fremtind/jkl-feedback-react` eller `npm i @fremtind/jkl-feedback-react`.
2. Importér _både_ React-komponent og stilark i prosjektet ditt.

```js
import { Feedback } from "@fremtind/jkl-feedback-react";

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-feedback/feedback.min.css";

// Feedback bruker flere andre komponenter og trenger stilarkene deres for å fungere.
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-message-box/message-box.min.css";
import "@fremtind/jkl-radio-button/radio-button.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-feedback/feedback";
@use "@fremtind/jkl-button/button";
@use "@fremtind/jkl-message-box/message-box";
@use "@fremtind/jkl-radio-button/radio-button";
@use "@fremtind/jkl-text-input/text-input";
```
