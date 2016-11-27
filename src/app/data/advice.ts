import {User, AdviceSeeker, InvestmentAdvisor} from "./user";

export
interface AbstractAdviceObject {
    timestamp : Date;
    comments : Array<Comment>;
}

export
interface Comment {
    comment : string;
    commenter : User;
}

export
interface AdviceRequest extends AbstractAdviceObject {
    author : AdviceSeeker;
    replies : Array<AdviceReply>;
    title : string;
    body : string;
    tags : Array<Tag>;
}

export
interface AdviceReply extends AbstractAdviceObject {
    author : InvestmentAdvisor;
    body : string;
    score : number;
}

export
enum Tag {
    savings = 1,
    retirement,
    equities,
    bonds,
    derivatives,
    mutualFunds,
    dayTrading,
    other
}
