import { lazy } from "react";

export const ProfilePageAsync = lazy(() => {
    // for test
    return new Promise((resolve) => setTimeout(resolve, 1200)).then(() => import('./ProfilePage')
    );
})