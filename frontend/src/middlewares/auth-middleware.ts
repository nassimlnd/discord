import { createMiddleware } from "@solidjs/start/middleware";
import { authStore } from "~/stores/auth";

export default createMiddleware({
    onRequest: async (event) => {
        const user = authStore.user();
        const url = new URL(event.request.url);

        const unprotectedRoutes = ["/login"];

        if (!user?.id && !unprotectedRoutes.includes(url.pathname)) {
            return Response.redirect(`${url.origin}/login`);
        }

        return;
    },
});
