

function HomePage() {
    return (
      <div className="container">
        <img src="/img/bg1.jpg" alt="Background" className="background-image" />
        <h1 className="slogan">Helping you manage your job applications efficiently</h1>
        <p className="sub-slogan">Track, manage, land your dream job.</p>
        <div className="navbar">
          <button className="btn-login">Login</button>
          <button className="btn-register">Register</button>
        </div>
      </div>
    );
  }
  
  export default HomePage;