import React, { FC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../src";

const columns = ["Dato", "Saksnummer", "Kundenummer", "Kundenavn", "Milepæl", "Følger saken"];

const rows = [
    ["24.02.2020", "20-1234567", "010203 99887", "Ola Nordmann", "Opprettet", "Siri Saksbehandler"],
    ["13.04.2019", "20-8382811", "010203 99887", "Kari Nordkvinne", "Opprettet", "Siri Saksbehandler"],
    ["31.07.2017", "20-1111", "010203 99887", "Kari Nordkvinne", "Opprettet", "Per Persen"],
];

const TableExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const compact = boolValues?.["Compact"];
    const headless = boolValues?.["Skjul overskrift"];
    const type = choiceValues?.["Mobilvisning"];
    const props = type === "Liste" ? { "data-collapse": "true", collapseToList: true, compact: true } : {};

    return (
        <Table compact={compact} fullWidth {...props}>
            <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>
            <TableHead srOnly={headless}>
                <TableRow>
                    {columns.map((column, index) => (
                        <TableHeader key={index} compact bold>
                            {column}
                        </TableHeader>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <TableCell
                                key={cellIndex}
                                data-th={columns[cellIndex]}
                                align={[1, 2].includes(cellIndex) ? "right" : "left"}
                            >
                                {cell}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TableExample;

export const tableExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<Table fullWidth compact={${boolValues?.["Compact"]}} collapseToList={${choiceValues?.["Mobilvisning"] === "Liste"}}>
    <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>
    <TableHead srOnly={${boolValues?.["Skjul overskrift"]}}>
        <TableRow>
            {columns.map((header, index) => (
                <TableHeader key={index} compact bold>
                    {header}
                </TableHeader>
            ))}
        </TableRow>
    </TableHead>
    <TableBody>
        {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                    <TableCell
                        key={cellIndex}
                        data-th={columns[cellIndex]}
                        align={[1, 2].includes(cellIndex) ? "right" : "left"}
                    >
                        {cell}
                    </TableCell>
                ))}
            </TableRow>
        ))}
    </TableBody>
</Table>
`;
