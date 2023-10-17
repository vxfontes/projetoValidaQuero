import Swal from "sweetalert2";
import theme from "../../theme";

export function AlertSweet(title: string, type: 'error' | 'success', text?: string) {
    const color = type === 'error' ? theme.palette.secondary.main : theme.palette.primary.main
    const button = type === 'error' ? 'Retornar' : 'Continue'
    Swal.fire({
        icon: type,
        title: title,
        confirmButtonColor: color,
        confirmButtonText: button,
        text: text
    });
}