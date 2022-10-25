import {useState} from 'react';
import './list.css'

function List(props) {

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
      // 👇️ toggle isActive state on click
      setIsActive(current => !current);
    };

    return (
        <div>
            <table style={{ margin: "20px auto",border: "1px solid black", width: "500px", justifySelf: "center" }}>
                {
                    props.items.map((item, index) => 
                    <tr>
                        <td>
                            <span key={index} className={isActive ? 'done' : ''}>{item}</span> 
                        </td>
                        <td>
                            <input type="checkbox" onClick={handleClick} />
                        </td>
                    </tr>
                )} 
            </table>
        </div>
    );
} 
 
export default List;