import React, { CSSProperties, ReactNode } from "react";
import "./icons-example-grid.scss";

interface IconsExampleGridProps {
    columns: "two" | "four";
    children?: ReactNode;
    color?: string;
    style?: CSSProperties;
}

export const IconsExampleGrid: React.FC<IconsExampleGridProps> = ({ color, columns, children, ...rest }) => (
    <div
        className={`jkl-example-grid jkl-example-grid--${columns}-columns ${color ? `jkl-color-${color}` : ""}`}
        {...rest}
    >
        {children}
    </div>
);
