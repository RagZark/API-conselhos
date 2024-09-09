import { Request, Response } from "express"
import GetConselhoFromAdviceslip from "../provider/GetConselhoFromAdviceslip";
import TranslateByMymemory from "../provider/TranslateByMymemory";

class ConselhoController {
    // TODO: fazer funcionar neste modelo
    //private origemConselho: GetConselhoFromAdviceslip
    //private translateByMymemory: TranslateByMymemory

    constructor() {
        // TODO: fazer funcionar neste modelo
        // this.origemConselho = new GetConselhoFromAdviceslip()
        // this.trnaslateByMymemory = new TranslateByMymemory()
        console.log("Instanciando ConselhoController");
    }

    public async getConselho(_req: Request, res: Response) {
        const origemConselho = new GetConselhoFromAdviceslip
        const translateByMymemory = new TranslateByMymemory()

        const conselhoOriginal: string = await origemConselho.getConselho()
        const conselhoTraduzido: string = await translateByMymemory.translate(conselhoOriginal, "en|pt-br")

        let respostaHttp = { 
            conselhoOriginal, 
            conselhoTraduzido
         }

        res.json(respostaHttp)
    }
}

export default ConselhoController