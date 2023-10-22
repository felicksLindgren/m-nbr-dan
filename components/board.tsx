import { Problem } from "@/types"
import Image from "next/image";

type BoardProps = {
    moves: Problem["moves"];
}

const COLUMNS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
const ROWS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

export default function Board({ moves }: BoardProps) {
    console.log(moves);
    return (
        <div className="grid gap-1 bg-muted">
            {ROWS.map((row) => (
                <div key={row} className="flex justify-evenly items-center w-[100%]">
                    {COLUMNS.map((column) => (
                        <div key={column} className="w-[45px] h-[45px]">
                            <Image 
                                src="https://moonboard.com/content/images/holds/h91.png"
                                height={45}
                                width={45}
                                alt="Hold"
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}