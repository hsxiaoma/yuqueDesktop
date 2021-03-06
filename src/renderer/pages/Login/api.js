import axios from 'helper/axios';

const fetchGetUserInfo = () => axios.get('/user');

export async function GetUserInfo() {
  let resp;
  try {
    resp = await fetchGetUserInfo();
  } catch (error) {
    // ignore
    return;
  }
  
  const { data } = resp.data;
  if (!data) return;
  return data;
}