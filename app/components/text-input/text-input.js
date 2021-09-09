import { func, string } from 'prop-types';
import styles from './styles/text-input.module.scss';

const TextInput = ({ onChange, placeholder }) => (
  <input
    className={styles.textInput}
    onChange={onChange}
    placeholder={placeholder}
    type="text"
  />
);

TextInput.propTypes = {
  onChange: func,
  placeholder: string,
};

TextInput.defaultProps = {
  onChange: null,
  placeholder: '',
};

export default TextInput;
