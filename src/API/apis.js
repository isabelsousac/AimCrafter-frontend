class Api {

    constructor(authToken) {
      this.authToken = authToken;
    }
  
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  
    BASE_URL = 'http://localhost:8080';
  
    getHeaders() {
        if (this.authToken) {
            return {
                ...this.headers,
                'Authorization': 'Bearer ' + this.authToken
            }
        } 
        return  this.headers 
    }
  
    async createCraft() {
      return await fetch(`${this.BASE_URL}/craft`, {
        method: 'POST',
        headers: this.getHeaders()
      });
    }
  
    async deleteCraft(craftId) {
      return await fetch(`${this.BASE_URL}/craft/${craftId}`, {
        method: 'DELETE',
        headers: this.getHeaders()
      });
    }
  
    async likeCraft(craftId) {
      return await fetch(`${this.BASE_URL}/like`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(craftId)
      });
    }
  
    async dislikeCraft(craftId) {
      return await fetch(`${this.BASE_URL}/dislike`, {
        method: 'DELETE',
        headers: this.getHeaders(),
        body: JSON.stringify(craftId)
      });
    }
  }
  
  export default Api;