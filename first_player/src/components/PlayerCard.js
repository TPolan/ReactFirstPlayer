import React from "react";
import {Grid, IconButton, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const PlayerCard = props => {
    return (
        <Card key={props.index} >
            <Grid container direction={"row-reverse"}>
                <Grid item>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {props.name}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item>
                    <CardActions>
                        <IconButton onClick={() => props.remove(props.index)} size="small"><DeleteIcon/></IconButton>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    )
}
export default PlayerCard;

