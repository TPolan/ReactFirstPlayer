import React from "react";
import {Grid, IconButton, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const PlayerCard = props => {

    const {index, name, remove} = props;
    return (
        <Card key={index} >
            <Grid container direction={"row-reverse"}>
                <Grid item>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {name}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item>
                    <CardActions>
                        <IconButton onClick={() => remove(index)} size="small"><DeleteIcon/></IconButton>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    )
}
export default PlayerCard;

