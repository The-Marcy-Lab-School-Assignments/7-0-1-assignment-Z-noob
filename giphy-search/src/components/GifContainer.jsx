function GifContainer({ thingsToRender }) {
    return (
        <ul>
          {
            thingsToRender?.map((thing) => (
              <li key={thing.id}>
                <img key={thing.id} src={thing.images.fixed_height.url} alt={thing.title}/>
                <p>{thing.information}</p>
              </li>
            ))
          }
        </ul>
    )

}

export default GifContainer
