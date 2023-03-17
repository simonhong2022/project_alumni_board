import { FC } from "react"
import { useParams } from "react-router-dom"
import { IReview } from "../interfaces"
import './SpecificReview.css';
import Button from 'react-bootstrap/Button';

type SpecificReviewProps = {
    reviews: IReview[]
}

export const SpecificReview: FC<SpecificReviewProps> = ({ reviews }) => {
    const param = useParams();
    return (
        <div className="content">
            <div className="content-header">
                <span className="content-bootcamp">#{reviews.filter(r => r.id === Number(param.id)).map(e => {
                    return (
                        e.bootcamp
                    )
                })}</span>
                <span className="content-nickname">#{reviews.filter(r => r.id === Number(param.id)).map(e => {
                    return (
                        e.nickname
                    )
                })}</span>
            </div>
            <div>
                {reviews.filter(r => r.id === Number(param.id)).map(e => {
                    return (
                        <p className="content-title">{e.title}</p>
                    )
                })}
            </div>
            <div>{reviews.filter(r => r.id === Number(param.id)).map(e => {
                return (
                    <article className="content-article">{e.content}</article>
                )
            })}
            </div>
        </div>
    )

}