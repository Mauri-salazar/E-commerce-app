import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { Layout } from "../../Components/Layout/Layout";
import './ notFound.css';

export const NotFound = () => {
  return (
    <Layout> 
      <div className='icon-notFound'>   
        <ExclamationCircleIcon/>
        Product not found 
      </div> 
    </Layout>
  )
}
