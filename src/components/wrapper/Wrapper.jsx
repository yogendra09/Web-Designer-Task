import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "../../store/store";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from 'prop-types';
const Wrapper = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          {children}
        </BrowserRouter>
      </Provider>
    </>
  );
};
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Wrapper;
