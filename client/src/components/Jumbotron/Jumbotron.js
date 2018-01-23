import React from "react";
import { Jumbotron } from "reactstrap";
import Background from "../../images/typesetting-letters.jpg";

const jumbtronStyle = {
	backgroundImage: `url(${Background})`,
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	borderRadius: 0,
	fontFamily: "Georgia, 'Times New Roman', Times, serif"

};

const jumbtronInstrance = (props) => {
	return (
		<div>
			<Jumbotron style={jumbtronStyle}>
				<h1 className="display-3 text-white">{" "}<i class="fa fa-newspaper-o" aria-hidden="true"></i>{" "}NYTimes Search</h1>
			</Jumbotron>
		</div>
	);

};

export default jumbtronInstrance;