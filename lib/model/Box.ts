export class Box {
    private readonly _width: number | null;
    private readonly _height: number | null;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    get width(): number {
        return this._width!;
    }

    get height(): number {
        return this._height!;
    }
}
