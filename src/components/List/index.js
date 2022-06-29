import "./style.css";
import React,{ useState,useEffect,useRef } from "react";
import axios from "axios";


export function EmployeeList(props) {
  const { items } = props;
  const outside = useRef();
  const [isOpen,setIsOpen] = useState(false);

  const handleCLick = e => {
    if (outside.current.contains(e.target)){
      return
    }
    setIsOpen(false)
  } 

  useEffect(() => {
    const getClick = document.addEventListener('click',handleCLick )
    return () => {
    }
  }, []);

  return (
    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
      <div className="dataTable-top">
        <div className="dataTable-dropdown">
          <label>
            <select className="dataTable-selector">
              <option value="5">5</option>
              <option value="10" selected="">
                10
              </option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>{" "}
            entries per page
          </label>
        </div>
        <button ref={outside} class="adding" onClick={() => setIsOpen(!isOpen)}>Add</button>
      {isOpen ? (
        <div class="test">
        <div class="testing" >
          <label for="id">id</label> <br></br>
          <input type="text" id="id" name="id" placeholder="Put your id here..."></input><br></br>
    
          <label for="fname">Name</label> <br></br>
          <input type="text" id="fname" name="Name" placeholder="Put your name here..."></input><br></br>
    
          <label for="lname">username</label> <br></br>
          <input type="text" id="uname" name="uname" placeholder="Put your username here..."></input><br></br>
          
          <label for="mail">email</label> <br></br>
          <input type="email" id="mail" name="mail" placeholder="Put your email here..."></input><br></br>
    
          <label for="uname">address</label> <br></br>
          <input type="text" id="uname" name="uname" placeholder="Put your address here..."></input><br></br>
    
          <label for="phone">phone</label> <br></br>
          <input type="tel" id="phone" name="phone" placeholder="Put your phone number here..."></input><br></br>
    
          <label for="website">website</label> <br></br>
          <input type="url" id="website" name="website" placeholder="Put your website here..."></input><br></br>
    
          <label for="company">company</label> <br></br>
          <input type="text" id="company" name="company" placeholder="Put your company here..."></input><br></br><br></br>
    
          <button class="btnchange" onClick={() => {
      axios.post("https://jsonplaceholder.typicode.com/users").then(result => {
      const {data} = result;
                });
          setIsOpen(false);}}>Save</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </div>
        </div>
      ):null }
        <div className="dataTable-search">
          <input
            className="dataTable-input"
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>
      <div className="dataTable-container">
        <table className="table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>address</th>
              <th>phone</th>
              <th>website</th>
              <th>company</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>address</th>
              <th>phone</th>
              <th>website</th>
              <th>company</th>
            </tr>
          </tfoot>
          <tbody>
            {(items || []).map((item) => (
              <tr key={item.name}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.street}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dataTable-bottom">
        <div className="dataTable-info">Showing 1 to 10 of 57 entries</div>
        <nav className="dataTable-pagination">
          <ul className="dataTable-pagination-list">
            <li className="active">
              <a href="#" data-page="1">
                1
              </a>
            </li>
            <li className="">
              <a href="#" data-page="2">
                2
              </a>
            </li>
            <li className="">
              <a href="#" data-page="3">
                3
              </a>
            </li>
            <li className="">
              <a href="#" data-page="4">
                4
              </a>
            </li>
            <li className="">
              <a href="#" data-page="5">
                5
              </a>
            </li>
            <li className="">
              <a href="#" data-page="6">
                6
              </a>
            </li>
            <li className="pager">
              <a href="#" data-page="2">
                ›
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}