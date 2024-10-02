function ExampleCarouselImage(props: {text: any}) {
  return (
    <svg
      className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
      width="800"
      height="400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>{props.text}</title>
      <rect width="100%" height="100%" fill="#555"></rect>
      <text x="50%" y="50%" fill="#333" dy=".3em">
        {props.text}
      </text>
    </svg>
  );
}

export default ExampleCarouselImage;
