import type { ChangeEvent, KeyboardEventHandler } from "react";
import type { Path, PathValue, RegisterOptions, UseFormRegisterReturn, UseFormReturn } from "react-hook-form";
import { formatFodselsnummer } from "../fodselsnummer/formatFodselsnummer";
import { formatKontonummer } from "../kontonummer/formatKontonummer";
import { formatKortnummer } from "../kortnummer/formatKortnummer";
import { formatOrganisasjonsnummer } from "../organisasjonsnummer/formatOrganisasjonsnummer";
import { formatTelefonnummer } from "../telefonnummer/formatTelefonnummer";
import { formatNumber } from "./formatNumber";

const formatters = {
    fodselsnummer: formatFodselsnummer,
    kortnummer: formatKortnummer,
    kontonummer: formatKontonummer,
    telefonnummer: formatTelefonnummer,
    number: formatNumber,
    organisasjonsnummer: formatOrganisasjonsnummer,
};
export type Formatter = keyof typeof formatters;

export type RegisterWithMaskOptions<T> = Omit<RegisterOptions<T>, "setValueAs">;

const registerWithMask =
    (formatter: Formatter) =>
    <T>(form: UseFormReturn<T>, name: Path<T>, options?: RegisterWithMaskOptions<T>) => {
        let onKeyDownCaretPosition = 0;
        let onKeyDownKeyPressed = "";

        const setValueAs = (value: string) => value.replace(/\s/g, "");
        const onChange = (event: ChangeEvent<HTMLInputElement>) => {
            options?.onChange?.(event);

            // save some values before event.target.value change
            let onChangeCaretPosition = 0;
            const inputLength = event.target.value.length;

            // type checking formalities
            if (event.target.selectionStart !== null) {
                onChangeCaretPosition = event.target.selectionStart;
            }

            form.setValue(
                name as unknown as Path<T>,
                formatters[formatter](event.target.value, { partial: true }) as PathValue<T, Path<T>>,
            );

            let newPosition: number | null = null;

            if (["Delete", "Backspace"].includes(onKeyDownKeyPressed)) {
                // handle removing content
                // calculate how much to move the caret, this also accounts for removing sections of text
                const delta = onKeyDownCaretPosition - onChangeCaretPosition;

                // calculate new caret position (- because we move backwards)
                newPosition = onKeyDownCaretPosition - delta;
            } else if (onChangeCaretPosition < event.target.value.length) {
                // handle adding content from inside the string
                // calculate how much to move the caret forwards
                const delta = event.target.value.length - inputLength;

                // calculate new caret position (+ because we move forwards)
                newPosition = onChangeCaretPosition + delta;
            }

            if (newPosition !== null) {
                event.target.setSelectionRange(newPosition, newPosition, undefined);
            }
        };

        const register = form.register(name, { ...options, setValueAs, onChange });

        // save the caret position before the change occured
        const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
            if ((event.target as HTMLInputElement).selectionStart !== null) {
                onKeyDownCaretPosition = (event.target as HTMLInputElement).selectionStart as number;
            }
            onKeyDownKeyPressed = event.key;
        };

        // add onKeyDown event handler to the registered input
        const extra: Record<string, unknown> = {
            onKeyDown,
        };

        if (formatter === "number") {
            extra.align = "right"; // Se https://github.com/fremtind/jokul/pull/2898
        }

        return Object.assign(register, extra);
    };

/** @deprecated Bruk `registerWithMasks` i stedet */
export const registerWithFodselsnummerMask = registerWithMask("fodselsnummer");
/** @deprecated Bruk `registerWithMasks` i stedet */
export const registerWithKortnummerMask = registerWithMask("kortnummer");
/** @deprecated Bruk `registerWithMasks` i stedet */
export const registerWithKontonummerMask = registerWithMask("kontonummer");
/** @deprecated Bruk `registerWithMasks` i stedet */
export const registerWithTelefonnummerMask = registerWithMask("telefonnummer");

export const registerWithMasks = <T>(form: UseFormReturn<T>) => ({
    registerWithFodselsnummerMask: (name: Path<T>, options?: RegisterWithMaskOptions<T>): UseFormRegisterReturn =>
        registerWithMask("fodselsnummer")(form, name, options),
    registerWithKortnummerMask: (name: Path<T>, options?: RegisterWithMaskOptions<T>): UseFormRegisterReturn =>
        registerWithMask("kortnummer")(form, name, options),
    registerWithKontonummerMask: (name: Path<T>, options?: RegisterWithMaskOptions<T>): UseFormRegisterReturn =>
        registerWithMask("kontonummer")(form, name, options),
    registerWithTelefonnummerMask: (name: Path<T>, options?: RegisterWithMaskOptions<T>): UseFormRegisterReturn =>
        registerWithMask("telefonnummer")(form, name, options),
    registerWithOrganisasjonsnummerMask: (name: Path<T>, options?: RegisterWithMaskOptions<T>): UseFormRegisterReturn =>
        registerWithMask("organisasjonsnummer")(form, name, options),
    registerWithNumber: (
        name: Path<T>,
        options?: RegisterWithMaskOptions<T>,
    ): UseFormRegisterReturn & { align: "right" } =>
        registerWithMask("number")(form, name, options) as unknown as UseFormRegisterReturn & {
            align: "right";
        },
});
