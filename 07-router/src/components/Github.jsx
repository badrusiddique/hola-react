import { useParams, useSearchParams } from 'react-router';
import Header from './Header'
import Footer from './Footer'

function Github() {
  // Get the URL parameters
  const { userName } = useParams();

  // Get the query parameters
  const [searchParams] = useSearchParams();

  return (
    <>
      <Header />
      <h1 className="text-center text-2xl font-bold p-4">Github: "{userName}" with "{searchParams.get('repository')}" repository</h1>
      <Footer />
    </>
  )
}

export default Github;
