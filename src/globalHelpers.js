import axios from 'axios';

const baseURL = 'http://127.0.0.1:5000/';

const formatQuery = (query) => query.toLowerCase().split(' ').join('+');

export const pingServers = async (context, setContext) => {
  const { data: { ping } } = await axios.get('https://leetmommy2.herokuapp.com/ping');

  if (ping) {
    setContext({ ...context, serversAwake: true });
  } else {
    throw new Error('Unable to reach heroku servers.');
  }
};

export const fetchResults = async (cohort, query) => {
  const { documents: results } =
    await axios.get(`${baseURL}search?query=${formatQuery(query)}&cohort=${cohort}`);

  return results;
};
