import React from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime'; // need this for async/await

import {BaseButton} from '../Buttons';

class AppPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      rawTableData: [],
      searchInput: '',
      sortAssending: true,
      sortCategory: 'name',
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
    this.setState({rawTableData: response});
  }

  buildTable(rawTableData, searchInput, sortAssending, sortCategory) {
    // if (rawTableData == null) return;
    const copyOfRawTableData = [...rawTableData];
    const filteredTableData = this.filterTableData(copyOfRawTableData, searchInput);
    const sortedTableData = this.sortTableData(filteredTableData, sortAssending, sortCategory)
    let output = [];
    for (let i = 0; i < sortedTableData.length; i++) {
      const row = sortedTableData[i];
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
  // TODO: debounce // but i wouldn't use setTimeout()
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

  sortTableData(tableData, sortedAssending , category) {
    let copyOfTableData = [...tableData];
    if(sortedAssending === true) {
      copyOfTableData.sort(function(a, b) {
        var nameA = a[category].toUpperCase(); // ignore upper and lowercase
        var nameB = b[category].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    } else {
      copyOfTableData.sort(function(a, b) {
        var nameA = a[category].toUpperCase(); // ignore upper and lowercase
        var nameB = b[category].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      })
    }
    return copyOfTableData;
  }

  toggleSort(sortCategory){
    let sortAssending = this.state.sortAssending;
    if(sortAssending === true) {
      sortAssending = false;
    } else {
      sortAssending = true;
    }
    this.setState({
      sortAssending,
      sortCategory
    })
  }

  render() {
    const rawTableData = this.state.rawTableData;
    const searchInput = this.state.searchInput;
    const sortAssending = this.state.sortAssending;
    const sortCategory = this.state.sortCategory;

    return (
      <>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue="Search National Parks"
          onChange={(event) => {
            this.inputOnChange(event);
          }}
        ></input>
        <table>
          <thead>
            <tr>
              <th key="sortByName" colSpan={1}>
                <BaseButton
                  text={"Sort by name"}
                  type={"button"}
                  onClick={()=>this.toggleSort('name')}
                  disabled={false}
                  visibile={true}
                  leadingIcon={"expand_less"}
                />
              </th>
              <th key="emppty1"></th>
              <th key="sortByLcation" colSpan={1}>
                <BaseButton
                  text={"Sort by name"}
                  type={"button"}
                  onClick={()=>this.toggleSort('location')}
                  disabled={false}
                  visibile={true}
                  leadingIcon={"expand_less"}
                />
              </th>
              <th key="emppty2"></th>
            </tr>
          </thead>
          <tbody>{this.buildTable(rawTableData, searchInput, sortAssending, sortCategory)}</tbody>
        </table>
      </>
    );
  }
}
export default AppPage;
