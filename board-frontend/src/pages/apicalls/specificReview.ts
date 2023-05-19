import { Dispatch, SetStateAction } from "react";
import { ReviewDto, ReviewRequestDto, fetchReviews } from "./review";

const BASE_PATH: string = 'localhost:9000/api/reviews';

export async function fetchReview(id: string, setReview: Dispatch<SetStateAction<ReviewDto>>) {
    const response = await fetch(`${BASE_PATH}/${id}`);
    const responseData: ReviewDto = await response.json();
    setReview(responseData);
}

export async function updateReview(event: React.FormEvent<HTMLFormElement>, setReview: Dispatch<SetStateAction<ReviewDto[]>>, setOpen: Dispatch<SetStateAction<boolean>>,
    setErrMessage: Dispatch<SetStateAction<string>>) {
const reqBody: ReviewRequestDto = {
bootcamp: event.currentTarget.bootcamp.value,
title: event.currentTarget.titles.value, //title to titles
content: event.currentTarget.content.value,
nickname: event.currentTarget.nickname.value
};

if (!reqBody.bootcamp || !reqBody.title || reqBody.content || reqBody.nickname) {
setErrMessage('Please fill the form');
return;
}

const reqOptions = {
method: 'PATCH',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(reqBody)
};

const response = await fetch(BASE_PATH, reqOptions);
await fetchReviews(setReview);
setOpen(false);
setErrMessage('');
}