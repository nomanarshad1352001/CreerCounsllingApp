import React , {useState , useContext  } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import {createCollege} from '../../actions/colleges';
import DataContext from "../../Store/data-context";

import classes from './clgForm.module.css';
const form = () => {
  const ctx = useContext(DataContext);
  const [collegeData, setCollegeData] = useState ({
    tag: '' , title: '', subTitle: '', description: '', detail: '', offeringDegrees: '', link:'', selectedFile : ''
  });
  const dispatch = useDispatch ();  
  const handleSubmit = (e) =>{
      e.preventDefault();
   
      dispatch (createCollege(collegeData));
      clear ();
    }
  
  const clear = () =>{
      setCollegeData({tag: '' , title: '', subTitle: '', description: '', detail: '', offeringDegrees: [], link:'', selectedFile : ''})
  }
const clg = ctx.Colleges;
  return (
    <React.Fragment>
      <div className={classes.Maincontainer}>
        <div className={classes.containerWithTitle}>
        <div className={classes.container}>
            <div className={classes.dataContainer}>
                <table className={classes.customers}>
                <thead  className={classes.thead}>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Sub Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Detail</th>
                  <th scope="col">Degrees</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>{clg.tag}</td>
                  <td>{clg.name}</td>
                  <td>{clg.subName}</td>
                  <td>{clg.description}</td>
                  <td>{clg.detail}</td>
                  <td>{clg.offeringDegrees}</td>
                </tr>
                </tbody>
              </table>
            </div>
          <div className={classes.formContainer}>
          <div className={classes.title}>Colleges Inout Form</div>
            <form className={classes.formin} autoComplete="off" noValidate onSubmit={handleSubmit}>
              <label className={classes.label} htmlFor="Tag">Enter ID</label>
                <input className={classes.input} name='tag' id="Tag" placeholder="College Id.." value={collegeData.tag} 
                  onChange={(e)=> setCollegeData ({...collegeData, tag : e.target.value})}
                />
              <label className={classes.label} htmlFor="title">Name</label>
                <input className={classes.input} name='title' id="title" value={collegeData.title} placeholder="College Name.."
                  onChange={(e)=> setCollegeData ({...collegeData, title : e.target.value})}
                />
              <label className={classes.label} htmlFor="subTitle">Sub Name</label>
                <input className={classes.input} name='subTitle' id="subTitle" value={collegeData.subTitle} placeholder="College Sub Name.."
                  onChange={(e)=> setCollegeData ({...collegeData, subTitle : e.target.value})}
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
                onChange={(e)=> setCollegeData ({...collegeData, offeringDegrees : e.target.value})}
                />
              <label className={classes.label} htmlFor="link">Website URL</label>
                <input className={classes.input} name='link' id="link" value={collegeData.link} placeholder="Website URL.."
                onChange={(e)=> setCollegeData ({...collegeData, link : e.target.value})}
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
