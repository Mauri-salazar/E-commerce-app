import PropTypes from "prop-types";
import FadeLoader from "react-spinners/FadeLoader";
import "./loading.css";

export const Loading = ({loading}) => {
  return (
    <div className="item-loading">
      <FadeLoader
        color="#36d7b7"
        loading={loading}
      />
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool,
}
