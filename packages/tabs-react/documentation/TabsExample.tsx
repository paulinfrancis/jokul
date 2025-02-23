import React, { FC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { TabList, Tab, Tabs, TabPanel } from "../src";

export const TabsExample: FC<ExampleComponentProps> = () => {
    return (
        <Tabs>
            <TabList aria-label="tabs">
                <Tab>Bedrifter</Tab>
                <Tab>Bedriftansvarlige</Tab>
                <Tab>Rådgivere</Tab>
            </TabList>
            <TabPanel className="jkl-spacing-m--all">Innhold for Bedrifter</TabPanel>

            <TabPanel className="jkl-spacing-m--all">Innhold for Bedriftansvarlige</TabPanel>

            <TabPanel className="jkl-spacing-m--all">
                Innhold for Rådgivere
                <Tabs>
                    <TabList aria-label="subtabs">
                        <Tab>Bedrift AS</Tab>
                        <Tab>Alternativ AS</Tab>
                    </TabList>
                    <TabPanel className="jkl-spacing-m--all">Innhold for Bedrift AS</TabPanel>
                    <TabPanel className="jkl-spacing-m--all">Innhold for Alternativ AS</TabPanel>
                </Tabs>
            </TabPanel>
        </Tabs>
    );
};

export const tabsExampleCode = `
<Tabs>
    <TabList aria-label="tabs">
        <Tab>Bedrifter</Tab>
        <Tab>Bedriftansvarlige</Tab>
        <Tab>Rådgivere</Tab>
    </TabList>

    <TabPanel>Innhold for Bedrifter</TabPanel>

    <TabPanel>Innhold for Bedriftansvarlige</TabPanel>

    <TabPanel>
        Innhold for Rådgivere

        <Tabs>
            <TabList aria-label="subtabs">
                <Tab>Bedrift AS</Tab>
                <Tab>Alternativ AS</Tab>
            </TabList>
            <TabPanel>Innhold for Bedrift AS</TabPanel>
            <TabPanel>Innhold for Alternativ AS</TabPanel>
        </Tabs>
    </TabPanel>
</Tabs>
`;

export default TabsExample;
