import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filtersSlice";
import { selectNameFilter } from "../redux/filtersSlice";

import css from "../App.module.css";


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