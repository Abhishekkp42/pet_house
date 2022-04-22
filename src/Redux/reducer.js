import { ADD_PET_HOUSE } from "./action"

const initState= {
	pethouse:[]
}

export const reducer = (store=initState, {payload, type}) => {
	switch(type){
	case ADD_PET_HOUSE:
console.log("xxxxxx")
		return {
		...store,
		pethouse: [...payload]

		}
		default:
			return store
}
}