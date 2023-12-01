import  FAQComponent  from '../containers/FAQ.component';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default FAQComponent;