import { useState } from "react";

const Transection = (props) => {
    const { item } = props;
    const [valid, setValid] = useState(false)
    useEffect(() => {
      setValid(amount.trim().length>0 && title.trim().length>0 && Number(amount)!=0)
    }, [title,amount])
    disabled = !valid
    const removeItem = (e) => {
        const id = e.target.getAttribute('name');
            props.deleteItem(id);
            
    };
    return (
        <div>
            <ul className="item ">
                {item.map((element, index) => (
                    <li key={index}>
                        <span className="itemleft">{element.title}</span>
                        <span className="itemright">{element.amount}</span>
                        {setTitle("")}
                        {setAmount("")}
                        {value={title}}
                        {value={amount}}
                    </li>
                ))}
                <li key={element.id}>
                    <button onClick={removeItem} name={element.id}>
                        X
                    </button>
                </li>
            </ul>
        </div>
    );
};