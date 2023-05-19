package se.jfs.hackday.review.review;

public class ReviewConverter {

    static Review fromDTO(CreateReviewDTO dto) {
        return new Review(dto.id(), dto.bootcamp(), dto.titles(), dto.content(), dto.nickname());
    }

    static ReviewResponseDTO toResponseDTO(Review entity) {
        return new ReviewResponseDTO(
                entity.getId()
                , entity.getBootcamp()
                , entity.getTitle()
                , entity.getContent()
                , entity.getNickname());
    }

}
