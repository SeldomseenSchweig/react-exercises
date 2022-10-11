
const Choice = (props) => props[Math.floor(Math.random() * props.length)]

const Remove = (items,item) =>{ 
    
    let idx = items.indexOf(item)
    return (items.splice(idx,1)) }



export {Choice, Remove};


