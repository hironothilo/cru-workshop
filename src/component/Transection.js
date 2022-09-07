const Transection = (props) => {
    const { item } = props;
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
            </ul>
        </div>
    );
};