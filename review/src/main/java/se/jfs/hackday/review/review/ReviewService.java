package se.jfs.hackday.review.review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    IReviewRepository reviewRepo;

    public ReviewService() {}
    public ReviewService(IReviewRepository reviewRepo) {
        this.reviewRepo = reviewRepo;
    }

    List<Review> getAllReviews() {
        return reviewRepo.listReviews();
    }

    public Review findById(String id) {
        return reviewRepo.getById(id);
    }

    Review saveReview(Review review) {
        return reviewRepo.saveProduct(review);
    }

    List<Review> findByNickname(String nickname) {
        return reviewRepo.findReviewByNickname(nickname);
    }

    public Review updateReviewData(Review newReviewData) {
        Review storedReview = findById(newReviewData.getId());
        if(storedReview == null) {
            return null;
        }
        if(newReviewData.getBootcamp() != null) {
            storedReview.setBootcamp(newReviewData.getBootcamp());
        }
        if(newReviewData.getTitle() != null) {
            storedReview.setTitle(newReviewData.getTitle());
        }
        if(newReviewData.getContent() != null) {
            storedReview.setContent(newReviewData.getContent());
        }
        if(newReviewData.getNickname() != null) {
            storedReview.setNickname(newReviewData.getNickname());
        }
        return reviewRepo.saveProduct(storedReview);
    }

    public void removeReview(Review review) {
        reviewRepo.deleteReview(review);
    }

    public void deleteReview(String reviewId) {
        reviewRepo.deleteReview(reviewId);
    }

}
