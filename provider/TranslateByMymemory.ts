import axios from "axios";

interface ITraducao {
    data: {
        responseData: {
            translatedText: string
        },
    }
}

class TranslateByMymemory {
    constructor() {
        console.log("Iniciando TranslateByMymemory");
    }

    public async translate(text: string, lang:string) :Promise<string> {
        const parsetext = encodeURIComponent(text)
        const idioma = encodeURIComponent(lang)
        const urlTradutor:string = 
          `https://api.mymemory.translated.net/get?q=${parsetext}&langpair=${idioma}`
        const resposta:ITraducao = await axios.get(urlTradutor)
    
        return resposta.data.responseData.translatedText
      }
}

export default TranslateByMymemory