# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [7.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-accordion@6.0.13...@fremtind/jkl-accordion@7.0.0) (2022-06-07)

### Bug Fixes

-   rett feil i forced-colors etter merge ([6656441](https://github.com/fremtind/jokul/commit/665644113c3d145d99ea6069cf543f8fe7bb280a))

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))
-   prefiks CSS-variabler med jkl ([500ee0e](https://github.com/fremtind/jokul/commit/500ee0e1050de94d8cda07fb423c33837fbf2faa))
-   skriv og følg stilguiden for Sass i Jøkul ([1cc52a4](https://github.com/fremtind/jokul/commit/1cc52a4dea6af592ed48c45b38bc4fee07a749ae))
-   sweep for å rydde i Sass-variabler ([fa1b094](https://github.com/fremtind/jokul/commit/fa1b094189c2958d5407334ae063d36461229b11))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Sass-variabler i komponentpakkene er gjort private
-   Alle CSS-variabler har jkl-prefix
-   Sass-variabler, mixins og CSS-animasjoner fra pakker annet enn core er gjort private
-   Avhenger av ny majorversjon av core

## [6.0.10](https://github.com/fremtind/jokul/compare/@fremtind/jkl-accordion@6.0.9...@fremtind/jkl-accordion@6.0.10) (2022-04-19)

### Bug Fixes

-   accordion bugs med forced-colors ([7d5bfc0](https://github.com/fremtind/jokul/commit/7d5bfc09d91238ea1e34fd32dbdcf765088fffea))
-   bruk ButtonText for AccordionItem sin pil i forced-colors ([2606294](https://github.com/fremtind/jokul/commit/2606294a67e0dbd6f6a2a54c2b67c310c4fbcd5b))
-   fyll piler med farge og jobb rundt navnekollisjon ([f056ef8](https://github.com/fremtind/jokul/commit/f056ef89ac784e180d74abb07691055364363b43))
-   skriv om svgmixin etter å ha sett Icons ([093e5ec](https://github.com/fremtind/jokul/commit/093e5ec2e71e5819e68ee2383463096185f9c1f3))
-   unset border og outline i forced-colors ([648c7cd](https://github.com/fremtind/jokul/commit/648c7cdd30805dc6e6dc74b3e12d7b20b2ff5cec))

# 6.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)
-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 5.0.1 (2021-11-01)

### Bug Fixes

-   **accordion:** symmetrisk padding i AccordionItem ([c2bc8b0](https://github.com/fremtind/jokul/commit/c2bc8b0ff1158f789385699e291dbab389ddb4d2))

## 5.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 4.0.0 (2021-07-09)

### Features

-   use new typographic scale ([c588ee2](https://github.com/fremtind/jokul/commit/c588ee26a9f2c7433f72d7c58d8afc115c1c5ab5))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **accordion:** add automatic dark mode ([77b4f1e](https://github.com/fremtind/jokul/commit/77b4f1e1cdd42b0157af3e9b1edfcf3fbf7799e9))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 1.2.0 (2020-09-01)

### Features

-   implement global dark mode ([47b8e2d](https://github.com/fremtind/jokul/commit/47b8e2dc0abcd366212fc67f306f8523a63d11c8))

## 1.1.35 (2020-08-28)

### Bug Fixes

-   override css custom properties when inverted mode is set ([d5c3686](https://github.com/fremtind/jokul/commit/d5c368669e17942570c44bad4fd19989e260e7c8))

## 1.1.29 (2020-08-13)

### Bug Fixes

-   **accordion:** fix accordion spacing issue ([a35771b](https://github.com/fremtind/jokul/commit/a35771bc0a06760592f2d2fcf07ee2f92f98b6a8))

## 1.1.28 (2020-08-12)

### Bug Fixes

-   **accordion:** remove active bounce ([5f671d1](https://github.com/fremtind/jokul/commit/5f671d178103d367b82180e7a9dea51f44e4961f))

## 1.1.27 (2020-08-11)

### Bug Fixes

-   remove expanded blue color accordion ([2b3d62f](https://github.com/fremtind/jokul/commit/2b3d62fdfdcd9b9f527ab50cc1362c9c3177d7ee))

## 1.1.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.1.4 (2020-03-16)

### Bug Fixes

-   **accordion:** make accordion fill entire width of container ([f15f3b3](https://github.com/fremtind/jokul/commit/f15f3b32b509827ff208d45835dd06d5874744d7))

## 1.1.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.0.16 (2020-02-18)

### Bug Fixes

-   make use of new color token (changed name) ([f14c149](https://github.com/fremtind/jokul/commit/f14c149f779e65fe0775afde4421aef26be8ed1d))
-   use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))

## 1.0.14 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

## 1.0.0 (2019-12-03)

### Bug Fixes

-   **accordion-react:** only scale title when on active state ([dbc0b2c](https://github.com/fremtind/jokul/commit/dbc0b2c1977aba0cb1ffd53decb1a03296d26844)), closes [#489](https://github.com/fremtind/jokul/issues/489)

## 0.9.0 (2019-10-09)

### Bug Fixes

-   **accordion:** use display block on title components ([056fdfb](https://github.com/fremtind/jokul/commit/056fdfb)), closes [#397](https://github.com/fremtind/jokul/issues/397)
-   **core:** add and use wcag-compliant error/focus colors ([c714b45](https://github.com/fremtind/jokul/commit/c714b45))

### Features

-   **accordion:** implement new design for regular page component ([a54ca35](https://github.com/fremtind/jokul/commit/a54ca35))

## 0.8.0 (2019-08-30)

### Bug Fixes

-   **accordion-react:** don't use button as flex and div inside button ([b035498](https://github.com/fremtind/jokul/commit/b035498))

### Features

-   **accordion:** add focus state to accordion ([3807fd6](https://github.com/fremtind/jokul/commit/3807fd6))

## 0.7.0 (2019-08-02)

### Features

-   **firefox:** remove dotted line for good ([67187a6](https://github.com/fremtind/jokul/commit/67187a6))

## 0.6.2 (2019-07-30)

### Bug Fixes

-   **accordion:** make accordion 100% width ([d665fab](https://github.com/fremtind/jokul/commit/d665fab))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** add watch job to pkg json ([a0039e0](https://github.com/fremtind/jokul/commit/a0039e0))

### Features

-   **accordion:** consolidate style with sketches and remove unused svgs ([8e7e986](https://github.com/fremtind/jokul/commit/8e7e986))
-   **build:** add watch job for css, refactor gulp ([8adafd6](https://github.com/fremtind/jokul/commit/8adafd6))
-   **portal:** add getting started guide ([76d742b](https://github.com/fremtind/jokul/commit/76d742b))

## 0.5.0 (2019-07-15)

### Bug Fixes

-   use correct syntax for importing sass index files ([46fa8f6](https://github.com/fremtind/jokul/commit/46fa8f6))
-   **build:** publish correct files for style pkgs ([a89d768](https://github.com/fremtind/jokul/commit/a89d768))

## 0.3.0 (2019-07-15)

### Bug Fixes

-   **build:** publish correct files from core and accordion ([0a929ee](https://github.com/fremtind/jokul/commit/0a929ee))

### Features

-   **build:** publish correct files in all packages ([b1fbb8f](https://github.com/fremtind/jokul/commit/b1fbb8f))
-   **core:** flatten structure of core package ([5b2287b](https://github.com/fremtind/jokul/commit/5b2287b))

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   update focus styles to only show on keyboard nav ([b7555a8](https://github.com/fremtind/jokul/commit/b7555a8))
-   **accordion:** remove merge artifact from code ([731e7ff](https://github.com/fremtind/jokul/commit/731e7ff))
-   **accordion:** remove rogue comment ([1df59c1](https://github.com/fremtind/jokul/commit/1df59c1))
-   **accordion:** specify text color to fix bug in safari ([54ce8a1](https://github.com/fremtind/jokul/commit/54ce8a1))
-   **accordion:** update package name to correct value ([e34db42](https://github.com/fremtind/jokul/commit/e34db42))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))

### Features

-   accordion stylesheet ([b156cd9](https://github.com/fremtind/jokul/commit/b156cd9))
-   basic setup for accordion-react wrapper ([d868fc0](https://github.com/fremtind/jokul/commit/d868fc0))
-   **accordion:** change accordion style to use chevron ornament ([8896087](https://github.com/fremtind/jokul/commit/8896087))
-   **accordion:** refactor BEM structure for more concise styles ([a7d016a](https://github.com/fremtind/jokul/commit/a7d016a))
-   **accordion:** replace chevron svg with css ([14409d8](https://github.com/fremtind/jokul/commit/14409d8))
-   **accordion:** update style to match new sketches ([2ea6350](https://github.com/fremtind/jokul/commit/2ea6350))
-   **accordion:** update styles on accordion ([22a43b7](https://github.com/fremtind/jokul/commit/22a43b7))

### Performance Improvements

-   **build:** use gulp for all style packages ([5699683](https://github.com/fremtind/jokul/commit/5699683))
