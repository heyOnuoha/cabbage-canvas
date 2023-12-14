import { init } from "../lib";
import { Example } from "./example_1";

init()
    .from([new Example()])
    .then((behavior) => {
        console.log(behavior);
    });
