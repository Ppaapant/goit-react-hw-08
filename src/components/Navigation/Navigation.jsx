import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(
     <nav>
        <NavLink>
            Home
        </NavLink>
      <NavLink>
         Tasks
      </NavLink>

     </nav>
    );
}