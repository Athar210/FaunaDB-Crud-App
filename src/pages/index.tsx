import React,{useEffect,useState} from "react"
import LinkList from '../components/LinkList';
import LinkForm from '../components/LinkForm';
import 'bootstrap/dist/css/bootstrap.css';


const heading = {
    backgroundColor: "#154c79",
}

const heading1 = {
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',
    
}



const IndexPage = () => {
    const [links, setLinks] = useState([]);
    const loadLinks = async () => {
        try {
            const res = await fetch('/.netlify/functions/getLinks');
            const links = await res.json();
            setLinks(links);
            console.log(links)
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadLinks();
    }, []);
    
  return (
    <div className="container py-5" style={heading}>
    <h1 style={{fontWeight:'bold',textTransform:'uppercase',color:'white',fontFamily:'cursive'}} className="text-center mb-5" >Faunadb crud</h1>
    <h5 style={{fontWeight:'bold',textTransform:'uppercase',color:'white',fontFamily:'cursive'}} className="text-center mb-5">Developed by Athar Rasool</h5>
     <LinkForm refreshLinks={loadLinks} />
    <LinkList links={links} refreshLinks={loadLinks} />
</div>
  )
}

export default IndexPage
