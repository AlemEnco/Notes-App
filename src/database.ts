import mongoose from 'mongoose'
import { mongodb } from './keys'

mongoose.connect(mongodb.URI, {
    useBigInt64: true

})
.then(db => console.log('DB is connect'))
.catch(error => console.log(error));
