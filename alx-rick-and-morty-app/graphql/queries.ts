import {gql} from"@apollo/client"

export const GET_EPISODES = gql`
  query getEpisodes=($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
        info {
            pages
            nexy
            prev
            count
        }
        results {
            id
            name
            air_date
            episode
        }
    }
  }
` ;