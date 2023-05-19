import { Dispatch, SetStateAction } from "react";

export type ReviewDto = {

    id: string;
    bootcamp: string;
    titles: string;
    content: string;
    nickname: string;

}

export type ReviewRequestDto = {

    bootcamp: string;
    titles: string;
    content: string;
    nickname: string;

}

const BASE_PATH: string = 'http://localhost:9000/api/reviews';

export async function fetchReviews(setReview: Dispatch<SetStateAction<ReviewDto[]>>) {
    const response = await fetch(BASE_PATH);
    const responseData: ReviewDto[] = await response.json();
    setReview(responseData);
}

export async function addReview(event: React.FormEvent<HTMLFormElement>, setReview: Dispatch<SetStateAction<ReviewDto[]>>,
                                setOpen: Dispatch<SetStateAction<boolean>>, setErrMessage: Dispatch<SetStateAction<string>>) {
    const reqBody: ReviewRequestDto = {
        bootcamp: event.currentTarget.bootcamp.value,
        titles: event.currentTarget.titles.value, //title to titles
        content: event.currentTarget.content.value,
        nickname: event.currentTarget.nickname.value
    };
    /*
    if (!reqBody.bootcamp || !reqBody.titles || reqBody.content || reqBody.nickname) {
        setErrMessage('Please fill the form');
        return;
    }
    */
    const reqOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody)
    };

    const response = await fetch(BASE_PATH, reqOptions);
    await fetchReviews(setReview);
    setOpen(false);
    setErrMessage('');
}



export async function deleteReview(reviewId: string, setReview: Dispatch<SetStateAction<ReviewDto[]>>) {
    const reqOptions = {
        method: 'DELETE'
    }
    const response = await fetch(`${BASE_PATH}/${reviewId}`, reqOptions);
    await fetchReviews(setReview);

}

