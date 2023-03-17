import { FC, SyntheticEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { IReview } from "../interfaces"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.css';

type AddReviewFormProps = {
    reviews: IReview[],
    addNewReview: (rew: IReview) => void
}

export const AddReviewForm: FC<AddReviewFormProps> = ({ reviews, addNewReview }) => {
    const [id, setId] = useState('');
    const [bootcamp, setBootcamp] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [nickname, setNickname] = useState('');

    const onFormSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const newReview: IReview = {
            id: Number(id),
            bootcamp: bootcamp,
            title: title,
            content: content,
            nickname: nickname
        }
        console.log(newReview);
        addNewReview(newReview);
        window.location.reload();
    }
    return (
        <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="formNumber">
                <Form.Label>#</Form.Label>
                <Form.Control placeholder="Enter #" onChange={(e) => {
                    setId(e.target.value);
                }} />
                <Form.Text className="text-muted">
                    Please enter your #.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNickname">
                <Form.Label>Nickname</Form.Label>
                <Form.Control type="nickname" placeholder="Nickname" onChange={(e) => {
                    setNickname(e.target.value);
                }} />
                <Form.Text className="text-muted">
                    Please enter your nickname.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="title" placeholder="Title" onChange={(e) => {
                    setTitle(e.target.value);
                }} />
                <Form.Text className="text-muted">
                    Please enter your title.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContent">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={6} cols={60} placeholder="Content" onChange={(e) => {
                    setContent(e.target.value);
                }} />
            </Form.Group>
            <Form.Select onChange={(e) => {
                setBootcamp(e.target.value);
            }}>
                <option>Select Bootcamp</option>
                <option value="JFS">JFS</option>
                <option value="DNFS">DNFS</option>
                <option value="JSFS">JSFS</option>
            </Form.Select>
            <Button className="formButton" variant="outline-primary" type="submit">
                Submit
            </Button>
        </Form>
    )

}