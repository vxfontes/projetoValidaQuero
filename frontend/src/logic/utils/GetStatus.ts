import { statusArray } from "../../data/status";
import { StatusProps } from "../interfaces/template";

export const getStatusTemplate = (status: number): StatusProps => {
    const statusEncontrado = statusArray.find((item) => item.id === status);

    if (statusEncontrado) {
        // Map string values to the allowed string literals
        let color: "success" | "warning" | "error" | "default" | "secondary" | "primary" | "info";

        switch (statusEncontrado.color) {
            case "success":
                color = "success";
                break;
            case "warning":
                color = "warning";
                break;
            case "error":
                color = "error";
                break;
            case "default":
                color = "default";
                break;
            case "secondary":
                color = "secondary";
                break;
            case "primary":
                color = "primary";
                break;
            case "info":
                color = "info";
                break;
            default:
                color = "error"; // Default to "error" for unknown values
        }

        return { titulo: statusEncontrado.titulo, color };
    } else {
        return { titulo: 'ERRO', color: 'error' };
    }
}
