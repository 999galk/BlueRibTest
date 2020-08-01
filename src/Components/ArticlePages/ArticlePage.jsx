import React from 'react';
import CrowdFunding from './InternalPages/CrowdFunding';
import FoundersAgreement from './InternalPages/FoundersAgreement';
import BusinessCovid19 from './InternalPages/BusinessCovid19';
import people from '../Articles/People-at-Work.jpg';
import './ArticlePage.css';

const ArticlePage = () => {
	let articleName=window.location.pathname.split('/')[2];
	return(
		<div className='article-page-wrapper'>
			<div className='article-page-container'>
			{
				articleName === 'crowdfunding'?
				<CrowdFunding/>
				: ( articleName==='founders-agreement'?
					<FoundersAgreement/>
					: (articleName === 'business-covid19'?
						<BusinessCovid19/>
						: null
						)
					)
			}
			<hr/>
			</div>
			<div className='more-articles-container'>
			<h2>מאמרים נוספים</h2>
			{
				articleName === 'crowdfunding'?
				<div className='more-articles-cards'>
					<div className='article-card-wrapper shadow-2 grow' onClick={() => this.props.history.push(`/article/founders-agreement`)}>
			          	<img src={people}/>
			            <h3>הסכם מייסדים</h3>
			          </div>
			          <div className='article-card-wrapper shadow-2 grow mr4' onClick={() => this.props.history.push(`/article/business-covid19`)}>
			          	<img src={people}/>
			            <h3>מדריך לעסקים - הישרדות בימי קורונה</h3>
			        </div>
				</div>
				: ( articleName==='founders-agreement'?
					<div className='more-articles-cards'>
						<div className='article-card-wrapper shadow-2 grow' onClick={() => this.props.history.push(`/article/crowdfunding`)}>
				          	<img src={people}/>
				            <h3>מימון המונים</h3>
				          </div>
				          <div className='article-card-wrapper shadow-2 grow mr4' onClick={() => this.props.history.push(`/article/business-covid19`)}>
				          	<img src={people}/>
				            <h3>מדריך לעסקים - הישרדות בימי קורונה</h3>
				        </div>
					</div>
					: (articleName === 'business-covid19'?
						<div className='more-articles-cards'>
							<div className='article-card-wrapper shadow-2 grow' onClick={() => this.props.history.push(`/article/founders-agreement`)}>
					          	<img src={people}/>
					            <h3>הסכם מייסדים</h3>
					          </div>
					          <div className='article-card-wrapper shadow-2 grow mr4' onClick={() => this.props.history.push(`/article/crowdfunding`)}>
					          	<img src={people}/>
					            <h3>מימון המונים</h3>
					        </div>
						</div>
						: null
						)
					)
				}
			</div>
		</div>
	);
}

export default ArticlePage;