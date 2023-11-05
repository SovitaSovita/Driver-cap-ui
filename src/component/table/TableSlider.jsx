import { React, useState, useEffect, useRef } from 'react'
import MaterialTable from 'material-table'
import { forwardRef } from 'react';
import '../../style/style.css'

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import { BASE_URL, notifyError, notifySuccess } from '../../redux/Constants';
import AlertMesages from '../AlertMesages';
import { Spinner } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { setIsGet, setListSlide } from '../../redux/slice/ListSlice';
import { useSelector } from 'react-redux';
import { add_slider, delete_slider, get_slider } from '../../redux/service/sliderService';
import EditTableSliderPop from '../editModal/EditTableSliderPop';


const tableIcons = {
  NoteAddOutlinedIcon: forwardRef((props, ref) => <NoteAddOutlinedIcon color='success' {...props} ref={ref} />),
  Add: forwardRef((props, ref) => <AddBoxOutlinedIcon {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check className='text-green-500 ' {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear className='text-red-500 ' {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutlineRoundedIcon className='text-red-500 bg-red-100 py-1 rounded-full' {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <EditOutlinedIcon className='text-blue-500 bg-blue-100 py-1 rounded-full' {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const TableSlider = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.allList.listSlide)
  const isGet = useSelector((state) => state.allList.isGet)
  const newData = data?.map((item, index) => ({ ...item, No: index + 1 }));

  const [fileImg, setFileImg] = useState({ imageFile: null })
  const [isLoading, setIsLoading] = useState(false)

  const columns = [
    { title: 'No', field: 'No', editable: 'never' },
    {
      title: 'Title', field: 'title', render: (rowData) => (
        <span>
          {rowData.title.length > 20
            ? rowData.title.substring(0, 20) + '...'
            : rowData.title}
        </span>
      ),
    },
    {
      title: 'Picture', field: 'image',
      render: (rowData) => (
        <img src={`${BASE_URL}/images?fileName=${rowData.image}`} alt="Image" className='w-28 h-16 rounded object-cover' />
      ),
      editComponent: (props) => (
        <input type='file' name='imageFile' onChange={handleFileChange} />
      ),
    },
  ]


  useEffect(() => {
    Table()
  }, [isGet])


  const Table = () => {
    setIsLoading(true)

    get_slider().then((res) => {
      setIsLoading(false)
      dispatch(setListSlide(res?.data?.payload))
      dispatch(setIsGet(false))

    }).catch((e) => {
      setIsLoading(false)
      console.log(e)
    })
  }

  const handleFileChange = (event) => {
    event.stopPropagation();
    const file = event.target.files[0];

    if (file) {
      const updatedFileImg = { ...fileImg };
      updatedFileImg.imageFile = file;
      setFileImg(updatedFileImg);
    }
  };

  const [openEditModal, setOpenEditModal] = useState(false);
  const [getOldData, setGetOldData] = useState({})

  const handleEditOpen = (oldData) => {
    setGetOldData(oldData)
    setOpenEditModal(true);
  };

  const handleEditClose = () => {
    setOpenEditModal(false);
  };

  return (
    <>
      <AlertMesages />
      {/* table list */}
      {
        isLoading ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <div>
            <MaterialTable
              columns={columns}
              title={null}
              icons={tableIcons}
              data={newData}
              editable={{
                // add function
                onRowAdd: (newRow) =>
                  new Promise((resolve, reject) => {

                    add_slider(newRow, fileImg.imageFile)
                      .then((res) => {
                        if (res?.status === 200) {
                          notifySuccess('Inserted Successfully.');
                          Table();
                        } else {
                          notifyError('Invalid Information.');
                        }
                      })
                      .catch((error) => {
                        console.error(error);
                        notifyError('Failed to add the row.');
                      });

                    setTimeout(() => resolve(), 500);
                  }),

                // delete function
                onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                  delete_slider(selectedRow?.id).then((res) => {
                    if (res?.status == 200) {
                      notifySuccess("Deleted Successfully.")
                    }
                    Table()
                  })
                  setTimeout(() => resolve(), 1000)
                })
              }}
              actions={[
                {
                  icon: EditOutlinedIcon,
                  tooltip: 'Edit',
                  onClick: (event, oldData) => handleEditOpen(oldData),
                },
              ]}
              // onSelectionChange={(selectedRows) => console.log(selectedRows)}
              options={{
                paging: true,
                sorting: true,
                search: true,
                exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1,
                headerStyle: { background: "#f5f5f5", color: "#000", borderTop: "1px solid #D2D5DB" },
                searchFieldAlignment: 'left',
                searchFieldStyle: { background: "#f5f5f5", padding: "2px", marginRight: "18px", borderRadius: "8px 8px 0 0", borderBottom: 'none' }
              }}
            />
          </div>
        )
      }
      <EditTableSliderPop isOpen={openEditModal} closeModal={handleEditClose} oldData={getOldData} />
    </>
  )
}

export default TableSlider
