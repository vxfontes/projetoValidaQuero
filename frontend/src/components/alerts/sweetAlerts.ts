import Swal from "sweetalert2";
import theme from "../../theme";

export function AlertSweet(title: string, type: 'error' | 'success', reload: boolean, text?: string, ) {
    const color = type === 'error' ? theme.palette.secondary.main : theme.palette.primary.main
    const button = type === 'error' ? 'Retornar' : 'Continue'
    Swal.fire({
        icon: type,
        title: title,
        confirmButtonColor: color,
        confirmButtonText: button,
        text: text
    }).then((result) => {
        if (result.isConfirmed && reload) {
            location.reload(); // Recarrega a página
        }
    })
}