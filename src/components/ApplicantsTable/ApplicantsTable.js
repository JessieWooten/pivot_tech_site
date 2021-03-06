import React, { useState, useEffect } from 'react';
import './ApplicantsTable.scss';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import requests from '../../helpers/data/pivotRequests';

function ApplicantsTable() {
	const [gridApi, setGridApi] = useState(null);
	const [selectedApplicants, setSelectedApplicants] = useState([]);
	const [applicants, setApplicants] = useState([]);

	useEffect(() => {
		getApplicants();
	}, []);

	const getApplicants = () => {
		requests.getApplicants().then((results) => {
			setApplicants(results);
		});
	};

	const onGridReady = (params) => {
		setGridApi(params.api);
	};

	const onSelectionChanged = () => {
		const selectedRows = gridApi.getSelectedRows();
		setSelectedApplicants(selectedRows);
	};

	const deleteSelected = () => {
		// TODO get data in table to update without having to reload the page or switch tabs
		selectedApplicants.forEach((applicant) => {
			requests.deleteApplicant(applicant.uid);
		});
	};

	const transitionToStudent = () => {
		// TODO get data in table to update without having to reload the page or switch tabs
		requests.markAsEnrolled(selectedApplicants);

		// selectedApplicants.forEach((applicant) => {
		// 	let rowNode = gridApi.getRowNode(applicant.uid);
		// 	requests
		// 		.getApplicantByUid(applicant.uid)
		// 		.then((result) => {
		// 			rowNode.setDataValue('enrolled', result.enrolled);
		// 		})
		// 		.catch((err) => err);
		// });
	};

	return (
		<div>
			<div className="card-body admin-card">
				<h1 className="admin-title text-center text-white">Applications</h1>
			</div>
			<div className="actions-container">
				<div onClick={transitionToStudent} className="icon-wrapper">
					<img
						className="icon"
						src={require('../../icons/reading-book.png')}
						alt="transition to student"
					/>
					<span>Transition to Student</span>
				</div>
				<div onClick={deleteSelected} className="icon-wrapper">
					<img
						className="icon"
						src={require('../../icons/delete.png')}
						alt="delete"
					/>
					<span>Delete Applicant</span>
				</div>
			</div>
			<div
				className="table ag-theme-alpine"
				style={{ height: 600, width: '100%' }}
			>
				<AgGridReact
					onSelectionChanged={onSelectionChanged}
					onGridReady={onGridReady}
					modules={[RangeSelectionModule]}
					rowData={applicants}
					defaultColDef={{ resizable: true }}
					rowSelection={'multiple'}
				>
					<AgGridColumn
						width={300}
						sortable={true}
						filter={true}
						field="firstName"
						headerName="First Name"
						checkboxSelection={true}
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="lastName"
						headerName="Last Name"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="enrolled"
						headerName="Enrolled"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="email"
						headerName="Email"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="phone"
						headerName="Phone"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="birthday"
						headerName="Birthday"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="techTrack"
						headerName="Tech Track"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="techKnowledge"
						headerName="Tech Knowledge Rating"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="employed"
						headerName="Employed"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="workExperience"
						headerName="Employment Description"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="highestEducation"
						headerName="Highest Education"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="canPayDeposit"
						headerName="Can Pay Deposit"
					></AgGridColumn>
				</AgGridReact>
			</div>
		</div>
	);
}

export default ApplicantsTable;
