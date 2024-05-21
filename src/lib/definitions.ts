export type CardsType = { id: number, title: string, author: string, image: string };

export type FormState = {
    username?: string[], email?: string[], password?: string[], confirmPassword?: string[]
} | undefined;