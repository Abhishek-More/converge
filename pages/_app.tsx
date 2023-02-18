import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  );
};

export default App;
