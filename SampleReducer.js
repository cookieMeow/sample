/* sample code
	理由：当时学习react的时候觉得redux很复杂，所以选了这段
*/

import _ from 'lodash'

const initialState = {  
    answer: []
} 

export const reducer = (state = initialState, action) => {
    let newState = initialState;
    switch (action.type) {   
        case 'LOADING':
            newState = _.assign({}, state, {
                loading: true
            });
            
            return newState;
        case 'FAILED': 
            newState = _.assign({}, state, {
                failed: true
            });
            
            return newState;
        case 'GET_DATA': 
            newState = _.assign({}, state, {
                events: state.data,
                loading: false
            });
            
		    return newState;

		case 'CLICK_INTO_EVENT':
            newState = _.assign({}, state, {
                eventDetails: action.data,
                loading: false
            });
        	return newState;
        
        case 'POPULAR_EVENTS':
            newState = _.assign({}, state, {
                popular: action.data.results,
                loading: false
            });
            return newState;
        default:  
            return newState;  
    }  
}  