import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

const router = getRouter();

// Debug: Check what path the router sees
console.log("Current pathname:", window.location.pathname);
console.log("Current hash:", window.location.hash);
console.log("Base element href:", document.querySelector("base")?.href);

// Handle GitHub Pages routing redirect
const redirect = sessionStorage.getItem("redirect");
if (redirect) {
  sessionStorage.removeItem("redirect");
  console.log("Navigating to redirect:", redirect);
  // Navigate after router is ready
  router.navigate({ to: redirect });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
