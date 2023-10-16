import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import cosmos from "@/lib/cosmos"
import Link from "next/link"

const QUERY = "SELECT TOP 2 * FROM c";

export default async function Feed() {
  const { resources: problems } = await cosmos.container.items.query<Problem>(QUERY).fetchAll();

  return (
    <main className="flex min-h-screen flex-col items-start">
      {problems.map((problem) => (
        <Card key={problem.id} className="w-[100%]">
          <CardHeader>
            <CardTitle>{problem.name}</CardTitle>
            <CardDescription>{problem.grade} set by {problem.setby} with {problem.repeats} repeats</CardDescription>
          </CardHeader>
          <CardContent>
            <ModeToggle />
          </CardContent>
          <CardFooter>
            <Link href="/feed/create">
              <Button>Log Ascent</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </main>
  )
}
