import Speaker from "./Speaker";

interface Card extends Speaker {
    id: number,
    totalZaps?: number
}

export default Card