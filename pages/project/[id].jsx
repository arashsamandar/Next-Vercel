import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/pages-styles/Layout";

const Project = () => {
    const router = useRouter();
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount((count)=>{
            // this is only experimental to use {} block in an Arrow Function
            let newCount = count + 1;
            return newCount;
        });
    }
    return(
        <Layout>
            <div>
                <h2>Project Page { router.query.id }</h2>
                <h2>{count}</h2>
                <input type="button" value="Increase" onClick={handleIncrement} name="Increase" />
            </div>
        </Layout>
    )
}

export default Project;