import axios from "axios";

export function getData(){
    return function (dispatch) {

        axios.get('http://universities.hipolabs.com/search?country=United+Kingdom')
            .then(function (response) {
                console.log(response.data);

                dispatch({
                    type: 'MY_DATA',
                    payload: response.data
                });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    };
};