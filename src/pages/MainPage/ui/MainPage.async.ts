import { lazy } from "react";

export const MainPageAsync = lazy(() => {
    // for test
    return new Promise((resolve) => setTimeout(resolve, 1200)).then(() => import('./MainPage')
    );
})