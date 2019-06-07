import Document, { Html, Head, Main, NextScript } from 'next/document';
import styled, { ServerStyleSheet } from "styled-components";

const Body = styled.body`
  font-family: Roboto, sans-serif;
  padding: 30px;
  color: #444;
`;

const getStyleTag = sheet => {
  const styleTags = sheet.getStyleElement()
  const styleTagsArray = Array.isArray(styleTags) ? styleTags : [styleTags];
  const inlineCss = styleTagsArray.reduce((inlineStyles, currentStylesheet) => {
    if (currentStylesheet && currentStylesheet.props) {
      return `${inlineStyles}${
        currentStylesheet.props.dangerouslySetInnerHTML.__html
        }`;
    }
    return inlineStyles;
  }, '')

  return (
    <style amp-custom="" dangerouslySetInnerHTML={{ __html: inlineCss }} />
  )
}

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = getStyleTag(sheet)

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto'
          />

          {this.props.styleTags}

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
            "@context": "http://schema.org",
            "@type": "NewsArticle",
            "headline": "Open-source framework for publishing content",
            "datePublished": "2015-10-07T12:02:41Z",
            "image": [
              "/static/logo.png"
            ]
          }` }} />
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    )
  }
}
