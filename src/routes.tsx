import { createBrowserRouter } from "react-router-dom";

import { LoginPage } from "@/pages/auth/sign-in";

export const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <LoginPage />,
  },
]);
