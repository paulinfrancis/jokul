import React, { FC } from "react";
import { motion } from "framer-motion";
import { Link as GatsbyLink } from "gatsby";
import { HeadingLarge, Ingress, PageTitle, Paragraph } from "../../components/Typography";
import { Link } from "@fremtind/jkl-core";
import { StaticImage } from "gatsby-plugin-image";
import { Image } from "../../components/image";
import { Grid } from "../../components/Grid";
import { NavCard } from "@fremtind/jkl-card-react";
import { FigmaLogo } from "../../components/figma-logo";
import { ListItem, UnorderedList } from "@fremtind/jkl-list-react";
import { Helmet } from "react-helmet";

const pageTitle = "Praktisk i designhverdagen";

const PraktiskDesignhverdagen: FC = () => (
    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="jkl-portal__main"
    >
        <Helmet>
            <title>{pageTitle} | Jøkul Designsystem</title>
        </Helmet>
        <PageTitle>{pageTitle}</PageTitle>
        <Ingress>
            Vi bruker Figma til å designe skisser. I tillegg har vi et{" "}
            <a href="https://github.com/fremtind/jokul/discussions" className="jkl-link">
                diskusjonsområde
            </a>{" "}
            på GitHub for samarbeid, og Adobe-programmer for nisjerte utfordringer.
        </Ingress>

        <HeadingLarge>Komponentbibliotek</HeadingLarge>
        <Paragraph>
            Alle Jøkul-komponenter fra kodebasen er også tilgjengelig i Figma. Komponentene er satt opp etter alle
            kunstens regler, med
            <Link href="https://help.figma.com/hc/en-us/articles/360040451373-Create-dynamic-designs-with-auto-layout">
                Auto-Layout
            </Link>
            og{" "}
            <Link href="https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants">Variants</Link>.
            Hver komponent kommer med states ut av boksen, så du slipper å finne opp hjulet på nytt hver gang du skal
            lage skisser.
        </Paragraph>
        <Paragraph>
            Vi anbefaler alle som bruker Figma regelmessig å gjøre seg kjent med Auto-Layout. I tillegg til at det vil
            gi deg en dypere forståelse av hvordan komponentbiblioteket er bygget opp, vil det markant redusere tiden du
            vil bruke på å lage detaljerte skisser.
        </Paragraph>
        <Image disableFullscreen>
            <StaticImage
                src="../../../static/assets/kom-i-gang/components-example.png"
                alt="Skjermbilde som viser tre knappekomponenter til venstre for Figmas liste over komponenter fra komponentbiblioteket"
            />
        </Image>

        <HeadingLarge>Hvordan endrer jeg på biblioteket?</HeadingLarge>
        <Paragraph>
            Det er mange som bruker Figma-biblioteket, derfor må vi kvalitetssikre endringer før de tilgjengeliggjøres
            for alle våre brukere. Dette gjør vi gjennom branching, som i hovedsak går ut på at du lager en kopi av
            biblioteket og gjør endringer, før du deretter sender forslaget ditt tilbake til biblioteket via en merge
            request.
        </Paragraph>
        <Grid className="jkl-portal-paragraph">
            <NavCard
                href="https://help.figma.com/hc/en-us/articles/360063144053-Create-branches-and-merge-changes"
                title="Branching"
                description="Aldri brukt branching i Figma før? Ta en kikk på introduksjonen fra Figma."
            />
            <NavCard
                to="/guider/hvordan-endre-jokul#klar-for-å-lansere-huskelista-hjelper-deg-"
                component={GatsbyLink}
                title="Endre på Jøkul"
                description="Det er et par ting å huske på, så ta en kikk på tipsene vi har skrevet."
            />
        </Grid>
        <Image
            caption={
                <>
                    Branching: Ved å lage en kopi (<b>branch</b>) av en fil inne i seg selv, kan man enkelt
                    eksperimentere med nye tillegg eller endringer, uten å måtte bekymre seg for å “ødelegge” noe mens
                    man utforsker. Når man er ferdig kan man enkelt sette de inn i hovedfila, via en{" "}
                    <b>merge request</b>.{" "}
                </>
            }
        >
            <StaticImage src="../../../static/assets/kom-i-gang/design-branchdiagram.png" alt="" />
        </Image>

        <HeadingLarge>Praktiske plugins og tips</HeadingLarge>
        <Paragraph>
            Takket være masse flinke folk på internett så finnes det et trucklass med plugins, tips og triks for å gjøre
            Figma-hverdagen enklere. Vi har samlet våre beste tips nedenfor:
        </Paragraph>
        <ul>
            <li>
                Endre “Big Nudge...” innstillingen i Figma fra 10pt til 8pt, da hele spacingskalaen vår går opp i
                åttegangeren. (<FigmaLogo /> → Preferences → Nudge amount...)
            </li>
            <li>
                <a className="jkl-link" href="https://www.figma.com/community/plugin/732603254453395948/Stark">
                    Stark
                </a>{" "}
                er en Figma-plugin for å sjekke kontraster og enkle UU krav raskt
            </li>
            <li>
                <a
                    className="jkl-link"
                    href="https://chrome.google.com/webstore/detail/figma-github/bieeiojdjdkkacfckmaamnbinloppgjf"
                >
                    Figma-Github
                </a>{" "}
                lar deg se skisser direkte rett i GitHub kommentarer (Chrome-plugin)
            </li>
            <li>
                <a
                    className="jkl-link"
                    href="https://www.figma.com/community/plugin/741895659787979282/Instance-Finder"
                >
                    Instance Finder
                </a>{" "}
                hjelper deg med å finne brukte instanser
            </li>
            <li>
                <a className="jkl-link" href="https://www.figma.com/community/plugin/973621811122426089/Figma-Tips">
                    Figma-Tips
                </a>{" "}
                samler alt du måtte lure på av hvordan ting funker i Figma inni et søkbart vindu
            </li>
        </ul>
        <Paragraph className="jkl-bold">Kjerneteamets favoritthurtigtaster i Figma</Paragraph>
        <UnorderedList>
            <ListItem>Auto-Layout (⇧A), Frame (⌥⌘G)</ListItem>
            <ListItem>Søk etter komponenter (⇧I)</ListItem>
            <ListItem>macOS “spotlight-style” kommandosøk (⌘P)</ListItem>
            <ListItem>Show Layout Grid (⌃G)</ListItem>
        </UnorderedList>

        <NavCard
            to="/profil/designprinsipper"
            component={GatsbyLink}
            title="Neste: Profil"
            description="Nå som du kjenner til det praktiske er det på tide å bli kjent med profilen"
            style={{ maxWidth: "25rem" }}
        />
    </motion.main>
);

export default PraktiskDesignhverdagen;
