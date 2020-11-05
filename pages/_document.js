// import Document, { Html, Head, Main, NextScript } from 'next/document'

// class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }

//   render() {
//     return (
//       <Html>
//         <Head>
//         <meta charset="utf-8" />
//     <link
//     rel="stylesheet"
//     href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
//   />
//   <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
//   <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />

//     <meta name="theme-color" content="#000000" />
    
//     <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

//     <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

//     <title>Méditus</title>

    
    
//         </Head>
//         <body>
          
//           <Main />
          
//           <NextScript />
   
//         </body>
//       </Html>
//     )
//   }
// }

// export default MyDocument

import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
  