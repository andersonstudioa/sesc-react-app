const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const tasksApi = {
  async getTasks() {
    try {
      const response = await fetch(API_URL + "tasks?populate=*", {
        method: 'GET',
        mode: 'cors',
        headers: {
          "content-type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        }
      });
      if (response.status == 200) {
        const result = await response.json();
        console.log('result.data', result.data);
        return result.data;
      } else {
        return false
      }
    } 
    catch (error) { console.log(error); return false; }
    }
};
