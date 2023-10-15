import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-12">
      <ModeToggle />
      <Link href="/feed" passHref>
        <Button variant="link">Browse feed</Button>
      </Link>
      <Link href="/problems" passHref>
        <Button variant="link">Browse problems</Button>
      </Link>
      
      {/* <DataTable columns={Columns} data={problems} /> */}
    </main>
  )
}
