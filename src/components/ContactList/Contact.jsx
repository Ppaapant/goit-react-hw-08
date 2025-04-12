import { FaPhone, FaUser } from "react-icons/fa";



const Task = ({ id, name,number, onDelete }) => {
  return (
    <li>
      <div>
      <p><FaUser /> {name}</p>
      <p><FaPhone /> {number}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Task;