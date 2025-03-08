import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { isServer } from "solid-js/web";
import { getCookie } from "vinxi/http";
import "@fontsource-variable/open-sans";
import { ColorModeProvider, ColorModeScript, cookieStorageManagerSSR } from "@kobalte/core";

function getServerCookies() {
    "use server";
    const colorMode = getCookie("kb-color-mode");
    return colorMode ? `kb-color-mode=${colorMode}` : "";
}

export default function App() {
    const storageManager = cookieStorageManagerSSR(isServer ? getServerCookies() : document.cookie);
    return (
        <Router
            root={(props) => (
                <>
                    <ColorModeScript storageType={storageManager.type} />
                    <MetaProvider>
                        <ColorModeProvider storageManager={storageManager}>
                            <Suspense>{props.children}</Suspense>
                        </ColorModeProvider>
                    </MetaProvider>
                </>
            )}
        >
            <FileRoutes />
        </Router>
    );
}
