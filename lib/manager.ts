import { Behaviour } from "./behaviour";
import { Cabbage } from "./cabbage";

class BehaviorRegistry {
    private static _behaviours: Behaviour[] = [];

    static addBehaviours<T extends Behaviour>(behaviours: T[]): Behaviour[] {
        behaviours[0].setEntryCabbage();
        behaviours[0].cabbage.openHeadlessChromeWindow();
        BehaviorRegistry._behaviours.push(...behaviours);

        return BehaviorRegistry._behaviours;
    }

    static getBehaviours(): Behaviour[] {
        return BehaviorRegistry._behaviours;
    }
}

class CabbageManager<T extends Behaviour = Behaviour> {
    from(behaviours: T[]): Promise<Behaviour[]> {
        return Promise.resolve(BehaviorRegistry.addBehaviours(behaviours));
    }
}

export function init(): CabbageManager {
    return new CabbageManager();
}
