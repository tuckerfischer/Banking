function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BankersUnited</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" data-toggle="popover" title="Create a New Account">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" data-toggle="popover" title="Deposit your money!">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" data-toggle="popover" title="Withdraw your money!">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/" data-toggle="popover" title="Check your balance">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/" data-toggle="popover" title="Log in to your account">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" data-toggle="popover" title="All log in Data">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}