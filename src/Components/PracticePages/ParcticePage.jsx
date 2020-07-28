import React from 'react';
import Internet from './InternalPages/Internet';
import CommercialLaw from './InternalPages/CommercialLaw';
import Hitech from './InternalPages/Hitech';
import CapitalMarket from './InternalPages/CapitalMarket';
import EmploymentLaw from './InternalPages/EmploymentLaw';
import './PracticePage.css';

const PracticePage = () => {
	let practiceName=window.location.pathname.split('/')[2];
	console.log('name:', practiceName);
	return(
		<div className='practice-page-wrapper'>
			<div className='practice-page-container'>
			{
				practiceName === 'internet'?
				<Internet/>
				: ( practiceName === 'commercial-law'?
					<CommercialLaw/>
					: ( practiceName === 'hitech'?
						<Hitech/>
						: ( practiceName === 'capital-market'?
							<CapitalMarket/>
							: practiceName === 'employment-law'?
							<EmploymentLaw/>
							: null
							)
						)
					)

			}
			</div>
			<div className='more-practices'>
			</div>
		</div>
	);
}

export default PracticePage;