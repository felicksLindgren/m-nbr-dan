import { ModeToggle } from "@/components/mode-toggle"
import cosmos from "@/lib/cosmos"
import { DataTable } from "@/components/ui/data-table";
import { Columns } from "./problems/columns";

const QUERY = "SELECT c.id, c.setby, c.name, c.grade, c.repeats FROM c WHERE c.isBenchmark = true";

export default async function Home() {
  const { resources: problems } = await cosmos.container.items.query<Problem>(QUERY).fetchAll();

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-12">
      {/* <ModeToggle /> */}
      <DataTable columns={Columns} data={problems} />
    </main>
  )
}
