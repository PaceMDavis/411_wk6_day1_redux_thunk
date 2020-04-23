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
    const [anchorE1, setAnchorE1] = React.useState(null)
    const [menuOpen, setMenuOpen] = React.useState(false)

    const handleClick = (event) => {
        setAnchorE1(event.currentTarget)
        setMenuOpen(!menuOpen)
    }

    const handleClose = () => {
        setAnchorE1(null)
        setMenuOpen(!menuOpen)
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
                anchorE1={anchorE1}
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
                  <MenuItem key={option} selected ={option === 'Delete'} onClick={ () => props.deleteMake(index, handleClose())} >
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
                         <LongMenu onClick={props.handleClick} deleteMake={props.deleteMake}/>
                     </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import