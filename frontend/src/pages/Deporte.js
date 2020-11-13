import React from 'react';
import {useState,useEffect} from 'react';
import News from '../components/News';

import { useHistory } from 'react-router-dom';

function Deporte() {

  const history = useHistory();

  const [state,setState]= useState({news:[]})
  useEffect(()=>{
    consultNews()
    const userSession = JSON.parse(sessionStorage.getItem('userSession'))
      if (!userSession) {
          history.push('/')
      }
  }, []);

  let consultNews = async () => {
    let url = 'https://peoplenews.herokuapp.com/api/home/category';


    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ category : 2 }),
      headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(respuesta => {
      return respuesta.json();
    })
    .then(news => {
      console.dir( news)
      setState(news)

    })
  }

  return (
    <div className='inicio'>
      <News news={state.post} />
    </div>
  );
}

export default Deporte;