import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../src";

export const headlessTableExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Compact"],
    choiceProps: [
        {
            name: "Mobilvisning",
            values: ["Tabell", "Liste"],
            defaultValue: 0,
        },
    ],
};

const columns = ["Dato", "Saksnummer", "Kundenummer", "Kundenavn", "Milepæl", "Følger saken"];

const rows = [
    ["24.02.2020", "20-1234567", "010203 99887", "Ola Nordmann", "Opprettet", "Siri Saksbehandler"],
    ["13.04.2019", "20-8382811", "010203 99887", "Kari Nordkvinne", "Opprettet", "Siri Saksbehandler"],
    ["31.07.2017", "20-1111", "010203 99887", "Kari Nordkvinne", "Opprettet", "Per Persen"],
];

const HeadlessTableExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const forceCompact = boolValues && boolValues["Compact"];
    const type = choiceValues ? choiceValues["Mobilvisning"] : "";
    const props = type === "Liste" ? { "data-collapse": "true", compact: true, collapseToList: true } : {};
    return (
        <Table {...props} fullWidth compact={forceCompact}>
            <TableCaption srOnly>Tabell uten synlig header</TableCaption>
            <TableHead srOnly>
                <TableRow>
                    {columns.map((column, index) => (
                        <TableHeader key={index}>{column}</TableHeader>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {row.map((row, cellIndex) => (
                            <TableCell key={cellIndex} align={[1, 2].includes(cellIndex) ? "right" : "left"}>
                                {row}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default HeadlessTableExample;

export const headlessTableExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<Table fullWidth collapseToList={${choiceValues?.["Mobilvisning"] === "Liste"}} compact={${!!boolValues?.["Compact"]}}>
    <TableCaption srOnly>Tabell uten synlig header</TableCaption>
    <TableHead srOnly>
        <TableRow>
            {columns.map((column, index) => (
                <TableHeader key={index}>
                    {column}
                </TableHeader>
            ))}
        </TableRow>
    </TableHead>
    <TableBody>
        {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
                {row.map((row, cellIndex) => (
                    <TableCell key={cellIndex} align={[1, 2].includes(cellIndex) ? "right" : "left"}>
                        {row}
                    </TableCell>
                ))}
            </TableRow>
        ))}
    </TableBody>
</Table>
`;
