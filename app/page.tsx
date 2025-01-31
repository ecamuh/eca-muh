import { LandingHero } from "@/components/ui/landing-hero"
import { AuroraBackground } from "@/components/ui/aurora-background"

export default function Home() {
  return (
    <AuroraBackground>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <LandingHero />
      </main>
    </AuroraBackground>
  )
}
