import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getData } from './Redux/action'

export const ExploreGoa = () => {
    const dispatch=useDispatch()
    const data=useSelector(pre=>pre.hotel)

    useEffect(()=>{
        if(data.length===0)
        dispatch(getData("goa"))
    },[dispatch,data.length])

    // console.log(data)
  return (
    <div style={{width:"75%",display:"flex",justifyContent:"space-between",margin:"auto",fontFamily:"BlinkMacSystemFont",gap:"10px"}}>
        <div style={{width:"50%",padding:"5px"}}>
        <p style={{padding:"10px 0",fontSize:"14px"}}>Home {">"} India {">"} Goa {">"} Searh results</p>
            <div id="left" style={{backgroundColor:"#febb02",padding:"20px 10px"}}>
                <h2 style={{height:"28px0",color:"#333"}}>Search</h2>
                <div style={{marginTop:"10px"}}>
                    <label style={{fontSize:"15px",marginBottom:"10px",fontFamily:"BlinkMacSystemFont",color:"#333"}}>Destination/Property Name</label>
                    <br />
                    <input type="text" />
                </div>
                <div style={{marginTop:"10px"}}>
                    <label style={{fontSize:"15px",marginBottom:"10px",fontFamily:"BlinkMacSystemFont",color:"#333"}}>Check-in date</label>
                    <br />
                    <input type="date" name="" id=""/>
                </div>
                <div style={{marginTop:"10px"}}>
                    <label style={{fontSize:"15px",marginBottom:"10px",fontFamily:"BlinkMacSystemFont",color:"#333"}}>Check-out date</label>
                    <br />
                    <input type="date"/>
                </div>
                <div style={{marginTop:"10px"}}>
                    <input type="text" />
                </div>
                <div style={{marginTop:"10px"}}>
                    <input className='checkbox' type="checkbox" />
                    <label style={{fontSize:"15px",marginBottom:"10px",fontFamily:"BlinkMacSystemFont",color:"#333"}}>Entire Home & Apartment</label>
                </div>
                <div style={{marginTop:"10px"}}>
                    <input className='checkbox' type="checkbox" />
                    <label style={{fontSize:"15px",marginBottom:"10px",fontFamily:"BlinkMacSystemFont",color:"#333"}}>I am traveling for work</label>
                </div>
                <button style={{width:"100%",height:"48px",marginTop:"15px",border:"0px",backgroundColor:"#0071c2",padding:"12px",color:"white"}}>Search</button>
            </div>
            <div id="filter" style={{border:"1px solid #888888",marginTop:"15px"}}>
                <h2 style={{padding:"5px",borderBottom:"1px solid #888888",color:"#333",fontSize:"24px"}}>Filter By:</h2>
                <div>
                    <p style={{fontSize:"17px",fontWeight:"bold"}}>Rating</p>
                    <div>
                        <input type="checkbox" />
                        <label>Above 5</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Above 6</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Above 7</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Above 8</label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>Above 9</label>
                    </div>
                 </div>
                <div>
                    <p style={{fontSize:"17px",fontWeight:"bold"}}>Reviews</p>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Above 100</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Above 500</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Above 1K</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Above 2K</label>
                    </div>
                </div>
                <div>
                    <p style={{fontSize:"17px",fontWeight:"bold"}}>City</p>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Candolim</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Anjuna</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Siolim</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Goa Velha</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Assagao</label>
                    </div>
                </div>  
            </div>
        </div>
        <div>
            
        <div style={{padding:"15px"}} id='container'>
            <h2>Goa 1,800 properties found</h2>
            <select style={{border:"1px solid #0071C2",color:"#0071C2",width:"21%",padding:"10px",borderRadius:"20px",margin:"20px 0px 15px 0px"}} name="" id="">
                <option style={{marginTop:"10px",padding:"10px"}} value="">Sort by our top picks </option>
                <option style={{marginTop:"10px",padding:"10px"}} value="">Star(heighest first) </option>
                <option style={{marginTop:"10px",padding:"10px"}} value="">Star(lowest first) </option>
                <option style={{marginTop:"10px",padding:"10px"}} value="">Top reviewed </option>
            </select>
                    {
                        data.length>0 && data.map(ele=>(
                            <div key={ele.id} style={{display:"flex",justifyContent:"space-between",gap:"15px",border:"1px solid lightblue",marginBottom:"20px",borderRadius:"7px",padding:"12px",boxShadow: "#49ADFA 0px 1px 4px",backgroundColor:"#E5F0F9",fontFamily:"BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;"}}> 
                                    <div>
                                        <img height={"200px"} width={"200px"} src={ele.image} alt="" />
                                    </div>
                                    <div style={{paddingTop:"10px"}}>
                                        <div style={{display:"flex",flexWrap:"wrap",gap:"15px"}}>
                                            <h2 style={{fontSize:"20px",color:"#6B6B6B",cursor:"pointer"}}>{ele.title}</h2>
                                            <div>
                                                <img height="18px" width="18px" src="https://img.icons8.com/fluency/344/star.png" alt="" />
                                                <img height="18px" width="18px" src="https://img.icons8.com/fluency/344/star.png" alt="" />
                                                <img height="18px" width="18px" src="https://img.icons8.com/fluency/344/star.png" alt="" />
                                                <img height="18px" width="18px" src="https://img.icons8.com/emoji/344/thumbs-up.png" alt="" />
                                            </div>
                                        </div>
                                        <div style={{marginTop:"5px"}}>
                                            <p style={{color:"#0071C2",borderBottom:"1px solid #0071C2",display:'inline',marginRight:"12px"}}>{ele.location}</p>
                                            <p style={{color:"#0071C2",borderBottom:"1px solid #0071C2",display:'inline',marginRight:"12px"}}>Show on map</p>
                                            <p style={{color:"#0071C2",borderBottom:"1px solid #0071C2",display:'inline',marginRight:"12px"}}>Near beach</p>
                                        </div>
                                        <p style={{padding:"7px 0"}}>
                                        <svg height={"16px"} width="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.22 3.37a.75.75 0 0 0-.6-.59c-4.85-.9-10.6.55-13.37 3.36S3.1 14.39 3.88 19.05L2 21a.75.75 0 0 0 0 1 .74.74 0 0 0 .53.22A.71.71 0 0 0 3 22l2-1.9a16.94 16.94 0 0 0 2.76.23c4.09 0 8.19-1.33 10.35-3.52 2.71-2.81 4.07-8.59 3.11-13.44zM17 15.75c-2.11 2.14-6.59 3.36-10.7 3L16.59 8.47a.75.75 0 0 0 0 -1.06.77.77 0 0 0-1.07 0l-10.3 10.3c-.33-3.91.91-8.31 3.1-10.52s7.29-3.63 11.52-3c.67 4.22-.54 9.22-2.84 11.56z"></path></svg>
                                            Travel Sustainable property</p>
                                        <p>{ele.description}</p>
                                    </div>
                                    <div style={{width:"50%",paddingTop:"10px"}}>
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                            <div>
                                                <h2 style={{fontSize:"16px"}}>Review Score</h2>
                                                <p style={{fontSize:"14px",float:"right"}}>{ele.review} reviews</p>
                                            </div>
                                            <div style={{color:"white",backgroundColor:"#003580",width:"20%",display:"flex",justifyContent:"center",alignItems:"center",padding:"5px",borderTopLeftRadius:"8px",borderBottomRightRadius:"8px"}}>{ele.rating}</div> 
                                        </div>
                                        <div>
                                            <button style={{float:"right",marginTop:"20px",color:"white",backgroundColor:"#0071C2",padding:"8px 16px",border:"0px",cursor:"pointer"}}>Show prices</button>
                                        </div>
                                    </div>
                            </div>
                        ))
                    }

                </div>
        </div>
        
    </div>
  )
}
