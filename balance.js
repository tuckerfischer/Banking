function Balance(){
  const ctx = React.useContext(UserContext);
  const ctxUsers = React.useContext(UserContexts); 

  if (ctxUsers.Logins.length == 0) {
    return (<>
                <h5>Please Login to view your balance</h5>
                </>
              )}
  else {
    let userLoggedIn = (parseInt(ctxUsers.Logins[parseInt(ctxUsers.Logins.length-1)].Login)-1);
    let totalBalance = `Balance: ${ctx.users[userLoggedIn].balance}`
    return (
      <Card
        bgcolor="primary"
        header="Total Balance"
        //status={status}
        body={(  
                <>{totalBalance}<br/>
                
                </>
              )}
      />
    )
  }
}
