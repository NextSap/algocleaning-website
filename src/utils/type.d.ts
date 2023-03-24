export type DataType = {
    title: string,
    description: string,
    image: string,
}

export type FAQType = {
    question: string,
    answer: string,
}

export type ContactType = {
    name: string,
    phone: string,
    image: string,
}

export interface SentMessageInfo {
    /**
     * most transports should return the final Message-Id value used with this property
     */
    messageId: string;
    /**
     * includes the envelope object for the message
     */
    envelope: any;
    /**
     * is an array returned by SMTP transports (includes recipient addresses that were accepted by the server)
     */
    accepted: string[];
    /**
     * is an array returned by SMTP transports (includes recipient addresses that were rejected by the server)
     */
    rejected: string[];
    /**
     * is an array returned by Direct SMTP transport. Includes recipient addresses that were temporarily rejected together with the server response
     */
    pending?: string[] | undefined;
    /**
     * is a string returned by SMTP transports and includes the last SMTP response from the server
     */
    response: string;
}

export type FormStateType = {
    name: string,
    email: string,
    phone: string,
    address: string,
    area: string,
    domain: string,
    message: string,
}