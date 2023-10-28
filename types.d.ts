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

export type Hold = {
    image: string;
    rotation: number;
}