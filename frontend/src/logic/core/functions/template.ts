import { TemplateState } from "../../../data/templateState"
import { CamposProps, TemplateMainProps } from "../../interfaces/template"

export default function useTemplate() {

    const templateDescription = (values: TemplateMainProps) => {
        TemplateState.titulo = values.titulo;
        TemplateState.descricao = values.descricao;
        TemplateState.formato = values.formato;
    }

    const templateCampos = (values: CamposProps[]) => {
        TemplateState.quantidadeCampos = values.length
        TemplateState.campos = values;
    }

    const templateFinalizando = () => {
        console.log(TemplateState);
    }

    return {
        templateDescription, templateCampos, templateFinalizando
    }
}
