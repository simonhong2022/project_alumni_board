package se.jfs.hackday.review.review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Repository
public class ReviewRepository implements IReviewRepository {

    Logger log = Logger.getLogger(ReviewRepository.class.getName());

    @Autowired
    JpaReviewRepository repo;

    public ReviewRepository() {}

    public ReviewRepository(JpaReviewRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<Review> listReviews() {
        return Streamable.of(repo.findAll()).toList();
    }

    @Override
    public Review getById(Long id) {
        Optional<Review> byId = repo.findById(id);
        return byId.orElse(null);
    }

    @Override
    public Review saveProduct(Review newReview) {
        if(newReview != null) {
            return repo.save(newReview);
        }
        return null;
    }

    @Override
    public void deleteReview(Review review) {
        if(review != null) {
            repo.delete(review);
        }
    }

    @Override
    public void deleteReview(Long reviewId) {
        try {
            if(reviewId != null) {
                repo.deleteById(reviewId);
            }
        } catch (EmptyResultDataAccessException ex) {
            log.info("Attempt to delete Review %d that doesn't exist".formatted(reviewId));
        }

    }

    @Override
    public List<Review> findReviewByNickname(String nickname) {
        return repo.findByNickname(nickname);
    }

    @Override
    public List<Review> findReviewByBootcamp(String bootcamp) {
        return null;
    }
}
