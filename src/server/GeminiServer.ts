import { GoogleConstants } from "../constants/GoogleConstants";
import { AbstractServer } from "./AbstractServer";

export class GeminiServer extends AbstractServer {
    private static instance: GeminiServer;
    private apiKey: string;
    private data: any;
    private url: string;

    public static getInstance(): GeminiServer {
        if (!this.instance)
            this.instance = new GeminiServer();
        return this.instance;
    }

    public static chat(message: string, fn?: Function) {
        this.getInstance().chat(message, fn);
    }

    private constructor() {
        super();
        this.apiKey = GoogleConstants.ApiKey;
        this.url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCxyH23ynapHtEASHfD4IrPFJmWSNEjK_M';
        this.data = {
            contents: [{
                parts: [
                    {
                        text: 'Explain how AI works in a few words'
                    }
                ]
            }]
        }
    }

    private chat(message: string, fn?: Function) {
        this.data.contents[0].parts[0].text = message;
        this.sendPostRequest(this.url, this.data, (response: any) => {
            const replyJson = response.getResponseText();
            const data = JSON.parse(replyJson);
            const text = data.candidates[0].content.parts[0].text;
            if (fn)
                fn(text);
            else
                console.log(text);
        });
    }

}