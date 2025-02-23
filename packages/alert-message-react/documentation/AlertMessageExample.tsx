import { NavLink } from "@fremtind/jkl-core";
import React, { useState } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { InfoAlertMessage, WarningAlertMessage, ErrorAlertMessage, SuccessAlertMessage } from "../src";

export const alertMessageKnobs: ExampleKnobsProps = {
    boolProps: ["Dismissable"],
    choiceProps: [
        {
            name: "Variant",
            values: ["Info", "Success", "Warning", "Error"],
            defaultValue: 0,
        },
    ],
};

const getTypeOfBox = (typeofBox?: string) => {
    switch (typeofBox) {
        case "Info":
            return InfoAlertMessage;
        case "Success":
            return SuccessAlertMessage;
        case "Warning":
            return WarningAlertMessage;
        case "Error":
            return ErrorAlertMessage;
        default:
            return InfoAlertMessage;
    }
};

export const AlertMessageExample: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const C = getTypeOfBox(choiceValues ? choiceValues["Variant"] : "");
    const [dismissed, setDismissed] = useState(false);
    const dismissAction = boolValues?.["Dismissable"]
        ? {
              handleDismiss: () => {
                  setDismissed(true);
                  setTimeout(() => setDismissed(false), 2600);
              },
              buttonTitle: "Merk som lest",
          }
        : undefined;

    return (
        <C dismissed={dismissed} dismissAction={dismissAction}>
            Hei, jeg er en varslingsmelding av typen {choiceValues ? choiceValues["Variant"] : "ᕙ(⇀‸↼‶)ᕗ"} med{" "}
            <NavLink href="/komponenter/alertmessage">en navlink</NavLink>
        </C>
    );
};

export const alertMessageExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => {
    const C = getTypeOfBox(choiceValues ? choiceValues["Variant"] : "");
    return `
<${C.displayName} dismissed={false} dismissAction={${
        boolValues?.["Dismissable"]
            ? `{
    handleDismiss: () => setDismissed(true),
    buttonTitle: "Merk som lest",
}`
            : undefined
    }}  />
`;
};
