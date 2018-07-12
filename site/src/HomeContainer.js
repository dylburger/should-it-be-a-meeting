import {connect} from 'react-redux';
import {setUserHasSeenModal, setUserHasNotSeenModal} from './actions/app';

import Home from './Home';

const mapStateToProps = state => ({
  userHasSeenWelcomeModal: state.app.userHasSeenWelcomeModal,
});

const mapDispatchToProps = dispatch => ({
  setUserHasSeenModal: () => dispatch(setUserHasSeenModal()),
  setUserHasNotSeenModal: () => dispatch(setUserHasNotSeenModal()),
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
