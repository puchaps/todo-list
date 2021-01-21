import { useContext } from 'react';
import { MainContext } from '../../context/main.context';

import './form-added.style.scss';

import {
  changeInputValueAC, addItemToTodoListAC,
  clearInputValueAC, setSelectValueAC
} from '../../context/actions/main.actions';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import FormSelect from '../form-select/form-select.component';

const FormAdded = () => {
  const{state: {inputValue, selectValue}, dispatch} = useContext(MainContext);

  const handleAddItemInTodoList = (e) => {
    e.preventDefault();
    
    if (!inputValue) {
      return
    } else {
      dispatch(addItemToTodoListAC());
      dispatch(clearInputValueAC());
    }
  };

  return (
    <div className="form-added">
      <div className="form-added-input" >
        <form>
          <FormInput 
            type="text"
            value = {inputValue}
            onChange = {(e) => dispatch(changeInputValueAC(e.target.value))}
          />
          <CustomButton onClick = {handleAddItemInTodoList} typeBtn = 'add' type = 'submit'>
            <span>&#10010;</span>
          </CustomButton>
        </form>
      </div>
      <div className="form-added-select">
        <FormSelect 
          value = {selectValue}
          onChange = {(e) => dispatch(setSelectValueAC(e.target.value))}
        />
      </div>
    </div>
  );
};

export default FormAdded;