import { IReview } from "./interfaces";

type GetReviewsRes = {
    reviews: IReview[];
};

export const getReviews = async () => {
    const response = await fetch("http://localhost:9002/api/reviews");
    const json = (await response.json()) as IReview[];
    return json;
};

export const addNewRev = async (rew: IReview) => {
    const response = await fetch("http://localhost:9002/api/reviews", {
        method: "POST",
        body: JSON.stringify(rew),
        headers: {
            "content-type": "application/json",
        },
    });
    const json = (await response.json()) as { review: IReview};
    return json.review;
};
/*
export const updateRev = async (rew: IReview) => {
    rew.id
    const response = await fetch("http://localhost:9002/api/reviews", {
        method: "POST",
        body: JSON.stringify(rew),
        headers: {
            "content-type": "application/json",
        },
    });
}
*/
export const deleteRev = async (id: number) => {
    const response = await fetch(
        `http://localhost:9002/api/reviews/${id}`,
        {
            method: "DELETE",
        }
    );

    // const json =(await response.json()) as { review: Partial<IReview> };
    // alert("bbjbh");

    // return json;
}