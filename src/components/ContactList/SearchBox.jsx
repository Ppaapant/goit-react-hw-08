import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter  } from "../../redux/filters/selectors";
import { setFilter } from "../../redux/filters/slice";


import css from "./Contact.module.css";


const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};
  
  export default SearchBox;