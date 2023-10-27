import { Hold, Holdset, Problem } from "@/types"
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

    // import 2016.json
    const holdset = require("@/lib/holdset/2016.json") as Holdset[]

    // merge all holds into one array
    const holds = holdset.flatMap((holdset) => holdset.Holds).map((hold) => { 
        return {
            Number: hold.Number,
            Location: {
                Rotation: hold.Location.Rotation,
                Description: hold.Location.Description,
            }
        } as Hold
    });

    return (
        <div className="grid gap-1 bg-muted">
            {ROWS.map((row) => (
                <div key={row} className="flex justify-center items-center">
                    {COLUMNS.map((column) => {
                        const selected = moves.find((move) => move.description === `${column}${row}`);
                        const hold = holds.find((hold) => hold.Location.Description === `${column}${row}`);
                        const src = hold ? `https://moonboard.com/content/images/holds/h${hold.Number}.png` : null;

                        if (!src) return (
                            <div key={column} className="w-[30px] h-[30px] flex justify-center items-center">
                                <div className="w-1 h-1 bg-black rounded-full"></div>
                            </div>
                        )

                        const rotation = hold?.Location.Rotation ?? 0;
                        const cn = selected ? "border-2 rounded-full border-primary" : "";

                        return (
                            <Image className={ROTATIONS[rotation] + " " + cn} key={column} src={src} width="30" height="30" alt="Hold" />
                        )
                    })}
                </div>
            ))}
        </div>
    )
}