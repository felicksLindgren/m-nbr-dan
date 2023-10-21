import InfiniteScroll from "@/components/infinite-scroll"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import cosmos from "@/lib/cosmos"
import { ChevronRightCircleIcon, MoreHorizontalIcon } from "lucide-react"

type PageProps = {
  searchParams: URLSearchParams
}

export default async function Feed({ searchParams }: PageProps) {
  const size = searchParams["size"] || 10;
  const QUERY = `SELECT TOP ${size} * FROM c ORDER BY c.repeats DESC`;
  const { resources: problems } = await cosmos.container.items.query<Problem>(QUERY).fetchAll();

  return (
    <main className="flex min-h-screen flex-col items-start">
      <InfiniteScroll>
        {problems.map((problem) => (
          <Sheet key={problem.id}>
            <Card className="w-[100%]">
              <CardHeader>
                <CardTitle>{problem.name}</CardTitle>
                <CardDescription>{problem.grade} set by {problem.setby} with {problem.repeats} repeats</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-end">
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontalIcon />
                    </Button>
                  </SheetTrigger>
              </CardContent>
            </Card>
            <SheetContent className="w-[80%] sm:w-[80%]">
              <SheetHeader className="pb-3">
                <SheetTitle>{problem.name}</SheetTitle>
                <SheetDescription>{problem.grade} set by {problem.setby} with {problem.repeats} repeats</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        ))}
      </InfiniteScroll>
    </main>
  )
}
