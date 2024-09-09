import { Response } from 'express';
import axios from "axios"

interface IConselho {
    data: {
        slip: {
            id: number
            advice: string
        }
    }
}

class GetConselhoFromAdviceslip {
    constructor() {
        console.log("Iniciando GetConselhoFromAdviceslip");
    }

    public async getConselho(): Promise<string> {
        const url: string = "https://api.adviceslip.com/advice"
        const resposta = await axios.get(url)
        return resposta.data.slip.advice;
    }
};

export default GetConselhoFromAdviceslip