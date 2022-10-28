export function Post (props) {
    const {name, removePost, id} = props;
    return <h2>{name}<button onClick={() => removePost(id)}>delete</button></h2>
}