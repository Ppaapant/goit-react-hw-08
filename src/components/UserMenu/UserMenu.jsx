import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
  
    const handleLogout = () => {
      dispatch(logOut());
    };
    
    return (
   <div>
    <p>Welcome, {user.name}</p>
    <button type="button" onClick={handleLogout}>
        Logout
    </button>
   </div>
    );
}