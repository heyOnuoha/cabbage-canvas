import puppeteer from "puppeteer";
import { ICabbage } from "./interfaces/icabbage";
import { Shape } from "./contracts/shape";
import { CanvasContract } from "./contracts/canvasContract";
import { Point } from "./model/Point";
import { Box } from "./model/Box";

export class CabbageCanvas extends CanvasContract implements ICabbage {
    public width: number = 0;
    public height: number = 0;
    public isEntry: boolean = false;
    public canvasId: string = "";

    constructor(canvasId: string) {
        super();
        super.setCanvas(canvasId, new Box(this.width, this.height));
    }

    public createSphere(point: Point, radius: number, color: string = "black") {
        this.ctx?.beginPath();
        this.ctx?.arc(point.x, point.y, radius, 0, Math.PI * 2);
        this.ctx && (this.ctx.fillStyle = color);
        this.ctx?.fill();
        this.ctx?.closePath();
    }

    public createRectangle(point: Point, size: Box, color: string = "black") {
        this.ctx && (this.ctx.fillStyle = color);
        this.ctx?.fillRect(point.x, point.y, size.width, size.height);
    }

    public createLine(p1: Point, p2: Point, color: string = "black", lineWidth: number = 1) {
        this.ctx?.beginPath();
        this.ctx?.moveTo(p1.x, p1.y);
        this.ctx?.lineTo(p2.x, p2.y);
        this.ctx && (this.ctx.strokeStyle = color);
        this.ctx && (this.ctx.lineWidth = lineWidth);
        this.ctx?.stroke();
        this.ctx?.closePath();
    }
}
