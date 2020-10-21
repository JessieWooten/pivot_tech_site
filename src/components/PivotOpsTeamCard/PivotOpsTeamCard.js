import React from 'react';

function PivotOpsTeamCard(props) {
	return (
		<>
		<div className="pivot-card col-xs-6">
		<figure>
			<div className="flip-card-inner">
			<div className="card-back">
					<img className="card-img-top" style={{ width:235, height:235 }} src={ props.opsTeamMember.gif } stylealt="Gif" />
				</div>
      <div className="card card-front" style={{ width:235, height:235 }}>
				<img className="card-img-top team-photo" src={ props.opsTeamMember.image } stylealt="Ops Team Member Photo" />
				</div>
				
			</div>
			<figCaption className="text-center team-name">{ props.opsTeamMember.firstName} {props.opsTeamMember.lastName}</figCaption>
				<figCaption className="text-center team-position">{ props.opsTeamMember.position}</figCaption>
				</figure>
		</div>
	</>
	);
}


export default PivotOpsTeamCard;