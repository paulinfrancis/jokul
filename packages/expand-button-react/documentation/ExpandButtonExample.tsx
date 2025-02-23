import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import React, { forwardRef, useState } from "react";
import { ExampleComponentProps, CodeExample } from "../../../doc-utils";
import { ExpandButton } from "../src";

const ExpandSection = forwardRef<HTMLDivElement, { id: string; "aria-labelledby": string; hidden: boolean }>(
    ({ ...rest }, ref) => (
        <div ref={ref} className="jkl-expand-section__content-wrapper" role="group" {...rest}>
            <div className="jkl-expand-section__content">
                <h3 className="jkl-heading-3 jkl-spacing-xl--bottom">Skjult seksjon</h3>
                <p className="jkl-portal-paragraph">
                    For at dette skal fungere på en god måte må man huske på <code>aria-controls</code>. Denne
                    komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.
                </p>
            </div>
        </div>
    ),
);
ExpandSection.displayName = "ExpandSection";

export const ExpandButtonExample = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [elementRef] = useAnimatedHeight<HTMLDivElement>(isExpanded);
    const expandButtonId = "jkl-example-expand-button";
    const expandedContentId = "jkl-example-expand-content";

    const onClick = () => {
        setIsExpanded(!isExpanded);
    };

    const expandDirection = choiceValues?.["Ekspander i retning (kun frittstående)"] === "Oppover" ? "up" : "down";

    return (
        <div>
            <p className="jkl-portal-paragraph">
                Noen ganger trenger vi å gi brukerne som ønsker det litt mer informasjon.
            </p>
            {expandDirection === "up" && (
                <>
                    <ExpandSection
                        ref={elementRef}
                        aria-labelledby={expandButtonId}
                        id={expandedContentId}
                        hidden={!isExpanded}
                    />
                    <p className="jkl-body jkl-spacing-l--bottom">
                        Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden
                        som ikke er direkte under ExpandButton.
                    </p>
                </>
            )}
            <ExpandButton
                aria-controls={expandedContentId}
                id={expandButtonId}
                className="jkl-spacing-l--bottom"
                forceCompact={boolValues?.["Compact"]}
                expandDirection={expandDirection}
                isExpanded={isExpanded}
                onClick={onClick}
            >
                {isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}
            </ExpandButton>
            {expandDirection === "down" && (
                <>
                    <p className="jkl-body jkl-spacing-l--bottom">
                        Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden
                        som ikke er direkte under ExpandButton.
                    </p>
                    <ExpandSection
                        ref={elementRef}
                        aria-labelledby={expandButtonId}
                        id={expandedContentId}
                        hidden={!isExpanded}
                    />
                </>
            )}
        </div>
    );
};

export default ExpandButtonExample;

export const expandButtonExampleCode: CodeExample = ({ boolValues, choiceValues }) => {
    const expandDirection = choiceValues?.["Ekspander i retning (kun frittstående)"] === "Oppover" ? "up" : "down";

    const expandSection = `
        <div
            ref={elementRef}
            aria-labelledby={expandButtonId}
            id={expandedContentId}
            role="group"
            hidden={!isExpanded}
            className="jkl-expand-section__content-wrapper"
        >
            <div className="jkl-expand-section__content">
                <h3 className="jkl-heading-3 jkl-spacing-xl--bottom">Skjult seksjon</h3>
                <p className="jkl-portal-paragraph">
                    For at dette skal fungere på en god måte må man huske på <code>aria-controls</code>. Denne
                    komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.
                </p>
            </div>
        </div>
`;

    return `
const [isExpanded, setIsExpanded] = useState(false);
const [elementRef] = useAnimatedHeight<HTMLDivElement>(isExpanded);
const expandButtonId = "jkl-example-expand-button";
const expandedContentId = "jkl-example-expand-content";

const onClick = () => {
    setIsExpanded(!isExpanded);
};


return (
    <div>
        <p className="jkl-portal-paragraph">
            Noen ganger trenger vi å gi brukerne som ønsker det litt mer informasjon.
        </p>
        ${
            expandDirection === "up"
                ? `${expandSection}
        <p className="jkl-body jkl-spacing-l--bottom">
            Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke
            er direkte under ExpandButton.
        </p>
        `
                : ""
        }
        <ExpandButton
            aria-controls={expandedContentId}
            id={expandButtonId}
            className="jkl-spacing-l--bottom"
            forceCompact={${boolValues?.["Compact"]}}
            expandDirection={expandDirection}
            isExpanded={isExpanded}
            onClick={onClick}
        >
            {isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}
        </ExpandButton>
        ${
            expandDirection === "down"
                ? `
        <p className="jkl-body jkl-spacing-l--bottom">
            Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke
            er direkte under ExpandButton.
        </p>
        ${expandSection}`
                : ""
        }
    </div>
);
    `;
};
