declare const _default: {
    entities: ({
        type: string;
        text: string;
        keywords: string[];
        answer: string;
        links?: undefined;
    } | {
        type: string;
        text: string;
        keywords: string[];
        answer: string;
        links: {
            text: string;
            url: string;
        }[];
    } | {
        type: string;
        text: string;
        keywords: string[];
        answer: string;
        links: {};
    })[];
    scenes: {
        uid_1: {
            type: string;
            text: string;
        };
    };
};
export default _default;
