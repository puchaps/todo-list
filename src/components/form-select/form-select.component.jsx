import './form-select.styles.scss';

const FormSelect = ({...otherProps}) => {
  return(
    <div className="form-select">
      <select {...otherProps}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default FormSelect;