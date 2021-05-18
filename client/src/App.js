import { Container, Grid, AppBar, Grow, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './redux/actions/posts'
import memories from './assets/logo.jpg'
import Form from './Components/Form'
import Posts from './Components/Posts'
import useStyles from './styles'
function App() {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()
  const state = useSelector(state => state.posts)
  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Container>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItem="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow >
    </Container >
  );
}

export default App;
