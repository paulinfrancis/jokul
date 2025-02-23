import { motion } from "framer-motion";
import { graphql, HeadProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { FC, ReactNode, useContext } from "react";
import type { ComponentDoc } from "react-docgen-typescript";
import { APIDocumentation } from "../components";
import { Frontmatter } from "../components/Header/useNavigationLinks";
import { BlogPageHeader, ComponentPageHeader } from "../components/Layout/components";
import { Seo } from "../components/seo";
import { a11yContext } from "../contexts/a11yContext";

interface Props {
    location: Location;
    data: {
        page: { body: string & ReactNode; frontmatter: Frontmatter };
    };
    pageContext: {
        title: string;
        types: {
            [x: string]: ComponentDoc;
        };
        versions?: {
            react: string | null;
            scss: string | null;
        };
    };
}

export const Head: FC<HeadProps<object, { title: string }>> = ({ pageContext }) => <Seo title={pageContext.title} />;

export const DocPageLayout: FC<Props> = ({ location, data, pageContext }) => {
    const { prefersReducedMotion } = useContext(a11yContext);

    const { body, frontmatter } = data.page; // Fra pageQuery
    const { types } = pageContext; // Fra context i gatsby-node
    const isE2e = typeof window !== "undefined" ? window.location.search === "?mode=e2e" : false;

    return (
        <motion.main
            initial={{ y: prefersReducedMotion ? 0 : 10, opacity: 0 }}
            animate={{ y: prefersReducedMotion ? 0 : 0, opacity: 1 }}
            exit={{ y: prefersReducedMotion ? 0 : -20, opacity: 0 }}
            transition={{ duration: prefersReducedMotion || isE2e ? 0 : 0.35 }}
            className={`jkl-portal__main ${
                location.pathname === "/profil/bildebruk" ? "jkl-portal__main--no-margin" : ""
            }`}
            id="innhold"
        >
            <ComponentPageHeader {...frontmatter} versions={pageContext.versions} />
            <BlogPageHeader {...frontmatter} />
            <MDXRenderer>{body}</MDXRenderer>
            {types && <APIDocumentation types={types} />}
        </motion.main>
    );
};

export default DocPageLayout;

export const pageQuery = graphql`
    query DocPageQuery($id: String!) {
        page: mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                react
                scss
                order
                author
                publishDate
                group
            }
        }
    }
`;
