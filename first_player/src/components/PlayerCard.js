import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";

const PlayerCard = (props) => {
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
export default PlayerCard;