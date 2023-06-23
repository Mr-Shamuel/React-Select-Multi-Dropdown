import { useState } from "react";

const Users = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const countries = [
    { id: 1, name: "Country 1" },
    { id: 2, name: "Country 2" },
    { id: 3, name: "Country 3" },
  ];

  const states = [
    { id: 1, countryId: 1, name: "State 1" },
    { id: 2, countryId: 1, name: "State 2" },
    { id: 3, countryId: 2, name: "State 3" },
    { id: 4, countryId: 2, name: "State 4" },
    { id: 5, countryId: 3, name: "State 5" },
  ];

  const cities = [
    { id: 1, stateId: 1, name: "City 1" },
    { id: 2, stateId: 1, name: "City 2" },
    { id: 3, stateId: 2, name: "City 3" },
    { id: 4, stateId: 2, name: "City 4" },
    { id: 5, stateId: 3, name: "City 5" },
    { id: 6, stateId: 3, name: "City 6" },
    { id: 7, stateId: 4, name: "City 7" },
    { id: 8, stateId: 5, name: "City 8" },
  ];

  const handleCountryChange = (e) => {
    const countryId = parseInt(e.target.value);
    setSelectedCountry(countryId);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (e) => {
    const stateId = parseInt(e.target.value);
    setSelectedState(stateId);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    const cityId = parseInt(e.target.value);
    setSelectedCity(cityId);
  };

  const filteredStates = states.filter(
    (state) => state.countryId === selectedCountry
  );
  const filteredCities = cities.filter(
    (city) => city.stateId === selectedState
  );
  return (
    <>
      <div>
        <div className="Countries">
          <label>
            Countries:
            <select value={selectedCountry} onChange={handleCountryChange}>
              <option value="">Select Country</option>
              {countries?.map((country) => (
                <option key={country?.id} value={country?.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            State:
            <select
              value={selectedState}
              onChange={handleStateChange}
              disabled={!selectedCountry}
            >
              <option value="">Select State</option>
              {filteredStates.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            City:
            <select
              value={selectedCity}
              onChange={handleCityChange}
              disabled={!selectedState}
            >
              <option value="">Select City</option>
              {filteredCities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </>
  );
};

export default Users;
