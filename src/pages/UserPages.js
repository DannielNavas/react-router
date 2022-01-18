import {useParams} from "react-router-dom"
export default function UserPage() {
    const {id} = useParams();
    console.log(id);
  return (
    <div className="App">
      <h1>User Page {id}</h1>
      <p>This is a simple example of a React Router page.</p>
      <p>
        The <code>UserPage</code> component is a simple example of a React
        Router page.
      </p>
      <p>
        The <code>UserPage</code> component is a simple example of a React
        Router page.
      </p>
    </div>
  );
}
