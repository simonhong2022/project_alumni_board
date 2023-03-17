package se.jfs.hackday.review.review;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.logging.Logger;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/reviews")
public class ReviewController {
    Logger logger = Logger.getLogger(ReviewRepository.class.getName());
    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }
    @GetMapping
    ResponseEntity<List<Review>> getAllReviews() {
        List<Review> body = reviewService.getAllReviews();
        logger.info(body.get(0).getContent());
        return ResponseEntity.ok(body);
    }
    @GetMapping(path="{id}")
    ResponseEntity<Review> getReview(@PathVariable long id) {
        Review reviewById = reviewService.findById(id);
        if (reviewById == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(reviewById);
    }
    /*
    @PostMapping
    ResponseEntity<ReviewResponseDTO> createReview(@RequestBody CreateReviewDTO newReview, HttpServletRequest req){
        Review review1 = ReviewConverter.fromDTO(newReview);
        review1.setBootcamp(review1.getBootcamp());
        review1.setTitle(review1.getTitle());
        review1.setContent(review1.getContent());
        review1.setNickname(review1.getNickname());
        Review review = reviewService.saveReview(review1);
        URI location = URI.create((req.getRequestURI() + "/" + review.getId()).replace("reviews//", "reviews/"));
        return ResponseEntity.created(location).body(ReviewConverter.toResponseDTO(review));
    }

     */
    /*
    @PostMapping
    ResponseEntity<Review> createReview(@RequestBody Review newReview, HttpServletRequest req){
        //Review review1 = ReviewConverter.fromDTO(newReview);
        reviewService.saveReview(newReview);
        URI location = URI.create((req.getRequestURI() + "/" + newReview.getId()).replace("reviews//", "reviews/"));
        return ResponseEntity.created(location).body(newReview);
    }
     */
    @PostMapping
    ResponseEntity<Review> createReview(@RequestBody Review newReview, HttpServletRequest req){
        Review review = reviewService.saveReview(newReview);
        URI location = URI.create((req.getRequestURI() + "/" + review.getId()));
        return ResponseEntity.created(location).body(review);
    }
    @PatchMapping(path="{id}")
    ResponseEntity<ReviewResponseDTO> patchReview(@RequestBody CreateReviewDTO review, @PathVariable long id) {
        Review rev = ReviewConverter.fromDTO(review);
        rev.setId(id);
        Review updatedReview = reviewService.updateReviewData(rev);
        if(updatedReview == null) {
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(ReviewConverter.toResponseDTO(updatedReview), HttpStatus.ACCEPTED);
    }
    @DeleteMapping(path="{id}")
    ResponseEntity deleteReview(@PathVariable long id) {
        reviewService.deleteReview(id);
        return ResponseEntity.noContent().build();
    }

}
