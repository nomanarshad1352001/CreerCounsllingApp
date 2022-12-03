export default (colleges = [] ,action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...colleges, action.payload];
        default:
            return colleges;
    }
}