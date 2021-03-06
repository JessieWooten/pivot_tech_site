import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import requests from '../../helpers/data/pivotRequests';
import AddCourseModal from '../AddCourseModal/AddCourseModal';
import moment from 'moment';
import './CoursesTable.scss';

function CoursesTable() {
	const [gridApi, setGridApi] = useState(null);
	const [courses, setCourses] = useState([]);
	const [selectedCourses, setSelectedCourses] = useState([]);
	const [modal, setModal] = useState(false);

	const toggle = () => {
		setModal(!modal);
	};

	useEffect(() => {
		getCourses();
	}, []);

	const onGridReady = (params) => {
		setGridApi(params.api);
	};

	const onSelectionChanged = () => {
		const selectedRows = gridApi.getSelectedRows();
		setSelectedCourses(selectedRows);
	};

	const getCourses = () => {
		requests.getCourses().then((results) => {
			results.forEach((course) => {
				course.startDate = moment(course.startDate).format('LL');
				course.endDate = moment(course.endDate).format('LL');
			});
			setCourses(results);
		});
	};

	const deleteSelected = () => {
		selectedCourses.forEach((course) => {
			requests.deleteCourse(course.id);
		});
		requests.getCourses().then((results) => {
			setCourses(results);
		});
	};

	return (
		<div>
			<div className="card-body admin-card">
				<h1 className="admin-title text-center text-white">Courses</h1>
			</div>
			<div className="actions-container">
				<div onClick={toggle} className="icon-wrapper">
					<img
						className="icon"
						src={require('../../icons/add.png')}
						alt="transition to student"
					/>
					<span>Add Course</span>
				</div>
				<div onClick={deleteSelected} className="icon-wrapper">
					<img
						className="icon"
						src={require('../../icons/delete.png')}
						alt="delete"
					/>
					<span>Delete Course</span>
				</div>
			</div>
			<div
				className="table ag-theme-alpine"
				style={{ height: 600, width: '100%' }}
			>
				<AgGridReact
					onSelectionChanged={onSelectionChanged}
					onGridReady={onGridReady}
					rowData={courses}
					modules={[RowGroupingModule]}
					rowSelection="multiple"
					autoGroupColumnDef={{ minWidth: 250 }}
					defaultColDef={{ resizable: true }}
				>
					<AgGridColumn field="courseName" rowGroup={true} hide={true} />
					<AgGridColumn field="courseType" rowGroup={true} hide={true} />

					<AgGridColumn
						sortable={true}
						filter={true}
						field="startDate"
						headerName="Start Date"
						checkboxSelection={true}
					></AgGridColumn>
					<AgGridColumn
						sortable={true}
						filter={true}
						field="endDate"
						headerName="End Date"
					></AgGridColumn>
					<AgGridColumn
						sortable={true}
						filter={true}
						field="students"
						headerName="Student Count"
					></AgGridColumn>
				</AgGridReact>
			</div>
			<AddCourseModal modal={modal} toggle={toggle} />
		</div>
	);
}

export default CoursesTable;
