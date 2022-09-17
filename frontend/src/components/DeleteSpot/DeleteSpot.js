//src/components/DeleteSpots/DeleteSpots.js
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { thunkDeleteSpot } from "../../store/spots";
import './Delete.css'


const SpotDelete = ({spotId, setShowDelete}) => {

  const dispatch = useDispatch()
  const history = useHistory()

  const handleDelete = async (e) => {
    history.push("/")
    await dispatch(thunkDeleteSpot(spotId))
    setShowDelete(false)
  }

  return (
    <>
      <div className='delete-container'>
      <p>This spot will be deleted. Are you sure you want to proceed? </p>
      <button className="delete-button" onClick={() => handleDelete()}>YES</button>
      <button className="delete-button" onClick={() => setShowDelete(false)}>NO</button>
      </div>
    </>
  )
}

export default SpotDelete
