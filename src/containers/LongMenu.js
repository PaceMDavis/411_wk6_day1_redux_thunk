import { connect } from 'react-redux'
import LongMenu from '../components/Import'
import {deleteMake} from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMake: (index) => dispatch(deleteMake(index))
  }
}

export default connect(null,mapDispatchToProps)(LongMenu)