import { holds } from "@/lib/utils";
import { Problem } from "@/types"
import Image from "next/image";

type BoardProps = {
    moves: Problem["moves"];
}

const COLUMNS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
const ROWS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].reverse();
const ROTATIONS: { [key: number]: string } = {
    135: "rotate-[135deg]",
    315: "rotate-[315deg]",
    0: "rotate-[0deg]",
    90: "rotate-[90deg]",
    270: "rotate-[270deg]",
    225: "rotate-[225deg]",
    180: "rotate-[180deg]",
    45: "rotate-[45deg]",
}

export default function Board({ moves }: BoardProps) {
    return (
        <div className="grid gap-1 bg-muted">
            {ROWS.map((row) => (
                <div key={row} className="flex justify-center items-center">
                    {COLUMNS.map((column) => {
                        const selected = moves.find((move) => move.description === `${column}${row}`);
                        const hold = holds[`${column}${row}`];

                        if (!hold) return (
                            <div key={column} className="w-[30px] h-[30px] flex justify-center items-center">
                                <div className="w-0.5 h-0.5 bg-black rounded-full"></div>
                            </div>
                        )

                        const { rotation, image } = hold;
                        const cn = selected ? `border-2 rounded-full border-${selected.isEnd || selected.isStart ? "destructive" : "primary"}` : "";

                        return (
                            <Image className={ROTATIONS[rotation] + " " + cn} key={column} src={image} width="30" height="30" alt="Hold" />
                        )
                    })}
                </div>
            ))}
        </div>
    )
}