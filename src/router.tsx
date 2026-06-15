import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { createHashHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // Use hash history for GitHub Pages static hosting
  // This uses URLs like /#/ instead of / which works on static hosts
  const hashHistory = createHashHistory();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    history: hashHistory,
  });

  return router;
};
