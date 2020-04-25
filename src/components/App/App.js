import React, {useEffect, useReducer} from 'react';
import './App.css';
import axios from 'axios';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import User from '../User/User';

const URL = 'https://jsonplaceholder.typicode.com/';

const initialState = {
  loading: true,
  users: [],
  errorMessage:null
};

const reducer = (state, action) => {
  switch(action.type){
  case 'SENDING_REQUEST':    
    return {
      ...state,
      loading: true,
      users: [],
      errorMessage: null
    };
  case 'USERS':
    return {
      ...state,
      loading: false,
      users: action.users,
      errorMessage: null
    };
  case 'ERROR':
    return {
      ...state,
      loading: false,
      users: [],
      errorMessage: action.error 
    };
  default:
    return state; 
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    () => {
      dispatch({
        type: 'SENDING_REQUEST'
      });

      axios.get(URL + 'users')
        .then((response) => {
          dispatch({
            type: 'USERS',
            users: response.data
          });
        })
        .catch((error) => {
          if(error.response){          
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            dispatch({
              type: 'ERROR',
              error: 'Error receiving data from server'
            });
          }else if(error.request){          
            console.log(error.request);
            dispatch({
              type: 'ERROR',
              error: 'Error requesting data from server'
            });
          }else{          
            console.log('Error', error.message);
            dispatch({
              type: 'ERROR',
              error: error.message
            });
          }
          console.log(error);                
        });
    }, 
    []
  );  

  return <div className='App App__col'>
    
    <div className='App__header'>
      <div className='App__col'>
        <Header text='React Photo Gallery'/>
      </div>      
    </div>    
    
    <div className='App__content'>
      <div className='App__col'>
        {state.loading ? (
          <Loading/>
        ) : state.errorMessage ? (
          <ErrorMessage text={state.errorMessage}/>
        ) : (
          <div className='App__col'>
            {state.users.map((user, index) => (
              <div className='App__row' key={index}>
                <User user={user} url={URL}/>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>    

  </div>;
};

export default App;