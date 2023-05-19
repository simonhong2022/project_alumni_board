import { Button, Modal, Input, Icon, Form, Label, Popup, Message } from 'semantic-ui-react'
import { useState, useEffect } from "react";
import { ReviewDto, addReview, fetchReviews } from '@/pages/apicalls/review';
import ReviewCard from './ReviewCard';

export default function BoardContent() {
    const [reviews, setReviews] = useState<ReviewDto[]>([]);
    useEffect(() => {
        fetchReviews(setReviews);
    }, []);
    const [open, setOpen] = useState(false);
    const [errMessage, setErrMessage] = useState<string>("");
    return (
        <div className="teams-content-wrap">
            <div className="teams-add-info">
                <Modal animation={false}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button className="teams-modal-btn" inverted color="orange">Add Review +</Button>}
                >
                    <Modal.Header>Add Your Review</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            addReview(e, setReviews, setOpen, setErrMessage);
                        }}>
                            <Form.Field>
                                <Label>BootCamp Name</Label>
                                <Input icon="users" placeholder="Name your bootcamp" type="text" name="bootcamp" />
                                <Label>Title</Label>
                                <Input icon="users" placeholder="Name your title" type="text" name="titles" />
                                <Label>Content</Label>
                                <Input icon="users" placeholder="Name your content" type="text" name="content" />
                                <Label>Nickname</Label>
                                <Input icon="users" placeholder="Name your nickname" type="text" name="nickname" />
                            </Form.Field>
                            <Button type="submit">Add Review +</Button>
                        </Form>
                        {(errMessage.length > 0) ? <Message warning>
                            <p>{errMessage}</p>
                        </Message> : null}
                    </Modal.Content>
                </Modal>
            </div>
            <ReviewCard bootcamp='JFS' reviews={reviews} setReviews={setReviews} />
            <ReviewCard bootcamp='DNFS' reviews={reviews} setReviews={setReviews} />
            <ReviewCard bootcamp='JSFS' reviews={reviews} setReviews={setReviews} />

        </div>
    )

}