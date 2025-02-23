import cx from "classnames";
import React, { DetailedHTMLProps, forwardRef, ThHTMLAttributes } from "react";
import { useTableContext } from "./tableContext";

export interface TableHeaderProps
    extends DetailedHTMLProps<ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
    bold?: boolean;
    compact?: boolean;
    /**
     * Velg mellom venstrejustering og høyrejustering av innholdet. Typisk skal header følge innholdet i radene.
     * @default "left"
     */
    align?: "left" | "right";
    /**
     * Si om headeren gjelder for en kolonne eller en rad
     * @default "col"
     */
    scope?: "col" | "row";
    srOnly?: boolean;
}

const TableHeader = forwardRef<HTMLTableCellElement, TableHeaderProps>(
    ({ bold = true, compact, className, scope = "col", srOnly, align = "left", ...rest }, ref) => {
        const { compact: contextCompact } = useTableContext();
        return (
            <th
                className={cx("jkl-table-header", className, {
                    ["jkl-table-header--bold"]: bold,
                    ["jkl-table-header--compact"]: typeof compact === "undefined" ? contextCompact : compact,
                    ["jkl-table-header--align-right"]: align === "right",
                    ["jkl-table-header--sr-only"]: srOnly,
                })}
                scope={scope}
                {...rest}
                ref={ref}
            />
        );
    },
);

TableHeader.displayName = "TableHeader";

export { TableHeader };
