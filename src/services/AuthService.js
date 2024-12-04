import getBaseURL from './Config';

const baseURL = getBaseURL();

export const login = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        const token = data.token; // Assuming the JWT is returned as { token: "JWT_TOKEN" }

        // Store the JWT in localStorage
        localStorage.setItem('jwt', token);

        return token;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const getToken = () => {
    return localStorage.getItem('jwt');
};

export const logout = () => {
    localStorage.removeItem('jwt');
};
