import { Behaviour } from "../lib/behaviour";
import { Cabbage } from "../lib/cabbage";

export class Example1 extends Behaviour {
    protected start(): Cabbage {
        const cabbage = Cabbage.createCabbageInstance(800, 800);

        return cabbage;
    }
    protected draw(): void {
        console.log("test");
    }
}
