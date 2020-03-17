import { connect } from 'react-redux'
import Logout from '../components/Logout'
import { logout } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    logout: (username) => dispatch(logout(username))
}


export default connect(null, mapDispatchToProps)(Logout)