import React from "react";
import { RadioButtons } from "../src";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-radio-button/radio-button.min.css";
import "@fremtind/jkl-field-group/field-group.min.css";

const choices = ["Yes", "No", "I don't know"];

const Example = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const [selectedValue, setSelectedValue] = React.useState();
    const errorLabel = boolValues && boolValues["Med feil"] ? "Her er det noe feil" : undefined;
    const variant = choiceValues && choiceValues["Variant"] ? choiceValues["Variant"] : "medium";

    return (
        <RadioButtons
            legend="Do you like radio buttons?"
            name="likesradiobuttons"
            choices={choices}
            inline={boolValues && boolValues["Inline"]}
            selectedValue={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            helpLabel="Who dosent like radio buttons?"
            errorLabel={errorLabel}
            //@ts-ignore
            variant={variant}
            inverted={boolValues && boolValues["Invertert"]}
        />
    );
};

export default Example;
