import { Component } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

class Home extends Component {
  state = {
    signup: false,
    username: "",
    password: "",
    error: "",
    user: true,
    admin: false,
    navigateTo: null, // Added state for navigation
  };

  onToggleSignup = () => {
    this.setState((prevState) => ({
      signup: !prevState.signup,
      error: "",
    }));
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { signup, username, password, user, admin } = this.state;
    const url = signup
      ? "http://localhost:1300/signup"
      : "http://localhost:1300/login";
    const method = signup ? "POST" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();
      if (response.ok) {
        if (!signup) {
          // Store token in cookie
          Cookies.set("token", result.token, { expires: 1 }); // Expires in 1 day
          // Set navigateTo state to redirect to user or admin page
          if (user) {
            this.setState({ navigateTo: "/user" });
          }
          if (admin) {
            this.setState({ navigateTo: "/admin" });
          }
        }
      } else {
        this.setState({ error: result.error });
      }
    } catch (err) {
      console.error("Error during login/signup:", err);
      this.setState({ error: "An unexpected error occurred" });
    }
  };

  onClickUserButton = () => {
    this.setState({
      user: true,
      admin: false,
    });
  };

  onClickAdminButton = () => {
    this.setState({
      user: false,
      admin: true,
    });
  };

  render() {
    const { signup, username, password, error, user, admin, navigateTo } =
      this.state;

    if (navigateTo) {
      return <Navigate to={navigateTo} />;
    }

    const userActive = user ? "active-role-button" : "role-button";
    const adminActive = admin ? "active-role-button" : "role-button";

    return signup ? (
      <div className="form-container">
        <h1>Signup</h1>
        <form className="form-style" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Signup</button>
          {error && <p className="error">{error}</p>}
          <p>or</p>
          <button type="button" onClick={this.onToggleSignup}>
            Login Instead
          </button>
        </form>
      </div>
    ) : (
      <div className="form-container">
        <div>
          <button
            type="button"
            className={userActive}
            onClick={this.onClickUserButton}
          >
            User
          </button>
          <button
            type="button"
            className={adminActive}
            onClick={this.onClickAdminButton}
          >
            Admin
          </button>
        </div>
        <h1>Login</h1>
        <form className="form-style" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
          <p>or</p>
          <button type="button" onClick={this.onToggleSignup}>
            Signup Instead
          </button>
        </form>
      </div>
    );
  }
}

export default Home;
