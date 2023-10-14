import { ModeToggle } from "@/components/mode-toggle"
import cosmos from "@/lib/cosmos"
import Image from "next/image"

export default async function Home() {
  const { resources: problems } = await cosmos.container.items.query<Problem>("SELECT TOP 10 * FROM c").fetchAll();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <ModeToggle />
      <ul>
        {problems.map(problem => (
          <li key={problem.id}>
            <h2>{problem.name}</h2>
          </li>
        ))}
      </ul>
      {/* <Image src="https://www.moonboard.com/content/images/holds/h59.png" alt="h59" width={90} height={90} /> */}
    </main>
  )
}
