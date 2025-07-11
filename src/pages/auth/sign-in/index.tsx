import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  GithubIcon,
  TwitterIcon,
  FacebookIcon,
  ChromeIcon,
} from "@/components/icons";

export default function Component() {
  const [email, setEmail] = useState("john.doe@example.com");
  const [password, setPassword] = useState("••••••••••••");

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left side - Sign in form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-sm"></div>
            </div>
            <span className="text-xl font-semibold">Shadboard</span>
          </div>

          {/* Sign in form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <p className="text-gray-400">
                Enter your email below to sign in to your account
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-white"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <Link
                    to="#"
                    className="text-sm text-gray-400 hover:text-white underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-white"
                />
              </div>

              <Button className="w-full bg-white text-black hover:bg-gray-200 font-medium">
                Sign In with Email
              </Button>
            </div>

            <div className="text-center text-sm">
              <span className="text-gray-400">{"Don't have an account? "}</span>
              <Link to="#" className="text-white underline hover:no-underline">
                Sign up
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-gray-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-black px-2 text-gray-400">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 border border-gray-600 hover:bg-gray-800"
              >
                <FacebookIcon className="w-5 h-5" />
                <span className="sr-only">Sign in with Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 border border-gray-600 hover:bg-gray-800"
              >
                <GithubIcon className="w-5 h-5" />
                <span className="sr-only">Sign in with GitHub</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 border border-gray-600 hover:bg-gray-800"
              >
                <ChromeIcon className="w-5 h-5" />
                <span className="sr-only">Sign in with Google</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 border border-gray-600 hover:bg-gray-800"
              >
                <TwitterIcon className="w-5 h-5" />
                <span className="sr-only">Sign in with Twitter</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/80">
              <div className="text-6xl mb-4">👋</div>
              <h2 className="text-2xl font-bold mb-2">Bem-vindo de volta!</h2>
              <p className="text-lg">Faça login para continuar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
