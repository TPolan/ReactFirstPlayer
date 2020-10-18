import React from "react";
import {Button, Card, Typography, CardContent, CardActions} from "@material-ui/core";

const playerCard = (props) => {
    return(
        <Card key={props.index}>
            <CardContent>
                <Typography  color="textSecondary" gutterBottom>
                    {props.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => props.remove(props.index)} size="small">Remove Player</Button>
            </CardActions>
        </Card>
    )
}
export default playerCard;