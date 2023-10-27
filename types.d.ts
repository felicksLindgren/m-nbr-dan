export type Problem = {
    id: string;
    name: string;
    grade: string;
    setby: string;
    repeats: number;
    isBenchmark: boolean;
    moves: Move[];
    userRating: number;
}

type Move = {
    description: string;
    isStart: boolean;
    isEnd: boolean;
}

type Hold = {
    Number: string
    Location: {
        Rotation: number
        Description: string
    }
}

type Holdset = {
    Holds: Hold[]
}