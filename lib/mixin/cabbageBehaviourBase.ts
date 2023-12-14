import { CabbageBehaviour } from "../contracts/cabbageBehaviour";
import { IBehaviour } from "../interfaces/ibehaviour";

export class CabbageBehaviourMixin implements IBehaviour {
    setCanvasId(canvasId: string): void {}
}
