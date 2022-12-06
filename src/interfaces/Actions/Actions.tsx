import { MainContextData } from "../MainContextData/MainContextData";

export type Action =
    {
        type: "CHANGE_STAGE";
    }
    |
    {
        payload: string; type: "START_GAME";
    }
    |
    {
        type: "REORDER_QUESTIONS";
    }
    |
    {
        type: "CHANGE_QUESTION";
    }
    |
    {
        type: "NEW_GAME";
    }
    |
    {
        payload: MainContextData; type: "CHECK_ANSWER";
    }
    | 
    {
        type: "SHOW_TIP";
    }
    | 
    {
        type: "REMOVE_OPTION";
    }
    |
    {
        type: "RETURN_HOME";
    }