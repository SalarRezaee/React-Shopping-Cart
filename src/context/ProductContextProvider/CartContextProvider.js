import { createContext, useReducer } from 'react'

const initialstate = {
    selectedItem: [],
    itemCounter: 0,
    total: '',
    checkout: false
}

const sumitems = item => {

    if (item) {
        let itemCounter = item.reduce((total, product) => total + product.quantitiy, 0)
        let total = item.reduce((total, product) => (total + product.price * product.quantitiy), 0).toFixed(2)
            return { itemCounter, total }
    }
}


export const CardContext = createContext()

const cardReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItem.find(item => item.id === action.payload.id)) {
                state.selectedItem.push({
                    ...action.payload,
                    quantitiy: 1,
                })
            }
            return { ...state, selectedItem: [...state.selectedItem], ...sumitems(state.selectedItem) , checkout : false}

        case "REMOVE_ITEM":
            const newSelectedItem = state.selectedItem.filter(item => item.id !== action.payload.id)
            return { ...state, selectedItem: [...newSelectedItem], ...sumitems(newSelectedItem) }
        case "INCREASE":
            let indexI = state.selectedItem.findIndex(item => item.id === action.payload.id)
            state.selectedItem[indexI].quantitiy++;
            return {
                ...state,
                ...sumitems(state.selectedItem)
            }

        case "DECREASE":
            let indexD = state.selectedItem.findIndex(item => item.id === action.payload.id)
            state.selectedItem[indexD].quantitiy--;
            return {
                ...state,
                ...sumitems(state.selectedItem)
            }

        case "CHECKOUT":
            return {
                ...state,
                selectedItem: [],
                itemCounter: 0,
                total: '',
                checkout: true
            }
        case "CLEAR":
            return {
                selectedItem: [],
                itemCounter: 0,
                total: '',
                checkout: false
            }

        default:
            return state
    }
}

const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cardReducer, initialstate)

    return (
        <CardContext.Provider value={{ state, dispatch }}>
            {children}
        </CardContext.Provider>
    )
}

export default CartContextProvider
