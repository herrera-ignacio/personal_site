import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import LinkTab from './link-tab'
import useStyles from './styles'

function NavBar()
{
    const classes = useStyles()
    const [value, setValue] = useState(0)

    const handleChange = (e, newValue) => setValue(newValue)

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tab"
                >
                    <LinkTab label="Home" to="/" />
                    <LinkTab label="Portfolio" to="/portfolio" />
                    <LinkTab label="About" to="/about" />
                    <LinkTab label="Contact" to="/contact" />
                </Tabs>
            </AppBar>
        </div>
    )
}

export default NavBar
