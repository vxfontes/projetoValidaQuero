import { TemplateState } from "../../../data/templateState"
import { CamposProps, TemplateMainProps } from "../../interfaces/template"
import useUsuario from "./user";

export default function useTemplate() {

    const { getUser } = useUsuario()

    const templateDescription = (values: TemplateMainProps) => {
        TemplateState.titulo = values.titulo;
        TemplateState.descricao = values.descricao;
        TemplateState.formato = values.formato;
    }

    const templateCampos = (values: CamposProps[]) => {
        TemplateState.quantidadeCampos = values.length
        TemplateState.campos = values;
        TemplateState.usuario = getUser().result.matricula;
    }

    return {
        templateDescription, templateCampos
    }
}
