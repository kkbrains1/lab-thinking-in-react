import React, {Component} from 'react';
import Searchbar from './SearchBar'
import ProducctTable from './ProductTable'

class FilterableProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products.data,
      searchQuery: ''
    } 
  }

  handleInputChange = event => {
    const $inputDomNode = event.target;
    //console.log($inputDomNode.value);
    this.setState({
      searchQuery: $inputDomNode.value
    })
    this.filterProducts();
  }

  filterProducts = () => {
    console.log(this.state.searchQuery)

  }

  render() {
    return (
      <div>
        <Searchbar searchQuery={this.state.searchQuery} handleInputChange={this.handleInputChange}/>
        <ProducctTable products={this.state.products} searchQuery={this.state.searchQuery}/>
      </div>
    )
  }
}

export default FilterableProductTable;