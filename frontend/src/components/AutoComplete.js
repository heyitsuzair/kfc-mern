import React, { useContext } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import locationContext from "../context/locationContext";

export default class AutoComplete extends React.Component {
  static contextType = locationContext;

  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    this.setState({ address });
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log(latLng.lng);
        console.log(latLng.lat);
        this.context.setLongitude(latLng.lng);
        this.context.setLatitude(latLng.lat);
        this.props.setZoom(13);
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div style={{ textAlign: "center" }}>
            <input
              {...getInputProps({
                placeholder: "Search Area",
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? {
                      backgroundColor: "#48413e",
                      borderBottom: "1px solid #48413e",
                      textAlign: "left",
                      padding: ".5rem .5rem",
                      cursor: "pointer",
                      marginTop: "1rem",
                    }
                  : {
                      backgroundColor: "#1c1816",
                      borderBottom: "1px solid #48413e",
                      textAlign: "left",
                      padding: ".5rem .5rem",
                      cursor: "pointer",
                      marginTop: "1rem",
                    };
                return (
                  <div
                    key={index}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}
