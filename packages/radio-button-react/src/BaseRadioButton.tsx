import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { ChangeEventHandler, forwardRef } from "react";
import { RadioButtonProps } from "./RadioButton";

export interface BaseRadioButtonProps extends RadioButtonProps {
    inline?: boolean;
    forceCompact?: boolean;
    invalid?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const BaseRadioButton = forwardRef<HTMLInputElement, BaseRadioButtonProps>((props, ref) => {
    const { id, className, checked, children, label, forceCompact, inline, invalid, name, value, onChange, ...rest } =
        props;

    const inputId = useId(id || "jkl-radio-button", { generateSuffix: !id });

    return (
        <div
            className={cn("jkl-radio-button", className, {
                "jkl-radio-button--compact": forceCompact,
                "jkl-radio-button--inline": inline,
                "jkl-radio-button--error": invalid,
            })}
        >
            <input
                name={name}
                ref={ref}
                {...rest}
                id={inputId}
                className="jkl-radio-button__input"
                type="radio"
                onChange={onChange}
                value={value}
                checked={checked}
            />
            <label data-testid="jkl-radio-button__label-tag" htmlFor={inputId} className="jkl-radio-button__label">
                <span aria-hidden className="jkl-radio-button__dot" />
                <span className="jkl-radio-button__text">{label || children}</span>
            </label>
        </div>
    );
});

BaseRadioButton.displayName = "BaseRadioButton";
