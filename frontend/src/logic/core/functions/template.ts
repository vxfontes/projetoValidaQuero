import { TemplateState } from "../../../data/templateState"
import { CamposProps, TemplateMainProps } from "../../interfaces/template"

export default function useTemplate() {

    const templateDescription = (values: TemplateMainProps) => {
        TemplateState.titulo = values.titulo;
        TemplateState.descricao = values.descricao;
        TemplateState.formato = values.formato;
        console.log(TemplateState);
        
    }
    
    const templateCampos = (values: CamposProps[]) => {
        TemplateState.campos = values;
    }

    return {
        templateDescription, templateCampos
    }
}
