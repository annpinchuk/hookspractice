import React, {Fragment} from "react";
import {Search} from "../components/Search";
import {Card} from "../components/Card";

export const Home = ()=>{
    const cards = new Array(15)
        .fill('')
        .map((_,i)=>i)

    return (
        <Fragment>
            <Search/>

            <div className="row">
                {cards.map(()=>{
                    return(
                        <div className="col-sm-4 mn-4">
                            <Card/>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}