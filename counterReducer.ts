
type counterAction =
    { type: "increment"; payload?: number } |
    { type: "decrement" } |
    { type: "decrement10" } |
    { type: "reset" };

export function counterReducer(state: number, action: counterAction) {
    switch (action.type) {
        case 'increment':
            return state + (action.payload ?? 1);
        case 'decrement':
            return state - 1;
        case 'decrement10':
            return state - 10;
        case 'reset':
            return 0;
        default:
            action satisfies never; // Kontrollerar att swithcen innehåller cases för alla actions
            return state;
    }
}