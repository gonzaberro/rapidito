import { func, string } from 'prop-types';
import styles from './styles/text-input.module.scss';

const TextInput = ({ onChange, placeholder, value }) => (
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
  value: string,
};

TextInput.defaultProps = {
  onChange: null,
  placeholder: '',
  value: '',
};

export default TextInput;
