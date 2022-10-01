import "./Card.css"
function Card(props){
	return(
	<div style={{backgroundColor: props.backgroundColor, width: props.width}}>
		<h1>{props.title}</h1>
		<h3>{props.subTitle}</h3>
		<p>{props.desc}</p>
	</div> 
	)
}

export default Card;
// Create a component Card that renders a box
// Add styling for css properties of margin, display, text-align:
// Put styling in the App.css or create a card.css and import it as a css module (Links to an external site.)
// Create props for title, subtitle, description
// Use these props inside Card to render text (props.title, etc.)
// Create props for CSS properties backgroundColor and width
// Use inline styling (Links to an external site.) to render each card with a color and width passed from App
// Render the Card component four times as below: