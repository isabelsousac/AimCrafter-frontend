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
        return this.headers
    }

    // crafts

    async createCraft(craftInfo, onCraftNotCreated, onCraftCreated) {
        const response = await fetch(`${this.BASE_URL}/craft`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(craftInfo)
        });

        const body = await response.json();
        if (body.message) { // message is the error
            return onCraftNotCreated(body.message)
        }
        return onCraftCreated("Successfully created")
    }

    async showCraft(craftId) {
        const response = await fetch(`${this.BASE_URL}/craft/${craftId}`, {
            method: 'GET',
            headers: this.getHeaders()
        });
        return await response.json();
    }

    async fetchCrafts() {
        const response = await fetch(`${this.BASE_URL}/crafts`, {
            method: 'GET',
            headers: this.getHeaders()
        });
        return await response.json();
    }

    async deleteCraft(craftId) {
        return await fetch(`${this.BASE_URL}/craft/${craftId}`, {
            method: 'DELETE',
            headers: this.getHeaders()
        });
    }

    // likes

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

    // users

    async signup({userSignUp, onSignedIn, onError}) {
        const response = await fetch(`${this.BASE_URL}/signup`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(userSignUp)
        });

        const body = await response.json();
        if (body.token) {
            localStorage.setItem("token", body.token);
            localStorage.setItem("user", body.user);
            onSignedIn(); // user name can be displayed later
        } else {
            onError(body.message);
        }
    }

    async signin({userSignIn, onSignedIn, onError}) {
        const response = await fetch(`${this.BASE_URL}/signin`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(userSignIn)
        });

        const body = await response.json();
        if (body.token) {
            localStorage.setItem("token", body.token);
            localStorage.setItem("user", body.user);
            onSignedIn(); // (user), so user name can be displayed later
        } else {
            onError(body.message);
        }
    }
}

export default Api;