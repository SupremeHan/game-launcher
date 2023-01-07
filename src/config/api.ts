import axios from 'axios';

export const TWITCH_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
export const TWITCH_SECRET = import.meta.env.VITE_CLIENT_SECRET;
const SESSION_SECRET = '<SOME SECRET HERE>';
const CALLBACK_URL = '<YOUR REDIRECT URL HERE>';

const api = axios.create({
  method: 'POST',
  url: `https://id.twitch.tv/oauth2/token?client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_SECRET}&grant_type=client_credentials`,
});

export default api;
