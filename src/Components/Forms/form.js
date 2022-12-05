import React , {useState , useContext ,useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import {createCollege,updateCollege} from '../../actions/colleges';
import DataContext from "../../Store/data-context";
import { useSelector } from "react-redux";
import { deleteCollege } from '../../actions/colleges';
import classes from './clgForm.module.css';
const form = () => {
  const ctx = useContext(DataContext);
  const [currentId, setCurrentId] = useState(null);
  const [collegeData, setCollegeData] = useState ({
    tag: '' , name: '', subName: '', description: '', detail: '', offeringDegrees: [] , link1:'', link2:'', selectedFile : ''
  });
  const college = useSelector((state)=>currentId ? state.colleges.find ((c)=>c._id===currentId):null);

  useEffect(()=>{
    if(college) setCollegeData(college);
  },[college])
  const dispatch = useDispatch ();  
  const handleSubmit = (e) =>{
      e.preventDefault();

      if(currentId){
        dispatch(updateCollege(currentId,collegeData));
        clear ();
      }else if(collegeData.name.trim().length !== 0||collegeData.tag.trim().length !== 0){
        dispatch (createCollege(collegeData));
        clear ();
      }
    }
  
  const clear = () =>{
      setCurrentId(null);
      setCollegeData({tag: '' , name: '', subName: '', description: '', detail: '', offeringDegrees: [], link1:'', link2:'', selectedFile : ''})
  }
let expenseContent =<tbody>{"There is noting in database"}</tbody>
if (ctx.Colleges.length >0) {
  expenseContent = ctx.Colleges.map((data, index) => (
    <tbody key={index}>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{data.tag}</td>
        <td>{data.name}</td>
        <td>{data.subName}</td>
        <td><a href={data.link1}>View</a></td>
        <td>
          <button className={classes.btn3}
            onClick={() => {dispatch(deleteCollege(data._id))}}>
            Delete
          </button>
          <button className={classes.btn3}
            onClick={() => {setCurrentId(data._id)}}>
            Edit
          </button>
        </td>
      </tr>
    </tbody>
  ))
}
  return (
    <React.Fragment>
      <div className={classes.Maincontainer}>
        <div className={classes.containerWithTitle}>
        <div className={classes.container}>
            <div className={classes.dataContainer}>
            <table className={classes.customers}>
              <thead className={classes.thead}>
                <tr>
                  <th scope="col">N0</th>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Sub Name</th>
                  <th scope="col">Propectus</th>
                  <th scope="col">Operation</th>
                </tr>
              </thead>
              {expenseContent}
            </table>
            </div>
          <div className={classes.formContainer}>
          <div className={classes.title}>{currentId? 'Editing':'Creating'} a college</div>
            <form className={classes.formin} autoComplete="off" noValidate onSubmit={handleSubmit}>
              <label className={classes.label} htmlFor="Tag">Enter ID</label>
                <input className={classes.input} name='tag' id="Tag" placeholder="College Id.." value={collegeData.tag} 
                  onChange={(e)=> setCollegeData ({...collegeData, tag : e.target.value})}
                />
              <label className={classes.label} htmlFor="name">Name</label>
                <input className={classes.input} name='name' id="name" value={collegeData.name} placeholder="College Name.."
                  onChange={(e)=> setCollegeData ({...collegeData, name : e.target.value})}
                />
              <label className={classes.label} htmlFor="subName">Sub Name</label>
                <input className={classes.input} name='subName' id="subName" value={collegeData.subName} placeholder="College Sub Name.."
                  onChange={(e)=> setCollegeData ({...collegeData, subName : e.target.value})}
                />
              <label className={classes.label} htmlFor="description">Description</label>
                <input className={classes.input} name='description' id="description" value={collegeData.description} placeholder="Description.."
                onChange={(e)=> setCollegeData ({...collegeData, description : e.target.value})}
                />
              <label className={classes.label} htmlFor="detail">Detail</label>
                <input className={classes.input} name='detail' id="detail" value={collegeData.detail} placeholder="Detail.."
                onChange={(e)=> setCollegeData ({...collegeData, detail : e.target.value})}
                />
              <label className={classes.label} htmlFor="offeringDegrees">Offering Degrees</label>
                <input className={classes.input} name='offeringDegrees' id="offeringDegrees" value={collegeData.offeringDegrees} placeholder="Degrees.."
                onChange={(e)=> setCollegeData ({...collegeData, offeringDegrees : e.target.value.split(',')})}
                />
              <label className={classes.label} htmlFor="link1">Propectus URL</label>
                <input className={classes.input} name='link1' id="link1" value={collegeData.link1} placeholder="Propectus URL.."
                onChange={(e)=> setCollegeData ({...collegeData, link1 : e.target.value})}
                />
              <label className={classes.label} htmlFor="link2">Website URL</label>
                <input className={classes.input} name='link2' id="link2" value={collegeData.link2} placeholder="Website URL.."
                onChange={(e)=> setCollegeData ({...collegeData, link2 : e.target.value})}
                />
              <div className={classes.img}>
                <FileBase className={classes.file} type = "file" multiple = {false} onDone={({base64})=> setCollegeData({...collegeData, selectedFile: base64})}/>
              </div>
              <div className={classes.btn}>
                <button className={classes.btn1} type='submit' onClick={handleSubmit}>Sumbit</button>
                <button className={classes.btn2} onClick={clear}>Clear</button>
              </div>
            </form>
          </div>
        </div>
        <div className={classes.bottomTitle}>We care about your Suggestion</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default form
