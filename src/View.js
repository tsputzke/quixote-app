import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class View extends Component {
  render() {
    // const deleteByDate = this.context.deleteByDate;

    // const videoArray = this.state.dateArray.reverse().map((date, i) => {
    //   return (
    //     <tr key={i}>
    //       <td>Thumb</td>
    //       <td>Title</td>
    //       <td>
    //         <button 
    //           className="delete-data rbutton" 
    //           onClick={() => {
    //             if (window.confirm("Are you sure you want to delete?"))
    //             deleteByDate(date.room_data_id)
    //           }}>
    //             X
    //         </button>
    //       </td>
    //     </tr>
    //   )
    // }) 

    return (
      <main role='main' id='view' >
        <table>
          <thead>
            <tr>
              <th colSpan='2'>USERNAME's videos: </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href='https://placeholder.com'><img src='https://via.placeholder.com/100' alt='placeholder'/></a></td>
              <td>ABC Song + More Nursery Rhymes & Kids Songs - CoCoMelon</td>
              <td>X</td>
            </tr>
            <tr>
              <td><a href='https://placeholder.com'><img src='https://via.placeholder.com/100' alt='placeholder'/></a></td>
              <td>ABC Song + More Nursery Rhymes & Kids Songs - CoCoMelon</td>
              <td>X</td>
            </tr>
            <tr>
              <td><a href='https://placeholder.com'><img src='https://via.placeholder.com/100' alt='placeholder'/></a></td>
              <td>ABC Song + More Nursery Rhymes & Kids Songs - CoCoMelon</td>
              <td>X</td>
            </tr>
          </tbody>
        </table>
      </main>
    )
  }
}

export default View