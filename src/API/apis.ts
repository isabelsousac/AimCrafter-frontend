interface Headers {
    [key: string]: string;
}

export interface CraftResponse {
    title: string;
    tools: string[];
    description: string | null;
    minutesToCreate: string | null;
    difficultyLevel: number | null;
    image: string;
    username: string;
    createdAt: string;
}

export interface CraftSummary {
    title: string;
    image: string;
    username: string;
    id: number;
}

export interface CraftLikes {
    craftId: number;
    likesCount: number;
}

export interface NewCraft {
    title: string;
    tools: string[];
    description: string | null;
    minutesToCreate: number | null;
    difficultyLevel: number | null;
    image: string;
}

export interface UserSignUp {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}

export interface UserSignIn {
    email: string;
    password: string;
}

class Api {
    authToken: string | null;

    constructor(authToken: string | null = null) {
        this.authToken = authToken;
    }

    headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    };

    BASE_URL = "http://localhost:8080";

    getHeaders(): Headers {
        if (this.authToken) {
            return {
                ...this.headers,
                Authorization: "Bearer " + this.authToken,
            };
        }
        return this.headers;
    }

    // crafts
    // TODO: remove callbacks
    async createCraft(
        craftInfo: NewCraft,
        onCraftNotCreated: (message: string) => void,
        onCraftCreated: (message: string) => void
    ) {
        const response = await fetch(`${this.BASE_URL}/craft`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify(craftInfo),
        });

        const body = await response.json();
        if (body.message) {
            // message is the error
            return onCraftNotCreated(body.message);
        }
        return onCraftCreated("Successfully created");
    }

    async showCraft(craftId: string): Promise<CraftResponse> {
        const response = await fetch(`${this.BASE_URL}/craft/${craftId}`, {
            method: "GET",
            headers: this.getHeaders(),
        });
        return await response.json();
    }

    async fetchCrafts(): Promise<CraftSummary[]> {
        const response = await fetch(`${this.BASE_URL}/crafts`, {
            method: "GET",
            headers: this.getHeaders(),
        });
        return await response.json();
    }

    async deleteCraft(craftId: string) {
        await fetch(`${this.BASE_URL}/craft/${craftId}`, {
            method: "DELETE",
            headers: this.getHeaders(),
        });
    }

    // likes

    async likeCraft(craftId: string): Promise<CraftLikes> {
        const response = await fetch(`${this.BASE_URL}/like`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ craftId }),
        });

        return await response.json();
    }

    async dislikeCraft(craftId: string): Promise<CraftLikes> {
        const response = await fetch(`${this.BASE_URL}/dislike`, {
            method: "DELETE",
            headers: this.getHeaders(),
            body: JSON.stringify({ craftId }),
        });

        return await response.json();
    }

    // users

    async signup(
        userSignUp: UserSignUp,
        onSignedIn: () => void,
        onError: (message: string) => void
    ) {
        const response = await fetch(`${this.BASE_URL}/signup`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify(userSignUp),
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

    /**
     * Sends a signin request to the API.
     * @param {UserSignIn} userSignIn - The user data for signIp.
     * @param {Function} onSignedIn - Callback function to execute on successful signIn.
     * @param {Function} onError - Callback function to execute on error during signIn.
    */
    async signin(
        userSignIn: UserSignIn,
        onSignedIn: () => void,
        onError: (message: string) => void
    ) {
        const response = await fetch(`${this.BASE_URL}/signin`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify(userSignIn),
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
