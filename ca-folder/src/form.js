export default function ATMDeposit({onChange,isDeposite}){
    const choice=["Deposite","cashback"];
    return(
        <>
        <label>
            <h3>{choice[Number(!isDeposite)]}</h3>
            <input type="number" onChange={onChange} />
            <input type="submit" value="submit"/>
        </label>
        </>
    )
}