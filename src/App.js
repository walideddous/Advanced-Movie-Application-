import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "./services/authService";
import Movies from "./Components/movies";
import Customers from "./Components/customers";
import Rental from "./Components/rentals";
import NotFound from "./Components/notFound";
import NavBar from "./Components/navBar";
import MovieForm from "./Components/movieForm";
import LoginForm from "./Components/loginForm";
import RegisterForm from "./Components/registerForm";
import Logout from "./Components/logout";
import ProtectedRoute from "./Components/common/protectedRoute";
import "../node_modules/react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentuser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/Register" component={RegisterForm} />
            <Route path="/Login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={props => <Movies {...props} user={user} />}
            ></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rental}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
