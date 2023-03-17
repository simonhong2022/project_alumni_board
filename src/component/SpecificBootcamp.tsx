import { FC } from "react"
import { IReview } from "../interfaces"

type SpecificBootcampProps = {
    review: IReview
}

export const SpecificBootcamp: FC<SpecificBootcampProps> = ({review}) => {

    return (
        <div className="bootcamp-board">
            <div><span className="bootcamp">{review.bootcamp}</span>
            {review.title}
            </div>
            <div>{review.content}</div>
            <div>{review.nickname}</div>

        </div>
    )

}