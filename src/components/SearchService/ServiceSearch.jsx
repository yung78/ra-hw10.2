import './ServiceSearch.css';
import { useDispatch } from 'react-redux';
import { searchlService } from '../../actions/actionCreators';

export default function ServiceSearch() {
  const dispatch = useDispatch();

  const handleSearch = (evt) => {
    const {value} = evt.target;
    
    dispatch(searchlService(value))
  }

  return (
    <form>
      <input className='input_search' type='search' placeholder='Поиск' name='name' onChange={handleSearch} />
    </form>
  );
}