import React from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class AppPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      searchInput: '',
    };
    this.fetchData = this.fetchData.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
  }
  /**
   * {
    "name": "Acadia",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Bass_harbor_head_light_20041002_123635_1.1504x1000.jpg/200px-Bass_harbor_head_light_20041002_123635_1.1504x1000.jpg",
    "location": "Maine",
    "dateFounded": "1919-02-26",
    "area": 49075.26,
    "visitors": 3509271
  }
   */
  componentDidMount() {
    this.fetchData();
  }

  // fetchData() {
  //   fetch(
  //     `https://gist.githubusercontent.com/afiedler/3f388de6159f84bbe330e1a8289006a6/raw/59a2f67bbe0e4891bba22241406d7bd93bd8fb6b/parks.json`
  //   )
  //     .then((response) => response.json())
  //     .then((value) => {
  //       this.setState({ tableData: value });
  //     });
  // }

  async fetchData() {
    const fetchResponse = await fetch(
      `https://gist.githubusercontent.com/afiedler/3f388de6159f84bbe330e1a8289006a6/raw/59a2f67bbe0e4891bba22241406d7bd93bd8fb6b/parks.json`
    );
    const response = await fetchResponse.json();
    this.setState({tableData: response});
  }

  buildTable(tableData) {
    if (tableData == null) return;
    let output = [];
    for (let i = 0; i < tableData.length; i++) {
      const row = tableData[i];
      output.push(
        <tr>
          <td>{row.name}</td>
          <td>{<img src={row.photo} alt="park photo" />}</td>
          <td>{row.location}</td>
          <td>{row.dateFounded}</td>
          <td>{row.area}</td>
          <td>{row.visitors}</td>
        </tr>
      );
    }
    return output;
  }

  inputOnChange(event) {
    const value = event.target.value;
    this.setState({
      searchInput: value.toLowerCase(),
    });
  }

  filterTableData(tableData, input) {
    if (tableData === null) return;
    // name or location
    let output = [];
    for (let i = 0; i < tableData.length; i++) {
      const row = tableData[i];
      const name = row.name.toLowerCase();
      const location = row.location.toLowerCase();
      if (name.includes(input) || location.includes(input)) {
        output.push(row);
      }
    }
    return output;
  }
  /**
 * I will use this code  from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * // sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
 */
  render() {
    const tableData = this.state.tableData;
    const input = this.state.searchInput;
    // const sortD =
    const filteredTableData = this.filterTableData(tableData, input);
    // const sortedTableData = this.sortTableData(filteredTableData, direc);
    // filter tableDat function
    return (
      <>
        <input
          type="text"
          id="name"
          name="name"
          // size="10"
          defaultValue="Search National Parks"
          onChange={(event) => {
            this.inputOnChange(event);
          }}
        ></input>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Sort by name</th>
              <th colSpan={2}>Sort by location</th>
            </tr>
          </thead>
          <tbody>{this.buildTable(filteredTableData)}</tbody>
        </table>
      </>
    );
  }
}
export default AppPage;
