import cx from "classnames";
import React from "react";
import { ArrowDown } from "../icons/ArrowDown";
import { ArrowUp } from "../icons/ArrowUp";
import { IconVariant } from "../icons/types";

export interface ArrowVerticalAnimatedProps {
    className?: string;
    pointingDown: boolean;
    variant?: IconVariant;
}

export const ArrowVerticalAnimated = ({
    className = "",
    pointingDown,
    variant = "small",
    ...rest
}: ArrowVerticalAnimatedProps) => {
    const iconSize = variant !== "inherit" ? variant : "small";

    return (
        <div {...rest} className={cx(`jkl-icon--${iconSize}`, "jkl-animated-vertical-arrows", className)}>
            <div className="jkl-animated-vertical-arrows__slider" data-show={pointingDown ? "down" : "up"}>
                <ArrowDown variant={iconSize} />
                <ArrowUp variant={iconSize} />
            </div>
        </div>
    );
};

ArrowVerticalAnimated.displayName = "ArrowVerticalAnimated";
