import { Outlet } from "react-router-dom";
import { AuthProvider } from "./provider";

export function AuthLayout() {
  return (
    <AuthProvider>
      <main className="w-full min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>
    </AuthProvider>
  );
}
