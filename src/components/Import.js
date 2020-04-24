import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Container, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

const options = [
    'Delete'
]

const ITEM_HEIGHT = 48;


const LongMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [menuOpen, setMenuOpen] = React.useState(false)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        setMenuOpen(!menuOpen)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setMenuOpen(!menuOpen)
    }
    
    const handleClickRemove = () => {
        handleClose()
        props.deleteMake()
    }

    return (
        <div>
            <IconButton
                aria-lable='more'
                aria-controls='long-menu'
                aria-haspopup='true'
                onClick ={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id='long-menu'
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{vertical:'top', horizontal:'left'}}
                transformOrigin={{vertical:'top', horizontal:'center'}}
                keepMounted
                open={menuOpen}
                onClose={handleClose}
                PaperProps ={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    }
                }}
            >
              {options.map((option, index) => (
                  <MenuItem key={option} onClick={handleClickRemove} >
                      {option}
                  </MenuItem>

              ))}
            </Menu>
        </div>
    )


}

const Import = (props) => {

    return (
        <Container>
            <Button variant="contained" color="primary" onClick ={props.fetchMakes}>Import</Button>
            <Table>
                <TableHead>Count: {props.makes.length}</TableHead>
                <TableBody>
                    {props.makes.map((make, index) => (
                     <TableRow key={index}>
                         <TableCell>{make.MakeId}</TableCell>
                         <TableCell>{make.MakeName}</TableCell>
                         <TableCell>{make.VehicleTypeName}</TableCell>
                         <LongMenu onClick={props.handleClick} deleteMake={() => props.deleteMake(index)}/>
                     </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import