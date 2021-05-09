// This helper takes the current favorites slice of slate and a
// given movie and checks if the movie is in the state. Probably
// not the best way to do this but we only have a max of 5 faves
// so it isn't the end of the world.

// This particular helper is good because we check the movies
// imdbID which is a unique value only given to a single movie.
// This is more accurate than checking an objects reference in
// memory

export default function checkIfFave(favorites, movie){
    for(let i = 0; i < favorites.length; i++){
        if(favorites[i]["imdbID"] === movie.imdbID){
            return true
        }
    }
    return false
}