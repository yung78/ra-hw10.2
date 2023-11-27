import './ServiceList.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, changeService, cancelService } from '../../actions/actionCreators';

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList.state);
  const filtedItems = useSelector((state) => state.serviceList.filtred)
  const fields = useSelector((state) => state.serviceAdd);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
    if (id === fields.id) {
      dispatch(cancelService());
    }
  };

  const handleEdit = (name, price, id) => {
    dispatch(changeService('name', name));
    dispatch(changeService('price', price));
    dispatch(changeService('id', id));
  };
  
  return (
    <ul>
      {filtedItems.length > 0 ? (
        filtedItems.map((el) => (
          <li key={el.id}>
            {el.name} {el.price}
            <button id={el.id} className='btn_edit' onClick={() => handleEdit(el.name, el.price, el.id)}></button>
            <button className='btn_del' onClick={() => handleRemove(el.id)}></button>
          </li>)
        )
      ) : (
        items.map((el) => (
          <li key={el.id}>
            {el.name} {el.price}
            <button id={el.id} className='btn_edit' onClick={() => handleEdit(el.name, el.price, el.id)}></button>
            <button className='btn_del' onClick={() => handleRemove(el.id)}></button>
          </li>)
        )
      )}
    </ul>
  );
}
