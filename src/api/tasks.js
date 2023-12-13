const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const tasksApi = {
  async getTasks() {
    try {
      const response = await fetch(API_URL + "tasks?populate=*&sort[0]=id:desc", {
        method: 'GET',
        mode: 'cors',
        headers: {
          "content-type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        }
      });
      if (response.status == 200) {
        const result = await response.json();
        return result.data;
      } else {
        return false
      }
    } 
    catch (error) { console.log(error); return false; }
  },
  async insertTask(data) {
    console.log('insertTask data', data);
    try {
      const response = await fetch(API_URL + "tasks", {
        method: 'POST',
        mode: 'cors',
        headers: {
          "content-type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(data),
      });
      if (response.status == 200) {
        return await response.json();
      } else {
        return false;
      }
    } 
    catch (error) { console.log(error); return false; }
  },
  async deleteTask(id) {
    try {
      const response = await fetch(API_URL + "tasks/" + id, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          "content-type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
      });
      if (response.status == 200) {
        return await response.json();
      } else {
        return false;
      }
    } 
    catch (error) { console.log(error); return false; }
  },
  async updateStatusTask(data, id) {
    try {
      const response = await fetch(API_URL + "tasks/" + id, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          "content-type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(data),
      });
      if (response.status == 200) {
        return await response.json();
      } else {
        return false;
      }
    } 
    catch (error) { console.log(error); return false; }
  },
};