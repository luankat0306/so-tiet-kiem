import "@/styles/globals.css";
import ThemeConfig from "@/themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeConfig>
      <Component {...pageProps} />
    </ThemeConfig>
  );
}
