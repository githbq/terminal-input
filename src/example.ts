import { config } from 'process'
import { confirm, input } from './index'

!(async () => {
    const msg1 = await confirm('how are you', 'y')
    console.log('msg1', msg1)
    const msg2 = await input('how are you', 'y')
    console.log('msg2', msg2)
})()