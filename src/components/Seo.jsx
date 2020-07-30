import React from "react";
import { string, bool } from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, description, image, article }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername,
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    };

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta charSet="utf-8" />
            <link rel="canonical" href={seo.url} />

            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            {seo.url && <meta property="og:url" content={seo.url} />}

            {article ? <meta property="og:type" content="article" /> : <meta property="og:type" content="website" />}

            {seo.title && <meta property="og:title" content={seo.title} />}

            {seo.description && (
                <meta property="og:description" cotnent={seo.description} />
            )}

            {seo.image && <meta property="og:image" content={seo.image} />}

            <meta name="twitter:card" content="summary_large_image" />

            {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
            )}

            {seo.title && <meta name="twitter:title" content={seo.title} />}

            {seo.description && (
                <meta property="twitter:description" cotnent={seo.description} />
            )}

            {seo.image && <meta property="twitter:image" content={seo.image} />}
        </Helmet>
    );
};

const query = graphql`
  query SEO {
      site {
          siteMetadata {
              defaultTitle: title
              titleTemplate
              defaultDescription: description
              siteUrl
              defaultImage: image
              twitterUsername
          }
      }
  }
`;

Seo.propTypes = {
    title: string,
    description: string,
    image: string,
    article: bool,
};

Seo.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
};

export default Seo;
