// create your App component here
import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [displayDog, setDisplayDog] = useState({});

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((dog) => setDisplayDog(dog));
  }, []);

  if (displayDog.status !== "success") {
    return <p>Loading...</p>;
  }

  return (
    <>
      <img src={displayDog.message} alt="A Random Dog" />
    </>
  );
}
export default App;
