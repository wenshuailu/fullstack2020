import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Display = ({countries}) => {
  // console.log('length:' + countries.length)
  // console.log('array: ', )
  const [active, setActive] = useState(Array(countries.length).fill(false));
  // console.log('active', active)

  useEffect(() => {
    setActive(Array(countries.length).fill(false))
  }, [countries])

  const handleClick = (idx) => () => {
    const temp = [...active]
    temp[idx] = !temp[idx]
    setActive(temp)
  }

  if (countries.length === 0 || countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else {
    return (
      <ul>
        {countries.map((country, idx) => 
        <li key={country.numericCode}>{country.name}
          <button onClick={handleClick(idx)}>show</button>
          {active[idx] && <Country country={country}/>}
        </li>)}
      </ul>
    )
  }
}

const Country = ({country}) => {
  console.log('country', country);
  const {name, capital, population, languages, flag} = country;
  
  return (
    <div>
      <h2>{name}</h2>
      <p>capital: {capital}</p>
      <p>population: {population}</p>
      <h3>languages</h3>
      <ul>
        {languages && languages.map(l =>
          <li key={l.name}>{l.name}</li>
        )}
      </ul>
      <img src={flag} width="150" height="150" alt={`${name}-flag`}/>
    </div>
  ) 
}


function App() {
  const [newFilter, setFilter] = useState('')
  const [newCounties, setCountries] = useState([])
  useEffect(()=> {
    console.log('effect')
    if (newFilter) {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${newFilter}`)
        .then(response => {
          console.log('fullfilled')
          // console.log(response.data)
          if (response.data.length <= 10) {
            setCountries(response.data)
          } else {
            setCountries([])
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }

  }, [newFilter])
  
  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div className="App">
      find countries <input value={newFilter} onChange={handleChange}/>
      {newCounties.length === 1 ? 
      <Country country={newCounties[0]} />:
      <Display countries={newCounties} />
      }
    </div>
    
  );
}

export default App;
