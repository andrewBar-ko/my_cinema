const API_KEY = '763c4f7e2beea0eec118f9374ed97af5';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

// trending/all/day?api_key=<<api_key>>

const getData = url => fetch(url)
    .then(response => {
      if(response.ok) {
        return response.json()
      } 
      throw `Что-то пошдо не так, ошибка ${response.status}`;  
    })
    .catch(err => console.error(err));

export const getTriends = async (type = 'all', period = 'week', page = 1) => {
  const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);
};
