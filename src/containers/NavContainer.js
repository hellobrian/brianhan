import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleNav } from 'state/nav/actions';
import Nav from 'components/Nav';

const mapStateToProps = state => ({
  isNavOpen: state.isNavOpen
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleNav }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
