import { Box } from "../model/Box";
import { Point } from "../model/Point";
const { createCanvas } = require("canvas");

export abstract class CanvasContract {
    public width: number = 0;
    public height: number = 0;
    public isEntry: boolean = false;
    public canvasId: string = "";

    protected _ctx?: CanvasRenderingContext2D | null;
    protected _canvas?: HTMLCanvasElement | null = null;

    /**
     * Sets the canvas ID.
     * @param canvasId The ID of the canvas.
     */
    protected setCanvas(canvasId: string, size: Box) {
        this._canvas = createCanvas(size.width, size.height);
        this._ctx = this._canvas?.getContext("2d");
        return this._ctx;
    }

    /**
     * Abstract method to create a sphere.
     * @param x The x-coordinate of the sphere's center.
     * @param y The y-coordinate of the sphere's center.
     * @param radius The radius of the sphere.
     * @param color The color of the sphere (default: "black").
     */
    public abstract createSphere(point: Point, radius: number, color?: string): void;

    /**
     * Abstract method to create a rectangle.
     * @param point The top-left corner point of the rectangle.
     * @param size The size (width and height) of the rectangle.
     * @param color The color of the rectangle (default: "black").
     */
    public abstract createRectangle(point: Point, size: Box, color?: string): void;

    /**
     * Abstract method to create a line.
     * @param p1 The starting point of the line.
     * @param p2 The ending point of the line.
     * @param color The color of the line (default: "black").
     * @param lineWidth The width of the line (default: 1).
     */
    public abstract createLine(p1: Point, p2: Point, color?: string, lineWidth?: number): void;

    get canvas(): HTMLCanvasElement | null {
        return this._canvas!;
    }

    get ctx(): CanvasRenderingContext2D | null {
        return this._ctx!;
    }
}
