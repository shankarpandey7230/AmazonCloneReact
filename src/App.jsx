const App = () => {
  return (
    <div className="App">
      <div className="header_logo"></div>
      <div className="header_search"></div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello</span>
          <span className="nav_itemLineTwo">Sign In</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Cart</span>
          <span className="nav_itemLineTwo">0</span>
        </div>
      </div>
    </div>
  );
};

export default App;
