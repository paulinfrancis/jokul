import { WithChildren } from "@fremtind/jkl-core";
import { Image } from "@fremtind/jkl-image-react";
import cn from "classnames";
import React, { FC } from "react";
import { PaddingOptions, SpacingStep } from "./types";
import { getSpacingClasses } from "./utils";

// TODO: Eksporter typer fra Image-komponenten
type ImageProps = React.ComponentProps<typeof Image>;

export interface InfoCardProps extends PaddingOptions, WithChildren {
    className?: string;
    title?: string;
    image?: Omit<ImageProps, "className">;
    /**
     * Legger til ekstra rom i bunnen av kortet, fra spacing-skalaen til Jøkul.
     */
    bottomPadding?: SpacingStep;
}

export const InfoCard: FC<InfoCardProps> = ({ title, image, children, className, padding = "l", ...rest }) => (
    <div {...rest} className={cn("jkl-info-card", className)}>
        {image && <Image className="jkl-info-card__image" {...image} />}
        <div className={cn("jkl-info-card__content-wrapper", getSpacingClasses(padding))}>
            {title && <p className="jkl-info-card__title">{title}</p>}
            {children}
        </div>
    </div>
);
