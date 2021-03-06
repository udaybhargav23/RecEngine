import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating(props) {
  const { rating } = props;
  //console.log(rating);

  const [value,setValue] = React.useState(parseInt(rating));

  return (
    <div>
      <Box component="fieldset"  borderColor="transparent">
        <Typography component="legend"></Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}