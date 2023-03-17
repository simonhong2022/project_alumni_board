import { FC } from "react";
import { IReview } from "../interfaces";
import { Link } from "react-router-dom";
import { deleteRev } from "../api";
import Button from 'react-bootstrap/Button';

type GalleryProps = {
    reviews: IReview[],
    deleteReview: (reviewId: number) => void
}

export const Gallery: FC<GalleryProps> = ({ reviews, deleteReview }) => {

    return (
        <table className="table table-striped" >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Bootcamp</th>
                    <th scope="col">Title</th>
                    <th scope="col">Nickname</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    reviews.map((rev, i) => {
                        return (
                            <tr key={i}>
                                <td>{rev.id}</td>
                                <td>{rev.bootcamp}</td>
                                <td><Link to={"/review/" + rev.id} style={{ textDecoration: 'none', color: 'purple' }}>{rev.title}</Link></td>
                                <td>{rev.nickname}</td>
                                <td>
                                    <Button className="table-delete-button" variant="outline-light" size="sm" onClick={() => {
                                        
                                    }}>update</Button>
                                    <Button className="table-delete-button" variant="outline-light" size="sm" onClick={() => {
                                        deleteReview(rev.id)
                                    }}>delete</Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

};