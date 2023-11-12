import { DivFiveContainer } from ".";
import { useState, useEffect } from 'react';
import axios from 'axios';

const PartFive = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3001/posts');
          setPosts(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    return (
        <DivFiveContainer>
            <p className="titleFive">Impactos e benefícios do nosso produto </p>
             <div className="gridFive">
        {posts.map(post => (
          <div key={post.id} className="checkboxFive">
            <img width="50px" src={`./src/assets/${post.status === 1 ? 'check.png' : 'closeicon.png'}`} alt="Energia" />
            <p className="boxTextFive">{post.title}</p>
          </div>
        ))}
      </div>
        </DivFiveContainer>
    );
    }
export default PartFive;