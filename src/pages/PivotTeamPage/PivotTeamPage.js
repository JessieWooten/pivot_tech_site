import React, { useEffect, useState } from 'react';
import { Link } from 'react-bootstrap/lib/Navbar';
import { Button } from 'reactstrap';
import PivotExecTeamCard from '../../components/PivotExecTeamCard/PivotExecTeamCard';
import PivotOperationsTeamCard from '../../components/PivotOpsTeamCard/PivotOpsTeamCard';
import PivotDataTeamCard from '../../components/PivotDataTeamCard/PivotDataTeamCard';
import PivotWebTeamCard from '../../components/PivotWebTeamCard/PivotWebTeamCard';
import pivotTeamData from '../../helpers/data/pivotRequests';
import MyFooter from '../../components/MyFooter/MyFooter';
import './PivotTeamPage.scss';

function PivotTeamPage() {
	const [executiveTeamMember, setExecutiveTeamMember] = useState([]);
	const [operationsTeamMember, setOperationsTeamMember] = useState([]);
	const [dataTeamMembers, setDataTeamMember] = useState([]);
	const [webTeamMembers, setWebTeamMember] = useState([]);

	const getPivotTeam = () => {
		pivotTeamData.getAllPivotTeam().then((pivotTeam) => {
			let getExecTeamMember = pivotTeam.filter(
				(pivotTeam) => pivotTeam.department === 'Executive'
			);
			setExecutiveTeamMember(getExecTeamMember);
			let getOperationsTeamMember = pivotTeam.filter(
				(pivotTeam) => pivotTeam.department === 'Operations'
			);
			setOperationsTeamMember(getOperationsTeamMember);
			let getDataTeamMember = pivotTeam.filter(
				(pivotTeam) => pivotTeam.department === 'Data'
			);
			setDataTeamMember(getDataTeamMember);
			let webTeamMember = pivotTeam.filter(
				(pivotTeam) => pivotTeam.department === 'Web'
			);
			setWebTeamMember(webTeamMember);
		});
	};

	useEffect(() => {
		getPivotTeam();
	}, []);

	useEffect(getPivotTeam, []);

	return (
		<>
			<div className="hero-team">
				<div className="hero-text">
					<h1>Teamwork makes the dreamwork!</h1>
					<p>Meet the team that makes it all happen</p>
				</div>
			</div>
			<div className="pivot-team-cards">
				<h2 className="executive-title title mb-5">
					<span>Executive Team</span>
				</h2>
				<div className="d-flex flex-wrap home-flex justify-content-around">
					{executiveTeamMember.map((execTeamMember) => (
						<PivotExecTeamCard
							key={execTeamMember.id}
							execTeamMemberId={execTeamMember.id}
							execTeamMember={execTeamMember}
						/>
					))}
				</div>
				<h2 className="operation-title title mt-3 mb-5">Operations</h2>
				<div className="d-flex flex-wrap home-flex justify-content-around">
					{operationsTeamMember.map((opsTeamMember) => (
						<PivotOperationsTeamCard
							key={opsTeamMember.id}
							opsTeamMemberId={opsTeamMember.id}
							opsTeamMember={opsTeamMember}
						/>
					))}
				</div>
				<h2 className="data-title title mt-3 mb-5">
					Data Science and Analytics
				</h2>
				<div className="d-flex flex-wrap home-flex justify-content-around">
					{dataTeamMembers.map((dataTeamMember) => (
						<PivotDataTeamCard
							key={dataTeamMember.id}
							dataTeamMemberId={dataTeamMember.id}
							dataTeamMember={dataTeamMember}
						/>
					))}
				</div>
				<h2 className="web-title title mt-3 mb-5">Web Development</h2>
				<div className="d-flex flex-wrap home-flex justify-content-around">
					{webTeamMembers.map((webTeamMember) => (
						<PivotWebTeamCard
							key={webTeamMember.id}
							webTeamMemberId={webTeamMember.id}
							webTeamMember={webTeamMember}
						/>
					))}
				</div>
			</div>
			<MyFooter />
		</>
	);
}

export default PivotTeamPage;
