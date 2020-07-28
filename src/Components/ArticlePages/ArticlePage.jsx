import React from 'react';
import CrowdFunding from './InternalPages/CrowdFunding';
import FoundersAgreement from './InternalPages/FoundersAgreement';
import BusinessCovid19 from './InternalPages/BusinessCovid19';

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
			</div>
		</div>
	);
}

export default ArticlePage;