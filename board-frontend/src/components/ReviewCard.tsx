import { ReviewDto } from '@/pages/apicalls/review';
import { Dispatch, SetStateAction } from 'react';
import 'semantic-ui-css/semantic.min.css'

type ReviewCardProps = {
    bootcamp: string;
    reviews: ReviewDto[];
    setReviews: Dispatch<SetStateAction<ReviewDto[]>>;
}

export default function ReviewCard(props: ReviewCardProps) {

    const { bootcamp, reviews, setReviews } = props;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nickname</th>
                    <th scope="col">Bootcamp</th>
                    <th scope="col">Title</th>
                    <th scope="col">Content</th>
                </tr>
            </thead>
            <tbody>
                {reviews.filter((review => review.bootcamp === bootcamp)).map(review => {
                    return (
                        <tr>
                            <td>{review.nickname}</td>
                            <td>{review.bootcamp}</td>
                            <td>{review.titles}</td>
                            <td>{review.content}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}



