/*
This file is the entry point of the app. It renders the home page of the app.
*/

import Head from "next/head";
import dynamic from "next/dynamic";
import { Body, GlobalStyle, Main } from "@/styles/globals";
// import Table dynamically to avoid SSR
const Table = dynamic(() => import("@/components/table"), { ssr: false });
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/muiStyles";
export default function Home() {
    return (
        <>
            <Head>
                <title>Employees Dashboard</title>
                <meta
                    name="description"
                    content="This app designs a dashboard to add and fetch employees"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <ThemeProvider theme={theme}>
                    <Body>
                        <GlobalStyle />
                        <Table />
                    </Body>
                </ThemeProvider>
            </Main>
        </>
    );
}
