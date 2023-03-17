package se.jfs.hackday.review.review;


import java.util.List;

public interface IReviewRepository {

    List<Review> listReviews();

    Review getById(Long id);

    Review saveProduct(Review newReview);

    void deleteReview(Review review);

    void deleteReview(Long reviewId);

    List<Review> findReviewByNickname(String nickname);

    List<Review> findReviewByBootcamp(String bootcamp);

}

