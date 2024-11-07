import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <div className="home-container-text-card">
        <h1 className="home-heading">Travel. Relax. Memories.</h1>
        <p>
          with travel trip you can experience new travel and the best tourist
          destinations.
        </p>
        <Link to="/book-a-new-trip">
          <button className="book-trip-button" type="button">
            Book a new trip
          </button>
        </Link>
      </div>
      <img
        src="https://s3-alpha-sig.figma.com/img/86e9/1bd0/119bb212fc241c8f804cd2e93d98df60?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTzoOX6MYmfmqUSXBA-iS28BFn1lgbh2gt7RNuAOVlXnsNCtL7xvFCGyonW-P55F5EP5yCptkhvfqb-EBJMMOwKRnIjH8hAD8H3vM8udNb7zHMXFHxL6bbTgxSYp03yXD8oE2gTGrDq~fNjluUJZIA53TWSK9LfuiNpWg8gWKwq3v2W1Fe0FUx4rzWT2xCepQEiBSstAz37uJFnRaw59eHjbx3DsbbaDCYXOb4iQg3Q-efso2cutYyTuOqsG3eG6NS7PVd3EOVZRlwA6tRw1hCymjMeTUEY7kZuG2pu0DIV48Fekv5t7sQyu3b8z9P8SqEhiiYOIi~ihB5jAbL8a6w__"
        alt=""
      />
    </div>
  </div>
)

export default Home
