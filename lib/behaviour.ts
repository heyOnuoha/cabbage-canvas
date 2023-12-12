import { Cabbage } from "./cabbage";

export abstract class Behaviour {

    static PHYSICS_SECOND = 1000; // Duration of one physics second in milliseconds
    private readonly cabbageInstance: Cabbage | null = null;
    
    constructor() {
        
        if(!this.cabbageInstance) {
            this.cabbageInstance = this.start()
        }

        setInterval(() => this.draw(), Behaviour.PHYSICS_SECOND)
    }

    protected abstract start(): Cabbage;
    protected abstract draw(): void;
    // protected abstract end(): void;

    setEntryCabbage() {
        this.cabbageInstance?.setIsEntry(true)
    }

    get cabbage(): Cabbage {
        return this.cabbageInstance!;
    }
}