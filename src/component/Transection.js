import { useState } from "react";

const Transection = (props) => {
    const { item } = props;
    const removeItem = (e) => {
        const id = e.target.getAttribute('name');
            props.deleteItem(id);
            
    };
    const [Valid,setValid] = useState(false)
        useEffect(()=>{
        setValid(amount.trim().length>0 && title.trim().length>0 && Number(amount) !== 0)
    },[title,amount])
    disabled=!Valid
    const [incomes, setIncomes] = useState(0);
    const [expenses, setExpenses] = useState(0);
    useEffect(() => {
        const itemAmount = item.map((item) => item.amount);
        const income = itemAmount
          .filter((item) => item > 0)
          .reduce((total, item) => (total += item), 0);
        const expense = itemAmount
          .filter((item) => item < 0)
          .reduce((total, item) => (total += item), 0);
        setIncomes(income);
        setExpenses(expense);
      }, [item]);
    incomes=incomes
    expenses= expenses 

    const total = incomes + expenses
    const stat = total<0 ? "reportexpense":"reportincome"
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

                <li key={element.id}>////step9
                    <button onClick={removeItem} name={element.id}>
                        X
                    </button>
                </li>

                {item.map((element) => { ////step10
                const stat = element.amount < 0 ? 'expenses' : 'income';
                const mathsymbol = element.amount < 0 ? '-' : '+';          
                return(
                <li key={element.id} className={stat}>
                    <span className="itemleft">{element.title}</span>
                    <span className="itemright">{mathsymbol}{Math.abs(element.amount)}</span>
                    <button onClick={removeItem} name={element.id}>
                    X
                    </button>
                </li>
                )})}
            </ul>

            <h4 >ยอดเงินคงเหลือ(บาท):</h4> ////step11
            <h1><span className={stat}></span></h1>
             <div className="reportcontainer">
                 <div>
                    <h3>รายได้:</h3><p className="reportincome"><span></span></p>
                </div>
                <div>
                    <h3>รายจ่าย:</h3><p className="reportexpense"><span></span></p>
                </div>
             </div>
        </div>
    );
};