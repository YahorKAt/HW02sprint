import {initialPeople, UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[] = initialPeople, action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name.localeCompare(b.name, 'ru'))
            }
            if (action.payload === 'down') {
                return [...state].sort((a, b) => b.name.localeCompare(a.name, 'ru'))
            }
            return state
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}
