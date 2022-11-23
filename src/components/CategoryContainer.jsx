import '../style/CategoryContainer.css'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function CategoryContainer(props) {

    return (
        <div>
            <Grid container className='categoryContainer' spacing={1}>
                <Grid item xs={3}>
                    <img className='imgContainer' src={props.imageUrl} />
                </Grid>
                <Grid item xs={9}>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.mainHeader}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        {props.caption}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CategoryContainer;