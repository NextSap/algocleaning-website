import {FormStateType, SentMessageInfo} from "@/utils/type";

const nodemailer = require("nodemailer");
import type {NextApiRequest, NextApiResponse} from 'next'

type ResponseType = {
    httpStatus: number,
    message: string,
}


export default function POST(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
    return new Promise<void>((resolve, reject) => {
        const message: FormStateType = req.body;

        const messageToSent: string = JSON.stringify(message);

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            service: process.env.SERVICE,
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: `Test email from ${message.name}`,
            html: `<div>${messageToSent}</div>`,
        };

        transporter.sendMail(mailOptions, function (error: Error, info: SentMessageInfo) {
            if (error) {
                res.status(500).send({httpStatus: 500, message: error.message});
                reject(error)
            } else {
                res.status(200).send({httpStatus: 200, message: "Email sent successfully"});
                resolve()
            }
        });
    });
}