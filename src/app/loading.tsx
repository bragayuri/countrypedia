import Grid from './components/Grid/Grid'
import Skeleton from './components/Skeleton/Skeleton'

export default function Loading() {
  return (
    <Grid>
      <Skeleton count={10} id="sekeleton" />
    </Grid>
  )
}
