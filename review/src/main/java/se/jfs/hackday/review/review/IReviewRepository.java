package se.jfs.hackday.review.review;


import java.util.List;

public interface IReviewRepository {

    List<Review> listReviews();

    Review getById(String id);

    Review saveProduct(Review newReview);

    void deleteReview(Review review);

    void deleteReview(String reviewId);

    List<Review> findReviewByNickname(String nickname);

    List<Review> findReviewByBootcamp(String bootcamp);

}

