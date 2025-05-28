import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { Suspense } from "react";

const theme = createTheme({
    /** Put your mantine theme override here */
});

const notoSansJP = Noto_Sans_JP({
    variable: "--font-noto-sans-jp",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "発電所実績",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={`${notoSansJP.className}`}>
                <Suspense fallback={<p>Loading...</p>}>
                    <MantineProvider theme={theme}>{children}</MantineProvider>
                </Suspense>
            </body>
        </html>
    );
}
