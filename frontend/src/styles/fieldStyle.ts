import theme from "../theme"

export const field100 = {
    minWidth: '100%',
    maxWidth: '100%',
}

export const fieldFormik = {
    minWidth: '90%',
    maxWidth: '90%',
    margin: '1%',
    [theme.breakpoints.down('md')]: {
        minWidth: '100%',
        maxWidth: '100%',
        my: '2%',
    }
}