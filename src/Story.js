import React from 'react';

class Story extends React.Component {
	
	  render() {
			const {story} = this.props
		return (
		  <div>
				<div className="coupon">
						<div className="container">
							<div className="chip">
								<img src="img_avatar.png" alt="Person" width="96" height="96"/>
								{story.from.name}
							</div>
						</div>
						<div className="container" >
							{story.story}
						<p></p>
						</div>
						<div className="container">
						</div>
					</div>
      </div>
		);
	  }
	}


export default Story;