function AllData(){
  function JsonDataDisplay(){
    const ctx = React.useContext(UserContext);
    console.log(ctx.users.name);
    const DisplayData=ctx.users.map(
        
        (user)=>{
            return(
                <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.balance}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
  const ctx = React.useContext(UserContext);
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">All Data</h5>
        <JsonDataDisplay/>
      </div>
    </div>
  )
}