import { Link } from "react-router-dom";
import { useState } from "react";

function Index(props) {
  const [form, setForm] = useState({
    variety: "",
    flavor: "",
    origin: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createCheese(form);
    setForm({
      variety: "",
      flavor: "",
      origin: "",
      image: "",
    });
  };

  const loaded = () => {
    return props.cheese.map((c) => (
      <div key={c._id} className="cheese">
        <Link to={`/cheese/${c._id}`}>
          <div>{c.variety}</div>
        </Link>
        <img src={c.image} alt={c.variety} />
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Variety:
          <input
            type="text"
            value={form.variety}
            name="variety"
            onChange={handleChange}
          />
        </label>
        <label>
          Flavor:
          <input
            type="text"
            name="flavor"
            value={form.flavor}
            onChange={handleChange}
          />
        </label>
        <label>
          Origin:
          <input
            type="text"
            value={form.origin}
            name="origin"
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Create Cheese" />
      </form>
      {props.cheese ? loaded() : loading()}
    </section>
  );
}

export default Index;
