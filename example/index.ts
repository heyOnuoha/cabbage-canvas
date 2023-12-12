import { init } from '../lib'
import { Example1 } from './example_1'

init().from([
    new Example1(),
]).then(behavior => {
    console.log(behavior)
})