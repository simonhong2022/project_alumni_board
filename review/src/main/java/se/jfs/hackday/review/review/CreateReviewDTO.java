package se.jfs.hackday.review.review;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CreateReviewDTO(@JsonProperty Long id, @JsonProperty String bootcamp, @JsonProperty String title, @JsonProperty String content, @JsonProperty String nickname) {
}