// import axios from '../service/axios';

// export const loginUser = (user) => async dispatch => {
//     try {
//         const response = await axios.post('/login', user)
//         console.log(response);
//         dispatch({ payload: response.data })
//         localStorage.setItem('users', JSON.stringify(response.data))
//     } catch (error) {
//         dispatch({ payload: error })
//     }
// }
// let result = await fetch(LOGIN_URL, {
        //     method: 'POST',
        //     headers: {
        //         'Context-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify(users)
        // });
        // result = await result.json();
        // localStorage.setItem(JSON.stringify(result));
         // navigate('/');