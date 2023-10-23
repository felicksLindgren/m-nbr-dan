import { Problem } from "@/types"
import Image from "next/image";

type BoardProps = {
    moves: Problem["moves"];
}

const COLUMNS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
const ROWS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].reverse();

export default function Board({ moves }: BoardProps) {


    return (
        <div className="grid gap-1 bg-muted">
            {ROWS.map((row) => (
                <div key={row} className="flex justify-center items-center">
                    {COLUMNS.map((column) => {
                        const selected = moves.find((move) => move.description === `${column}${row}`);
                        return (
                            <Image className={selected ? "border-2 rounded-full border-primary" : ""} key={column} src="https://moonboard.com/content/images/holds/h91.png" width="30" height="30" alt="Hold" />
                        )
                    })}
                </div>
            ))}
        </div>
    )
}