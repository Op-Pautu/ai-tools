import { ThemeToggle } from "@/components/ui/theme-toggle"
import { SignInButton, UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <>
      <SignInButton />
      <UserButton />
      <ThemeToggle />
    </>
  )
}
