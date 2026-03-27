type userprops = {
    userName: string;
    userType: string;
};

/** Shape returned by https://jsonplaceholder.typicode.com/posts */
export type JsonPlaceholderPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type { userprops };