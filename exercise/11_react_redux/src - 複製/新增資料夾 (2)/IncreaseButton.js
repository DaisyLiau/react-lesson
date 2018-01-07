import { connect } from 'react-redux';
import IncreaseButton from '../components/IncreaseButton';

const mapDispatchToProps = dispatch => ({
  increase: () => {
    dispatch({
      type: 'INCREASE',
    });
  },
});

export default connect(null, mapDispatchToProps)(IncreaseButton)
;
