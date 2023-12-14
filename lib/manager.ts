import { CabbageBehaviour } from "./contracts/cabbageBehaviour";

class BehaviorRegistry {
    private static _behaviours: CabbageBehaviour[] = [];

    static addBehaviours<T extends CabbageBehaviour>(behaviours: T[]): CabbageBehaviour[] {
        behaviours[0].setEntryCabbage();
        // behaviours[0].cabbage.openHeadlessChromeWindow();
        BehaviorRegistry._behaviours.push(...behaviours);

        return BehaviorRegistry._behaviours;
    }

    static getBehaviours(): CabbageBehaviour[] {
        return BehaviorRegistry._behaviours;
    }
}

class CabbageManager<T extends CabbageBehaviour = CabbageBehaviour> {
    from(behaviours: T[]): Promise<CabbageBehaviour[]> {
        return Promise.resolve(BehaviorRegistry.addBehaviours(behaviours));
    }
}

export function init(): CabbageManager {
    return new CabbageManager();
}
