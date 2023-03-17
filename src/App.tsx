import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Gallery } from './component/Gallery';
import { IReview } from './interfaces';
import { getReviews, deleteRev, addNewRev } from './api';
import { SpecificReview } from './component/SpecificReview';
import { Link } from "react-router-dom";
import { AddReviewForm } from './component/AddReviewForm';
import Button from 'react-bootstrap/Button';

function App() {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const getData = async () => {
    const reviews = await getReviews();
    setReviews(reviews);
    console.log(reviews);

  }

  const deleteReview = async (reviewId: number) => {
    const review = await deleteRev(reviewId);
    setReviews(reviews.filter(rew => {
      return rew.id !== reviewId
    }));
  }

  const addNewReview = async (newReview: IReview) => {
    const review = await addNewRev(newReview);
    setReviews([...reviews, review]);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header-h1">/Salt </h1>
        <h2>Salt Alumni Board</h2>
        <nav>
          <ul>
            <li>JFS</li>
            <li>DNFS</li>
            <li>JSFS</li>
          </ul>
        </nav>
      </header>
      <body className="body">
        <Routes>
          <Route path="/" element={<Gallery reviews={reviews} deleteReview={deleteReview} />} />
          <Route path="/review/:id" element={<SpecificReview reviews={reviews} />} />
          <Route path="/form" element={<AddReviewForm reviews={reviews} addNewReview={addNewReview} />} />
        </Routes>
      </body>
      <div className="home-add-button">
        <Button variant="light" className="home-button"><Link to={"/"} style={{textDecoration:'none', color:'blue'}}>Home</Link></Button>
        <Button variant="light"><Link to={"/form"} style={{textDecoration:'none', color:'blue'}}>Add Article</Link></Button>
      </div>
    </div>
  );
}

export default App;
