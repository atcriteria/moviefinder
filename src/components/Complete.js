export default function Complete({showComplete}){
    return(
        <div>
            {(!showComplete) ? "" :
            <h1>You have 5 nominations!</h1>
            }
        </div>
    )
}