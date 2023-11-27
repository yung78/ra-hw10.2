import './ServiceAdd.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeService, addService, cancelService } from '../../actions/actionCreators';

export default function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    dispatch(changeService(name, value));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    dispatch(addService(item.name, item.price, item.id));
    handleCancel();
  }

  const handleCancel = () => {
    dispatch(cancelService());
  }

  return (
      <form className='form' onSubmit={handleSubmit}>
      <input className='input' name='name' onChange={ handleChange} value={item.name} />
      <input className='input' name='price' onChange={handleChange} value={item.price} />
      <button className='btn' type='submit'>Save</button>
      <button className='btn' type='button' onClick={handleCancel}>Cancel</button>
    </form>
  );
}
