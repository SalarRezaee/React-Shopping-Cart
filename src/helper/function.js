const shorten = (title) => {
    const splitedTitle = title.split(" ")
    return `${splitedTitle[0]} ${splitedTitle[1]}`
}

const isInCard = (state , id) => {
    console.log(state);
    const result = !!state.selectedItem.find(item => item.id === id)
    return result
}

const quantitiyCount = (state , id) => {
    const index = state.selectedItem.findIndex(item => item.id === id)
    if(index === -1) { 
        return false
    }
    else { 
        return state.selectedItem[index].quantitiy
    }
}



export {shorten , isInCard , quantitiyCount }