import React, { Component } from "react";
import "./search-box.styles.css";

const SearchBox = (props: {
  className: string;
  placeHolder: string;
  onSearchHandler: any;
}) => {
  const { className, placeHolder, onSearchHandler } = props;

  return (
    <div>
      <input
        type={"search"}
        className={`search-box ${className}`}
        placeholder={placeHolder}
        onChange={onSearchHandler}
      />
    </div>
  );
};
/*class SearchBox extends Component<any, any>{

    render() {
        return <input
            type={'search'}
            className={`search-box ${this.props.className}`}
            placeholder={this.props.placeHolder}
            onChange={this.props.onSearchHandler }/>;
    }
}*/

export default SearchBox;
