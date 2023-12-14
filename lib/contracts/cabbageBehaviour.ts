import { CabbageCanvas } from "../cabbageCanvas";
import { IBehaviour } from "../interfaces/ibehaviour";
import { Box } from "../model/Box";
import { Point } from "../model/Point";

export abstract class CabbageBehaviour implements IBehaviour {
    static PHYSICS_SECOND = 1000; // Duration of one physics second in milliseconds
    private cabbageInstance: CabbageCanvas | null = null;
    private readonly _canvasId?: string | null;

    constructor() {
        this._canvasId = this.start();
        this.setCanvasId(this._canvasId);
        setInterval(() => this.draw(), CabbageBehaviour.PHYSICS_SECOND);
    }

    createSphere(point: Point, radius: number, color: string = "black"): void {
        this.cabbageInstance?.createSphere(point, radius, color);
    }

    public createRectangle(point: Point, size: Box, color: string = "black"): void {
        this.cabbageInstance?.createRectangle(point, size, color);
    }

    public createLine(p1: Point, p2: Point, color: string = "black", lineWidth: number = 1): void {
        this.cabbageInstance?.createLine(p1, p2, color, lineWidth);
    }

    protected abstract start(): string;
    protected abstract draw(): void;

    protected setSize(width: number, height: number) {
        if (!this.cabbageInstance) {
            this.cabbageInstance = new CabbageCanvas(this._canvasId!);
        }

        if (this.cabbageInstance) {
            this.cabbageInstance.width = width;
            this.cabbageInstance.height = height;
        }
    }

    setCanvasId(canvasId: string): void {
        this.cabbageInstance && (this.cabbageInstance.canvasId = canvasId);
    }

    protected setWidth(width: number) {
        if (this.cabbageInstance) {
            this.cabbageInstance.width = width;
        }
    }

    protected setHeight(height: number) {
        if (this.cabbageInstance) {
            this.cabbageInstance.height = height;
        }
    }

    setEntryCabbage() {
        this.cabbageInstance && (this.cabbageInstance.isEntry = true);
    }

    get cabbage(): CabbageCanvas {
        return this.cabbageInstance!;
    }
}
