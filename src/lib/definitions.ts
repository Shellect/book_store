export type CardsType = { id: number, title: string, author: string, image: string };

export type FormState = {
    errors?: {
        username?: string[],
        email?: string[],
        password?: string[],
    },
    message?: string
} | undefined;