"use client";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const router = useRouter();
  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    if (data) {
        console.log("User signed up successfully:", data);
      router.push("/sign-in");
    }
    if (error) {
      console.error("Error during sign-up:", error);
    }
  };
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030304] px-4 pb-12 pt-32 text-white sm:px-6 sm:pt-36">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(102,80,237,0.16),transparent_38%),radial-gradient(ellipse_at_top,rgba(65,65,68,0.3),transparent_65%)]" />

      <Card className="relative z-10 w-full max-w-md border-white/10 bg-[#111113]/95 text-white shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-md">
        {/* Header */}
        <CardHeader className="gap-3 px-6 pb-6 pt-8 text-center sm:px-8 sm:pt-9">
          <CardTitle className="text-4xl font-bold tracking-[-0.04em]">
            Create an account
          </CardTitle>

          <CardDescription className="text-base font-medium leading-7 text-white/60">
            Join HireLoop and discover opportunities that match your ambition.
          </CardDescription>
        </CardHeader>

        <CardContent className="px-6 pb-8 sm:px-8 sm:pb-9">
          <form onSubmit={handleSignUp} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2.5">
              <Label
                htmlFor="name"
                className="text-base font-semibold text-white/90"
              >
                Full Name
              </Label>

              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="John Doe"
                required
                className="h-12 border-white/15 bg-white/4 px-4 text-base text-white placeholder:text-white/35 focus-visible:border-[#8e7cff] focus-visible:ring-[#6650ed]/35"
              />
            </div>

            {/* Email */}
            <div className="space-y-2.5">
              <Label
                htmlFor="email"
                className="text-base font-semibold text-white/90"
              >
                Email
              </Label>

              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                className="h-12 border-white/15 bg-white/4 px-4 text-base text-white placeholder:text-white/35 focus-visible:border-[#8e7cff] focus-visible:ring-[#6650ed]/35"
              />
            </div>

            {/* Password */}
            <div className="space-y-2.5">
              <Label
                htmlFor="password"
                className="text-base font-semibold text-white/90"
              >
                Password
              </Label>

              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Create a password"
                required
                className="h-12 border-white/15 bg-white/4 px-4 text-base text-white placeholder:text-white/35 focus-visible:border-[#8e7cff] focus-visible:ring-[#6650ed]/35"
              />
            </div>

            {/* Create Account */}
            <Button
              type="submit"
              className="h-12 w-full bg-[#6650ed] text-base font-semibold text-white shadow-[0_0_22px_rgba(102,80,237,0.25)] hover:bg-[#7663f2]"
            >
              Create Account
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="mt-7 text-center text-base font-medium text-white/60">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-[#8e7cff] transition-colors hover:text-[#b2a7ff]"
            >
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
};

export default SignUpPage;
