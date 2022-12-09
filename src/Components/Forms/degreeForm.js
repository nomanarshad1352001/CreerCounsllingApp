import React , {useState , useContext ,useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import {createDegree,updateDegree,deleteDegree} from '../../actions/degrees';
import DataContext from "../../Store/data-context";
import { useSelector } from "react-redux";
import classes from './clgForm.module.css';
const form = () => {
  const ctx = useContext(DataContext);
  const [currentId, setCurrentId] = useState(null);
  const [degreeData, setDegreeData] = useState ({
    tag: '' , name: '', degType: '',subName: '', description: '', selectedFile: '', subjects: [[],[],[],[],[],[],[],[]] , jobs: []
  });
  const degree = useSelector((state)=>currentId ? state.degrees.find ((c)=>c._id===currentId):null);

  useEffect(()=>{
    if(degree) setDegreeData(degree);
  },[degree])
  const dispatch = useDispatch ();  
  const handleSubmit = (e) =>{
      e.preventDefault();

      if(currentId){
        dispatch(updateDegree(currentId,degreeData));
        clear ();
      }else if(degreeData.name.trim().length !== 0||degreeData.tag.trim().length !== 0){
        dispatch (createDegree(degreeData));
        clear ();
      }
    }
  
  const clear = () =>{
      setCurrentId(null);
      setDegreeData({tag: '' , name: '', degType: '', subName: '', description: '', selectedFile: '', subjects: [[],[],[],[],[],[],[],[]] , jobs: []})
  }
let degreeContent =<tbody>{"There is noting in database"}</tbody>
if (ctx.Degrees.length >0) {
  degreeContent = ctx.Degrees.map((data, index) => (
    <tbody key={index}>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{data.tag}</td>
        <td>{data.name}</td>
        <td>{data.subName}</td>
        <td>{data.jobs}</td>
        <td>
          <button className={classes.btn3}
            onClick={() => {dispatch(deleteDegree(data._id))}}>
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
                  <th scope="col">Jobs</th>
                  <th scope="col">Operation</th>
                </tr>
              </thead>
              {degreeContent}
            </table>
            </div>
          <div className={classes.formContainer}>
          <div className={classes.title}>{currentId? 'Editing':'Creating'} a degree</div>
            <form className={classes.formin} autoComplete="off" noValidate onSubmit={handleSubmit}>
              <label className={classes.label} htmlFor="Tag">Enter ID</label>
                <input className={classes.input} name='tag' id="Tag" placeholder="Degree Id.." value={degreeData.tag} 
                  onChange={(e)=> setDegreeData ({...degreeData, tag : e.target.value})}
                />
              <label className={classes.label} htmlFor="name">Name</label>
                <input className={classes.input} name='name' id="name" value={degreeData.name} placeholder="Degree Name.."
                  onChange={(e)=> setDegreeData ({...degreeData, name : e.target.value})}
                />
              <label className={classes.label} htmlFor="degType">Degree Type</label>
                <input className={classes.input} name='degType' id="degType" value={degreeData.degType} placeholder="Degree Type .."
                  onChange={(e)=> setDegreeData ({...degreeData, degType : e.target.value})}
                />
              <label className={classes.label} htmlFor="subName">Sub Name</label>
                <input className={classes.input} name='subName' id="subName" value={degreeData.subName} placeholder="Degree Sub Name.."
                  onChange={(e)=> setDegreeData ({...degreeData, subName : e.target.value})}
                />
              <label className={classes.label} htmlFor="description">Description</label>
                <input className={classes.input} name='description' id="description" value={degreeData.description} placeholder="Description.."
                onChange={(e)=> setDegreeData ({...degreeData, description : e.target.value})}
                />
              <label className={classes.label} htmlFor="subjects">Subject One</label>
                <input className={classes.input} name='subjects' id="subjects" value={degreeData.subjects} placeholder="Subject One.."
                onChange={(e)=> setDegreeData ({...degreeData, subjects : e.target.value.split(',')})}
                />
              <label className={classes.label} htmlFor="jobs">Jobs</label>
                <input className={classes.input} name='jobs' id="jobs" value={degreeData.jobs} placeholder="Jobs.."
                onChange={(e)=> setDegreeData ({...degreeData, jobs : e.target.value.split(',')})}
                />
              <div className={classes.img}>
                <FileBase className={classes.file} type = "file" multiple = {false} onDone={({base64})=> setDegreeData({...degreeData, selectedFile: base64})}/>
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
