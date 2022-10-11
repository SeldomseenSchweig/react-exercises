import {Choice, Remove} from "./helpers"
import Foods from "./foods.js"


let item = Choice(Foods);

console.log(`I would like one ${item} please`)

let  removedItem = Remove(Foods,item)
console.log(`Here you go: ${removedItem}`)
console.log(`Delicious! May I have another?`)
console.log(`I'm sorry, we're all out. We have ${Foods.length} left.`)





