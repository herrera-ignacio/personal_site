import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => {
    console.log(theme)
    return ({
        root:
        {
            flexGrow: 1,
            backgroundColor: theme.palette.primary.main
        }
    })
})
