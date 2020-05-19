import axios from 'axios';

export const pingServers = async (context, setContext) => {
  const { data: { ping } } = await axios.get('https://leetmommy2.herokuapp.com/ping');
  if (ping) {
    setContext({ ...context, serversAwake: true });
  } else {
    throw new Error('Unable to reach heroku servers.');
  }
};
