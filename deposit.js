function Deposit(){
  const ctx = React.useContext(UserContext);  
  const ctxUsers = React.useContext(UserContexts);  
  if (ctxUsers.Logins.length == 0) {
    return (<>
                <h5>Please Login to make a deposit</h5>
                </>
              )}
  else {
    let userLoggedIn = (parseInt(ctxUsers.Logins[parseInt(ctxUsers.Logins.length-1)].Login)-1);
    console.log(userLoggedIn);
    const [show, setShow]         = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [balance, setBalance] = React.useState(ctx.users[userLoggedIn].balance);
    const [deposit, setDeposit] = React.useState('');
    

    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }

        if (field <= 0 || !Number(field)) {
          setStatus('Error: Invalid deposit amount');
          setTimeout(() => setStatus(''),3000);
          //console.log(typeof field);
          //console.log(field);
          return false;
        }
        return true;
    }

    function handleDeposit(){
      console.log(deposit);
      if (!validate(deposit, 'deposit')) return;
      console.log(balance);
      setBalance(parseInt(balance) + parseInt(deposit));
      ctx.users[userLoggedIn].balance= parseInt(balance) + parseInt(deposit);
      console.log(balance);
      setShow(false);
    }    

    function clearForm(){
      setDeposit('');
      setShow(true);
    }

    return (
      <Card
        bgcolor="primary"
        header="Deposit Cash"
        status={status}
        body={show ? (  
                <>Deposit<br/>
                <input type="deposit" className="form-control" id="deposit" placeholder="Enter Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" disabled={!deposit} onClick={handleDeposit}>Deposit</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
                </>
              )}
      />
    )
  }
}
