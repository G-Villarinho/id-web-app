import { createBrowserRouter } from "react-router-dom";

// Layouts
import { AuthLayout } from "@/pages/auth/layout";

// Pages
import { SignInPage } from "@/pages/auth/sign-in";
import { SignUpPage } from "@/pages/auth/sign-up";
import { AccountNotFoundPage } from "@/pages/auth/account-not-found";
import { NotFoundPage } from "@/pages/errors/404";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/account-not-found",
        element: <AccountNotFoundPage />,
      },
    ],
  },
]);
