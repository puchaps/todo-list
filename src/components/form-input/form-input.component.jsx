import './form-input.styles.scss';

const FormInput = ({textPlaceholder, ...otherProps}) => {
  return(
    <div className="form-input">
      <input placeholder = {textPlaceholder} {...otherProps} />
    </div>
  );
};

export default FormInput;