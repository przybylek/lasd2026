import {countryCodes} from "./data/CountryCodes"
import Flag from "./Flag"

const PeopleList = ({ people }) => (
  <ul className="fa-ul ml-1">
    {people.map((person) =>
      <li key={person.join()} className='my-2'>
        <div className="d-flex flex-row">
          {
            countryCodes[person[2]] ?
              <Flag code={countryCodes[person[2]].toLowerCase()}/> :
              countryCodes[person[2].split(', ')[0]] && countryCodes[person[2].split(', ')[1]] ?
              <>
                <Flag code={countryCodes[person[2].split(', ')[0] ].toLowerCase()}/>
                <Flag code={countryCodes[person[2].split(', ')[1]].toLowerCase()}/>
              </> : ''
          }
          <p className='mb-0 ml-2'>
            <strong> {person.slice(0, 2).join(', ')}</strong><br/>
            {person.slice(2).join(', ')}
          </p>
        </div>
      </li>
    )}
  </ul>
)

export default PeopleList
