import React from "react";
import {Button, Card, Typography, CardContent, CardActions} from "@material-ui/core";

const playerCard = (props) => {

    return(
        <Card>
            <CardContent>
                <Typography  color="textSecondary" gutterBottom>
                    {props.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default playerCard;