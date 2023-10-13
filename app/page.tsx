import { ModeToggle } from "@/components/mode-toggle"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
      <Image src="https://www.moonboard.com/content/images/holds/h59.png" alt="h59" width={100} height={100} />
    </main>
  )
}
