/*
Page for creating new employee
*/
import Head from "next/head";
import dynamic from "next/dynamic";
import { Body, GlobalStyle, Main } from "@/styles/globals";
// import Table dynamically to avoid SSR
const Form = dynamic(() => import("@/components/form"), { ssr: false });
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/muiStyles";

const AddEmployee = () => {
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
                        <Form />
                    </Body>
                </ThemeProvider>
            </Main>
        </>
    );
};

export default AddEmployee;
