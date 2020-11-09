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
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "~bootstrap/scss/bootstrap";

// /* The following line can be included in your src/index.js or App.js file */

// import './App.scss';


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
        <Head>  
       
          <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>
<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>
<script>var Alert = ReactBootstrap.Alert;</script>
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/> 

<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

<link href="https://fonts.googleapis.com/css2?family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>

<title>Méditus</title>
</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
  