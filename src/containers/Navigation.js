import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { login } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username) => dispatch(login(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)