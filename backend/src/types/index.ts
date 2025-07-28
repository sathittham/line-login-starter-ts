export interface User {
    id: string;
    name: string;
    email: string;
    picture: string;
}

export interface AuthResponse {
    accessToken: string;
    idToken: string;
    expiresIn: number;
    user: User;
}