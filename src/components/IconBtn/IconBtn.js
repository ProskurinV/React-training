import PropTypes from 'prop-types';
import { IconButton } from './IconBtn.styled';

const IconBtn = ({ children, onClick, ...allyProps }) => (
  <IconButton
    type="button"
    className="IconBtn"
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </IconButton>
);

IconBtn.defaultProps = {
  onClick: () => null,
  children: null,
};

IconBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconBtn;
