function Withdraw(){
  const ctx = React.useContext(UserContext);  
  const ctxUsers = React.useContext(UserContexts);  
  if (ctxUsers.Logins.length == 0) {
    return (<>
                <h5>Please Login to make a withdrawl</h5>
                </>
              )}
  else {
    let userLoggedIn = (parseInt(ctxUsers.Logins[parseInt(ctxUsers.Logins.length-1)].Login)-1);
    //console.log(userLoggedIn);
    //console.log(ctx.users[userLoggedIn].balance);
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [balance, setBalance] = React.useState(ctx.users[userLoggedIn].balance);
    const [withdraw, setWithdraw]         = React.useState('');
    

    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        if (field > balance || !Number(field)) {
          setStatus('Error: Overdraft');
          setTimeout(() => setStatus(''),3000);
          console.log(typeof field);
          console.log(field);
          return false;
        }
        return true;
    }

    function handleWithdraw(){
      console.log(withdraw);
      if (!validate(withdraw, 'withdraw')) return;
      console.log(balance);
      setBalance(parseInt(balance) - parseInt(withdraw));
      ctx.users[userLoggedIn].balance= parseInt(balance) - parseInt(withdraw);
      console.log(balance);
      setShow(false);
    }    

    function clearForm(){
      setWithdraw('');
      setShow(true);
    }

    return (
      <Card
        bgcolor="primary"
        header="Withdraw Cash"
        status={status}
        body={show ? (  
                <>Withdraw<br/>
                <input type="input" className="form-control" id="withdraw" placeholder="Enter Withdrawl Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" disabled={!withdraw} onClick={handleWithdraw}>Withdraw</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawl</button>
                </>
              )}
      />
    )
  }
}
