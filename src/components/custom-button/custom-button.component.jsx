import './custom-button.styles.scss';

const CustomButton = ({children, typeBtn = '', ...otherProps}) => {
  return(
    <div className = 'custom-button'>
      <button {...otherProps} className = {`custom-button-btn ${typeBtn}`}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;