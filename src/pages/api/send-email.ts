import {FormStateType, SentMessageInfo} from "@/utils/type";

const nodemailer = require("nodemailer");
import type {NextApiRequest, NextApiResponse} from 'next'

type ResponseType = {
    httpStatus: number,
    message: string,
}


export default function POST(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
        const message: FormStateType = req.body;

        const transporter = nodemailer.createTransport({
            host: process.env.STMPHOST,
            port: process.env.STMPPORT,
            service: process.env.SERVICE,
            auth: {
                user: process.env.EMAILFROM,
                pass: process.env.PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAILFROM,
            to: process.env.EMAILTO,
            subject: `${message.domain} - ${message.name}`,
            html: messageTemplate(message),
        };

        transporter.sendMail(mailOptions, function (error: Error, info: SentMessageInfo) {
            if (error) {
                res.status(500).send({httpStatus: 500, message: error.message});
                console.log(error)
            } else {
                res.status(200).send({httpStatus: 200, message: "Email sent successfully"});
            }
        });
}

const messageTemplate = (message: FormStateType): string => {
    const stringifiedMessage = JSON.parse(JSON.stringify(message));
    return `
        <div>
            <h3>Concerne les ${stringifiedMessage.domain} - ${stringifiedMessage.area}</h3>
            <br>
            <p>Nom: ${stringifiedMessage.name}</p>
            <p>Téléphone : ${stringifiedMessage.phone}</p>
            <p>Email: ${stringifiedMessage.email}</p>
            <br>
            <p>Message:</p>
            <p>${stringifiedMessage.message}</p>
        </div>
    `
}