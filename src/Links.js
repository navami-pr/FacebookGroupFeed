import React from 'react';

class Links extends React.Component {
	
	  render() {
      const {link} = this.props
      console.log(link, "sdadsadadadaadad")
		return (
		  <div>
				<div className="coupon">
						<div className="container">
							<div className="chip">
								<img src="img_avatar.png" alt="" width="96" height="96"/>
								{link.from && link.from.name}
							</div>
						</div>
						<div className="container" >
            <img src={link.full_picture} id="picture_post" alt=""/>
						<p></p>
						</div>
						<div className="container">
						</div>
					</div>
      </div>
		);
	  }
	}


export default Links;