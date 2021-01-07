export interface Ibanners {
 factoids: Ifactoids[];
 faq: Ifaq[];
}

export interface Ifactoids {
    banner: string;
    id: string;
}
export interface Ifaq {
    answer:string;
    category:string;
    qno:string;
    question:string;
}