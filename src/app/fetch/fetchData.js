const API_URL = 'http://content.guardianapis.com';
const API_KEY = '?api-key=a6b5b6e9-1d8d-4c47-9978-a2fdc5fc9f32';

export async function getData(path = '', query = {}) {

  const parsedQuery = JSON.stringify(query)
    .replaceAll('{','&')
    .replaceAll('}', '')
    .replaceAll(':', '=')
    .replaceAll(',', '&')
    .replaceAll('"','');
    const response = await fetch(API_URL + path + API_KEY + parsedQuery + '&format=json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://content.guardianapis.com',
        'Access-Control-Allow-Credentials': 'true'
      }
    });
    if(response.ok){
      return response.json();
    } else {
      throw new Error(`Http error: ${response.status}`);
    }
}
