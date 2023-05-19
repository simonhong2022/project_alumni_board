package se.jfs.hackday.review;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import se.jfs.hackday.review.review.Review;
import se.jfs.hackday.review.review.ReviewService;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@SpringBootApplication
public class ReviewApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReviewApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(ReviewService reviewService) {
		return args -> {
			// read json and write to db
			ObjectMapper mapper = new ObjectMapper();
			TypeReference<List<Review>> typeReference = new TypeReference<>() {
			};
			InputStream inputStream = TypeReference.class.getResourceAsStream("/data/data.json");
			try {
				List<Review> reviews = mapper.readValue(inputStream,typeReference);
				reviewService.saveReviews(reviews);
				System.out.println("Reviews Saved!");
			} catch (IOException e){
				System.out.println("Unable to save reviews: " + e.getMessage());
			}
		};
	}
}

