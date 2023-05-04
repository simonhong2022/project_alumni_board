package se.jfs.hackday.review.review;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface JpaReviewRepository extends CrudRepository<Review, String> {

    List<Review> findByNickname(String nickname);

    List<Review> findByBootcamp(String bootcamp);



}
