import { createBrowserRouter } from "react-router-dom";

import { SignInPage } from "@/pages/auth/sign-in";
import { SignUpPage } from "@/pages/auth/sign-up";

export const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
]);
