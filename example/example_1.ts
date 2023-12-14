import { CabbageBehaviour } from "../lib";
import { Box } from "../lib/model/Box";
import { Point } from "../lib/model/Point";

export class Example extends CabbageBehaviour {
    public start() {
        this.setSize(800, 800);

        return "#my-canvas";
    }

    public draw(): void {
        console.log("test");

        this.createRectangle(new Point(2, 4), new Box(100, 200));
    }
}
