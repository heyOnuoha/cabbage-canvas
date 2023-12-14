export class Point {
    private readonly _x: number | null;
    private readonly _y: number | null;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x!;
    }

    get y(): number {
        return this._y!;
    }
}
