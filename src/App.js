import './App.css';
import { UsersData } from "./UsersData";
import {useState} from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const usersList = UsersData.filter((val) => {
    if (searchTerm === "") {
      return true;
    } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    } else if (val.lastName.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    return false;
  }).map((datum) => (
      <div key={datum.id} className="profile-contents">
        <img src={datum.picture} alt="User pix" />
        <div>
          <div>{datum.id}</div>
          <div>
            {datum.title} {datum.firstName} {datum.lastName}
          </div>
        </div>
      </div>
  ));

  return (
    <div className="App-Container">
      <input
        type="text"
        placeholder="Search by name..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="User-info">{usersList}</div>
    </div>
  );
}

export default App;
