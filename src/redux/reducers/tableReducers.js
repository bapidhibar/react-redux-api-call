const initialState = { mydataPayload: [] }

export default function (state = initialState, action) {
   switch (action.type) {
       
    case 'MY_DATA':
        {
           return {
              ...state,
              mydataPayload: action.payload 
              
           };
        }
     default:
        return state;
  }
}

