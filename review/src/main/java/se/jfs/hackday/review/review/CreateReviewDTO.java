package se.jfs.hackday.review.review;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CreateReviewDTO(@JsonProperty String id, @JsonProperty String bootcamp, @JsonProperty String titles, @JsonProperty String content, @JsonProperty String nickname) {
}