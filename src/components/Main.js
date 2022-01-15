import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [cheese, setCheese] = useState([]);

  const URL = "https://mern-cheese-app.herokuapp.com/cheese/";
  // index helper function
  const getCheese = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCheese(data);
  };

  // create helper function
  const createCheese = async (cheese) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(cheese),
    });
    getCheese();
  };

  // update helper function
  const updateCheese = async (cheese, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(cheese),
    });
    getCheese();
  };

  // delete helper function
  const deleteCheese = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    getCheese();
  };

  useEffect(() => {
    getCheese();
  }, []);

  return (
    <main>
      <Switch>
        <Route exact path="/cheese">
          <Index
            cheese={cheese}
            createCheese={createCheese}
            user={props.user}
          />
        </Route>
        <Route
          path="/cheese/:id"
          render={(rp) =>
            props.user ? (
              <Show
                {...rp}
                cheese={cheese}
                updateCheese={updateCheese}
                deleteCheese={deleteCheese}
              />
            ) : (
              <Redirect to="/cheese" />
            )
          }
        />
      </Switch>
    </main>
  );
}

export default Main;
