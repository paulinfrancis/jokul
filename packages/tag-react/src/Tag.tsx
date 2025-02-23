import { IconButton } from "@fremtind/jkl-icon-button-react";
import cx from "classnames";
import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, HTMLAttributes, MouseEventHandler } from "react";

export interface DismissAction extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    dismissAction?: DismissAction;
}

type Variant = "info" | "error" | "warning" | "success";

function getDisplayName(variant?: Variant) {
    switch (variant) {
        case "info":
            return "InfoTag";
        case "error":
            return "ErrorTag";
        case "warning":
            return "WarningTag";
        case "success":
            return "SuccessTag";
        default:
            return "Tag";
    }
}

function tagFactory(variant?: Variant) {
    const Tag: FC<TagProps> = ({ className, dismissAction, children, ...rest }) => (
        <span
            className={cx(
                "jkl-tag",
                {
                    ["jkl-tag--info"]: variant === "info",
                    ["jkl-tag--error"]: variant === "error",
                    ["jkl-tag--warning"]: variant === "warning",
                    ["jkl-tag--success"]: variant === "success",
                },
                className,
            )}
            {...rest}
        >
            {children}
            {dismissAction && (
                <IconButton
                    className="jkl-tag__dismiss-action"
                    iconType="clear"
                    buttonTitle={dismissAction.label}
                    onClick={dismissAction.onClick}
                    onFocus={dismissAction.onFocus}
                    onBlur={dismissAction.onBlur}
                />
            )}
        </span>
    );
    Tag.displayName = getDisplayName(variant);
    return Tag;
}

export const Tag = tagFactory();
export const InfoTag = tagFactory("info");
export const ErrorTag = tagFactory("error");
export const WarningTag = tagFactory("warning");
export const SuccessTag = tagFactory("success");
