import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Mensagem } from './styles';

const InputAC = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [indice, setIndice] = useState(-1);
  const [countrySelected, setCountrySelected] = useState(false);

  useEffect(() => {
    function searchCountries() {
      axios.get('https://restcountries.eu/rest/v2/all').then(response => {
        const arrContries = response.data.map(country => {
          return country.name;
        });
        setCountries([...arrContries]);
      });
    }

    searchCountries();
  }, []);

  function selectCountry(e) {
    if (e.target.value.length > 0) {
      const filteredCountries = countries.filter(name => {
        return name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
      });
      setFilteredCountries([...filteredCountries]);
    } else {
      setFilteredCountries([]);
      setCountrySelected(false);
      setCountry('');
    }

    if (e.keyCode === 8) {
      setIndice(-1);
    }
    if (e.keyCode === 40) {
      if (filteredCountries[indice + 1]) {
        setIndice(indice + 1);
      } else {
        setIndice(0);
      }
    }
    if (e.keyCode === 38) {
      if (filteredCountries[indice - 1]) {
        setIndice(indice - 1);
      } else {
        setIndice(0);
      }
    }
    if (e.keyCode === 13) {
      if (filteredCountries[indice]) {
        setCountry(filteredCountries[indice]);
        setCountrySelected(true);
        setFilteredCountries([]);
      } else {
        return false;
      }
    }
  }

  function setSelectedCountry(country) {
    setCountry(country);
    setCountrySelected(true);
    setFilteredCountries([]);
  }

  function navigateSelectedCountry(country) {
    setCountry(country);
    setFilteredCountries([]);
  }

  return (
    <>
      {countrySelected && <Mensagem>Você clicou no país {country}</Mensagem>}
      <Container>
        <input
          placeholder='Digite o nome do País.'
          onKeyUp={e => selectCountry(e)}
          onChange={e => navigateSelectedCountry(e.target.value)}
          value={country}
        />
        <ul>
          {filteredCountries.map((country, index) => (
            <li
              key={index}
              data-active={index}
              onClick={() => setSelectedCountry(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default InputAC;
