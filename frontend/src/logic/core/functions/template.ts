import { TemplateState } from "../../../data/templateState"
import { TemplateMainProps } from "../../interfaces/template"

export default function useTemplate() {

    const templateDescription = (values: TemplateMainProps) => {
        TemplateState.titulo = values.titulo;
        TemplateState.descricao = values.descricao;
        TemplateState.formato = values.formato;
    }

    return {
        templateDescription
    }
}
